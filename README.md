# Tek Horizons

Source for [tekhorizons.com](https://tekhorizons.com), a single static page served by GitHub Pages (deployed from `main` by `.github/workflows/pages.yml`, which publishes only an allowlist of site files), behind Cloudflare.

The page started from the [Start Bootstrap Agency](https://startbootstrap.com/theme/agency) theme (MIT) and now runs on Bootstrap 5 and Font Awesome 7, with no jQuery.

## Layout

- `index.html` is the page.
- `scss/` holds the styles; `css/` is the compiled output and is committed, because Pages serves the repo as is.
- `js/agency.js` handles the navbar and tooltips.
- `vendor/` holds the Bootstrap and Font Awesome files copied from `node_modules`, also committed.

## Working on it

```bash
npm install
npm run build   # copy vendor files and compile scss to css
npm start       # serve at http://localhost:8000
```

Run `npm run css` after editing anything in `scss/`, and `npm run vendor` after updating a dependency, then commit the results.

## Cloudflare notes

The contact email in `index.html` is wrapped in `<!--email_off-->` markers so Cloudflare's email obfuscation leaves the `mailto:` link alone. Without them the link is rewritten to `/cdn-cgi/l/email-protection`, which 404s when its decode script does not run.

## Agent tooling

Agent guidance (`AGENTS.md`, `skills/`, `.claude/` and friends) is synced from [scaffold](https://github.com/victusfate/scaffold). Update it with `bash bin/sync-from-scaffold.sh`.

## License

MIT, see `LICENSE`.
