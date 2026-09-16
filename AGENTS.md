# AI Builders deployment boundary

This repository is `varun-a-1010/glyph-motion-studio-ai-builders`.
Its only deployment hostname is `glyph-builders.slate-app.online` and its only
deployment root is `/var/www/glyph-motion-studio-ai-builders`.

The earlier WebMCP submission is frozen. Never push to its repository, change its
workflow/settings, write to `/var/www/glyph-motion-studio-webmcp`, change the
`glyph-motion.slate-app.online` Nginx configuration/certificate/DNS, or redeploy it.
The upstream remote is fetch-only. Never enable its push URL.

Do not reuse Slate's application deploy workflow, directory, keys, database, or
process. CI for this copy uses a dedicated restricted SSH identity. Routine releases
only promote a static directory and never reload/restart Nginx or any process.
Initial shared-edge activation requires Varun's explicit approval.

Do not include local recordings, `artifacts/`, or unrelated untracked files in commits.
Do not save, reset, or reload the local browser's unsaved demonstration scene as part
of deployment. Browser-local scenes are not automatically included in a static build.
