# Kök Kalkan

Production website for **Kök Kalkan** — chef-driven modern Turkish cuisine on a
rooftop terrace in Kalkan (Kaş, Antalya). Bilingual (English primary, Turkish
secondary), SEO-rich, with online reservations.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

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

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → import the repo**. Framework is auto-detected as
   Next.js; no build settings needed (`next build`).
3. Add a custom domain and update `siteUrl` in `config/site.ts` to match
   (used for canonical URLs, sitemap and JSON-LD).
4. Deploy. No environment variables are required for the default
   WhatsApp/email reservation flow.

## Before going live

See **`TODO-PLACEHOLDERS.md`** for the list of real values to confirm
(prices, phone, hours, chef bio, photos, social links).
