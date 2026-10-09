# MiniTools landing — verified brief

- Scope: add `/apps/minitools/` and update MiniTools in the portfolio. Keep the published portfolio and Tavi design intact. Work on `feat/minitools-landing`; publication requires a separate approval.
- User approved product-first storytelling, an interactive web demonstration, real app captures where possible, and a store-like plugin catalog.
- Essential claim: works with or without a notch. Always qualify device support as macOS 13+ and Apple silicon. No Intel compatibility claim.
- Public release verified on 2026-10-08: v1.0.3, DMG and ZIP, GitHub releases at https://github.com/LuisGil15/MiniTools/releases/latest. Release information can change; verify again before shipping.
- Official Homebrew installation: `brew install --cask LuisGil15/minitools/minitools`.
- Core features documented publicly: music controls, timers, calendar/events, Reminders, weather, local ToDo, placement across displays, full-screen hiding, notch calibration.
- Publicly named optional plugins: Launchpad, Caffeine, Ports, Screenshot Board, Mini Terminal, Agent Pulse.
- Distribution catalog is currently private. Do not copy private packages into public assets or promise downloads. Use a coming-soon state until owner supplies public distribution links.
- The browser demo is a simulation with synthetic data. It must never imply access to system music, reminders, files, processes or real macOS permissions. Timers should be local, no audio autoplay, and resettable.
- English default with Spanish available; light/dark controls; support links reuse the user's existing Buy Me a Coffee and Ko-fi links.
- Native Settings inspected and captured without exposing personal content or changing preferences. The floating island itself is not visible in the native capture API; do not label generated or reconstructed UI as an actual screenshot.
- Composition candidates ranked for this surface: (1) interactive island stage, (2) everyday Listen/Focus/Plan journey, (3) plugin-first catalog, (4) installation-led walkthrough, (5) with/without-notch comparison, (6) build-your-toolset selector, (7) core-tools strip. Surface seed 767453ac deals 5, 2, 1.
- Decision page key 9c7c67a8. Three comp drafts pending approval; no production page code written yet.
