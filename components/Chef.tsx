import SmartImage from "./SmartImage";
import ScrollReveal from "./ScrollReveal";
import type { Messages } from "@/lib/i18n";

/** Portrait of chef Ozan Orakcı with a short bio and a guiding quote. */
export default function Chef({ m }: { m: Messages }) {
  return (
    <section className="bg-forest text-bone">
      <div className="section grid gap-12 md:grid-cols-5 md:items-center">
        <ScrollReveal className="md:col-span-2">
          <SmartImage slot="chef" sizes="(max-width: 768px) 100vw, 40vw" />
        </ScrollReveal>

        <ScrollReveal delay={120} className="md:col-span-3">
          <p className="font-sans text-xs uppercase tracking-brand text-sage">{m.chef.eyebrow}</p>
          <blockquote className="mt-5 font-display text-2xl font-light italic leading-snug text-bone sm:text-3xl">
            “{m.chef.quote}”
          </blockquote>
          <p className="mt-6 max-w-prose font-sans text-base leading-relaxed text-bone/85">
            {m.chef.bio}
          </p>
          <p className="mt-6 font-display text-xl font-light">{m.chef.name}</p>
          <p className="font-sans text-sm text-sage">{m.chef.role}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
