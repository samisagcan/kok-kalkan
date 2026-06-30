import type { Config } from "tailwindcss";

/**
 * Palette taken directly from the brand's Instagram highlight rings
 * (@kokkalkan.tr) — warm whitewashed-Mediterranean with a botanical, earthy
 * register. Terracotta is the single accent and is used sparingly.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#EFE9DF",
        sage: "#A7B0A0",
        olive: "#6E7257",
        forest: "#2F3A2E",
        terracotta: "#C46B43",
        wood: "#B98B5E",
        ink: "#23261F",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.22em",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "reveal-up": "reveal-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
