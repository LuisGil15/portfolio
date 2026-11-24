# Portfolio

Personal portfolio and landing pages for independent apps by Luis Gil.

## Routes

- `/` — portfolio home
- `/apps/` — application index
- `/apps/tavi` and `/apps/tavi/…` — permanent redirects to [tavi.com.mx](https://tavi.com.mx/). Links on both portfolio domains preserve the document path and query string.

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
node scripts/test-domain-redirect.mjs
npm run build
npm run cloudflare:preview
npm run deploy
```

Cloudflare Workers Builds runs `npm run build`, then `npx wrangler deploy` on
the production branch. Pull request branches use `npx wrangler preview`.
