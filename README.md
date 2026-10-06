# Portfolio

Personal portfolio and landing pages for independent apps by Luis Gil.

## Routes

- `/` — portfolio home
- `/apps/tavi/` — Tavi landing page
- `/apps/tavi/privacy/` — Tavi privacy policy
- `/apps/tavi/support/` — Tavi support

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

## Validation and deployment

```sh
npm run build
npm run cloudflare:preview
npm run deploy
```

Cloudflare Workers Builds runs `npm run build`, then `npx wrangler deploy` on
the production branch. Pull request branches use `npx wrangler preview`.
