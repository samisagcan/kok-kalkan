# Kök Kalkan

Production website for **Kök Kalkan** — chef-driven modern Turkish cuisine on a
rooftop terrace in Kalkan (Kaş, Antalya). Bilingual (English primary, Turkish
secondary), SEO-rich, with online reservations.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

**Live:** https://samisagcan.github.io/kok-kalkan/ — deployed to GitHub Pages
as a static export on every push to `main`.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /en)
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## What's where

| Path | Purpose |
|------|---------|
| `config/site.ts` | **Single source of truth** — phone/WhatsApp, address, hours, prices, reservation endpoint, social links. Edit here. |
| `data/menu.ts` | Tasting menu courses + à la carte dishes (poetic name + components + dietary). |
| `messages/{en,tr}.json` | All UI copy, per language. |
| `data/image-manifest.json` + `public/assets/images/` | Image slots — drop real photos in by filename; placeholders show until then. |
| `components/` | Section + UI components. |
| `app/[locale]/` | Localised routes (`/en`, `/tr`) with per-locale metadata + JSON-LD. |

## Language & SEO

- Route-based i18n: `/en` and `/tr`, each statically generated with its own
  title/description, OpenGraph, canonical and `hreflang` alternates.
- `Restaurant` + `Menu`/`MenuItem` + `FAQPage` JSON-LD, `sitemap.xml`,
  `robots.txt`, single `<h1>` per page.

## Reservations

The reservation widget (`components/Reservation.tsx`) builds a **pre-filled
message** rather than posting to a server. Control it in `config/site.ts`:

```ts
export const booking = {
  mode: "whatsapp",          // "whatsapp" | "email" | "url"
  whatsappNumber: "9055...", // digits only, no "+"
  email: "...",
  url: "",                   // set mode:"url" + this to use a real system later
};
```

## Deploy (GitHub Pages — current)

The site ships as a **static export** to GitHub Pages via
`.github/workflows/deploy-pages.yml`, which runs on every push to `main`.

- The workflow sets `GITHUB_PAGES=true`, which turns on `output: "export"` plus
  `basePath` / `assetPrefix` of `/kok-kalkan` in `next.config.ts`. Local dev and
  a Vercel deploy leave that env var unset and keep the default (no sub-path).
- One-time repo setup: the repo must be **public**, and
  **Settings → Pages → Source** must be **"GitHub Actions"**.
- The project sub-path is why `siteUrl` in `config/site.ts` is
  `https://samisagcan.github.io/kok-kalkan`. If you move to a custom domain,
  update `siteUrl` (drop the `/kok-kalkan`) — canonical, sitemap, JSON-LD and OG
  tags all follow it.

### Alternative: Vercel (no sub-path)

1. In Vercel: **New Project → import the repo**. Framework auto-detected as
   Next.js; no build settings needed (`next build`), no env vars required.
2. Add a custom domain and set `siteUrl` in `config/site.ts` to match.

## Before going live

See **`TODO-PLACEHOLDERS.md`** for the remaining values to confirm with the
restaurant (chef bio, service %, postal code, and — optionally — a custom
domain and a real reviews rating).
