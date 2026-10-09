# MiniTools native-fidelity refinement review

Scope is a narrow refinement of an already approved, reviewed landing. Do not reopen the visual direction or score unrelated sections. User loves the landing; asks dark initial appearance, demos closer to real app, and physical vs virtual notch demonstrated accurately. Existing icon must remain unchanged. No publish.

Read `refinement-brief.md` next to this packet, current source `src/components/MiniToolsIsland.astro`, `MiniToolsNotch.astro`, `MiniToolsPage.astro`, and shared theme logic in `src/layouts/ProposalLayout.astro`.

Native authority: `/Users/luisgil/Developer/MiniTools/Sources/MiniTools/UI/DeveloperIsland/DeveloperIslandView.swift` (black island, wide width740/top camera inset, capsule tabs white14%, music154px artwork and elapsed-slider-remaining before controls), `TimersIslandView.swift` (orange126px ring, start/pause/reset, quick durations), `TodoIslandView.swift`, and `NotchCalibration.swift`. Web demo intentionally only simulates music, one timer and local tasks; no audio/system access. It is not a full native app clone. All hero content and wallpapers, page hierarchy, support and plugin catalog are preserved.

Implemented native geometry and music order, timer ring/buttons and dynamic progress, responsive adaptation. New comparison changes device geometry (physical cutout remains present, virtual has none) and expands at top edge around physical cutout. Copy includes notchless MacBooks and desktop displays, retaining Apple silicon/macOS13+. Dark SSR/initial defaults remain; user's explicit stored light preference still respected.

Source build passed13routes and git diff --check passed. Root performed browser QA because this worker's CUA listBrowsers is empty and exact tab selection returns unavailable; do not pretend worker browser tests ran.

Root evidence (all six screenshots opened and inspected) is saved alongside this file as `minitools-refine-{desktop,tablet,mobile,timer,physical,virtual}.jpg`. Full-page captures at1440/1194/390 are from document top with zero horizontal overflow. Dark initial; light toggle and back dark; next track Quiet Morning with QM artwork; progress ArrowRight0:01; 5-minute timer start Running → Music → return/pause/reset5:00; task added (3pending), keyboard Space check retained input focus and checked state; physical and virtual notch geometry both expanded; EN/ES translation nodes zero mismatches; console zero errors/warnings. Final full-page screenshots taken after final aria-label localization patch. Root owns browser evidence, not this worker.

Return focused SHIP/FIX/RECAPTURE verdict. Distinguish intended simplified simulation from inaccuracies, functional defects, inaccessible controls or unsupported product claims. Preserve previous phase's scoped SHIP verdict as historical, not proof of this refinement. Do not modify app source or landing.
