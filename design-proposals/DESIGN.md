---
name: Luis Gil and Tavi — adopted design system
description: Approved portfolio and Tavi compositions, with MiniTools adding a petroleum/coral wave identity and shared light/dark behavior locally.
colors:
  portfolio-teal: "#146370"
  portfolio-teal-hover: "#0d4d58"
  portfolio-sidebar: "#145867"
  portfolio-sidebar-hover: "#216d7c"
  portfolio-paper: "#f2f7f7"
  portfolio-ink: "#193c43"
  portfolio-muted: "#526e74"
  portfolio-soft: "#e4eff0"
  portfolio-line: "#c9dddd"
  portfolio-about: "#d9ebed"
  portfolio-coral: "#f5b3a4"
  portfolio-dark-page: "#111f24"
  portfolio-dark-ink: "#e7f1f2"
  portfolio-dark-muted: "#a8bec3"
  portfolio-dark-surface: "#21343b"
  portfolio-dark-soft: "#223b43"
  portfolio-dark-line: "#36535b"
  portfolio-dark-accent: "#8cd5dc"
  portfolio-dark-button: "#216c79"
  portfolio-dark-button-hover: "#2c8290"
  portfolio-dark-sidebar: "#0e3b46"
  portfolio-dark-sidebar-hover: "#195564"
  portfolio-dark-about: "#24434b"
  portfolio-dark-coral: "#593b35"
  tavi-blue: "#1759d0"
  tavi-blue-hover: "#1047ae"
  tavi-pale-blue: "#eaf2ff"
  tavi-paper: "#ffffff"
  tavi-ink: "#202e42"
  tavi-muted: "#53667f"
  tavi-soft: "#f3f7fd"
  tavi-line: "#dce4ef"
  tavi-selected: "#dceaff"
  tavi-dark-surface: "#18212e"
  tavi-dark-soft: "#1c293b"
  tavi-dark-page: "#101923"
  tavi-dark-ink: "#eef3fb"
  tavi-dark-muted: "#aebed3"
  tavi-dark-line: "#34445a"
  tavi-dark-accent: "#84b5ff"
  tavi-dark-button: "#2465cb"
  tavi-dark-button-hover: "#3378e4"
  tavi-dark-tint: "#1c304b"
  tavi-dark-opening: "#143b78"
  tavi-dark-selected: "#284970"
  demo-surface: "#fff"
  demo-toolbar: "#f1f2f4"
  demo-sidebar: "#f7f8fa"
  demo-line: "#dfe2e7"
  demo-ink: "#293441"
  demo-muted: "#5d6a78"
  demo-selected: "#0867ce"
  demo-send-hover: "#0054b0"
  demo-dark-surface: "#242323"
  demo-dark-toolbar: "#302e2e"
  demo-dark-sidebar: "#292727"
  demo-dark-line: "#454141"
  demo-dark-ink: "#f0eded"
  demo-dark-muted: "#b5b0b0"
  demo-dark-input: "#201f1f"
  demo-dark-selected: "#0061c7"
  demo-success: "#287944"
  demo-error: "#b83229"
  demo-dark-success: "#9cdda8"
  demo-dark-error: "#ffb2a9"
  focus-orange: "#e05116"
  minitools-stage: "#091d29"
  minitools-wave: "#146b79"
  minitools-wave-highlight: "#e99381"
  minitools-hero-action: "#276ce0"
  minitools-hero-action-hover: "#1c5dcc"
  minitools-compact: "#07090d"
  minitools-native-surface: "#000"
  minitools-native-bar: "#000"
  minitools-native-ink: "#f2f4f8"
  minitools-native-muted: "#b8c5d6"
  minitools-native-selected: "#ffffff24"
  minitools-native-input: "#ffffff0d"
  minitools-native-input-line: "#ffffff26"
  minitools-timer-orange: "#ff9f0a"
