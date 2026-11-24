# Portfolio redesign verification

Branch: `feat/portfolio-braxton-zelio`.

- `ASTRO_TELEMETRY_DISABLED=1 npm run build`: 13 static routes generated successfully.
- `git diff --check`: passed.
- Generated home, Spanish home and portfolio preview: all local asset paths, local routes and fragment targets resolved.
- Rendered dark desktop: 1440×1000, ES, no horizontal overflow. Screenshot: desktop.jpg.
- Rendered mobile: 390×844 in both themes and ES; 320×740 in both themes. No horizontal overflow. Final dark 390px screenshot: mobile.jpg.
- Rendered tablet: 768×1024, ES/dark. Projects form a single column, no horizontal overflow; real screenshot loads.
- Browser: theme changes, persisted theme after reload, EN→ES translation, direct `/es/` route, experiment filter returns Umbral and UpToDown with a polite two-project announcement, reset to all projects, section navigation and active section state all checked.
- Browser console: no captured errors or warnings during final checks. No broken loaded images found.
- Reduced motion: implementation inspected (CSS motion suppression and JS media-query cancellation). OS/browser preference emulation was not performed.
- Existing shared product pages compile; no changes were made to their components. Their browser flows were not re-audited.

The social image was rendered from its retained SVG with the already-installed Sharp dependency after macOS sips could not decode the SVG in this environment. No new package dependency was introduced.

Local implementation only. No push, merge, deployment, template purchase or download.

## Skills section follow-up

- Updated the existing stack section to follow the user's image reference, with eight local SVG marks and six real technology groups.
- All visible marks loaded; dark/light Astro mark variants checked.
- Rendered ES/dark at 390px and EN/light at 1440px with no horizontal overflow. Language and theme controls checked; no captured browser warnings/errors.
- Retained screenshots: skills-desktop.jpg and skills-mobile.jpg.

## Moving technology rows

Confirmed different transform values across observations, opposite directions and running animation states. Pause control sets both rows to paused; resume and moving the pointer outside the gallery restore both to running. At 390px there is no horizontal page overflow. Reduced-motion static grid and hidden duplicates/control were checked in source; preference emulation was not performed. Build and diff checks passed.

## Hover labels

Verified desktop caption opacity 0 at rest and 1 on the hovered TypeScript tile; other tiles keep their names hidden. At 390px captions remain visible (opacity 1), with no horizontal overflow. Build and diff checks passed. Screenshot: skills-hover.jpg.

## Experience timeline

Build and diff checks passed. Both official company logo images loaded. Native responsibility disclosures opened with pointer and closed with Enter; all eight existing responsibility bullets remain present. Rendered ES/dark desktop and EN/light 390px mobile without page overflow. Captures: experience-desktop.jpg, experience-mobile.jpg. No dates, employer identities or job claims were added.

## Luromi Studio and Hourmeet

The user confirmed their freelance studio and creator/maintainer role. Both official SVGs loaded. External links point to the supplied origins and use noopener/noreferrer. ES/dark desktop and EN/light 390px mobile inspected with no horizontal overflow. The mobile capture shows both complete headings, descriptions and links. Start dates were not supplied and are not invented. Captures: initiatives-desktop.jpg and initiatives-mobile.jpg. Build and diff checks passed.

## Portrait and own-project gallery

- Supplied portrait is a local 640px WebP; source untouched. Desktop and 390px mobile inspected, image loaded, no horizontal overflow.
- Hourmeet and Luromi Studio moved into the gallery; Web & platforms filter shows exactly those two. Mobile gallery has one 350px track at a 390px viewport.
- Both project cards retain user-confirmed ownership and role, official marks and direct links. Experience retains IBM and RESSER only.
- Build and diff checks passed. Captures: portrait-mobile.jpg and owned-projects-desktop.jpg.

## Single navigation

Removed sidebar section menu and repeated email CTA. Confirmed one main navigation and no profile nav. At 320px all six links are visible, 44px high, with no page overflow. About me anchor lands at 132px below the 117px sticky navigation and receives the only active state. Final desktop and mobile captures retained as single-nav-desktop.jpg and single-nav-mobile.jpg. Build/diff checks passed.

## Motion expansion

Verified global running/paused state, both carousel tracks paused by the global control, persistence after reload and resume. Motion control labels switch correctly between EN/ES. Desktop and 320px mobile inspected; no page overflow, compact mobile profile header measures 119px and hides the desktop portrait as intended. No captured console warnings/errors. Reduced-motion and visibility lifecycle paths were inspected in source; OS preference emulation and performance profiling were not performed. Build and diff checks passed. Capture: motion-desktop.jpg.

## Replaying hero and viewport profile

Build (13 routes) and diff checks passed. At 1280×560 and default 1280×720 the profile fits its client height without clipping; its bottom clears the viewport by 26px. At 390×844 the compact header measures 72px and there is no horizontal overflow. Six social marks render; only GitHub/LinkedIn have hrefs.

