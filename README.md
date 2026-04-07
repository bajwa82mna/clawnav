# ClawNav — OpenClaw AI Ecosystem Directory

A clean, fast, bilingual (EN/中文) directory for the OpenClaw AI agent ecosystem.
Hosted at **claw.corporateinchina.com**

## 📁 File Structure

```
clawnav/
├── index.html          ← Main page (all 12 sections, 128+ cards)
├── css/
│   └── style.css       ← All styles (light/dark theme, responsive)
├── js/
│   └── app.js          ← All JS (i18n, theme, search, sidebar, scroll-spy)
├── _config.yml         ← GitHub Pages config (disables Jekyll)
└── README.md           ← This file
```

## 🚀 Deploy to GitHub Pages

### Option 1 — New repository

1. Create a new GitHub repository (e.g. `clawnav` or `username.github.io`)
2. Upload all files **preserving the folder structure** (`css/` and `js/` subfolders)
3. Go to **Settings → Pages**
4. Set **Source** to `Deploy from a branch`
5. Select `main` branch, `/ (root)` folder → **Save**
6. Your site will be live at `https://username.github.io/clawnav/` in ~1 minute

### Option 2 — Existing repository

1. Copy all files into the root of your repo (keeping `css/` and `js/` subfolders)
2. Enable Pages in Settings → Pages as above

### Custom domain (optional)

To use `claw.corporateinchina.com`:
1. Add a `CNAME` file in the repo root containing `claw.corporateinchina.com`
2. Point your domain's DNS to GitHub Pages IPs (see GitHub docs)

## ✨ Features

- 🌐 **Bilingual** — EN / 中文 toggle, persists across sessions
- 🌙 **Dark / Light mode** — auto-saved preference
- 🔍 **Live search** — instant filtering across all 128 cards
- 📌 **Sticky sidebar** — scroll-spy updates active category
- 📱 **Mobile-friendly** — responsive grid, sidebar hides on mobile
- ↑ **Back to top** — appears after scrolling
- 🔗 **All links open in new tab** — `target="_blank" rel="noopener"`
- ⚡ **Fast** — no framework, no bundler, pure HTML/CSS/JS

## 🛠 Local development

Just open `index.html` in any modern browser — no server needed.

> **Note:** If fonts don't load locally (offline), the fallback `system-ui` font is used.
> The layout remains fully functional.
