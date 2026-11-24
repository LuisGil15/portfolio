# Luis Gil — portfolio redesign

Mode: Experience. Scope: `/`, `/es/`, and the shared `/proposals/portfolio/` preview.

## Approved direction

The user chose Braxton `index-image.html` for its impressive visual presentation and Zelio `index-2` for its developer content, then authorized development in a branch. This pins the personal sidebar / expressive large-type first viewport and the developer-oriented visitor path; no new direction tournament is needed. Implemented as original Astro components and CSS. No paid template code or demo photography is used.

## Visual system

Sora remains the locally hosted typeface. The display scales from 35–78px, weight 500, line height 1.12, tracking -0.04em. Large section headings scale from 30–48px; regular copy is 12–15px with 1.8–1.95 line height. True code labels alone use monospace.

Dark: page `#101719`, ink `#edf2e9`, muted `#aebfbb`, line `#344749`, surface `#192326`, teal accent `#b4ded0`, display lavender `#bfafe1`. Light: page `#f4f5f0`, ink `#183d41`, muted `#53696b`, line `#cbd7d2`, surface white, accent `#146370`. The personal panel stays petroleum `#112c30` with light text in either theme. Component colors resolve from the page's custom properties in `src/styles/portfolio.css`.

The fixed panel is 296px wide with 26px internal padding and a 30px outer radius. It becomes 246px at 1150px and an in-flow compact identity header at 760px. The main content retains one reading column with generous section spacing. The gallery uses two tracks, with Tavi, MiniTools and UpToDown spanning both; the remaining previews stack below 760px. App illustrations preserve their existing disclosed simulation status. Native product screenshots remain real repository assets.

The hero's original canvas wave provides a single 1200ms settling moment, followed by a static frame. It uses capped device-pixel ratio and ResizeObserver, redraws on theme changes, and cancels motion when reduced motion is requested. No scroll hijacking, continuous animation, artificial cursor or hidden entrance content. Hover arrows move 3px over 240ms only with a fine hover pointer and no reduced-motion preference. This uses Jakub's restrained production polish with Jhey's expressive geometric composition.

## Content and interactions

Visitor path: identity → hero → projects → categorized stack → experience → personal biography → contact. Both existing languages, theme persistence, project filtering with pressed state and live count, native details disclosure, illustrative task checkboxes, product links and support links remain available. Technical information comes from the existing portfolio and PRODUCT.md. No fabricated availability, employers, proficiency percentages, contribution feed or repository URLs.

Theme defaults to dark only when there is no saved portfolio preference. The optional `initialTheme` layout prop leaves other page defaults intact. Mobile navigation remains visible in a sticky header, with theme and language controls in the identity header. Focus styles and reduced-motion handling inherit the shared layout.

## Verification

Build and rendered interaction checks are recorded in the implementation handoff. Local changes do not imply publication, a push or a merge. The older `DESIGN.md` frontmatter and `.impeccable/design.json` portfolio tokens are historical; this document and the stylesheet own the replacement portfolio world. Tavi and MiniTools retain their existing authority.

## Skills section — reference-led update

The user supplied Zelio's skills section as a new reference. The existing `#stack` section now has a centered bilingual heading, eight locally hosted Devicon technology marks on the left and six semantic definition-list categories on the right. The 1px vertical divider becomes a horizontal divider at narrower widths. A static orbital motif echoes the reference without continuous motion. At 760px the categories form a single column while the marks retain four compact columns. Brand marks have visible captions and decorative empty image alt text. Astro has a light mark variant for dark surfaces. The supplied example's technologies are not treated as personal experience; categories use the repository's existing factual stack.

The user clarified that the logo rows should move, rather than remain fixed. Both rows now loop continuously in opposite directions (24s/28s), using transform-only CSS animation with duplicate groups hidden from assistive technology. Hover pauses the rows; an explicit bilingual pause/resume button freezes and resumes their current positions. Reduced motion disables animation, removes duplicate groups and the unnecessary control, and restores all original marks to a static grid. No extra animation library is required.

On desktop fine-pointer devices, technology names reveal only on tile hover, accompanied by a small logo shift and accent border. Focusing the pause control reveals all names for keyboard users. Captions remain accessible to assistive technology and stay visibly present on touch devices and at widths up to 760px. Existing reduced-motion styles remove transitions.

## Experience timeline