From Experience, Home returns to the hero. Re-triggering Home shows staggered computed opacity/translation values (first line opacity ~.04 while later lines remain 0), and all lines settle at opacity 1. Explicit word spaces preserve the heading's readable text. Scroll reveal observers re-arm on exit; global pause/reduced motion guards remain in source. No captured browser warnings/errors. Screenshot: hero-profile-refined.jpg. Reduced-motion preference emulation and frame profiling were not performed.

## Square photo, header settings and edge reset

Build (13 routes) and diff checks passed. Desktop portrait measured 242×242. Global pause control is absent, and theme/language are within the sticky header. Both settings were exercised successfully. Social marks render without borders or circular backgrounds. At 390×844 there is no horizontal overflow; My work lands at 214px below the 166px sticky header. Desktop capture: square-profile-header.jpg. No captured console warnings/errors.

The reveal/reset observers now have separated boundaries (inner reveal and outer 200px reset), avoiding the previous transformed-target re-arm feedback. Scroll and navigation were exercised with heading states settling to opacity 1 / transform none. Hero replay and reduced-motion guards remain. OS reduced-motion emulation and long-duration frame profiling were not performed.

## Profile field labels

Added semantic Specialty/Location fields with the user-supplied Jalisco location and EN/ES values. Desktop rendered with both labels, square photo, unframed social icons and no profile clipping (scrollHeight fits clientHeight). Capture: profile-labels.jpg. Build (13 routes) and diff checks passed.

## Wider personal panel

Desktop panel now measures 336px (previously 296px), photo 282px square (previously 242px), field text 15px (previously 13px), labels 12px and identity 28px. Rendered at 1280×720 without horizontal overflow, and at 1280×560 with profile scrollHeight fitting clientHeight after uniform portrait shrink. Header and content remain clear of the panel. Build and diff checks passed. Capture: wider-profile.jpg.

## Animated skills orbits

Three satellite transforms changed across browser observations with all animation states running; returning Home set data-active=false and all three states to paused. Existing rings, clipped composition and section layout retained. Reduced-motion animation:none is present; preference emulation was not performed. Build and diff checks passed. Capture: animated-orbits.jpg.

## Profile field icons

Code and location-pin icons rendered alongside their labels; both use aria-hidden and the panel fits its height. Build and diff checks passed. Capture: profile-field-icons.jpg.

## Senior title and typing

Build (13 routes) and diff checks passed. Home replay showed ten character opacities at 0 then at 1, with identical 276.55px text width in both observations. The accessibility tree exposes Senior Full Stack Developer as the level-one heading. At 320px the title fits its 288px content width without horizontal overflow; full specialty width is 181.45px. Reduced-motion path inspected in shared animation guard; preference emulation was not performed. Capture: senior-hero.jpg.

## Span greeting, briefcase and typing cursor

Home replay showed greeting opacities ~.09/0/0 followed by 1/1/1, confirming staggered entry. Literal span tags and briefcase icon rendered correctly. Cursor frames use measured character edges and step timing; it is hidden before/after its finite sequence, with no added layout width. No horizontal overflow or captured console errors/warnings. Cursor sequencing and reduced-motion guard inspected in source; frame-by-frame recording was not performed. Capture: span-cursor-hero.jpg. Build and diff checks passed.

## Fewer arrows

Removed repeated arrow SVGs from calls to action and retained exactly one directional scroll arrow. Browser confirms zero SVGs in the cleaned action selectors. Explore my work navigation still lands below the header, all four project URLs/labels remain, and desktop has no horizontal overflow. Hero and project sections rendered with recognizable button/link treatments. Build and diff checks passed. Capture: fewer-arrows.jpg.

## Unified header controls

Both utility buttons measured 44×44px with 50% radius and transparent backgrounds. Language/theme/contact DOM order matches visual order. Exercised both theme and language and restored ES/dark. Desktop and 390px mobile rendered without horizontal overflow; viewport reset afterward. Build and diff checks passed. Capture: header-controls-unified.jpg.

## Personal social URLs

Build and diff checks passed. Parsed generated Spanish HTML: five networks appear as links in each of the two placements; all supplied Instagram/Threads/X destinations match their cleaned paths, with target=_blank and noopener/noreferrer. Facebook is absent from both lists. No external profile availability check was performed.

## Contact draft form

Build (13 routes) and diff checks passed. Desktop ES/dark and 390px EN/light rendered with no horizontal overflow; mobile fields form a single 350px track. Native required validation blocked an empty form, and invalid email blocked draft generation. A valid submission generated the expected mailto recipient, subject and multiline body. Changing the message hid the stale draft. Language changes reset generated drafts while preserving field text. Pure-function checks passed for Unicode, ampersands, paragraph breaks, default subject and subject-header newline stripping.

Only local synthetic data was used. No email client was opened, no message sent, and no external service configured. Mail-client-specific URI-length limits and actual delivery were not tested. Captures: contact-draft-ready.jpg and contact-form-desktop.jpg.

## Compact mobile header

