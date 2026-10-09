---
version: 1
slug: "src-pages-apps-minitools-index-astro"
primary_target: "src/pages/apps/minitools/index.astro"
related_targets: ["src/components/MiniToolsPage.astro","src/components/MiniToolsIsland.astro","src/components/MiniToolsNotch.astro"]
---

# MiniTools landing

Mode: Persuade. Add /apps/minitools/ and integrate its release into the existing portfolio. User approved combining daily-flow and island-first on October 8, 2026: visible content and a playable island together. Both decision images remain critique references, not literal screenshots of the native app. The requested combination supersedes a single-comp selection; implementation is a semantic hybrid, not a claim of matching either raster pixel for pixel. No publication authorized.

## Direction contract

THESIS: Small tools become understandable by using the island while their everyday purpose stays visible. Refuse a screenshot-only product hero.

OWN-WORLD: Existing Figtree and blue product world, dark navy desktop stage, black native island and quiet plugin storefront. Real red MiniTools icon is retained; invented comp logos and Pomodoro modes are not product truth.

STORY: Explore music, timers and tasks, understand notch-free compatibility, discover forthcoming plugins, then download the actual Mac release.

FIRST VIEWPORT: Compact navigation; centered headline and download; Listen/Focus/Plan rail beside one interactive island with an explicit four-state teaching selector. Closed, activity, concurrent music/timer and expanded are mutually exclusive shell states. Simulation notice visible. Music, timers and task controls work locally; synthetic playback/timers start only through user action. No autoplay.

FORM: User-directed combination of candidate 2 daily-flow and candidate 1 island-first from seed 767453ac; critique references .impeccable/mocks/decision/minitools-daily-flow.png and minitools-island-first.png. Content and controls reflow together on tablet and phone.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Requirements: EN default/ES; independent light/dark preference, dark default as approved comps; macOS13+ Apple silicon; with/without notch; plugins coming soon with no private links; public release download; support links. Synthetic demo, no system access or audio. Preserve other routes.

## Implementation and review record — 2026-10-08

Implemented the approved semantic hybrid at /apps/minitools/ and integrated its real icon, availability and route into the portfolio and app registry. MiniTools inherits Figtree, the existing blue semantic theme and shared EN/ES behavior, defaults to dark, and persists theme independently under site-theme:minitools; explicit saved light/dark choices override the initial default. Source components are MiniToolsPage, MiniToolsIsland, MiniToolsNotch and MiniToolsIcon. Durable extracted tokens and component rules extend design-proposals/DESIGN.md and its sidecar; portfolio/Tavi authority is retained.

The opening combines the intro and download with the daily activity rail and playable Music/Timers/ToDo island. Following sections contain core feature copy, qualified with/without-notch illustrations, six forthcoming plugin cards, v1.0.3 and Homebrew installation, FAQ and existing support links. The generated wallpaper is public/images/minitools/blue-wallpaper.png, with its exact prompt in .impeccable/blue-wallpaper.prompt.txt; it and the real app icon carry embedded provenance. Generated imagery supplies background material only; interface and copy remain semantic, and the island is explicitly a local simulation.

The finish reviewer requested four fixes: wallpaper depth, task keyboard focus retention, album/track synchronization and SVG delete icon consistency. The same reviewer's corrective verdict is scoped SHIP for those four corrections, with no batch regression evident in reviewed screenshots/source. Evidence is in .impeccable/review/minitools/verdict.md and fix-evidence.md. Developer browser checks cover 1440px, 1194px and 390px with no horizontal overflow; keyboard behavior was developer-tested and reviewer-inspected in source, not independently browser-tested by the reviewer. Build passed for 13 routes; raster provenance scan found two rasters with none missing provenance. Main-agent home/Tavi regression checks passed.

The original single-comp build gates remain unverified. The user's hybrid approval is valid direction, but there is no measured pixel-match claim and the historical phases are not retroactively completed. This documentation records current source and scoped review evidence only. No push, deployment or publication is recorded.

## Native-fidelity and four-state correction — 2026-10-08

The approved wallpaper, Figtree landing typography, daily-flow rail, page hierarchy, plugin catalog and current icon are preserved. One black shell with concave upper shoulders now has four mutually exclusive states: closed 198×33px, activity 282×33px, concurrent music 246px plus a detached 24px timer bubble within a 288px web hit layout, and expanded 740px content plus 10px shoulders per side (760px overall). Expanded height is 375px with a 35px inner top inset (33px calibration plus 2px); a stable 375px stage avoids jumps. Expanded mode has no duplicate compact preview. The explicit teaching selector sits outside the simulated app.

Music uses native missing-artwork blue-purple fallback art at 154px, with a 44px note on desktop and 34px on mobile, album caption below, synchronized sample track/artist text, elapsed–slider–remaining row, filled transport with a prominent 34px play control, favorite toggle and audio-output information explaining the simulation. `.album :global(svg)` and `.mini-art :global(svg)` correct Astro child SVG scoping; the compact note is 13px inside its 20px tile. Synthetic playback/timers start only through user action; collapse/open preserves activity, the bubble opens Timers, and Escape/close restores focus to the compact opener. Reduced motion stops the waveform. The timer retains its 126px orange elapsed-progress ring and circular controls; mobile reflows the full player and actions. Keep the visible sample-data disclosure.

The interactive physical/virtual comparison changes actual display geometry. Physical mode keeps its fixed camera cutout above the expanding island; virtual mode has no cutout and shows the island at the top of a notchless display. Copy includes notchless MacBooks and desktop displays while preserving macOS 13+ and Apple silicon requirements. The camera remains untouched. Music has no audio/system integration, the timer is a single sample timer, and tasks remain local and temporary.

The four-state verdict is scoped SHIP in .impeccable/review/minitools/four-state-verdict.md, with source and proof in four-state-packet.md. The root performed browser QA at 1440px/390px and produced eight state captures, then replaced four expanded/activity desktop/mobile captures after the targeted SVG correction. Root-reported computed artwork notes are 44px desktop/34px mobile and 13px compact, with zero overflow and a passing 13-route build; interaction evidence includes EN/ES, keyboard/focus, favorite, timer, tasks and empty console warnings/errors. The reviewer inspected source and all eight captures, then the four replacements, without independently running browser checks or the build. The earlier refinement SHIP and six captures remain historical provenance. This documentation sync adds no browser QA or visual audit; no publication is authorized.
