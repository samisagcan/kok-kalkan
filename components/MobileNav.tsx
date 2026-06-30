"use client";

import Link from "next/link";
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

/** Collapsible nav for small screens. Closes on selection. */
export default function MobileNav({
  navLinks,
  switchLabel,
  switchHref,
  switchAria,
}: {
  navLinks: NavLink[];
  switchLabel: string;
  switchHref: string;
  switchAria: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-forest"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <>
              <path d="M4 7h16" strokeLinecap="round" />
              <path d="M4 12h16" strokeLinecap="round" />
              <path d="M4 17h16" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-16 border-b border-olive/15 bg-bone px-6 py-4 shadow-sm"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 font-sans text-base text-forest/90 hover:bg-sage/20"
              >
                {link.label}
              </a>
            ))}
            <Link
              href={switchHref}
              hrefLang={switchHref.replace("/", "")}
              aria-label={switchAria}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-3 font-sans text-base text-olive hover:bg-sage/20"
            >
              {switchLabel}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