Build (13 routes) and diff checks passed. At 390×844 and 320×740 the bar measures 65px with no page overflow. Menu opens with six destinations; selecting Experience closes the panel, focuses the section and lands at 113px beneath the 65px bar. Escape closes it and restores menu-button focus. Language and theme controls work in the mobile row. At 1280px desktop navigation remains flex and the mobile row is hidden. No captured console warnings/errors. Viewport reset after review. Capture: mobile-header-compact.jpg.

Checked using the running LAN development server on port 4322. Actual iPhone Safari was not operated; the supplied iPhone screenshot informed the correction.

## Mobile portrait background

Generated a transparent cutout from the approved neutral portrait, then optimized to an 800×800 WebP (54,930 bytes). Alpha range 0–255 confirms actual transparency. Mobile ES/dark at 390px and light at 320px inspected; no horizontal overflow. Computed grayscale(1), theme-specific opacity and zero old hero-portrait elements confirmed. The portrait is clipped at the right, fading behind readable text; decorative content is aria-hidden. Capture: mobile-portrait-background.jpg. Build and diff checks passed.

## Dark editor/terminal palette

Build (13 routes) and diff checks passed. Computed canvas #080b10, primary #dce5f3, secondary #9daac0 and title green #9ece6a verified in browser. Flat-color contrast checks: primary 15.53:1, secondary 8.39:1, green 10.78:1, cyan 11.49:1, violet 8.52:1; secondary on project cards 7.55:1 and profile 8.06:1. Control boundary #5a6c85 against input surface #121923 is 3.30:1. These ratios cover flat tokens, not every photographic pixel.

Rendered desktop and 390px mobile dark; light at 320px remains available without overflow. NextUp preview, MiniTools card, profile labels and form action computed colors follow the new palette. Mobile portrait darkened and wave dimmed; title/text remain visually dominant. No captured console warnings/errors. Viewport reset. Captures: editor-palette-mobile.jpg and editor-palette-desktop.jpg.

## Extended torso fade

Rendered 390px and 320px mobile with more shoulder/chest visible and a lower graduated fade. Browser confirms portrait layer -2 behind particle layer -1; no horizontal overflow at either width. Viewport reset. Build and diff checks passed. Capture: mobile-torso-fade.jpg.

## Edge-to-edge mobile hero

At 390px both hero and particle canvas measure from x=0 to x=390; text retains x=20. At 320px both span x=0 to x=320 with text at x=16. No horizontal page overflow. Portrait remains below the wave and now clips at the screen edge. Build and diff checks passed; viewport reset. Capture: mobile-hero-edge-to-edge.jpg.

## Softer particle ending

Rendered the mobile hero at 390px: the lower particle rows now dissolve into the page instead of ending at a sharp horizontal boundary. Computed mask confirms full alpha through 76%, .8 at 84%, .333 at 94% and zero at 100%. Viewport reset; build and diff checks passed. Capture: particle-wave-soft-ending.jpg.

## LG header, full greeting and side drawer

Build (13 routes) and diff checks passed. At 390px initial dialog.open=false and aria-expanded=false; same after reload. Brand and greeting expose <LG/> and ¡Hola! Soy Luis Gil. Open drawer focuses Close menu, and accessibility tree contains only modal navigation. Escape restores trigger focus; backdrop tap closes; Experience selection closes, clears scroll lock and focuses the section.

At 320px drawer spans x=40–320, y=0–740 with no page overflow. Resizing to 1280px closes it, clears scroll lock and returns navigation to the header with display:flex. No captured browser warnings/errors. Reduced-motion guard inspected; preference emulation was not performed. Captures: lg-header-closed.jpg and mobile-drawer-open.jpg.

## Terminal header and fixed dark mode

Build and diff checks passed. Browser confirms brand text > _, light color rgb(220,229,243), data-theme=dark, data-fixed-theme=dark and zero theme buttons. Executed the actual generated initialization script with a mocked stored light preference: it remained dark. Parsed Tavi output retains its independent theme control and has no fixed-theme attribute. Mobile capture: terminal-header-dark.jpg. Viewport reset.

## Drawer initial focus

At 390px opening the menu focuses drawer-title; Close has outline-style:none. Pressing Tab moves to Close and gives it outline-style:solid. Escape still closes. Build and diff checks passed; viewport reset. Capture: drawer-initial-focus.jpg.

### Responsive animation and technology edges — 2026-11-23

- Build: all 13 routes passed; git diff whitespace check passed.
- IAB 390×844 and 320×740: technology window spans x=0 to viewport width; scrollWidth equals viewport width. Desktop 1440×900 has no horizontal overflow.
- Captured project and RESSER queued → running → visible sequences in motion-responsive JSON/frame files. Outer transform stays none; inner title decelerates to rest. No console errors captured.
- Logo pause control tested; offscreen tracks computed paused. Filters tested by pointer and Enter.
- Fresh motion reviewer approved inspected source and valid RESSER captures; project-valid captures were added afterward and independently inspected through sampled computed styles.
- Reduced motion reviewed in source only: browser exposes no media preference emulation. Actual iPhone Safari performance and reduced-motion device behavior remain unverified.

