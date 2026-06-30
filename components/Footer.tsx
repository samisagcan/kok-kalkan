import Logo from "./Logo";
import Tagline from "./Tagline";
import { address, contact } from "@/config/site";
import type { Messages } from "@/lib/i18n";

/** Footer with consistent NAP, social, KVKK note and copyright. */
export default function Footer({ m, year }: { m: Messages; year: number }) {
  return (
    <footer className="border-t border-olive/15 bg-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo className="text-forest" />
          <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-ink/70">
            {m.footer.blurb}
          </p>
          <Tagline words={m.footer.tagline} className="mt-4 text-xs uppercase tracking-brand text-olive" />
        </div>

        <div>
          <h2 className="font-sans text-xs uppercase tracking-brand text-olive">
            {m.visit.addressLabel}
          </h2>
          <address className="mt-3 not-italic font-sans text-sm leading-relaxed text-ink/70">
            {address.street}
            <br />
            {address.locality}, {address.region}
          </address>
        </div>

        <div>
          <h2 className="font-sans text-xs uppercase tracking-brand text-olive">
            {m.visit.contactLabel}
          </h2>
          <ul className="mt-3 space-y-1.5 font-sans text-sm text-ink/70">
            <li>
              <a href={`tel:${contact.phoneHref}`} className="hover:text-forest">{contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-forest">
                {m.footer.instagram} {contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs uppercase tracking-brand text-olive">{m.footer.kvkk}</h2>
          <p className="mt-3 font-sans text-xs leading-relaxed text-ink/60">{m.footer.kvkkBody}</p>
        </div>
      </div>

      <div className="border-t border-olive/10">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <p className="font-sans text-xs text-ink/55">
            {m.footer.rightsTemplate.replace("{year}", String(year))}
          </p>
        </div>
      </div>
    </footer>
  );
}
