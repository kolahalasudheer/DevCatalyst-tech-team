# Copilot Instructions for Dev Catalyst Website

## Project Overview
- This is a data-driven React + Vite + TypeScript site for Dev Catalyst.
- Content is managed via JSON files in `public/data/` and images in `public/events/` and `public/gallery/`.
- No code changes are needed for basic content updates; just edit JSON and add images.

## Key Files & Structure
- **Main app:** `src/App.tsx`, `src/main.tsx`, `src/components/`, `src/pages/`
- **Data sources:**
  - `public/data/events.json` (event details, categories: Hackathons, Workshops, Tech Talks, Seminars)
  - `public/data/gallery.json` (gallery images)
- **Images:**
  - `public/events/` (event images)
  - `public/gallery/` (gallery images)
- **Config:**
  - `netlify.toml` (Netlify build/deploy)
  - `vite.config.ts`, `tailwind.config.js`, `postcss.config.js` (build & styling)

## Developer Workflows
- **Local dev:**
  - Run `npm install` then `npm run dev`.
  - Visit the local URL (e.g., http://localhost:5173).
  - JSON is fetched at runtime; refresh after edits.
- **Deployment:**
  - Netlify auto-builds on push to `main`.
  - Build: `npm run build`, output: `dist/`.
  - SPA redirects handled in `netlify.toml`.

## Patterns & Conventions
- **Data-driven UI:** Pages read from JSON, not hardcoded.
- **Image paths:** Use absolute paths (e.g., `/events/hackathon-2025.jpg`) in JSON.
- **Component structure:** Pages in `src/pages/`, shared UI in `src/components/`.
- **TypeScript types:** Custom types in `src/types/`.
- **Safe fallback:** UI handles missing/broken JSON gracefully.

## Integration Points
- No backend; all data is static and loaded at runtime.
- Netlify handles deployment and SPA routing.

## Example Update Flow
1. Add new image to `public/events/` or `public/gallery/`.
2. Update relevant JSON in `public/data/`.
3. Commit and push to `main`.
4. Netlify deploys automatically.

## Troubleshooting
- If updates don’t show, hard refresh or clear browser cache.
- Check JSON structure for errors; site falls back safely if data fails to load.

---
For more details, see `README.md`.