### Positioning and differentiated text motion — 2026-11-23

- Build passed all 13 routes, whitespace check clean.
- IAB mobile390/320 and desktop1440 reviewed. No horizontal overflow at320/390.
- EN language switch replaces heading word wrappers with the correct full translated text, with no stale words. Work heading replay captures show 5 whole-word masks and preserved heading height. Full visible text remains accessible; no per-letter body wrapping.
- Hero/contact/work screenshots and timed replay samples in positioning/. Tavi samples confirm settled static wrapper/paragraph transforms; they do not capture an active Tavi entrance. No console errors captured.
- Source path finishes motion for keyboard focus and reduced preference. No runtime reduced-motion emulation or actual iPhone performance measurement available.

### Gallery filters, card actions and Luromi logo — 2026-11-23

Build13 routes passed. At390px, filter buttons share one top coordinate, scrollable width486/client390 and document width390. Keyboard Enter on offscreen Experiments scrolls row to96 and shows2 projects; Web filter shows Hourmeet/Luromi only. Visual capture confirms filled/bordered card action and official white/blue Luromi symbol. Public source asset: https://luromistudio.com.mx/favicon.svg.

### Disclosure animation — 2026-11-23

IAB390×844 native click capture: Umbral details outer height34→90.39, content0→56.39; close returns outer box to34 after220ms. Native closing child still reports intrinsic size once hidden: native open state and outer region confirm actual collapse. Rapid open/close/open ends expanded; Enter closes immediately with overflow cleared. IBM responsibility list opens at natural height; resize during collapse settles closed, desktop Enter reopens instantly. No console errors. Fresh motion reviewer approved source and valid native capture evidence. Reduced-motion runtime emulation and actual iPhone performance remain unverified; reduced-motion guards reviewed in source. Evidence in disclosures/.

### Simplified contact —2026-11-23

Changed About/experience/email-display/optionalFAQ contact links to #contact-form, a focusable native fragment target with sticky-header scroll clearance. Removed email field and email body row; name and optional subject share a desktop row. Tested draft helper with Unicode, ampersand, multiline message, stripped subject newline and default subject. CUA mobile: About CTA reaches form, synthetic name/message generates correct mailto draft with no sender email; editing clears stale draft; English/Spanish placeholder changes correctly. Final email-app link was inspected only, not opened. No message sent.

### Academic formation and footer —2026-11-23

Build13 routes passed. Formation is reachable from the native mobile drawer, which contains Education/Formación and no My studio link. Mobile390 shows CETI and the supplied engineering program with no horizontal overflow; desktop1440 header fits the extra navigation item. No English B2/Inglés B2 text remains in rendered body; DB2 remains correctly in technical work history. Footer text is copyright only, alongside the5 social links. No CV modified.

### Academic integration —2026-11-23

Build13 routes passed. IAB390 mobile visual review confirms aligned timeline marker, institution plate and supporting degree text; at320px document width equals viewport320. Desktop1440 reviewed with the same timeline inset. Evidence academic-integrated-mobile/desktop.jpg.

### About narrative and footer order —2026-11-23

Build13 routes passed, diff whitespace clean. IAB390 mobile: full About/reflection fits without horizontal overflow; repeated Soy Luis introduction absent, About link count0. EN/ES reflection switch verified. Footer DOM order socials then footer-meta matches intended mobile reading order. Screenshots about-refined-mobile.jpg and footer-socials-first-mobile.jpg.

### Academic motion and approved reflection —2026-11-23

Build13 routes and whitespace check passed. Actual IAB390 capture in education-motion/entry.json records queued→running→visible; outer transform remains none, logo mask and inner text complete. Final education is readable and correctly aligned. EN reflection translation verified through language control. Fresh motion reviewer passes scope inspected with no material fixes; reduced-motion runtime and actual iPhone performance remain unverified.

### Stack tools —2026-11-23

Build13 routes passed; diff whitespace check passed. IAB390 shows new NestJS/Supabase and VSCode/Docker/Podman/GitHub logos; categories include requested tools and additions. Pause control toggles to Resume; tracks retain42s/49s periods. At320px document width320, no horizontal page overflow. SVGs fetched successfully from existing pinned Devicon catalog. Desktop1440 reviewed. No console errors captured. Horizontal offscreen copies retain native lazy loading; initial image-complete inspection is not a missing-asset test for them.

### Security,CI/CD and AI tool groups —2026-11-23

Build13 routes passed. Security/authentication now separate from API integration, includes user-confirmed2FA and existing mTLS/Keychain/vulnerability-remediation experience. No suggested unconfirmed security topics added. CI/CD contains Jenkins,Argo CD,Terraform; AI workflow contains Codex,Copilot,Claude,Ollama,OpenCode (last names confirmed by user). IAB390 category view has10 groups and document width390; desktop1440 reviewed. Both languages retain the same tool names.

### Wide stack and broader experience —2026-11-23