The user requested a timeline with company logos. `ExperienceTimeline.astro` now presents IBM (2022–present) and RESSER (2021–2022) as a reverse-chronological ordered list, with a slim connecting rail and dated nodes. Locally stored logos come from the companies' official sites; their marks retain readable fixed backgrounds across themes. Role, summary and technology stack remain visible. All eight existing responsibility bullets are preserved inside native details disclosures. The undated product collaboration remains a separate note so the timeline does not invent a period or company. At 1150px the periods move above the content on a single rail; mobile retains both logos and keyboard-operable disclosures. Both languages and themes remain supported.

## Owned studio and product

The user added Luromi Studio and Hourmeet, confirming ownership: Luromi is their freelance studio; Hourmeet is the platform they created and maintain. The generic product-collaboration note is replaced with two specific timeline-style entries, within a separate `#independent` group after dated employment. Ownership labels replace unknown dates. Each has its official local logo, first-person description and direct website link. Titles use h4 beneath the group's h3. Descriptions are bilingual; company marks have explicit image bounds so square SVGs do not expand the logo tile. Public assets and descriptions were read directly from the two user-provided websites.

## Portrait and project placement

The user supplied their portrait and then clarified that Luromi Studio and Hourmeet belong in My work. The desktop panel now uses the supplied photograph instead of the monogram, with object-fit cover and a 50%/12% focus position. Mobile shows the same photo above the hero title because the sidebar becomes a compact header. The image is a local 640px WebP (~39 KiB), generated without creative edits; the original remains untouched.

`OwnProjects.astro` now renders Hourmeet and Luromi as the first pair in the project gallery, preserving explicit ownership, role, descriptions, logos and external links. A Web & platforms filter covers both. They have been removed from the experience section, which contains only dated IBM and RESSER employment. This placement supersedes the earlier independent experience group. Default All work includes seven projects.

## Single navigation

The user requested removal of duplicated navigation. The personal panel now contains identity, portrait, role, GitHub/LinkedIn and the retained theme/language controls. The duplicate section menu and sidebar email CTA are removed. The panel now follows the viewport height with 26px outer clearance; its portrait flexes to keep the role, social icons and controls visible. Mobile retains the compact header.

The sticky top navigation owns Home → My work → Tech stack → Experience → About me, plus the email action. At tablet widths it wraps; at 760px and below the six actions form two rows of three, with 44px minimum target height. Section highlighting now follows the actual section positions and sticky-header/scroll-padding offset using a frame-throttled passive scroll listener. Hero and section anchor spacing clears the mobile header.

## Motion expansion

The user requested a more animated portfolio. This supersedes the earlier finite-wave choice: the wave now flows while the hero is visible and the document is active, capped to approximately 30 draw calls per second, with 30×92 particles and capped pixel ratio. It stops offscreen, in inactive tabs, under reduced motion or when globally paused.

Hero title lines and the portrait have a short staggered entrance. Projects enter vertically, timeline entries enter horizontally, and section headings use a smaller entrance. Their entrances re-arm after leaving view. Web Animations API and IntersectionObserver enhance already-visible content; no hidden CSS default or library is required. Fine-pointer hovers lift project cards and subtly shift app artwork/marks; keyboard navigation stays direct. The existing logo carousel remains.

A bilingual global pause/resume control joins the profile controls and persists under `site-motion:portfolio`. Global pause stops carousel motion and the wave, finishes finite entrance animations, disables hover transitions and smooth scrolling. Reduced motion overrides the running preference and disables the pause toggle because the page is already still. The original local carousel pause remains independent. All animation uses transform, opacity or a brief hero blur; no layout dimension interpolation or scroll hijacking. Mobile header selectors were repaired during the review to retain the intended compact profile header.

## Returning hero and profile refinement

The hero heading reveals through three line masks with a 140ms stagger, followed by the description and actions. Its entrance re-arms after leaving view and can replay through Home navigation, including when already at the top. Repeated triggers cancel the previous animation on each element. Reduced motion and global pause retain visible content.

SocialLinks shares six local Simple Icons marks between profile and contact: GitHub, LinkedIn, Facebook, Instagram, Threads and X. Only the existing GitHub and LinkedIn destinations are linked. The user explicitly requested icons only for the other four until profile URLs are supplied; those are labelled, noninteractive spans. CC0 attribution is retained alongside assets.

## Square portrait and stable viewport edges