typography:
  minitools-display:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(36px, 4.2vw, 58px)"
    fontWeight: 650
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  minitools-headline:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(30px, 3.1vw, 43px)"
    fontWeight: 600
    lineHeight: 1.09
  minitools-native-control:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "12px"
    lineHeight: 1.5
  portfolio-display:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(36px, 4.1vw, 58px)"
    fontWeight: 550
    lineHeight: 1.13
    letterSpacing: "-0.035em"
  portfolio-body:
    fontFamily: "Sora, sans-serif"
    fontSize: "15px"
    lineHeight: 1.65
  portfolio-label:
    fontFamily: "Sora, sans-serif"
    fontSize: "12px"
    lineHeight: 1.5
  tavi-display:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(38px, 4.5vw, 61px)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  tavi-body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "17px"
    lineHeight: 1.7
  tavi-label:
    fontFamily: "Figtree, sans-serif"
    fontSize: "13px"
    lineHeight: 1.5
  demo-control:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "11px"
    lineHeight: 1.5
  tavi-code:
    fontFamily: "ui-monospace, monospace"
    fontSize: "10px"
    lineHeight: 1.7
rounded:
  minitools-native-control: "6px"
  minitools-plugin: "14px"
  minitools-island: "0 0 24px 24px"
  minitools-native-tab: "20px"
  minitools-compact: "22px"
  input: "4px"
  demo-control: "5px"
  compact-control: "7px"
  action: "8px"
  screenshot: "9px"
  demonstration: "12px"
  project: "16px"
spacing:
  inline: "10px"
  compact: "12px"
  control: "14px"
  gallery-gap: "24px"
  section-inset: "30px"
components:
  minitools-hero-action:
    backgroundColor: "{colors.minitools-hero-action}"
    textColor: "{colors.tavi-paper}"
    rounded: "{rounded.action}"
    padding: "13px 20px"
  minitools-hero-action-hover:
    backgroundColor: "{colors.minitools-hero-action-hover}"
    textColor: "{colors.tavi-paper}"
  minitools-native-tab-selected:
    backgroundColor: "{colors.minitools-native-selected}"
    textColor: "{colors.tavi-paper}"
    rounded: "{rounded.minitools-native-tab}"
    padding: "6px 10px"
    typography: "{typography.minitools-native-control}"
  minitools-native-input:
    backgroundColor: "{colors.minitools-native-input}"
    textColor: "{colors.tavi-paper}"
    rounded: "{rounded.minitools-native-control}"
    padding: "8px 10px"
    typography: "{typography.minitools-native-control}"
  minitools-plugin:
    backgroundColor: "{colors.tavi-dark-surface}"
    textColor: "{colors.tavi-dark-ink}"
    rounded: "{rounded.minitools-plugin}"
    padding: "24px"
  portfolio-project-link:
    backgroundColor: "{colors.tavi-paper}"
    textColor: "{colors.portfolio-ink}"
    rounded: "{rounded.action}"
    padding: "11px 15px"
    typography: "{typography.portfolio-label}"
  portfolio-project-link-hover:
    backgroundColor: "{colors.portfolio-teal}"
    textColor: "{colors.tavi-paper}"
  portfolio-filter-selected:
    backgroundColor: "{colors.portfolio-about}"
    textColor: "{colors.portfolio-teal}"
    rounded: "{rounded.compact-control}"
    padding: "9px 12px"
  portfolio-contact:
    backgroundColor: "{colors.portfolio-teal}"
    textColor: "{colors.tavi-paper}"
    rounded: "{rounded.action}"
    padding: "12px 17px"
    typography: "{typography.portfolio-label}"
  tavi-action:
    backgroundColor: "{colors.tavi-blue}"
    textColor: "{colors.tavi-paper}"
    rounded: "{rounded.action}"
    padding: "10px 17px"
  tavi-send:
    backgroundColor: "{colors.demo-selected}"
    textColor: "{colors.tavi-paper}"
    rounded: "{rounded.demo-control}"
    padding: "7px 10px"
    typography: "{typography.demo-control}"
  tavi-send-hover:
    backgroundColor: "{colors.demo-send-hover}"
    textColor: "{colors.tavi-paper}"
  tavi-workspace:
    backgroundColor: "{colors.demo-surface}"
    textColor: "{colors.demo-ink}"
    rounded: "{rounded.demonstration}"
  tavi-capture:
    backgroundColor: "{colors.tavi-pale-blue}"
    rounded: "{rounded.project}"
    padding: "38px 38px 19px"
---

# Design System: Luis Gil and Tavi

## Overview

**Creative North Star: "Tangible software, two independent worlds"**

