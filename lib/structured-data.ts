import { address, contact, hours, pricing, siteUrl, social } from "@/config/site";
import { tastingMenu, aLaCarte, type Dish } from "@/data/menu";
import type { Locale } from "@/config/site";

/**
 * Builds the schema.org graph for the restaurant: Restaurant + Menu + FAQPage.
 * Emitted as a single JSON-LD <script> in the locale layout.
 */

function menuItems(dishes: Dish[]) {
  return dishes.map((d) => ({
    "@type": "MenuItem",
    name: d.name,
    description: d.components.join(" | "),
  }));
}

export function restaurantJsonLd(locale: Locale) {
  const restaurant = {
    "@type": "Restaurant",
    "@id": `${siteUrl}/#restaurant`,
    name: "Kök Kalkan",
    description:
      "Chef-driven modern Turkish cuisine in Kalkan — reinterpreting Turkish flavours with Western technique on a rooftop terrace above the sea.",
    image: [`${siteUrl}/assets/images/hero-terrace-sunset.jpg`],
    url: `${siteUrl}/${locale}`,
    servesCuisine: ["Turkish", "Modern", "Mediterranean", "Fine Dining"],
    priceRange: pricing.priceRange,
    acceptsReservations: true,
    telephone: contact.phoneHref,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: address.geo.lat,
      longitude: address.geo.lng,
    },
    openingHoursSpecification: hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [social.instagram],
    hasMenu: {
      "@type": "Menu",
      name: "Kök Kalkan Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: tastingMenu.title,
          hasMenuItem: menuItems(tastingMenu.courses),
        },
        {
          "@type": "MenuSection",
          name: "À la Carte",
          hasMenuItem: menuItems(aLaCarte),
        },
      ],
    },
    // PLACEHOLDER: replace with verified aggregate rating when available.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${siteUrl}/${locale}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need a reservation at Kök Kalkan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — seating is limited and we recommend reserving in advance through the website, WhatsApp or phone.",
        },
      },
      {
        "@type": "Question",
        name: "Is the tasting menu served to the whole table?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Chef's Journey to the Roots is served to the entire table, so please share any allergies or dietary needs in advance.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Kök Kalkan located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Kök Kalkan is on a rooftop terrace at ${address.street}, ${address.locality}, ${address.region}.`,
        },
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [restaurant, faq],
  };
}
