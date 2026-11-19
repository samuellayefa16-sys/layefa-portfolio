# Layefa Samuel — Portfolio

React + Vite + GSAP + Three.js (liquid shader background) + Lenis smooth scroll.

## Run locally (VS Code terminal)
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview
```
Needs Node 18+.

## Edit content
Everything (text, skills, projects, links, status, availability) is in **`src/data/portfolio.js`**.
Values containing `YOUR` are treated as unset: they show as dimmed, non-clickable items until you fill them in.
Project `live` / `github` empty = no button shown.

## Images
See `public/images/README.md`. Same filename = automatic update.

## Deploy (GitHub → Vercel)
```bash
git init && git add . && git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/layefa-portfolio.git
git push -u origin main
```
Then vercel.com → Add New → Project → import the repo. Framework: Vite (auto), build `npm run build`, output `dist`. Deploy. Every push redeploys.

## Before you share the link
- In `index.html`, replace `YOUR-DOMAIN.vercel.app` (3 places) with your real domain so WhatsApp/LinkedIn previews work.
- Images are WebP and ~400 KB total for the whole `public/` folder. Keep new images small (see `public/images/README.md`).

## To fill in
WhatsApp number, email, LinkedIn, GitHub, TikTok, project URLs/repos, project statuses and skill levels (check they're honest), real favicon (`public/favicon.svg`).
