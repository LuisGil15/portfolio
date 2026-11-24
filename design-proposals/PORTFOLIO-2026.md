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
