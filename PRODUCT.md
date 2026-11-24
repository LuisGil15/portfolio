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

English is the default language with Spanish available. Both visual identities support light and dark mode. The redesigned portfolio defaults to dark, as do Tavi and MiniTools, independent of OS preference. Explicit theme choices persist independently under site-theme:portfolio and site-theme:tavi; the former shared site-theme value is not used. Language preference persists under site-language, with compatibility for the original proposal-language preference. The November 2026 portfolio redesign uses a petroleum foundation, a lavender display accent in dark mode and a teal accent in light mode. Tavi retains its blue identity.

No invented customers, usage statistics, prices, testimonials or release claims. Availability remains pending review per supplied site content. The native-like web demo uses Luis Gil sample data, follows the actual Tavi folder/request/environment/configuration/response structure, and must remain explicitly labeled as a deterministic local simulation that sends no network requests. It is not the native application. Support links are https://buymeacoffee.com/luisgil and https://ko-fi.com/luisgildev.

MiniTools has separate availability evidence: its download points to v1.0.8, with a latest-release link and installation instructions. Compatibility means macOS Ventura 13 or later and Apple silicon, with or without a notch, including external displays; do not imply Intel support. Launchpad, Caffeine, Ports, Screenshot Board, Mini Terminal and Agent Pulse are public first-party extensions at v0.1.0, available through the in-app Extension Store or the official MiniTools-Plugins catalog. Their reviewed runtimes are already linked into the signed host app; MiniTools currently installs first-party plugins only. Opening the store to collaboration and plugins made for individual workflows is a future direction, not current availability; arbitrary third-party executable plugins and Notch Connect remain Developer Preview. Public distribution packages may be linked, but private source must not be exposed. The browser demos use synthetic music, local timers, temporary tasks and deterministic plugin samples; they do not access the visitor's Mac or run real shell/process actions. Keep the simulation disclosures visible and preserve reset and keyboard behavior.

MiniTools defaults to dark and stores its explicit theme choice independently under site-theme:minitools. It inherits the existing English/Spanish language preference and shared support links. The October 8, 2026 approval combines the daily-flow and island-first concepts into a semantic hybrid. The corrective review resolved four material findings; this does not validate historical single-comp gates or establish measured raster fidelity. Local implementation and documentation do not imply publication.

The portfolio, Tavi and MiniTools landing URLs each publish a dedicated 1200×630 PNG social card with absolute Open Graph and Twitter Card metadata. Cards extend the approved visual identities and use only repository-owned marks, screenshots and deterministic vector composition. The Spanish portfolio route localizes its title and description while sharing the portfolio artwork.

## Brand commitments
Use the real names and existing Tavi icon. Preserve the two approved compositions and their distinct typography: Sora for the portfolio and Figtree for Tavi, with system UI typography in the native-like demo. Shared theme, language, support and document components keep the adopted surfaces coherent. The authoritative design documentation remains in design-proposals/DESIGN.md and its .impeccable/design.json sidecar to preserve the original proposal provenance (concept seed 423b91e6); its current scope includes the adopted production routes.

MiniTools extends the existing Figtree and blue product world, with system UI type inside the island and the approved Mosaico icon. Its surface direction and review history remain scoped to .impeccable/surfaces/src-pages-apps-minitools-index-astro.md; the portfolio and Tavi retain their existing authority.

## Portfolio redesign — November 23, 2026

The user selected Braxton's index-image demo for its visual impact and Zelio's index-2 developer demo for its technical content, then requested implementation in a new Git branch. The resulting branch is `feat/portfolio-braxton-zelio`. The pinned direction is Braxton's personal side panel and expansive type with Zelio's developer-oriented project and skill information. This supersedes the previous portfolio composition only; product landing pages retain their own designs. This is an original Astro implementation using repository-owned assets, not downloaded Envato template code.

The portfolio has a dark initial theme, persistent explicit theme choice, EN/ES content, a continuously animated, visibility-aware particle-wave canvas with a reduced-motion path and a persistent global pause control, a native-app/project gallery with existing filters, a dedicated categorized technology section, preserved professional experience and personal biography, and direct email/GitHub/LinkedIn contact. The profile uses the portrait supplied by the user; it replaces the earlier LG monogram. No CV file, contribution feed, private repository links, metrics or testimonials are invented. Current portfolio design authority is `design-proposals/PORTFOLIO-2026.md` and `src/styles/portfolio.css`; older portfolio tokens and the existing design sidecar describe the previous composition. Publishing or pushing has not been requested.

