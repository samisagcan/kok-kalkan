import ScrollReveal from "./ScrollReveal";
import { address, contact, hours } from "@/config/site";
import type { Messages } from "@/lib/i18n";

/** Location, hours, contact and an embedded map with directions. */
export default function Visit({ m }: { m: Messages }) {
  const mapsQuery = encodeURIComponent(address.mapsQuery);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`;

  return (
    <section id="visit" className="section grid gap-10 md:grid-cols-2 md:items-start">
      <ScrollReveal>
        <p className="eyebrow">{m.visit.eyebrow}</p>
        <h2 className="heading mt-3 text-3xl sm:text-4xl">{m.visit.title}</h2>

        <dl className="mt-8 space-y-6 font-sans text-sm">
          <div>
            <dt className="text-xs uppercase tracking-brand text-olive">{m.visit.addressLabel}</dt>
            <dd className="mt-1.5 not-italic leading-relaxed text-ink/80">
              {address.street}
              <br />
              {address.locality}, {address.region}
            </dd>
          </div>

          <div>
            <dt className="text-xs uppercase tracking-brand text-olive">{m.visit.hoursLabel}</dt>
            <dd className="mt-1.5 space-y-0.5 text-ink/80">
              {hours.display.map((h) => (
                <div key={h.days} className="flex justify-between gap-6">
                  <span>{h.days}</span>
                  <span className="text-ink/60">{h.time}</span>
                </div>
              ))}
            </dd>
          </div>

          <div>
            <dt className="text-xs uppercase tracking-brand text-olive">{m.visit.contactLabel}</dt>
            <dd className="mt-1.5 flex flex-col gap-1 text-ink/80">
              <a href={`tel:${contact.phoneHref}`} className="hover:text-forest">
                {m.visit.callUs}: {contact.phoneDisplay}
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-forest"
              >
                Instagram: {contact.instagramHandle}
              </a>
            </dd>
          </div>
        </dl>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 font-sans text-sm text-bone transition-colors hover:bg-olive"
        >
          {m.visit.directions}
        </a>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <div className="overflow-hidden rounded-lg border border-olive/20">
          <iframe
            title={m.visit.mapTitle}
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full md:h-[440px]"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
