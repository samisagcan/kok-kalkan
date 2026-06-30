import SmartImage from "./SmartImage";
import Tagline from "./Tagline";
import type { Messages } from "@/lib/i18n";

/** Full-bleed sunset terrace with the brand line and the primary CTA. */
export default function Hero({ m }: { m: Messages }) {
  return (
    <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
      {/* Background image slot */}
      <div className="absolute inset-0 -z-10">
        <SmartImage slot="hero" sizes="100vw" priority rounded={false} className="h-full" />
        {/* Warm legibility gradient over the photo. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/10" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-28 text-bone sm:px-8">
        <Tagline words={m.hero.tagline} className="text-sm uppercase tracking-brand text-bone/90" />
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.08] sm:text-6xl">
          {m.hero.title}
        </h1>
        <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-bone/90 sm:text-lg">
          {m.hero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#reserve"
            className="rounded-full bg-terracotta px-7 py-3 font-sans text-sm font-medium text-bone transition-colors hover:bg-wood"
          >
            {m.hero.cta}
          </a>
          <a
            href="#menu"
            className="rounded-full border border-bone/60 px-7 py-3 font-sans text-sm text-bone transition-colors hover:bg-bone/10"
          >
            {m.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