The approved portfolio and Tavi compositions now serve the production routes in the local implementation. The portfolio is an artifact-led gallery with a petroleum teal identity; Tavi is a clear technical workspace held inside a broad blue field. Both use real software evidence and purposeful interaction to make the work understandable.

This existing documentation boundary is retained for provenance, but its current authority covers /, /es/, /apps/tavi/ and the Tavi document pages. Legacy proposal routes render the shared adopted components. Shared semantic light/dark tokens and language controls connect these surfaces without erasing their distinct identities.

MiniTools at /apps/minitools/ retains Figtree and shared semantic theme behavior, with a petroleum/coral wave identity for its desktop stage. Its near-black interactive island and quiet plugin catalog make everyday tools tangible with the approved Mosaico icon. This is a surface extension; it does not replace the portfolio or Tavi identity. Its approved hybrid composition is recorded in the MiniTools hybrid brief.

**Key Characteristics:**

- Two distinct palettes and type families, with shared theme and language behavior.
- Real Tavi imagery and explicitly labeled illustrative interactions.
- Quiet rounded surfaces with shadows reserved for software and device artifacts.
- English and Spanish layouts with visible keyboard focus and reduced-motion support.

### Historical direction and adoption

The original code-led replacement proposals were created at /proposals/portfolio/ and /proposals/tavi/ with concept seed **423b91e6**. Their thesis was to make Luis's software tangible immediately and explain Tavi through a clearly labeled sample request. The portfolio originally used a plum identity column, lavender gallery and coral experiment surfaces; Tavi used a white technical workspace in a broad blue field. The original isolation from production and permanent-plum language described that proposal stage and are superseded by the user's approval to adopt both designs, replace purple, and add dark mode. Preserve this history as provenance, not as active token authority.

The approved composition remains: a fixed identity column with a screenshot-led portfolio gallery, and Tavi's compact introduction above an interactive workspace. In the portfolio gallery, Tavi and MiniTools now lead as consecutive full-width product features; the smaller experiments follow them. Their previews share the same horizontal alignment, aspect ratio, rendered dimensions and caption placement at each breakpoint. MiniTools' island illustration is explicitly labeled as a preview and leads to the interactive landing-page demo. The Tavi demo follows the native folder, request, environment, configuration and response structure using Luis Gil sample data. This was implemented directly in code; no raster composition was generated. Local adoption is complete in the source, but this record does not claim publication or a Git push.

### Asset provenance and source of truth

Tavi's user-supplied mark (`public/images/tavi/tavi-mark.png`) and screenshots (`macos-response.jpg`, `request-response.jpg`) are reused unmodified. The native macOS screenshot is the structural reference for the web demo. CSS clipping and shadows frame the assets without editing their pixels. Sora and Figtree are bundled variable TTFs from Google Fonts in `public/fonts/proposals/`, with their original OFL license files. NextUp and Umbral representations are labeled HTML demonstrations. No stock or generated imagery was introduced in the original portfolio/Tavi adoption.

MiniTools uses the approved Mosaico icon in `public/images/minitools/app-icon-mosaic-light.png` and `app-icon-mosaic-dark.png`, switching with the page theme in the landing, portfolio card and favicon. The original red `app-icon.png` remains as historical source material. The current stage and notch illustration use `public/images/minitools/tidal-wallpaper.png`, preserving the abstract waves in petroleum/coral colors. The original generated `public/images/minitools/blue-wallpaper.png`, its embedded provenance and `.impeccable/blue-wallpaper.prompt.txt` remain historical source material. All island controls, text and display illustrations remain semantic HTML/SVG. Neither the decision comps nor the reconstructed island are native screenshots.

Runtime semantic tokens live in `src/layouts/ProposalLayout.astro`; demo-specific tokens live in `src/components/TaviPlayground.astro`. Main surfaces are `PortfolioPage`, `TaviPage` and `TaviDocumentPage`; `TaviHeader`, `TaviFooter`, `ThemeToggle`, `SupportLinks` and `ProposalText` provide shared behavior and presentation. Bilingual document content lives in `src/data/taviDocuments.ts`. Extracted frontmatter describes current values; runtime CSS remains the implementation source. Primitive values belong here; the sidecar records extensions and previews.

## Colors

### Primary

