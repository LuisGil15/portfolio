---
name: Luis Gil and Tavi — adopted design system
description: Approved portfolio and Tavi compositions, adopted locally across production routes with shared light/dark behavior.
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
typography:
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

**Key Characteristics:**

- Two distinct palettes and type families, with shared theme and language behavior.
- Real Tavi imagery and explicitly labeled illustrative interactions.
- Quiet rounded surfaces with shadows reserved for software and device artifacts.
- English and Spanish layouts with visible keyboard focus and reduced-motion support.

### Historical direction and adoption

The original code-led replacement proposals were created at /proposals/portfolio/ and /proposals/tavi/ with concept seed **423b91e6**. Their thesis was to make Luis's software tangible immediately and explain Tavi through a clearly labeled sample request. The portfolio originally used a plum identity column, lavender gallery and coral experiment surfaces; Tavi used a white technical workspace in a broad blue field. The original isolation from production and permanent-plum language described that proposal stage and are superseded by the user's approval to adopt both designs, replace purple, and add dark mode. Preserve this history as provenance, not as active token authority.

The approved composition remains: a fixed identity column with a screenshot-led portfolio gallery, and Tavi's compact introduction above an interactive workspace. The demo now follows the native folder, request, environment, configuration and response structure using Luis Gil sample data. This was implemented directly in code; no raster composition was generated. Local adoption is complete in the source, but this record does not claim publication or a Git push.

### Asset provenance and source of truth

Tavi's user-supplied mark (`public/images/tavi/tavi-mark.png`) and screenshots (`macos-response.jpg`, `request-response.jpg`) are reused unmodified. The native macOS screenshot is the structural reference for the web demo. CSS clipping and shadows frame the assets without editing their pixels. Sora and Figtree are bundled variable TTFs from Google Fonts in `public/fonts/proposals/`, with their original OFL license files. NextUp and Umbral representations are labeled HTML demonstrations. No stock or generated imagery was introduced.

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

## Typography

Sora is the portfolio's display and body family; Figtree is Tavi's marketing and document family. Both use local variable fonts with `font-display: swap`. The native-like demo uses the system UI stack; response JSON, headers and endpoint fragments use monospace.

The portfolio identity name is separate from the headline hierarchy (72px, weight 650, line-height 0.91 on desktop); project titles range from 22px to 35px. At its mobile breakpoint, the intro becomes 35px and identity name 27px. Tavi's opening headline becomes 37px on mobile; response code becomes 11px. Tavi documents use a display clamp of 40px–62px and readable body copy at 16px/1.8, constrained to 72ch. Preserve deliberate bilingual headline breaks through `ProposalText` and `white-space: pre-line`.

## Layout

Portfolio uses a fixed 248px identity column and a main region capped at 1680px, with horizontal insets of `clamp(28px, 4.2vw, 74px)`. The gallery has two columns and a 24px gap; Tavi spans both. At 1100px the identity column becomes 210px. At 720px it becomes an in-flow header with visible horizontal navigation, one-column projects and 20px main insets.

Tavi's header is capped at 1320px; the opening centers on 1160px of content. The native-like demo uses 135px folder and 157px request columns beside a flexible editor; configuration and response split the editor. At 1100px the side columns become 105px and 125px; at 850px folders become a horizontal row; at 550px requests become a row and configuration/response stack. Controls remain available as the workspace reflows. Marketing sections use 100px desktop and 60px mobile vertical spacing.

Tavi header navigation wraps to its own visible row at 760px. Document pages share this header and footer; their 1196px container has a 220px sticky contents column, 60px gap and 72ch article. Below 800px the contents becomes a wrapping in-flow navigation above the article. The footer includes the same support actions across product and document pages.

## Elevation & Depth

Tonal fields provide most separation. Shadows emphasize tangible artifacts: the portfolio Tavi screenshot, NextUp example, Umbral device, interactive workspace and native product screenshot. Exact shadow declarations are recorded in the sidecar. The NextUp example drops its shadow in dark mode. Ordinary actions and navigation remain flat; the dark workspace uses explicit surface and divider contrast.

## Shapes

Rounded rectangles progress from compact inputs and native-like tabs to actions, screenshots and project surfaces. The demo uses tighter corners within a 12px outer workspace. Screenshots preserve aspect ratio. Umbral's illustrative e-paper silhouette retains its dark device frame and slight rotation (-5deg). Inline SVGs use unfilled strokes, round caps and joins.

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

## Do's and Don'ts

- Do preserve the approved compositions and the portfolio's petroleum teal identity.
- Do reuse the real Tavi mark and screenshots and label illustrative demonstrations.
- Do preserve English and Spanish content, light and dark states, and keyboard access.
- Do use response text as well as color to distinguish success and error.
- Don't restore the superseded purple portfolio identity.
- Don't imply that the local request simulation is a live API or the native application.
- Don't invent customers, usage statistics, prices, testimonials, or release claims.
