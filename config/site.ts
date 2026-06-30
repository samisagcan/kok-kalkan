/**
 * Single source of truth for everything Sami edits: contact details, prices,
 * hours, social links and the reservation endpoint. Values marked PLACEHOLDER
 * are confirmed/replaced by Sami — see TODO-PLACEHOLDERS.md.
 */

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Canonical production origin — used for metadata, sitemap and JSON-LD. */
export const siteUrl = "https://kokkalkan.com"; // PLACEHOLDER: confirm final domain

/**
 * Reservation behaviour. The form posts nowhere by default: it builds a
 * pre-filled WhatsApp (or mailto) message. To move to a real booking system
 * later, set `mode: "url"` and point `url` at it — one-line swap.
 */
export const booking = {
  mode: "whatsapp" as "whatsapp" | "email" | "url",
  // Digits only, international format, no "+" — used to build wa.me links.
  whatsappNumber: "905555555555", // PLACEHOLDER: reservation WhatsApp number
  email: "reservations@kokkalkan.com", // PLACEHOLDER: reservation e-mail
  url: "", // PLACEHOLDER: real reservation-system link (when available)
};

export const contact = {
  phoneDisplay: "+90 555 555 55 55", // PLACEHOLDER
  phoneHref: "+905555555555", // PLACEHOLDER (tel: value)
  whatsappDisplay: "+90 555 555 55 55", // PLACEHOLDER
  instagram: "https://www.instagram.com/kokkalkan.tr/",
  instagramHandle: "@kokkalkan.tr",
};

export const address = {
  street: "Kalkan Mah., 3. Sokak, Yalıboyu Caddesi No:10",
  locality: "Kalkan",
  region: "Kaş, Antalya",
  postalCode: "07960", // PLACEHOLDER: confirm postal code
  country: "TR",
  // Approximate Kalkan harbour coordinates — refine to the exact pin.
  geo: { lat: 36.2628, lng: 29.4145 }, // PLACEHOLDER: confirm exact coordinates
  // Embedded map + directions both use this place query.
  mapsQuery: "Kök Kalkan, Yalıboyu Caddesi No:10, Kalkan, Kaş, Antalya",
};

/**
 * Opening / service hours. Tasting menu is an evening experience; confirm the
 * real schedule. Used for display and for JSON-LD openingHoursSpecification.
 */
export const hours = {
  // PLACEHOLDER: confirm real service days/times.
  display: [
    { days: "Tuesday – Sunday", time: "18:00 – 23:00" },
    { days: "Monday", time: "Closed" },
  ],
  // Machine form for schema.org (Mo,Tu,...). Keep in sync with `display`.
  schema: [{ days: ["Tu", "We", "Th", "Fr", "Sa", "Su"], opens: "18:00", closes: "23:00" }],
};

/**
 * Prices are seasonal — kept here as editable values. Leave `amount` null to
 * render "ask for current price" instead of a figure.
 */
export const pricing = {
  currency: "₺",
  tastingPerPerson: 3150 as number | null, // PLACEHOLDER: confirm seasonal price
  winePairing: 1500 as number | null, // 5 glasses — PLACEHOLDER: confirm
  servicePercent: 10,
  // schema.org priceRange hint
  priceRange: "₺₺₺₺",
};

export const social = {
  instagram: contact.instagram,
};