The user requested a square photograph and fewer controls. The desktop portrait retains a 1:1 crop, shrinking uniformly on low viewports; mobile uses a 100px square. The full-height personal panel keeps its social row at the bottom. All social icons are unframed. Theme and language move to the sticky top header, while the global motion button and its persisted pause preference are removed. OS reduced motion and the local skills pause remain. Header height is measured with ResizeObserver to preserve anchor clearance when controls wrap.

Section entrances re-arm only outside an expanded 200px viewport zone. The separate reset boundary prevents an animated element crossing the reveal boundary from repeatedly restarting itself. Hero return-to-top entrances remain supported. This supersedes the earlier global-pause and flexible-height-photo decisions.

The profile role and location use a semantic definition list: Specialty / Especialidad and Location / Localidad, with Jalisco, Mexico supplied by the user. Labels use the muted profile color and smaller type; values retain stronger weight. The square portrait scales uniformly to allow both fields on short desktop viewports.

The personal panel is now 336px wide on desktop (276px at intermediate widths), with corresponding main-content offsets. Its square photo grows to 282px, identity text to 28px, profile values to 15px and labels to 12px. The portrait scales down uniformly on low-height viewports so the larger text and social row remain inside the panel.

The skills orbital motif now has three satellites rotating around the existing rings at 24s, 36s (reverse) and 48s. Only transforms animate; the ring strokes stay fixed. Animation pauses when the SVG is offscreen or the document is hidden, resumes at the same phase, and is disabled under reduced motion. This replaces the earlier static-orbit choice at the user’s request.

Profile labels now include 16px code and map-pin outline SVGs, matching the existing stroke system. Icons are decorative and remain separate from translated text.

## Senior developer hero

User-approved hero: decorative developer tags surround the bilingual name greeting; the three-line heading reads Senior {Full Stack} Developer in both languages. Full Stack characters reveal at 85ms intervals after the entrance begins. Characters retain their widths, the heading has a stable accessible name, and no live-region announcements are used. The existing return-to-top trigger replays the typing; reduced motion leaves the full title visible. This supersedes the software-with-purpose headline.

The greeting now uses decorative span tags. Its opening tag, bilingual name and closing tag enter in a 120ms stagger. A finite blinking cursor follows the measured character positions during Full Stack typing, then disappears; cursor movement uses linear timing with discrete steps to stay synchronized. It occupies no layout space and is hidden under the existing reduced-motion path. Specialty uses a briefcase/portfolio outline icon in place of code brackets.

## Quieter link treatment

Removed repeated decorative arrows from header contact, hero actions, project links, experience contact, GitHub row and email. Only the downward scroll cue remains. Project and primary links retain button surfaces; text GitHub links use underlines. Arrow-specific hover motion was removed. Destinations and accessible labels are unchanged.

Header utilities are grouped in the fixed DOM/visual order language → theme → contact. Language and theme share identical 44px circular outlined targets with transparent backgrounds; the contact pill follows at the right. The group stays together when the header wraps. Mobile places the two utility controls at left and contact at right on a dedicated row. Styles are scoped to portfolio so other ThemeToggle consumers remain unchanged.

Social destinations updated from user-supplied URLs: Instagram /luisgildev/, Threads /@luisgildev and X /luisgildev, using clean paths without tracking queries. Facebook is removed from both shared placements. The profile grid now has five columns and every icon is a real link, superseding the earlier placeholder state.

## Contact draft form

The contact section retains direct email and social links, followed by an unboxed form aligned with the page grid. Name/email share a row on desktop; subject and message span the width. Mobile uses one column. Inputs have persistent labels, 16px text, autocomplete, required/length constraints and visible focus. The textarea remains vertically resizable.

At the user’s direction the form composes an email locally rather than submitting to a service. Prepare email creates an encoded mailto draft with the selected subject and a body containing the name, email and message. A polite status and explicit link let the visitor open, review and send it from their mail client. Editing any field or changing language invalidates the old draft. Nothing is sent or stored by the website; direct email remains available. Header contact now targets #contact.

## Compact mobile navigation

The mobile header now uses one 65px sticky row: compact brand, language, theme and a menu disclosure. The previous stacked identity card and always-visible multirow navigation are hidden on mobile. One shared section navigation opens as a two-column panel beneath the bar, including contact; desktop retains the expanded navigation and personal panel. Only controls are duplicated across hidden responsive wrappers, with shared theme/language state.