Petroleum teal anchors the portfolio identity column and actions. Dark mode uses a deeper sidebar, lighter text accent and a distinct filled-button teal. Tavi blue establishes its opening field and actions; dark mode uses a deeper opening field and lighter link accent. The demo has its own native-style selection blue and neutral surfaces.

### Secondary

Coral distinguishes NextUp; sage distinguishes Umbral. Both receive darker project fields in dark mode. Teal-tinted about and filter surfaces bind the portfolio gallery together. Tavi pale blue frames screenshots and privacy content, becoming a muted blue surface at night.

### Neutral

Each identity has separate page, surface, soft, ink, muted and line roles. Never substitute a bright text accent for a filled action: dark mode defines separate button tokens to preserve white-label contrast. The demo follows the same theme selection but uses warm graphite surfaces and syntax colors modeled on the native app. Success and error colors always accompany HTTP status text.

Frontmatter component variants describe the default light state. Runtime `--page`, `--surface`, `--soft`, `--ink`, `--muted`, `--line`, `--accent`, `--button`, `--button-hover` and identity-specific fields resolve the matching dark states through `html[data-theme=dark]`. Demo `--app-*` variables resolve locally within the playground.

**The Independent Worlds Rule.** Keep petroleum teal for the portfolio and blue for Tavi; share semantic behavior and components without flattening their identities.

MiniTools inherits the existing semantic light/dark page tokens. Its wave wallpaper uses petroleum base #091d29, teal #146b79 and coral highlight #e99381; the island retains fixed dark native surfaces in either page theme. The selected/hovered daily activity rail uses #164653f2/#1b5060f2. Its hero action retains the dedicated cobalt pair, and native control colors remain local to the island. The MiniTools plugin component token describes its default dark state; runtime semantic tokens resolve its light state.

## Typography

Sora is the portfolio's display and body family; Figtree is Tavi's marketing and document family. Both use local variable fonts with `font-display: swap`. The native-like demo uses the system UI stack; response JSON, headers and endpoint fragments use monospace.

The portfolio identity name is separate from the headline hierarchy (72px, weight 650, line-height 0.91 on desktop); project titles range from 22px to 35px. At its mobile breakpoint, the intro becomes 35px and identity name 27px. Tavi's opening headline becomes 37px on mobile; response code becomes 11px. Tavi documents use a display clamp of 40px–62px and readable body copy at 16px/1.8, constrained to 72ch. Preserve deliberate bilingual headline breaks through `ProposalText` and `white-space: pre-line`.

MiniTools uses the extracted display/headline roles above; section headlines become 33px at 700px. Intro copy is 17px/1.5, becoming 15px on mobile; section body copy is 16px/1.7. The island uses system UI controls, a 22px track title (17px on narrow screens) and tabular numerals for timer and playback values. Preserve bilingual deliberate line breaks.

## Layout

Portfolio uses a fixed 248px identity column and a main region capped at 1680px, with horizontal insets of `clamp(28px, 4.2vw, 74px)`. The gallery has two columns and a 24px gap; Tavi spans both. At 1100px the identity column becomes 210px. At 720px it becomes an in-flow header with visible horizontal navigation, one-column projects and 20px main insets.

Tavi's header is capped at 1320px; the opening centers on 1160px of content. The native-like demo uses 135px folder and 157px request columns beside a flexible editor; configuration and response split the editor. At 1100px the side columns become 105px and 125px; at 850px folders become a horizontal row; at 550px requests become a row and configuration/response stack. Controls remain available as the workspace reflows. Marketing sections use 100px desktop and 60px mobile vertical spacing.

Tavi header navigation wraps to its own visible row at 760px. Document pages share this header and footer; their 1196px container has a 220px sticky contents column, 60px gap and 72ch article. Below 800px the contents becomes a wrapping in-flow navigation above the article. The footer includes the same support actions across product and document pages.

MiniTools caps the header at 1440px, section containers at 1240px and the interactive demo at 1120px. Desktop demo columns are 190px and a flexible island, separated by 34px. At 850px the daily activity rail becomes a horizontal row; at 550px its secondary labels disappear and the timer panel becomes one column. The catalog moves from three columns to two at 700px; other paired content stacks at that breakpoint. Header navigation wraps visibly at 700px, and the redundant header download disappears at 1000px. Page insets step from 40px to 28px to 20px in the opening and 22px in mobile sections. Review captures cover 1440px, 1194px and 390px; these are evidence sizes, not CSS breakpoints.