Build13 routes and diff whitespace check passed. IAB1440: logo window976px, repeat975.95px, categories below (logo bottom601.75, categories top693.75), two464px text columns. No horizontal page overflow. At320: logo window320, category single column288, page width320. Added operating systems Linux,macOS,Windows. Mobile390 reviewed broader experience copy; keyboard expands IBM details and retains mTLS example. English intro verified through language switch. No console errors. Evidence stack-wide-desktop/mobile and experience-broader-mobile.jpg.

### Terminal boot intro —2026-11-23

Build13 routes and lifecycle test passed. Real IAB390Spanish and1440English captures in boot-intro/ show loading: contentopacity0,titletransformnone,motionpaused; revealing: overlayopacityfalls whileherotitlemoves; ready: overlayhidden,inertfalse,herostillfinishing. Mobile clears around2.07s, desktop1.93s in supplied captures. Escape immediately bypassed; deep link #contact-form bypassed. Source lifecycle test executes reduced-motion bypass, stalled-document failsafe and keyboard skip. Browser media emulation unavailable; reduced-motion rendering and iPhone performance unverified. Fresh motion reviewer approved inspected scope with no blocking fixes. Captured frames and JSON are measurements of this browser run, not performance guarantees.

### Published terminal intro —2026-11-23

Cloudflare Worker portfolio deployed as1bbd015a-e33f-4c3b-a14f-ac8ceda5d0f1 from cb351a0 (previous baseline b9240173-e77c-4ddc-bd7e-e869e7751cb8). Verified https://luisgil.org/es/ serves new PortfolioPage.Dk3ZWfW1.css and terminal markup. Production390 capture in boot-intro/live.json shows loading→revealing→ready, title entrance begins duringfade, native inert clears, no console errors. Public https://luisgil.org/ is English and Escape skips itsintro; contact action is Continue by email. Temporary viewport override reset. No Git push performed.

Hero secondary action published2026-11-23 from69a0d68 asCloudflare version6a291450-dfc8-4c46-95d0-7697dd3e4b0f. Public https://luisgil.org/es/ HTML verifies Mi experiencia points to #experience. English equivalent My experience in shared component; existing GitHub social/repository links remain.

### Boot reading pause —2026-11-23

Lifecycle test and build13 routes passed. Actual IAB1280 capture measured733ms from fully written final line to revealing. While held, overlayopacity1 and titletransformnone; final state ready/hidden and hero entrance running. Evidence boot-hold/sequence.json and reading-pause.jpg. Only runtime timing changed160→700ms; skip/reduced-motion/failsafe behavior unchanged.

700ms boot hold published from8c0287c asCloudflare4225cc7e-4671-439d-92ee-d6e9e37021fa; public /es/ HTML confirms wait(700) and excludes old wait(160). Fresh motion review passed narrow timing change.

### Skip intro and smoother handoff —2026-11-23

Lifecycle suite and build13 routes passed. IAB390 native pointer skip capture in boot-smooth-skip/skip.json: text stops at >boo, instant:false, overlay opacity falls while hero title transform changes, then hidden/inertfalse. Normal path capture retains completed-text hold and new fade. Fresh motion reviewer approved source and mobile evidence with no material fixes. No reduced-media browser emulation or physical iPhone performance claim.

Published smoother handoff from410ccb5 asCloudflare9d2681d5-824d-4c67-992d-917a7a4aaf09. Public https://luisgil.org/es/ native pointer skip at390px confirms loading→revealing→ready, opacity1→0.0044 while hero transform32.56→0.10, instant:false, overlayhidden; no console errors. Desktop1440 Escape capture also retains animated title entrance. Evidence boot-smooth-skip/live.json, live.jpg and desktop-keyboard.json. Temporary viewport reset.

### Primary domain migration —2026-11-23

Published commit6f5d323 asCloudflare5f6e2ff6-8dac-43a9-bc90-3e7044709589. luisgil.dev attached with no DNS conflicts; luisgil.org remains attached and redirects301 before asset lookup. Lifecycle redirect test passed; Astro build13routes passed. Production HTTP checks confirm /, /es/, /apps/tavi/?source=portfolio&lang=es and /images/social/portfolio.png retain paths and queries with301, then200 on.dev. Missing.dev path remains404. Canonical and OG image use.dev. Browser navigation from https://luisgil.org/es/ lands on https://luisgil.dev/es/, no console errors; evidence domain-migration/live-dev.jpg. Only apex domains configured; no www changes. Existing workers.dev default disabled by Wrangler when explicit custom routes declared. No Git push performed.

### Professional title —2026-11-24

Updated title to Software Developer Engineer as requested, retaining three-line hero and typewriter behavior. Build13routes passed. Local IAB1280desktop and390mobile render checked; mobile no horizontal overflow. Public/es/ document title, h1 accessible name and specialty verified after publishing50ec455 asCloudflare261382a1-b878-423e-b06e-f81548e34819. Evidence software-developer-engineer/.

### Contact opportunities —2026-11-24

