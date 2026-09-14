# Omkar Kale — Portfolio

A premium, dark-themed personal portfolio for **Omkar Suhas Kale** — AI Engineer · Software Engineer · AI Automation.

Built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**, designed to be deployed to **GitHub Pages**.

---

## ✨ Features

- Polished dark UI with glassmorphism, gradient accents, and a subtle AI/MCP flow visualization.
- Sticky navigation with active-section tracking and a polished mobile menu.
- Vertical timeline for experience (with the current role visually prominent).
- Project cards with hover lift/glow; featured project is the LLM-Powered Data Preprocessing Assistant.
- Animated counter stats for achievements.
- Skill chips with hover lift; AI/ML group is visually highlighted.
- Reduced-motion support throughout.
- Centralized data file (`src/data/portfolio.ts`) — single source of truth.

---

## 🚀 Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:5173)
npm run dev

# 3. Type-check and build for production (outputs to ./dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

This project is pre-configured for GitHub Pages.

### One-time setup

1. Create a GitHub repository named **`portfolio`** (case-sensitive, must match the `homepage` field in `package.json`).
2. Push this code to the `main` branch.

That's it — the included workflow (`.github/workflows/deploy.yml`) will build and deploy on every push to `main`.

### What the workflow does

- Installs dependencies with `npm ci`.
- Runs `npm run build` → produces `./dist`.
- Publishes `./dist` to GitHub Pages via the official `actions/deploy-pages` action.

### Required GitHub settings

1. In your repo, go to **Settings → Pages**.
2. Under **Source**, choose **GitHub Actions**.
3. Make sure the workflow has `pages: write` and `id-token: write` permissions (already configured).

Your site will be live at:

```
https://<your-github-username>.github.io/portfolio/
```

> The `homepage` field in `package.json` and the `base` path in `vite.config.ts` are both set to `/portfolio/`.
> If your repo is named differently, update **both** of those to match.

### Optional: Manual deploy

If you prefer the `gh-pages` CLI route:

```bash
npm install
npm run build
npm run deploy
```

---

## 🧩 Editing the portfolio

All copy lives in **one file**: [`src/data/portfolio.ts`](src/data/portfolio.ts).

| Section | Edit |
| --- | --- |
| Name, headline, intro, role | `PROFILE` |
| Experience entries | `EXPERIENCE` |
| Projects | `PROJECTS` |
| Skill groups | `SKILL_GROUPS` |
| Achievements | `ACHIEVEMENTS` |
| Leadership | `LEADERSHIP` |
| Education | `EDUCATION` |
| Social / resume links | `SOCIAL` |
| Nav links | `NAV` |

### Placeholders to replace before going live

In `src/data/portfolio.ts`:

- `SOCIAL.resumeUrl` → public URL of your hosted PDF resume (or set to a relative path in `/public/`).
- `PROJECTS[*].githubUrl` → real GitHub repo URLs (currently `PLACEHOLDER_GITHUB_URL`).

---

## 🏗️ Project structure

```
portfolio/
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── public/
│   ├── 404.html                   # SPA redirect fallback
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/                # Hero, Navbar, About, Experience, ...
│   ├── data/portfolio.ts          # ⭐ Centralized content
│   ├── hooks/                     # useReveal, useCountUp
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json / .app / .node
└── vite.config.ts
```

---

## ♿ Accessibility

- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Focus rings on every interactive element (`.focus-ring` utility).
- `aria-label` on icon-only buttons.
- Honors `prefers-reduced-motion` (animations are disabled/simplified).
- Keyboard-navigable mobile menu.

---

## 📜 License

MIT — feel free to fork for inspiration, but please don't copy verbatim.
