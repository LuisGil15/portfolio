# Portfolio

Personal portfolio and landing pages for independent apps by Luis Gil.

## Standalone product websites

The product websites now have independent source repositories:

- [Tavi website](https://github.com/LuisGil15/tavi-website)
- [MiniTools website](https://github.com/LuisGil15/minitools-website)

Each repository includes its own Astro project, product assets, build checks,
CI workflow, and Cloudflare deployment configuration. Future standalone website
changes belong there. The `/apps/tavi/` and `/apps/minitools/` routes in this
repository remain the currently hosted copies until a coordinated hosting
migration updates the portfolio links and redirects. Creating these repositories
does not change DNS or production routing.

## Routes

- `/` — portfolio home
- `/apps/` — application index
- `/apps/tavi/` — Tavi landing page
- `/apps/tavi/privacy/` — Tavi privacy policy
- `/apps/tavi/terms/` — Tavi terms of use
- `/apps/tavi/support/` — Tavi support
- `/apps/tavi/changelog/` — Tavi release notes

## Adding an app

1. Add its typed metadata in `src/data/apps/<slug>.ts` and export it from
   `src/data/apps/index.ts`.
2. Create `src/pages/apps/<slug>/index.astro` with `AppLayout`.
3. Create its legal and support routes with `LegalLayout`.
4. Keep app-specific text in its data file or route; shared navigation and metadata
   belong in the layouts.

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

## Validation and deployment

```sh
node scripts/test-portfolio-preloader.mjs
npm run build
npm run cloudflare:preview
npm run deploy
```

Cloudflare Workers Builds runs `npm run build`, then `npx wrangler deploy` on
the production branch. Pull request branches use `npx wrangler preview`.
