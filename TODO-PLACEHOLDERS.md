# TODO — values for Sami to confirm

Everything below is a placeholder in the code. Replace, then redeploy.
Most live in **`config/site.ts`**; a few are noted with their file.

## 1. Reservation contact — `config/site.ts` → `booking` & `contact`
- [ ] **WhatsApp number** for reservations (`booking.whatsappNumber`, digits only, e.g. `905XXXXXXXXX`)
- [ ] Reservation **email** (`booking.email`) — only needed if you switch `booking.mode` to `"email"`
- [ ] Real **reservation-system link**, if/when you adopt one (`booking.url` + set `booking.mode: "url"`)
- [ ] Public **phone number** — display + `tel:` (`contact.phoneDisplay`, `contact.phoneHref`)

## 2. Prices (seasonal) — `config/site.ts` → `pricing`
- [ ] Tasting menu **per-person price** (`pricing.tastingPerPerson`) — set `null` to show "ask for current price"
- [ ] **Wine pairing** price, 5 glasses (`pricing.winePairing`)
- [ ] Confirm **service %** (currently 10)

## 3. Chef bio — `messages/en.json` & `messages/tr.json` → `chef`
- [ ] **Ozan Orakcı's** approved short bio (EN + TR), and confirm name spelling
- [ ] Optional: adjust the chef quote

## 4. Photos — `public/assets/images/` (see `data/image-manifest.json`)
Drop real photos in using the exact filenames. Placeholders show until then.
- [ ] `hero-terrace-sunset.jpg` (16:9 — sunset terrace)
- [ ] `philosophy-roots.jpg` (4:5 — ingredient/botanical)
- [ ] `chef-ozan-orakci.jpg` (4:5 — chef portrait/hands)
- [ ] `space-terrace-day.jpg`, `space-terrace-night.jpg` (4:3)
- [ ] `space-niche-wall.jpg`, `space-rattan-light.jpg` (3:4)
- [ ] `dish-tranquility-of-the-forest.jpg`, `dish-sweetness-of-the-sea.jpg`, `dish-half-moon.jpg` (1:1)
- [ ] `og-terrace-sunset.jpg` (1200×630 — social share image)

## 5. Hours — `config/site.ts` → `hours`
- [ ] Real **service days & times** (update both `display` and `schema` so they match)

## 6. Location — `config/site.ts` → `address`
- [ ] Confirm **postal code** and **exact map coordinates** (`address.geo`)

## 7. Social — `config/site.ts` → `contact` / `social`
- [ ] Confirm Instagram URL (currently `@kokkalkan.tr`) and add any other socials

## 8. Domain — `config/site.ts` → `siteUrl`
- [ ] Set the **final domain** (used for canonical URLs, sitemap, JSON-LD, OG tags)

## 9. Reviews (optional) — `lib/structured-data.ts`
- [ ] Replace the placeholder `aggregateRating` with verified rating/review count, or remove it
