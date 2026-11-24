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
