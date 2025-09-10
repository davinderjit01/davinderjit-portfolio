# Davinderjit's Portfolio

A clean, single‑page resume built with **Vue 3 + Vite** (Node 16‑compatible setup).

---

## Tech Stack & Why

- **Vue.js (v3.4.x)** — UI framework for componentized views (SFCs). We use `<script setup>` for concise components and reactivity for toggles (e.g., “Show more” in Projects).
- **Vite (v4.5.x)** — Dev server with instant HMR and production bundling via Rollup. Ultra‑fast DX.
- **@vitejs/plugin-vue (v4.x)** — Enables Vue Single File Components in Vite.
- **Node.js (v16.x used locally; v18+ recommended)** — Runtime to run Vite and build assets.
- **npm (v8.x+)** — Package manager to install/run scripts.
- **Netlify (optional)** — Static hosting; set build = `npm run build`, publish = `dist`.
- **CSS (vanilla)** — Custom theme with glassmorphism cards, animated gradient borders, sticky nav, and subtle transitions.

---

## Quick start

```bash
npm install
npm run dev         # start dev server with hot reload
npm run build       # build production assets into dist/
```

---

## ✏Customize content

Edit `src/data/profile.js`. Sections:
- Hero (name/role/location/summary/socials)
- Skills
- Experience (company/title/period/bullets)
- Projects (with optional `details` for “Show more”)
- Education
- Awards
- Contact

---

## Deploy

**Netlify / Vercel**  
- Build command: `npm run build`  
- Publish directory: `dist`  

**Drag‑and‑drop (Netlify)**  
- Run `npm run build` and drag the `dist/` folder into Netlify.

**GitHub Pages**  
- Upload `dist/` to `gh-pages` or configure a CI action.

---

## Structure

```
src/
  assets/        # global CSS
  components/    # NavBar, SkillTag, TimelineItem, ProjectCard, SiteFooter
  data/          # profile.js (all resume content)
  App.vue        # page layout + sections
  main.js        # Vue app mount
```

---

## Notes

- This variant is pinned to **Vite 4** for Node 16 compatibility. If you upgrade to **Node 18+**, you can bump to Vite 5 safely.
- SPA routing fallback for Netlify can be done with `_redirects` → `/* /index.html 200` (put it under `/public` or copy to `dist` on build).
