import SmartImage from "./SmartImage";
import ScrollReveal from "./ScrollReveal";
import Tagline from "./Tagline";
import type { Messages } from "@/lib/i18n";

/** Roots • Memory • Modern — the chef's story, told in three notes. */
export default function Philosophy({ m }: { m: Messages }) {
  return (
    <section id="story" className="section grid gap-12 md:grid-cols-2 md:items-center">
      <ScrollReveal className="order-2 md:order-1">
        <p className="eyebrow">{m.philosophy.eyebrow}</p>
        <Tagline words={m.philosophy.tagline} className="mt-3 text-sm uppercase tracking-brand text-forest" />
        <h2 className="heading mt-5 text-3xl sm:text-4xl">{m.philosophy.title}</h2>
        <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink/80">
          {m.philosophy.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <dl className="mt-8 space-y-4">
          {m.philosophy.highlights.map((h) => (
            <div key={h.label} className="flex gap-4">
              <dt className="w-24 shrink-0 font-display text-lg font-light text-olive">{h.label}</dt>
              <dd className="font-sans text-sm leading-relaxed text-ink/75">{h.text}</dd>
            </div>
          ))}
        </dl>
      </ScrollReveal>

      <ScrollReveal delay={120} className="order-1 md:order-2">
        <SmartImage slot="philosophy" sizes="(max-width: 768px) 100vw, 50vw" />
      </ScrollReveal>
    </section>
  );
}