Contact headline, form invitation and example message now include team roles and collaborations alongside projects. Both locales updated. Build13routes passed; desktop1280 and mobile390 captures checked in contact-opportunities/, no mobile horizontal overflow. Published79205bb asCloudflare4be034b5-65b6-4277-954b-9f42756ad882; public/es/#contact verified with new text and screenshot. Mail draft behavior unchanged.

### Local no-sidebar trial —2026-11-24

Explicitly local only, no deployment or push. Desktop identity aside removed; centered main layout and right hero background portrait with size-relative fade. IAB1280,1440,820 and390 checked, no horizontal overflow, mobile portrait500px and desktop mark hidden on mobile. Narrow desktop fade corrected to image aspect ratio. Existing nav and content retained; footer socials remain. Build13routes passed. Both localhost4322 and4321 serve the trial; screenshots no-sidebar-local/.

### Local full-bleed desktop —2026-11-24

Hero, header background, stack and marquee verified at x0 to viewport width at1280,1920,820 and390. Text remains on centered gutters; no horizontal overflow. Initial boot overlay verified at viewport size despite body inline-size containment. Build13routes passed. Screenshots desktop-full-bleed-local/. Viewport reset. No publish, commit or push.

Desktop stack padding/fade checked locally at1280: moving window x44–1236, lateral mask76.8px, no horizontal overflow; screenshot stack-padded-fade-local/desktop.jpg. Build13routes passed. No deployment or push.

### Local mobile separator motion —2026-11-24

Build13routes passed. IAB390×844 native scroll captures show topborder0 and scale0, enter scale0→1 with finite glint, steady line at scroll169, return-to-top scale1→0 over320ms. Rapid reversal retains intermediate scale before returning1. Evidence mobile-header-line/ includes entry/exit frames and telemetry; fresh motion reviewer disposition ship with no material fixes. Reduced-motion behavior source reviewed, not rendered; no physical iPhone/frame-rate claim. Temporary viewport reset. Explicitly local only; no deployment, commit or push.

### Approved layout published —2026-11-24

Published sourcee0dcda9 asCloudflare7188da31-ec17-4fe9-81e2-8eb9fefcf788. Production / and /es/ return200 with background portrait and no identity aside. Previous.org/es/?source=check remains301 to.dev preserving query. Desktop screenshot layout-release/desktop.jpg. Native IAB390 scroll confirms mobile separator0→1 then1→0 on return, with no console errors; telemetry layout-release/mobile-line.json. Build13routes and existing preloader lifecycle suite passed. Viewport reset. No Git push performed for this release.

### Equal separator timing published —2026-11-24

Source1f1a99e deployed asCloudflare9f5cf80c-dbfb-46b4-a40f-c545b3e9ba57. Both directions320ms cubic-bezier(.4,0,.6,1), midpoint glint. Local IAB390 captures include both directions, stable endpoints and gradual opening (0.08 at~69ms,0.35 at~133ms). Fresh motion reviewer passed narrow refinement, reduced-motion source-only unchanged. Build13routes passed. Public/es/ verified computed320ms same curve before and after scroll, progressive scale0→.29→.91→1; evidence header-equal-timing/live.json and live-mid-draw.jpg. Viewport reset. No Git push performed.

### Social preview refresh —2026-11-24

Sourceabf8163 published asCloudflare221b423d-bbd8-4b92-a614-03bf4e5edcbe. New /images/social/portfolio-2026.png is1200×630 PNG354455bytes, SHA256e95f798c1d82c6a9af85f08bd5a002d2c4cad082170da5efca76622d4aa417ee. Local build13routes passed; root and/es/ metadata point OG/Twitter at new URL, localized alt retained and Twitter creator @luisgildev. Public image200 image/png and matching hash verified; browser public image inspected, screenshot social-preview-2026/published.jpg. Actual platform crawler caches and platform-specific rendering not tested. Deterministic renderer uses actual Sora outlines plus existing portrait; initial font-substitution issue corrected. Legacy image refreshed. No Git push performed.

Social portrait opacity82%→68% published2026-11-24 from0607340 asCloudflare9436e33d-1790-4c0f-82ff-074e321d7dea. PNG visually inspected, build13routes passed. Public/es/ OG image points to ?v=2 and public PNG bytes match local rendered asset. No Git push performed.

Social wave strengthened and published2026-11-24 from9b39fab asCloudflare777aabc7-0c00-46a3-a0a5-272fff5b2282. Taller30×130 point field, stronger opacity and lower fades; wave behind portrait, photo remains68%. PNG visually reviewed and build13routes passed. Public root/es metadata?v=3 and exact public/local PNG bytes verified. No Git push performed.

Social layout tightened2026-11-24: text+64px and portrait−130px toward center, opacity68% retained. Individual glyph paths fix shifted-coordinate raster artifacts. Visually inspected PNG, build13routes passed. Source68974f6 published asCloudflare42c188ce-383c-4737-a402-b9208e45e703; public/es/ image?v=4 metadata and exact PNG bytes verified. No Git push performed.

