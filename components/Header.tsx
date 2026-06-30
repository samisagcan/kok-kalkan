import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { otherLocale, type Messages } from "@/lib/i18n";
import type { Locale } from "@/config/site";

/**
 * Sticky header: logo, anchor nav, language toggle and the primary Reserve CTA.
 * Nav links are plain in-page anchors; the mobile menu is the only client part.
 */
export default function Header({
  locale,
  m,
}: {
  locale: Locale;
  m: Messages;
}) {
  const navLinks = [
    { href: "#story", label: m.nav.story },
    { href: "#menu", label: m.nav.menu },
    { href: "#space", label: m.nav.space },
    { href: "#visit", label: m.nav.visit },
  ];
  const other = otherLocale(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-olive/15 bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 text-forest">
        <Link href={`/${locale}`} aria-label="Kök Kalkan — home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-forest/80 transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${other}`}
            hrefLang={other}
            aria-label={m.nav.switchLangAria}
            className="hidden font-sans text-sm text-forest/70 transition-colors hover:text-forest sm:inline"
          >
            {m.nav.switchLang}
          </Link>
          <a
            href="#reserve"
            className="rounded-full bg-forest px-5 py-2 font-sans text-sm text-bone transition-colors hover:bg-olive"
          >
            {m.nav.reserve}
          </a>
          <MobileNav navLinks={navLinks} switchLabel={m.nav.switchLang} switchHref={`/${other}`} switchAria={m.nav.switchLangAria} />
        </div>
      </div>
    </header>
  );
}
