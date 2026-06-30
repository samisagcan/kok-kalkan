import type { ReactNode } from "react";
import "./globals.css";

/**
 * Root layout is intentionally a pass-through: the real <html>/<body> live in
 * app/[locale]/layout.tsx so the `lang` attribute and metadata can vary per
 * locale. This is the standard App Router localisation pattern.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
