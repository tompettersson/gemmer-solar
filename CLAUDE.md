# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **Gemmer Solar GmbH** (German solar energy company in Scheidt). Built with SvelteKit as a mostly static site with a server-side contact form.

Live site: gemmer-solar.de

## Commands

```bash
npm run dev          # Start dev server (Vite)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Prettier + ESLint check
npm run format       # Prettier auto-format
```

## Tech Stack

- **SvelteKit 1.x** with Svelte 3 (not Svelte 5 runes syntax)
- **Tailwind CSS 3** with custom `gemmer` color palette (orange tones: `gemmer-50` to `gemmer-900`)
- **Vite 4**, PostCSS, Autoprefixer
- **Rubik** font self-hosted in `static/fonts/`, loaded via `@font-face` in `src/app.css`
- **adapter-auto** (Vercel-compatible deployment)
- **nodemailer** for contact form email via SMTP (Fastmail)

## Architecture

### Routing (`src/routes/`)

| Route | Purpose |
|---|---|
| `/` | Homepage: Hero + About + Cards (solar) + ContactForm |
| `/waermepumpen` | Heat pumps page (uses HeroWaerme, AboutWaerme, CardsWaerme) |
| `/ibc-home-one` | IBC HomeOne product page (uses HeroIBC, AboutIBC, CardsIBC) |
| `/solarrechner` | Embeds IBC Solar calculator via iframe |
| `/referenzen` | Customer references/gallery |
| `/download` | PDF downloads for customers |
| `/miniform` | Contact form thank-you page + Google Ads conversion tracking |
| `/impressum`, `/datenschutz`, `/agb` | Legal pages |

### Layout

`+layout.svelte` wraps all pages with `Navbar` + `Footer`. Global CSS imported from `src/app.css`.

### Components (`src/lib/`)

Section-based components, each variant suffixed by page context:
- **Hero** / HeroWaerme / HeroIBC — page hero sections
- **About** / AboutWaerme / AboutIBC — about/info sections
- **Cards** / CardsWaerme / CardsIBC — feature card grids
- **ContactForm** — contact form (POSTs to `/miniform`)
- **Navbar**, **Footer**, **Message** — shared layout components

### Contact Form Flow

1. `ContactForm.svelte` POSTs to `/miniform`
2. `src/routes/miniform/+page.server.js` handles the form action: reads form data, sends email via nodemailer/SMTP
3. `src/routes/miniform/+page.svelte` shows thank-you message + fires Google Ads conversion

### External Integrations

- **Cookiebot** consent management (in `app.html`)
- **Google Ads** conversion tracking (gtag in `app.html`, conversion event on `/miniform`)
- **IBC Solar** calculator iframe on `/solarrechner`

## Environment Variables

SMTP credentials configured in `.env` (gitignored). Required variables:
- `PRIVATE_EMAIL_PW`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_FROM_EMAIL`, `SMTP_TO_EMAIL`

Accessed via SvelteKit's `$env/static/private`.

## Static Assets

- `static/img/` — site images, logos, SVGs
- `static/fonts/` — self-hosted Rubik font files
- `static/download/` — PDF documents for customers
- `static/referenzen/` — reference/gallery images
