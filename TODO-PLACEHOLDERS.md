# TODO — values to confirm

Status of the real data. Most placeholders are now filled (demo is live). What
remains is mostly chef sign-off. Most values live in **`config/site.ts`**.

## ✅ Done
- [x] **WhatsApp / phone** — `+90 543 864 39 65` (`booking.whatsappNumber` `905438643965`)
- [x] **Hours** — Sun–Fri 14:00–00:00, Sat 14:00–01:00 (`display` + schema kept in sync)
- [x] **Exact coordinates** — `36.26312928620116, 29.415281468283627` (`address.geo`)
- [x] **Maps link** — real share link wired to the "get directions" button
- [x] **Instagram** — `@kokkalkan.tr`
- [x] **Prices** — set to `null` → renders "ask for current price" (awaiting chef pricing)
- [x] **Photos** — all 11 slots filled with real photos, incl. chef Ozan Orakcı portrait
- [x] **Hosting** — live on GitHub Pages; `siteUrl` set to the project URL

## ⏳ Remaining — needs the restaurant / chef
- [ ] **Chef bio** (`messages/{en,tr}.json → chef.bio`) — currently a generic
      write-up. Replace with Ozan Orakcı's approved text (EN + TR); confirm the
      quote too. (The `bioNote` field is an internal reminder, not shown on site.)
- [ ] **Seasonal prices** (`pricing.tastingPerPerson`, `pricing.winePairing`) —
      set numbers once the chef confirms, or leave `null` to keep "ask for price".
- [ ] **Service %** (`pricing.servicePercent`) — confirm (currently 10).
- [ ] **Postal code** (`address.postalCode`) — confirm (currently 07960).

## 🔧 Optional / later
- [ ] **Custom domain** — if adopted, update `siteUrl` (drop `/kok-kalkan`); Pages
      also needs the domain configured in Settings → Pages.
- [ ] **Reservation email** (`booking.email`) — only needed if `booking.mode`
      switches to `"email"`; unused in the current WhatsApp flow.
- [ ] **Real reservation system** (`booking.url` + `booking.mode: "url"`) — one-line
      swap if a booking platform is adopted.
- [ ] **Reviews** — the fabricated `aggregateRating` was **removed** from
      `lib/structured-data.ts`. Re-add only with a verified rating/review count.
