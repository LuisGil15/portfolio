# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Purpose and users
Luis Gil's portfolio presents his software development experience and independent projects. Tavi's landing introduces a native HTTP client for macOS and iPadOS to developers evaluating it.

MiniTools' landing introduces a native Mac island for everyday music controls, timers, calendar, Reminders, weather and local tasks. Its interactive browser simulation helps visitors understand the tools before downloading the native app.

## Evidence on hand
The adopted portfolio in src/components/PortfolioPage.astro documents IBM backend work since August 2022, earlier mobile/backend work at RESSER, and Tavi, NextUp, MiniTools, UpToDown and Umbral. src/data/apps/tavi.ts documents Tavi's workspaces, environments, variables, Keychain and optional iCloud sync. Screenshots and the Tavi mark are in public/images/tavi. Tavi's shared product, documentation and interactive demo components live in src/components; bilingual privacy, terms, support and changelog content lives in src/data/taviDocuments.ts.

MiniTools is implemented at /apps/minitools/ through MiniToolsPage.astro, MiniToolsIsland.astro and MiniToolsIcon.astro, with portfolio and app-registry integration. Source verification on 2026-10-09 established the public v1.0.8 release, notarized DMG and ZIP, Sparkle update entry and official Homebrew command `brew install --cask LuisGil15/minitools/minitools`; reverify release availability before publication. The approved Mosaico icon has light and dark web variants in public/images/minitools; the previous red icon remains as historical source material. The original generated abstract blue wallpaper and its prompt (.impeccable/blue-wallpaper.prompt.txt) also remain as source material. The reconstructed island and monitor illustrations are semantic UI, not native screenshots.

## Constraints
The user approved both replacement proposals and requested adoption at / and /apps/tavi/, including /es/ and matching Tavi privacy, terms and support pages. The /proposals/portfolio/ and /proposals/tavi/ routes remain legacy previews of the shared adopted components. This is a local implementation; adoption does not imply publication or a Git push.

English is the default language with Spanish available. Both visual identities support light and dark mode. The portfolio defaults to light and Tavi defaults to dark, independent of OS preference. Explicit theme choices persist independently under site-theme:portfolio and site-theme:tavi; the former shared site-theme value is not used. Language preference persists under site-language, with compatibility for the original proposal-language preference. The portfolio replaces its original purple palette with petroleum teal while preserving the approved composition. Tavi retains its blue identity.

No invented customers, usage statistics, prices, testimonials or release claims. Availability remains pending review per supplied site content. The native-like web demo uses Luis Gil sample data, follows the actual Tavi folder/request/environment/configuration/response structure, and must remain explicitly labeled as a deterministic local simulation that sends no network requests. It is not the native application. Support links are https://buymeacoffee.com/luisgil and https://ko-fi.com/luisgildev.

MiniTools has separate availability evidence: its download points to v1.0.8, with a latest-release link and installation instructions. Compatibility means macOS Ventura 13 or later and Apple silicon, with or without a notch, including external displays; do not imply Intel support. Launchpad, Caffeine, Ports, Screenshot Board, Mini Terminal and Agent Pulse are public first-party extensions at v0.1.0, available through the in-app Extension Store or the official MiniTools-Plugins catalog. Their reviewed runtimes are already linked into the signed host app; MiniTools currently installs first-party plugins only. Opening the store to collaboration and plugins made for individual workflows is a future direction, not current availability; arbitrary third-party executable plugins and Notch Connect remain Developer Preview. Public distribution packages may be linked, but private source must not be exposed. The browser demos use synthetic music, local timers, temporary tasks and deterministic plugin samples; they do not access the visitor's Mac or run real shell/process actions. Keep the simulation disclosures visible and preserve reset and keyboard behavior.

MiniTools defaults to dark and stores its explicit theme choice independently under site-theme:minitools. It inherits the existing English/Spanish language preference and shared support links. The October 8, 2026 approval combines the daily-flow and island-first concepts into a semantic hybrid. The corrective review resolved four material findings; this does not validate historical single-comp gates or establish measured raster fidelity. Local implementation and documentation do not imply publication.

## Brand commitments
Use the real names and existing Tavi icon. Preserve the two approved compositions and their distinct typography: Sora for the portfolio and Figtree for Tavi, with system UI typography in the native-like demo. Shared theme, language, support and document components keep the adopted surfaces coherent. The authoritative design documentation remains in design-proposals/DESIGN.md and its .impeccable/design.json sidecar to preserve the original proposal provenance (concept seed 423b91e6); its current scope includes the adopted production routes.

MiniTools extends the existing Figtree and blue product world, with system UI type inside the island and the approved Mosaico icon. Its surface direction and review history remain scoped to .impeccable/surfaces/src-pages-apps-minitools-index-astro.md; the portfolio and Tavi retain their existing authority.