## Elevation & Depth

Tonal fields provide most separation. Shadows emphasize tangible artifacts: the portfolio Tavi screenshot, NextUp example, Umbral device, interactive workspace and native product screenshot. Exact shadow declarations are recorded in the sidecar. The NextUp example drops its shadow in dark mode. Ordinary actions and navigation remain flat; the dark workspace uses explicit surface and divider contrast.

MiniTools preserves dimensional waves beneath a softly lifted island through the petroleum/coral tidal wallpaper. The island shadow is recorded in the sidecar; plugin cards remain flat with semantic borders. Wallpaper renders as a cover background, centered on desktop and positioned at 41% center below 700px; the physical/virtual illustration reuses the same asset.

## Shapes

Rounded rectangles progress from compact inputs and native-like tabs to actions, screenshots and project surfaces. The demo uses tighter corners within a 12px outer workspace. Screenshots preserve aspect ratio. Umbral's illustrative e-paper silhouette retains its dark device frame and slight rotation (-5deg). Inline SVGs use unfilled strokes, round caps and joins.

MiniTools uses one native-derived SVG shell with concave upper shoulders and rounded lower corners across its four demonstration states, compact hover views and timer alert. Plugin cards use the dedicated plugin radius; their icon tiles use 11px corners. MiniTools outline SVGs, including task deletion, share a 1.7px stroke with round caps and joins; music transport uses native-filled glyphs.

## Components

### Actions and filters

Portfolio project links keep a white surface and dark teal label in both modes, using the active theme's filled action on hover. Contact and Tavi availability actions use semantic button/hover tokens. Portfolio filters use `aria-pressed` with about/accent tokens. Tavi's compact Send control uses demo selection blue, darkens on hover and has disabled opacity 0.55 while simulating.

### Navigation, language and theme

Both identities expose language and theme controls. The portfolio renders light by default and Tavi renders dark, independent of system preference. Before paint, explicit choices override those defaults using independent `site-theme:portfolio` and `site-theme:tavi` keys; the former shared `site-theme` value is ignored. Accessible toggle labels describe the next action in the selected language. Language defaults to English, persists under `site-language`, supports the legacy `proposal-language` preference and initializes Spanish at /es/. Tavi privacy, terms, support and changelog share Tavi's dark default and saved preference. The skip link appears on keyboard focus.

### Native-like request workspace

Folders, request list, environment selection, variable chip, URL field, Body/Params/Headers/Auth/Scripts configuration views, and Body/Headers response views reproduce the native information hierarchy. Profile and post examples use Luis Gil. Editable parameters and JSON drive deterministic simulated output, including visible success, missing-user and invalid-body states. Send and the Command/Control+Enter shortcut run locally; no network requests or credentials are used. HTTP status is exposed through a live status region; syntax coloring and line numbers aid scanning. Keep the local simulation label visible.

### Project and product evidence

Project cards combine real screenshots or labeled interactions with concise copy. NextUp uses native checkboxes; supporting copy and FAQs use native `details`. Tavi's platform switch updates screenshot, alt text and caption. Privacy, terms, support and changelog share a blue introduction, readable sections, contents links and contact navigation. Support actions target exactly https://buymeacoffee.com/luisgil and https://ko-fi.com/luisgildev.

### Focus and motion

Interactive elements, including inputs and textareas, use the shared orange focus outline (3px with 5px offset). FAQ chevrons rotate 180 degrees with a 0.18s transform transition. Reduced motion disables transitions and animation and changes smooth anchor scrolling to automatic. Motion communicates expansion and navigation.

### MiniTools island and catalog

The daily Listen/Focus/Plan rail selects the same Music/Timers/ToDo panels as the native tab bar. The teaching selector retains closed, activity, concurrent music/timer and expanded views of one shell, and adds Compact open; no separate compact preview sits above expanded mode. Tabs expose selected state and support arrows, Home and End. Synthetic playback and timers start only through user action; closing/reopening preserves activity, the detached timer bubble opens compact timer controls, and full expansion selects Timers. Escape/close restores focus to the compact opener outside a completion alert. Task toggles preserve checkbox focus; deletion focuses an adjacent delete control or the empty-list input. Reset restores sample state. Keep the visible web-simulation disclosure and polite status announcements; reduced motion stops the waveform.