Preferred social spacing restored2026-11-24 from4991161 asCloudflarec2d2e3a5-0a71-4422-b44c-3543502676ce. Text64px/portrait580px restored, wave and68% opacity retained. Visual inspection/build13routes passed; public/es/ metadata?v=5 and exact PNG bytes verified. No Git push performed.

## Header desktop y superficie de Safari — 2026-11-24

El separador y su destello comparten ahora la misma implementación en móvil y escritorio: 320 ms de apertura/cierre, escala desde el centro e histéresis de scroll existente. La preferencia de movimiento reducido elimina la transición y el destello en ambos tamaños.

Safari dispone de una superficie opaca fija pegada al borde superior, fuera del contenedor de consultas de tamaño. El portfolio usa `viewport-fit=cover`, insets seguros y fondo raíz oscuro; las otras páginas mantienen su viewport anterior. Referencias primarias: https://bugs.webkit.org/show_bug.cgi?id=301756#c2 y https://webkit.org/blog/7929/designing-websites-for-iphone-x/ .

Comprobaciones: build de las 13 rutas, pruebas del preloader y redirección, y diff sin errores. CUA a 1280 px registra apertura de escala 0 a 1 y regreso de 1 a 0, con destello intermedio y reposo sin opacidad; muestras en `header-desktop-safari/desktop-opening.json` y `desktop-closing.json`. A 390 px, header pegado a y=0 y cero overflow horizontal. Safari real de macOS comprobado al desplazar la página: la zona superior permanece oscura y opaca. Evidencia `safari-page.jpg` recortada para excluir las pestañas ajenas. No se verificó el modo de movimiento reducido en ejecución ni el dispositivo físico de la foto del usuario; no se atribuyen medidas de rendimiento a esas condiciones.

## Seguimiento iPad: header real fuera de contención — 2026-11-24

La foto del usuario demuestra que la franja fija de 12px no resolvió el problema en Safari de iPad. Sustituida por el header completo, `position:fixed` como hijo directo del body, fuera del contenedor de tamaño. Se elimina la franja auxiliar. Un espaciador con la altura medida del header mantiene el contenido en flujo; padding y fondo siguen siendo opacos. El preloader incluye ahora el header en las superficies inert y las libera al terminar. No cambian los tiempos ni la lógica del destello.

WebKit documenta un tratamiento específico de iPad para el color bajo sus controles: https://github.com/WebKit/WebKit/commit/1a16e315eb638ea271fb3ada1a8e8670ab622f9d . El muestreo de contenedores fijos se implementa en https://github.com/WebKit/WebKit/blob/main/Source/WebCore/page/LocalFrameView.cpp . La elección de esta estructura es una corrección basada en esas fuentes, no confirmación de que se haya reproducido/resuelto el caso físico del usuario.

Build de 13 rutas y pruebas del preloader pasan. CUA en 1194×834 y 834×1194: header fijo, hijo del body, y=0 al hacer scroll, fondo rgb(8,11,16), cero overflow horizontal. A 390×844, altura de header/espaciador66px, cero overflow, drawer abre y cierra y enfoca su título. Capturas en `ipad-header-root/`. El navegador de pruebas no tiene la interfaz de Safari en iPad: pendiente validación del usuario en el dispositivo real.

## Comparación con Luromi: extensión real bajo Safari — 2026-11-24

El usuario confirmó que el header fijado al body tampoco resolvió el sangrado en iPad y propuso comparar Luromi. Se leyó su implementación local en /Users/luisgil/Developer/LuromiStudio/luromi-website/src/public/css/luromi-hero.css y se confirmó la misma regla en el CSS público https://luromistudio.com.mx/css/luromi-hero.css?v=tablet-hero-2 . Luromi extiende el propio header fijo hacia y=-120px y compensa con +120px de padding superior bajo `@media(pointer:coarse)`, dentro del soporte de safe-area. El portfolio adopta esa misma extensión, conservando su padding visible y su color. El ResizeObserver reserva ahora el rect.bottom visible (no la altura total, que incluye la zona fuera del viewport).

Se verificó la geometría con una ruta Astro temporal que fuerza la variable de extensión a120px; la ruta se eliminó antes de compilar/publicar. A1194×834: header y=-120, bottom72, control y12, espaciador72, overflow0. A390×844: bottom66, espaciador66, control y12, overflow0. Drawer abre con y0/foco en su título y cierra. La ruta normal con puntero fino mantiene extensión0 y overflow0. Capturas en `luromi-safari-backing/`. Esto verifica compensación de layout, no emula Safari ni confirma aún el resultado físico de iPad.

## Diagnóstico físico pendiente y eliminación del filtro de puntero — 2026-11-24

