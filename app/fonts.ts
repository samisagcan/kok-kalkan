import { Cormorant_Garamond, Inter } from "next/font/google";

/** Display serif — refined, light, wide-tracked. Headings & dish names only. */
export const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});

/** Body sans — clean humanist. latin-ext covers Turkish glyphs (ş, ğ, ı…). */
export const body = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});
