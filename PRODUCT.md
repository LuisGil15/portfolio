# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Purpose and users
Luis Gil's portfolio presents his software development experience and independent projects. Tavi's landing introduces a native HTTP client for macOS and iPadOS to developers evaluating it.

## Evidence on hand
The adopted portfolio in src/components/PortfolioPage.astro documents IBM backend work since August 2022, earlier mobile/backend work at RESSER, and Tavi, NextUp, MiniTools, UpToDown and Umbral. src/data/apps/tavi.ts documents Tavi's workspaces, environments, variables, Keychain and optional iCloud sync. Screenshots and the Tavi mark are in public/images/tavi. Tavi's shared product, documentation and interactive demo components live in src/components; bilingual privacy, terms, support and changelog content lives in src/data/taviDocuments.ts.

## Constraints
The user approved both replacement proposals and requested adoption at / and /apps/tavi/, including /es/ and matching Tavi privacy, terms and support pages. The /proposals/portfolio/ and /proposals/tavi/ routes remain legacy previews of the shared adopted components. This is a local implementation; adoption does not imply publication or a Git push.

English is the default language with Spanish available. Both visual identities support light and dark mode. The portfolio defaults to light and Tavi defaults to dark, independent of OS preference. Explicit theme choices persist independently under site-theme:portfolio and site-theme:tavi; the former shared site-theme value is not used. Language preference persists under site-language, with compatibility for the original proposal-language preference. The portfolio replaces its original purple palette with petroleum teal while preserving the approved composition. Tavi retains its blue identity.

No invented customers, usage statistics, prices, testimonials or release claims. Availability remains pending review per supplied site content. The native-like web demo uses Luis Gil sample data, follows the actual Tavi folder/request/environment/configuration/response structure, and must remain explicitly labeled as a deterministic local simulation that sends no network requests. It is not the native application. Support links are https://buymeacoffee.com/luisgil and https://ko-fi.com/luisgildev.

## Brand commitments
Use the real names and existing Tavi icon. Preserve the two approved compositions and their distinct typography: Sora for the portfolio and Figtree for Tavi, with system UI typography in the native-like demo. Shared theme, language, support and document components keep the adopted surfaces coherent. The authoritative design documentation remains in design-proposals/DESIGN.md and its .impeccable/design.json sidecar to preserve the original proposal provenance (concept seed 423b91e6); its current scope includes the adopted production routes.