The user confirmed that Luromi Studio is their own studio for freelance work, and Hourmeet is a platform they created and maintain. Both are featured in My work under Web & platforms, with official local logos and links to https://luromistudio.com.mx/ and https://hourmeet.app/. Their public descriptions identify Luromi's websites/custom software offering and Hourmeet's service discovery, business profiles and appointment scheduling. Start dates were not supplied; the project cards use ownership labels rather than invented periods. Do not describe Hourmeet as employment at another company or infer an acquisition, team size or revenue.

The user supplied IMG_0032.PNG for the portfolio. A 640px WebP derivative (~39 KiB) is stored at public/images/profile/luis-gil.webp; the source file is unchanged. The photo appears in the desktop identity panel and above the hero title on mobile.

The profile panel follows the desktop viewport height with a flexible portrait. Six local network icons replace text labels; Facebook, Instagram, Threads and X remain noninteractive placeholders at the user's request until URLs are provided. Existing GitHub and LinkedIn destinations remain. Hero entrances replay on returning to the top; section reveals re-arm when leaving view. Reduced motion and persistent global pause remain respected.

Latest portfolio refinement: the photo stays square, social icons have no circles, and theme/language controls belong in the sticky header. The global pause button is removed at the user's request; reduced motion remains supported. Section entrances use separate reveal/reset zones to prevent boundary jitter while preserving replay after leaving the area.

The personal panel labels the role as Specialty / Especialidad and the user-supplied location as Location / Localidad: Jalisco, Mexico (Jalisco, México in Spanish).

The user approved Senior Full Stack Developer as their hero title. It replaces the earlier software-with-purpose headline; the name appears between decorative developer tags. Full Stack reveals character by character on entry with fixed character layout, while the complete title remains accessible.

The user supplied personal Instagram, Threads and X URLs for @luisgildev and requested Facebook removal. Both profile and contact now link GitHub, LinkedIn, Instagram, Threads and X. Tracking query parameters were omitted from the supplied URLs. No social placeholders remain.

The contact section includes a bilingual form with name, email, optional subject and message. The user explicitly chose precomposed email instead of a delivery service: preparing the form generates a local mailto draft for luis.gil.dev15@gmail.com, followed by an explicit open-in-email-app link. Visitors review and send from their email application. No backend, third-party form service, message storage or delivery claim is introduced. Header Hablemos now navigates to this section.

Mobile portfolio navigation uses a compact sticky brand/control row and a disclosure for section/contact links, replacing the earlier always-visible multirow mobile menu. Desktop identity and expanded navigation are preserved.

The user-approved generated neutral portrait with reference-matched green eyes has a transparent cutout derivative for the mobile hero. It replaces the small mobile portrait with a grayscale, partially cropped background portrait on the right of the headline. The original photograph remains in the desktop personal panel.

The user requested darker backgrounds and colors associated with dark editors/terminals. The portfolio dark theme now uses near-black #080b10, blue-gray surfaces/text, terminal green actions and title emphasis, cyan punctuation/focus and violet tags. This supersedes the earlier petroleum/lavender portfolio palette; product landing-page brands remain separate. The mobile portrait and wave are dimmed to keep text dominant.

The approved mobile identity is now the compact <LG /> monogram, with the full bilingual name restored in the hero greeting (¡Hola! Soy Luis Gil. / Hey! I’m Luis Gil.). Mobile navigation uses a right-side modal drawer, closed initially and on reload, replacing the prior dropdown.

Latest user direction: mobile header identity is only the light terminal prompt > _. The portfolio is fixed to dark mode, with theme buttons removed and earlier stored light preferences ignored for this surface. Product-page theme controls remain independent.

## Current portfolio positioning — November 23, 2026