El usuario informa que tampoco funcionó la extensión de Luromi. Se detecta que estaba condicionada a `pointer:coarse`, que describe el dispositivo principal de entrada y no el tipo de equipo (https://www.w3.org/TR/mediaqueries-4/#pointer). Se elimina la dependencia del puntero: todos los navegadores que soportan safe-area reciben la misma extensión compensada. No está confirmado que ese filtro fuese la causa en el iPad del usuario.

Se añade diagnóstico explícitamente optativo mediante `?safari-debug=1`: muestra revisión2026-11-24-b, extensión computada, rect del header, color/posición, flags de puntero, puntos táctiles, viewport visual/layout y espaciador. Lecturas locales, sin telemetría ni almacenamiento; cierre desconecta observadores/listeners. Sin ese parámetro no se crea interfaz de diagnóstico.

CUA:1194×834 con pointer:fine y coarse:false aplica extensión120, header y=-120/bottom72/height192, espaciador72, incluso tras scroll334.390×844 conserva bottom66/espaciador66/overflow0. Cerrar elimina el panel; página normal sin diagnóstico. Captura `safari-diagnostic/ipad-debug.jpg`. No equivale a Safari nativo de iPad: se pide versión de iPadOS y comparación actual con Luromi, pendientes de respuesta. Build13rutas y diffcheck pasan.

## Recorte explícito del contenido fuera del viewport — 2026-11-24

La captura del dispositivo con scroll379 demuestra: extensión120, y=-120/bottom72/height192, fondo opaco y puntero coarse:true; aun así Safari27.2 dibuja el título/retrato bajo su interfaz. Quedan descartadas la falta de activación y la falta de fondo; no se atribuye el problema al puntero. Las reglas de tinte y extensión por sí solas fueron insuficientes en ese dispositivo.

Se añade recorte rectangular al wrapper del contenido para iOS WebKit (soporte de -webkit-touch-callout), con activación explícita safari-clip-test=1 para QA en otros motores. El borde superior se calcula como max(0,scrollY-origenDelWrapper); con ello el contenido por encima del viewport deja de pintarse, manteniendo scroll nativo, geometría, anchors, header, preloader y drawer fuera del recorte. Actualizaciones acotadas por rAF; ResizeObserver del espaciador vuelve a medir el origen después del ajuste de altura del header. Referencia normativa sobre recorte sin alteración de geometría: https://www.w3.org/TR/css-masking-1/#clipping-paths . Este es un enfoque diferente al muestreo de color de Safari; todavía requiere confirmación del dispositivo real.

CUA con activación forzada:1210×777, scroll388.5, recorte316.5, inicio de pintura y0;390×844, scroll506.5, recorte440.5, inicio de pintura y0 y overflow0. Regreso al top:scroll0/inset0. Anchor Experiencia llega a y120.15 con header bottom72; drawer móvil abre en y0 y cierra. Se detectó diferencia6px durante resize y se corrigió observando el espaciador, no el header; comprobación posterior da inicio y0 en ambos tamaños. Diagnóstico revisiónc muestra estado y forma del recorte. Capturas en safari-content-clip/. Build13rutas pasa. No se midió rendimiento físico ni se reprodujo la interfaz nativa de iPad; esas limitaciones siguen abiertas.

## Recorte sincronizado con el scroll nativo — 2026-11-24

El dispositivo confirma que la revisiónc tapa al detenerse pero se retrasa durante el gesto. Se sustituye la actualización JS de clip-path, en motores con animation-timeline:scroll(root block), por dos transformaciones opuestas vinculadas al scroll raíz. La viewport exterior se traslada +scroll para mantener su overflow:clip a la altura del header; main se traslada -scroll, preservando la posición normal del contenido. Un límite exterior sin transformar y overflow:clip evita que la traslación expanda el rango del documento. JS solo mide el rango al cambiar dimensiones/contenido: no escucha scroll en esta vía. El fallback de motores anteriores conserva su limitación asíncrona conocida, con un margen oculto bajo el header. El recorte estructural permanece con movimiento reducido porque sus dos desplazamientos se cancelan visualmente.

Fuentes: WebKit documenta animaciones de scroll threaded en https://webkit.org/blog/17862/webkit-features-for-safari-26-4/ ; clip-path en compositor tiene limitaciones independientes, https://bugs.webkit.org/show_bug.cgi?id=185816 . Por eso se usan transformaciones y recorte overflow fijo, sin prometer aceleración de clip-path.

CUA con activación forzada en Chromium: a1210px el borde permanece y72 con scroll388.5 y matrices+388.5/-388.5, altura documental7213/rango6436 constante. Anchor Experiencia y120.15 con header72. A390px, drawer/anchor Formación funcionan y cierran; footer alcanza y843.85 en viewport844; borde65.5–65.75 con header66 (redondeo subpixel), sin overflow. Regreso al inicio deja ambas matrices en identidad. `safari-native-clip/scroll-trace.json` contiene el cambio de posición y muestras estables, no un registro continuo de inercia. Las pruebas de unidad verifican ausencia de callbacks/frames JS para scroll nativo, actualización de rango al crecer contenido, elegibilidad y fallback. Preloader pasa.

Revisión independiente: conservar implementación, sin defectos materiales sustentados por esa evidencia; falta validación física. No se afirma que hayan pasado inercia, reversión rápida, redimensionamiento de chrome ni movimiento reducido en iPad. Diagnóstico revisiónd muestra modo native y ambas matrices.
