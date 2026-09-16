import io
import tarfile
import unittest

from receive import validate


class ArchiveBoundaryTests(unittest.TestCase):
    def archive(self, extra=None):
        buffer = io.BytesIO()
        with tarfile.open(fileobj=buffer, mode='w:gz') as archive:
            for name in ['index.html', 'deployment.json']:
                info = tarfile.TarInfo(name)
                info.size = 2
                archive.addfile(info, io.BytesIO(b'{}'))
            if extra:
                archive.addfile(extra)
        buffer.seek(0)
        return tarfile.open(fileobj=buffer, mode='r:gz')

    def test_valid_static_files(self):
        with self.archive() as archive:
            self.assertEqual(len(validate(archive)), 2)

    def test_escape_absolute_hidden_and_duplicate_refused(self):
        for name in ['../other-app/file', '/etc/nginx/nginx.conf', '.env', 'index.html']:
            with self.subTest(name=name), self.archive(tarfile.TarInfo(name)) as archive:
                with self.assertRaises(ValueError):
                    validate(archive)

    def test_links_and_devices_refused(self):
        for kind in [tarfile.SYMTYPE, tarfile.LNKTYPE, tarfile.CHRTYPE, tarfile.FIFOTYPE]:
            entry = tarfile.TarInfo('escape')
            entry.type = kind
            entry.linkname = '/var/www/another-app'
            with self.subTest(kind=kind), self.archive(entry) as archive:
                with self.assertRaises(ValueError):
                    validate(archive)


if __name__ == '__main__':
    unittest.main()
