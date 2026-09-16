#!/usr/bin/python3
"""Forced-command receiver; owns only the isolated AI Builders static releases."""
import hashlib
import io
import json
import os
from pathlib import Path, PurePosixPath
import re
import sys
import tarfile
import tempfile

ROOT = Path('/var/www/glyph-motion-studio-ai-builders')
MAX_ARCHIVE = 64 * 1024 * 1024
MAX_EXPANDED = 256 * 1024 * 1024


def validate(archive):
    members = archive.getmembers()
    if len(members) > 10000:
        raise ValueError('Too many archive entries')
    seen = set()
    total = 0
    for member in members:
        name = PurePosixPath(member.name)
        if name.is_absolute() or '..' in name.parts or not (member.isfile() or member.isdir()):
            raise ValueError('Unsafe archive entry')
        normalized = str(name)
        if normalized == '.' and member.isdir():
            continue
        if normalized in seen or any(p.startswith('.') for p in name.parts):
            raise ValueError('Duplicate or hidden entry')
        seen.add(normalized)
        total += member.size
    if total > MAX_EXPANDED:
        raise ValueError('Expanded artifact exceeds limit')
    if not {'index.html', 'deployment.json'}.issubset(seen):
        raise ValueError('Missing deployment files')
    return members


def main():
    match = re.fullmatch(r'deploy ([0-9a-f]{40})', os.environ.get('SSH_ORIGINAL_COMMAND', ''))
    if not match:
        raise ValueError('Only deploy <full commit SHA> is allowed')
    sha = match[1]
    if ROOT.is_symlink() or ROOT.resolve() != ROOT:
        raise ValueError('Deployment root identity mismatch')
    releases = ROOT / 'releases'
    if releases.is_symlink() or releases.resolve() != ROOT / 'releases':
        raise ValueError('Release directory identity mismatch')
    payload = sys.stdin.buffer.read(MAX_ARCHIVE + 1)
    if len(payload) > MAX_ARCHIVE:
        raise ValueError('Archive exceeds limit')
    with tarfile.open(fileobj=io.BytesIO(payload), mode='r:gz') as archive:
        members = validate(archive)
        metadata = next(m for m in members if str(PurePosixPath(m.name)) == 'deployment.json')
        receipt = json.load(archive.extractfile(metadata))
        if receipt != {'repository': 'varun-a-1010/glyph-motion-studio-ai-builders', 'sha': sha}:
            raise ValueError('Artifact provenance mismatch')
        releases.mkdir(exist_ok=True)
        # Every attempt has its own directory. Never delete or overwrite a release.
        stage = Path(tempfile.mkdtemp(prefix=sha + '-', dir=releases))
        os.chmod(stage, 0o755)
        for member in members:
            target = stage / PurePosixPath(member.name)
            if member.isdir():
                target.mkdir(parents=True, exist_ok=True)
            else:
                target.parent.mkdir(parents=True, exist_ok=True)
                with archive.extractfile(member) as source, target.open('xb') as dest:
                    while chunk := source.read(1024 * 1024):
                        dest.write(chunk)
                target.chmod(0o644)
    current = ROOT / 'current'
    if current.exists() or current.is_symlink():
        if not current.is_symlink() or current.resolve().parent != releases:
            raise ValueError('Current pointer identity mismatch')
    link = ROOT / ('current-' + stage.name)
    link.symlink_to(stage.relative_to(ROOT))
    os.replace(link, current)
    print(json.dumps({'sha': sha, 'index_sha256': hashlib.sha256((stage / 'index.html').read_bytes()).hexdigest()}))


if __name__ == '__main__':
    try:
        os.umask(0o022)
        main()
    except Exception as error:
        print('Deployment refused: ' + str(error), file=sys.stderr)
        sys.exit(1)
