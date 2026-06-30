import ScrollReveal from "./ScrollReveal";
import SmartImage from "./SmartImage";
import type { Messages } from "@/lib/i18n";

/** Gallery of the rooftop terrace and interior — real photos drop in here. */
export default function TheSpace({ m }: { m: Messages }) {
  return (
    <section id="space" className="section">
      <ScrollReveal className="max-w-prose">
        <p className="eyebrow">{m.space.eyebrow}</p>
        <h2 className="heading mt-3 text-3xl sm:text-4xl">{m.space.title}</h2>
        <p className="mt-5 font-sans text-base leading-relaxed text-ink/75">{m.space.body}</p>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        <ScrollReveal className="col-span-2 row-span-2">
          <SmartImage slot="space-terrace-night" sizes="(max-width: 1024px) 100vw, 50vw" className="h-full" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <SmartImage slot="space-niche-wall" sizes="(max-width: 1024px) 50vw, 25vw" className="h-full" />
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <SmartImage slot="space-rattan-light" sizes="(max-width: 1024px) 50vw, 25vw" className="h-full" />
        </ScrollReveal>
        <ScrollReveal delay={120} className="col-span-2">
          <SmartImage slot="space-terrace-day" sizes="(max-width: 1024px) 100vw, 50vw" className="h-full" />
        </ScrollReveal>
      </div>
    </section>
  );
}
