## Purpose

Concise guidance for AI coding agents working on this repository: a small static HTML/CSS site with multiple page variants and per-page styles. This file highlights the project's structure, conventions, run/debug workflow, and concrete examples to make edits safe and quick.

## Big picture

- Type: Static multi-page site (no build step). Pages are plain HTML files in the repo root (e.g., `homepage.html`, `run.html`, `run4.html`..`run13.html`).
- Styling: Each page uses a dedicated stylesheet pattern `stylerun*.css` (e.g., `stylerun3.css`) plus `globals.css` for shared tokens. Don't assume a global CSS module — many pages intentionally keep per-page CSS.
- Assets: SVGs and icons live in the repo root (e.g., `foot.svg`, `vector-17.svg`). HTML references these directly.

## Key files to inspect (quick references)

- `homepage.html` — main landing page.
- `run.html`, `run4.html`…`run13.html` — variant pages; each pairs with a `stylerun*.css` file.
- `globals.css` — shared global tokens (fonts, base colors).
- `stylerun3.css` — example of the mobile layout and calendar component (see calendar-block, calendar-blue, calendar-grid classes).
- `*.svg` — vector assets used inline or as image sources.

## Project-specific conventions and patterns

- Per-page CSS: The project uses multiple `stylerunX.css` files, one per page. Avoid merging or renaming without updating the respective HTML file that references it.
- Mobile container: `.iphone-pro` is the main layout wrapper. It sets `min-width: 402px` and a fixed min-height; changes here affect all pages using that wrapper.
- Absolute positioning: Many components use absolute coordinates (example: `.calendar-block { position: absolute; top: 190px; left: 50%; transform: translateX(-50%); }`). Prefer small, local adjustments (toggle `top`, `left`, or grid properties) rather than wide refactors.

## Concrete examples / how to safely make common edits

- Move the calendar vertically on the page: edit `stylerun3.css` -> `.calendar-block { top: 190px; }`. Adjust by ± values and test in the browser.
- Change calendar header color or font: edit `.calendar-header` in `stylerun3.css` or shared font definitions in `globals.css`.
- Update the round “today” marker color: edit `.calendar-day.is-today::before` background-color in `stylerun3.css`.
- Add or swap an SVG: update the `<img>` or `<svg>` reference in the HTML page and ensure the filename matches the file in the repo root.

## Local run / debug workflow (no build system)

1. Open the HTML file directly in a browser for quick visual checks (right-click -> Open With -> Browser). For cross-origin SVG behavior, prefer serving via a local HTTP server.
2. Recommended server (macOS):

   python3 -m http.server 8000

   Then open http://localhost:8000/homepage.html (or another page) in your browser.
3. Use DevTools to inspect computed styles for absolute-positioned elements. When changing `.calendar-block`'s `top`, refresh and confirm layout at multiple viewport widths.

## Integration points / external dependencies

- There are no external JS frameworks or package managers; changes are limited to HTML/CSS and asset files.
- If you add third-party libs, include them as local vendored files and document their usage in the page HTML to avoid external CDN reliance.

## Style and commit conventions for AI edits

- Make minimal, atomic edits. When changing style files, update only the per-page CSS unless the change is deliberately global.
- Use clear commit messages: e.g., `stylerun3: adjust calendar vertical position (top: 190 -> 170)`.

## Edge cases and gotchas

- Many pages rely on absolute positioning and fixed container sizes — global changes can unintentionally break multiple pages.
- The `.iphone-pro` wrapper enforces `min-width: 402px`. Be careful when testing at smaller widths; the layout is not responsive below that value.

## When to ask the repo owner

- If a change affects more than one `stylerun*.css` file, confirm whether a global refactor is intended.
- If adding a build step or external dependency, ask before changing repository layout.

---
If anything above is unclear or you'd like additional examples (for instance, a short checklist for editing a specific page like `run7.html`), tell me which area you want expanded and I'll update this file.
