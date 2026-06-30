import ScrollReveal from "./ScrollReveal";
import SmartImage from "./SmartImage";
import DietaryIcons from "./DietaryIcons";
import { aLaCarte } from "@/data/menu";
import type { Messages } from "@/lib/i18n";

/** Poetic-named à la carte plates in the signature name + components format. */
export default function ALaCarte({ m }: { m: Messages }) {
  // A few dishes get a visual highlight; the rest are listed.
  const highlights = [
    { dishIndex: 3, slot: "dish-tranquility" }, // Tranquility of the Forest
    { dishIndex: 0, slot: "dish-sweetness" }, // Sweetness of the Sea
    { dishIndex: 5, slot: "dish-half-moon" }, // Half Moon
  ];

  return (
    <section className="bg-sage/15">
      <div className="section">
        <ScrollReveal className="text-center">
          <p className="eyebrow">{m.alacarte.eyebrow}</p>
          <h2 className="heading mt-3 text-3xl sm:text-4xl">{m.alacarte.title}</h2>
          <p className="mx-auto mt-5 max-w-prose font-sans text-base leading-relaxed text-ink/75">
            {m.alacarte.intro}
          </p>
        </ScrollReveal>

        {/* Visual highlights */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {highlights.map((h, i) => {
            const dish = aLaCarte[h.dishIndex];
            return (
              <ScrollReveal key={h.slot} delay={i * 100}>
                <figure>
                  <SmartImage slot={h.slot} sizes="(max-width: 640px) 100vw, 33vw" />
                  <figcaption className="mt-3">
                    <h3 className="font-display text-lg font-normal text-forest">{dish.name}</h3>
                    <p className="mt-0.5 flex flex-wrap items-center gap-2 font-sans text-sm text-ink/70">
                      <span>{dish.components.join(" | ")}</span>
                      <DietaryIcons dietary={dish.dietary} labels={m.dietary} />
                    </p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Full list */}
        <ScrollReveal>
          <ul className="mx-auto mt-14 max-w-3xl divide-y divide-olive/15">
            {aLaCarte.map((dish) => (
              <li key={dish.name} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-normal text-forest">{dish.name}</h3>
                  <DietaryIcons dietary={dish.dietary} labels={m.dietary} />
                </div>
                <p className="mt-1 font-sans text-sm text-ink/70">{dish.components.join(" | ")}</p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