The disclosure has aria-expanded/controls, closes after selecting a section, on outside click, Escape or breakpoint change. Escape restores button focus; section selection focuses the destination without preventing native anchor scrolling. Navigation remains visible when JS enhancement is unavailable. Header height measurement uses the closed bar, so anchor clearance stays stable while the overlay opens.

## Mobile portrait backdrop

At the user’s request, the latest approved AI-edited portrait replaces the small mobile hero photograph. A generated true-alpha cutout is optimized to an 800px WebP (~54 KiB). Mobile renders it as a decorative grayscale background, enlarged and offset beyond the right edge, with lateral and lower fades to protect the text. Dark/light opacities are .55/.22; a narrower-width offset preserves the title at 320px. The hero content starts closer to the header after removing the old portrait block. No desktop portrait replacement was requested; the original remains there.

## Dark editor palette refinement

User-directed contrast change: near-black canvas (#080b10), editor surfaces (#121923), cool off-white primary text (#dce5f3) and muted blue-gray copy (#9daac0). Terminal green (#9ece6a) owns Full Stack and primary actions; cyan (#7dcfff) marks braces and focus; violet (#bb9af7) marks the span tags. Profile, project backgrounds, checked filters, contact action, NextUp preview and selection/focus treatments follow these roles. Control boundaries use #5a6c85. Brand marks and actual app/e-paper imagery retain their own colors. The light theme remains available.

The mobile grayscale portrait uses .7 brightness with .6 opacity in dark mode, and the particle wave is dimmer/cyan. These are subordinate to the heading rather than the brightest part of the viewport. This supersedes the previous petroleum, sage and lavender dark-theme roles.

The user requested more torso and explicitly allowed the portrait beneath the particle animation. The mobile portrait frame is now 460×500px, offset 16px down and farther right to preserve its horizontal center. The fade begins lower and reaches transparency at the image bottom, revealing more chest/shoulder before blending into the wave. Its z-index is -2 versus the wave’s -1. A mild contrast lift preserves dark-shirt detail while keeping the face subdued (.56 opacity, grayscale, .8 contrast/.8 brightness).

The mobile hero now bleeds to both viewport edges. Negative inline margins offset the main content gutter while matching internal padding preserves text/button alignment. The portrait clipping boundary and particle canvas therefore span the screen; footer labels retain their gutters. At 370px and below the bleed matches the existing 16px page gutter rather than 20px.

The particle canvas now fades through four alpha stops over its lower 24%, reaching full transparency at the bottom. Only the canvas is masked; photo layering, text, scroll cue, animation lifecycle and edge-to-edge width remain intact.

To avoid repeating the header identity, the hero greeting now reads Hey! / ¡Hola! between the existing span tags. It retains the same staggered animation; Senior Full Stack Developer remains the main heading.

## LG identity and lateral navigation

The user clarified approval of the full proposal: mobile header uses <LG /> while the greeting reads ¡Hola! Soy Luis Gil. (Hey! I'm Luis Gil.). The main title and other hero layers remain.

A native dialog now hosts the same navigation on mobile, sliding in from the right over a dim backdrop. It is closed by default and on pageshow. Native modality manages background inertness, focus containment and Escape; explicit close, backdrop click and destination selection also close it. HTML scroll locking is cleared on close. Entry is a finite 280ms transform animation, cancelled on close and skipped under reduced motion. On desktop resize the dialog closes and navigation returns to the header. A no-script fallback exposes section links. This supersedes the earlier disclosure dropdown.

The terminal prompt > _ replaces the LG mobile mark, rendered in the light primary text color. PortfolioPage opts into the shared layout’s fixedTheme=dark behavior: server output and pre-paint initialization remain dark regardless of prior storage. Both portfolio theme controls are removed. Other consumers of the layout retain their existing theme behavior. This supersedes the LG mark and optional portfolio light mode.

The drawer title is now the initial focus target (tabindex=-1/autofocus), avoiding a highlighted Close button when opened by touch. Heading focus has no outline; keyboard Tab still moves to Close with its normal visible focus ring.

### Responsive motion refinement — 2026-11-23

Technology tracks bleed to viewport edges on mobile (20px gutters, 16px at <=370px), while prose keeps its gutter. Marquee pauses offscreen, in hidden documents, on local pause and pointer hover. Stable project/timeline boxes replace whole-block translation: project identity/art uses a mask and inner text enters in capped sequences; timeline logos crop into place before supporting details. Headings use a vertical aperture; technologies open horizontally; prose fades and contact fields enter in sequence. Entries rearm only beyond a separate 280px boundary, so hovering at the viewport edge cannot retrigger jumps. Filtering only marks visible projects revealed; later projects retain their entrance. Keyboard focus immediately finishes its group. Reduced-motion preference shows content and a static logo grid.

### Product-led copy and text choreography — 2026-11-23

Lead: Senior Full Stack Developer and independent product creator. The hero describes building web platforms, native apps and connecting systems end to end. Hourmeet and Luromi explain ownership and client work; professional employers support the broader narrative. Copy and metadata updated in both languages without invented results. Personal reflection remains unchanged.

Text motion now follows meaning: terminal hero typing remains focal; gallery/contact display headings reveal whole words through local clipping slots with capped stagger; experience heading wipes horizontally, matching its timeline; stack heading drifts laterally, matching the tracks; about headings fade quietly. Body paragraphs and skill descriptions remain stable, instead of replaying a generic entrance on every passage. Project headings enter laterally, artwork uses masks and supporting copy fades without translating the reading block. Focus, translation and reduced-motion paths remain intact.

### Gallery controls and current portrait — 2026-11-23

User retained the neutral portrait in color: mobile opacity .60 with contrast .9/brightness .85, desktop opacity .75 with contrast .95/brightness .9; existing alpha masks and bottom fade remain. Contact social links now close the page in the footer, with desktop profile socials retained. Mobile gallery filters use one horizontally scrollable row, native focus scrolling and touch scroll, while desktop retains wrapped controls. Card actions use a distinct blue-gray fill, visible control border and at least44px touch height. Luromi symbol is the official white/blue #42A5D5 version from https://luromistudio.com.mx/favicon.svg (retrieved2026-11-23), displayed on a dark logo plate.

### Native disclosure motion — 2026-11-23

Project detail sections, job responsibilities and optional FAQ use native details/summary with a JS progressive enhancement in portfolio-disclosures.ts. Only the content region animates its measured height and opacity:320ms open,220ms close, exponential deceleration. Local layout work is intentional so following content moves continuously. Native rendering remains open until collapse completes; interruption reads the current height/opacity before cancelling the preceding animation. Closed descendants can report intrinsic height in modern browsers, so closed start height is explicitly zero. The marker rotates with the target state. Keyboard/reduced-motion activation is immediate; reduced preference changes, translation and viewport resize settle current targets and clear overflow. No fixed max-height, timers or new dependencies. Native toggles remain available without JS/WAAPI.

### Academic formation —2026-11-23

A compact, unboxed academic section follows experience and precedes About. It shows only the existing CETI software-development engineering program; no dates or qualification status supplied. Includes Formation/Education in shared navigation. English level removed from site, footer Tavi link removed. Existing Luromi project card remains; no separate studio section.

### Academic visual integration —2026-11-23

User found the initial education composition disconnected. Replaced the side-by-side degree headline and isolated rule with the established career timeline language: identical marker/rail alignment (desktop133px, mobile5px), inset record, compact icon plate, CETI as institution title and engineering program in green supporting type. Record border, gaps and bottom spacing follow experience. This supersedes the initial academic composition without changing facts or adding dates.

CETI academic mark now uses the user-supplied square blue/orange institutional symbol (first attachment), stored unchanged at public/images/companies/ceti.jpg, on a white plate matching employer logos. The second attachment is the full wordmark and was not used at icon size.

### About and closing refinement —2026-11-23

About now discusses product understanding and connecting backend/data/interfaces, avoiding repeated name/title introduction. User-approved scope includes a personal neurodivergence copy refinement: the new heading My way of seeing the world / Una forma propia de mirar el mundo leads a self-knowledge reflection without requests or generalized traits. No project CTA remains in About; contact remains in its dedicated section. Footer social links precede copyright in DOM and mobile visual order.

### Academic entrance and approved reflection —2026-11-23

Academic heading uses the existing career-heading horizontal reveal; .academic-timeline is registered with the shared timeline motion. Its CETI mark crops into view before the institution/program inner group settles; outer geometry remains fixed. The shared reduced-motion, immediate-focus completion and280px replay boundary apply. Reflection text matches the user-approved self-knowledge/world-not-designed-for-me combination in Spanish and English.
