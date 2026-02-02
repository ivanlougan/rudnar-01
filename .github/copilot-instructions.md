## Purpose
This project is a small React single-page app (Create React App / `react-scripts`) that serves a static website with client-side routing. The instructions below are focused on quickly making useful, repository-aware code changes.

## Big Picture
- **Routing:** Top-level routes are defined in [src/App.js](src/App.js). Pages live under [src/pages/](src/pages/).
- **UI composition:** Reusable UI pieces live under [src/components/](src/components/) and styles under [src/styles/](src/styles/).
- **Static assets:** Images and catalog files are served from `public/` and referenced by relative paths (e.g., `images/rud_logo2.jpg` used in [src/components/Header.js](src/components/Header.js)).

## How to run / developer commands
- Start dev server: `npm start` (see [package.json](package.json#L1)) — uses `react-scripts start`.
- Build production bundle: `npm run build`.
- Run tests: `npm test`.

## Project-specific conventions & patterns
- Use React Router elements (v7) as in [src/App.js](src/App.js). Add routes by updating the `Routes` list; pages are functional components returning markup.
- The `Home` page uses `sessionStorage` key `seenAnimation` to control showing `LogoAnimation` (see [src/pages/Home.js](src/pages/Home.js)). Preserve this key when changing startup flow.
- Styles are colocated in `src/styles/` and imported by components (e.g., `import "../styles/Header.css"`). Avoid moving styles without updating imports.
- Static images referenced in components use the `public/` root (plain `src="images/..."`), not `import` — keep that distinction when refactoring assets.

## Integration / external deps
- Core deps are listed in [package.json](package.json): `react`, `react-dom`, `react-router-dom`, `react-scripts`.
- No server-side code in this repo; integrations are client-only and expect static hosting.

## Helpful examples for common tasks
- Add a new page: create `src/pages/NewPage.js`, import it in [src/App.js](src/App.js) and add a `<Route path="/new" element={<NewPage/>} />` entry.
- Update header nav: edit [src/components/Header.js](src/components/Header.js); links use `react-router-dom`'s `Link`.
- Preserve animation behavior: when touching `LogoAnimation` or `Home`, do not remove the `sessionStorage.setItem("seenAnimation","true")` call unless intentionally changing first-visit UX.

## What to avoid / gotchas
- Don't convert public `images/` references to webpack imports without updating all paths — components expect `public/` URLs.
- `react-scripts` is used; avoid changing build tooling unless you update `package.json` scripts and document the reason.

## Where to look first
- App routes: [src/App.js](src/App.js)
- Home startup flow & animation: [src/pages/Home.js](src/pages/Home.js)
- Header/navigation: [src/components/Header.js](src/components/Header.js)
- Scripts & deps: [package.json](package.json)

If any section is unclear or you'd like more examples (tests, CI, or deployment notes), tell me which area to expand. 