The black shell measures 198×33px closed and 282×33px with activity. Concurrent music occupies 246px plus a detached 24px timer bubble within a 288px web hit layout. Expanded content is 740px wide plus 10px shoulders on each side (760px overall), with a 375px height and 35px inner top inset (33px calibration plus 2px). A stable 375px stage prevents jumps between states. Music uses native missing-artwork blue-purple fallback art at 154px, a 44px note on desktop and 34px on mobile, an album caption below, synchronized sample track/artist text, an elapsed–slider–remaining row, filled transport with a prominent 34px play control, favorite toggle and audio-output information explaining the simulation. Parent selectors `.album :global(svg)` and `.mini-art :global(svg)` preserve the intended note sizes across Astro child scopes; the compact note is 13px inside a 20px tile. The orange timer ring remains 126px with elapsed progress and circular start/pause/reset controls. Mobile reflows the full player and actions as a responsive web adaptation.

Compact music is 440×213px with 58px artwork and a 44px note; compact timers are 400×103px with 40px pause/cancel controls and 29px orange time. Completion opens a pinned 450×127px alert with Repeat/Finish controls and an orange 25px title (21px mobile). `.timer-alert>div>span` styles only the gray subtitle, preserving the translated title hierarchy. Widths cap at the available viewport. Mouse hover waits 120ms and exits after 220ms; focus preserves the view, click/Enter/touch pins it, and explicit close/Escape supports dismissal outside alerts. Width interpolation is removed to keep hit areas stable. Pointerdown cancels queued hover, and a first-click origin guard pins the intended view when a newly revealed Close control overlaps its former trigger; keyboard activation bypasses this guard. The native pressed-gesture control blocking is the reference, with intent timing and origin rectangles as web adaptations.

Music never produces real audio. Alarm sound is off by default; only the user's toggle gesture creates/resumes Web Audio for optional synthetic timer tones. A three-second test timer demonstrates completion. Tones stop on dismiss/repeat, sound off, reset or page exit and have a 10-second cap. Browser audio blocking keeps the visual alert functional. This remains sample data, one timer and three tabs, with no Mac/system access.

The physical/virtual comparison changes device and island geometry. Physical mode preserves a fixed camera cutout as the island expands around it; virtual mode removes the cutout and shows the island on a notchless display. The teaching illustration includes notchless MacBooks and desktop displays while retaining macOS 13+ and Apple silicon requirements. Its controls do not operate the camera or native application.

MiniTools has its own dark initial default and `site-theme:minitools` persistence key; an explicit saved light or dark choice overrides that default. It inherits shared language, focus, reduced-motion and support behavior. Catalog cards are descriptive articles with a Coming soon badge, not unavailable download controls. Installation offers the verified versioned release, latest-release link and a copyable Homebrew command with success/failure feedback.

The latest compact-hover/alert refinement is scoped SHIP in `.impeccable/review/minitools/hover-alert-verdict.md`, supported by `hover-alert-packet.md`. Root browser checks passed actual mouse and separate Enter flows, 1440px/390px layouts, EN/ES and both themes, with zero overflow and no console warnings/errors. The sole visual P2 was the broad alert span selector; its correction passed the reported 13-route build and diff check at 23:14. The reviewer inspected source and captures, without independently executing browser/build checks. The final mobile alert image supports the title fix; the replacement desktop JPEG crops the activity rail rather than the alert, so desktop confirmation remains root-attributed. The light capture predates the artwork note correction; mobile music is viewport-cropped. Audible output was not heard or verified. Earlier four-state and native-fidelity SHIP reviews remain historical evidence. No new browser QA, visual audit or publication is implied by this documentation sync.

## Do's and Don'ts

- Do preserve the approved compositions and the portfolio's petroleum teal identity.
- Do reuse the real Tavi mark and screenshots and label illustrative demonstrations.
- Do preserve English and Spanish content, light and dark states, and keyboard access.
- Do use response text as well as color to distinguish success and error.
- Don't restore the superseded purple portfolio identity.
- Don't imply that the local request simulation is a live API or the native application.
- Don't invent customers, usage statistics, prices, testimonials, or release claims.