The user explicitly requested stronger professional positioning beyond their IBM employment. Lead with the approved Senior Full Stack Developer title, independent product creation and end-to-end development across web, native apps and backend. Hourmeet ownership/maintenance and Luromi Studio founding/freelance work provide concrete evidence; IBM and RESSER remain career experience. Hero, metadata, specialty, project descriptions, experience introduction, about introduction and contact invitation are bilingual and reflect this positioning. Keep the personal neurodivergence text unchanged. Do not invent performance outcomes, revenue, customers, availability, team leadership or professional dates.

Current identity uses the same transparent neutral monochrome portrait on mobile and desktop, blended downward into the dark surface. Desktop panel has only a terminal >_ mark, specialty, location and social icons. Mobile sticky header covers the full viewport width. Portfolio is dark-only. These details supersede older identity and theme descriptions above.

### Contact draft simplification — November23,2026

All previous direct-email contact links in the portfolio now navigate to #contact-form. The contact draft asks for name, optional subject and message only; sender email is supplied by the visitor’s chosen email account, so it is neither requested nor included in the body. The localized playful message placeholder is illustrative, not a prefilled message. Action is Create draft / Crear borrador. The explicit draft-result link still opens the email app for review and sending. No messages are sent by the website.

### Academic section and footer — November23,2026

The user clarified that a section for “estudio” means academic studies, not a separate Luromi studio section. Formation is presented after professional experience as Software Development Engineering / Ingeniería en Desarrollo de Software at CETI, with an Education / Formación navigation link. Do not infer graduation status, dates or licenses. Removed the duplicate inline academic note from About and the public English B2 level; the user reserves language level for a CV, and no CV file was modified. Footer closes with copyright and social links, without Discover Tavi. Luromi remains in My work.

### Personal narrative refinement — November23,2026

User authorized revising the neurodivergence reflection so it reads as personal self-knowledge rather than a request for special/different treatment. The bilingual reflection keeps the supplied autism/inattentive ADHD facts and focuses on perception, processing, organization, strengths, limits and personal strategies; it makes no general medical or workplace claims. This supersedes previous instructions to preserve the old reflection verbatim. About explains the approach to product building without repeating the hero’s name/title introduction or listing projects again. Removed its project-contact button. Footer DOM/visual order is now social links followed by Luis Gil copyright.

### Approved self-knowledge reflection — November23,2026

The user approved combining self-knowledge with learning to live in a world not always designed for their way of thinking. The Spanish approved copy begins “Soy autista y tengo TDAH de presentación inatenta. Conocerme ha sido parte de aprender a moverme…” and frames learning as recognizing strengths, limits and personal strategies. Equivalent English copy is implemented. This supersedes the shorter My way of seeing the world reflection.

### Stack tools — November23,2026

User confirmed NestJS and Supabase plus VS Code, Docker, Podman and GitHub for the technology section. Tools stay within the stack section under their own Tools & workflow / Herramientas de trabajo category, rather than a separate top-level section. NestJS is grouped under backend and Supabase under cloud. All six have local Devicon marks in the existing two-row marquee. No additional unconfirmed tools added.

Academic facts subsequently confirmed by the user: CETI · Colomos attendance2018–2021. English course institution and dates remain unspecified.

### Security, delivery and AI tooling — November23,2026

User clarified 2FA (not F2F) and approved separating Security/authentication from HTTP/REST API integration. Security lists TLS/mTLS,2FA,Keychain and existing vulnerability-remediation experience. User chose to omit additional suggested security keywords. User also supplied Jenkins,Argo CD,Terraform and Codex,Copilot,Claude,Ollama,OpenCode. Group delivery tools under CI/CD & infrastructure and assistants/local AI tooling under AI for development. These indicate workflow tools, not AI model-development specialization. User confirmed the exact names OpenCode and Argo CD.

### Operating systems and transferable experience — November23,2026

User confirmed Linux,macOS and Windows as operating systems they have worked with. Listed as Operating systems/Sistemas operativos in the stack. User requested a broader professional narrative: summaries now connect product development, systems integration,automation,security and team tooling, while existing role dates, employer names and technical examples remain. Role subtitles describe scope rather than asserting new formal titles or promotions. No invented metrics or leadership claims.

User clarified RESSER scope: they built the mobile application from scratch with React Native, in addition to C#/.NET backend services. Present end-to-end app creation explicitly, not only feature contributions.
