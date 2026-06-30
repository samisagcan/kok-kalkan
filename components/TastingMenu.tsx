import ScrollReveal from "./ScrollReveal";
import DietaryIcons from "./DietaryIcons";
import { tastingMenu } from "@/data/menu";
import { pricing } from "@/config/site";
import type { Messages } from "@/lib/i18n";

function price(amount: number | null, askLabel: string) {
  if (amount == null) return askLabel;
  return `${pricing.currency}${amount.toLocaleString("en-US")}`;
}

/** "The Chef's Journey to the Roots" as a vertical, course-by-course path. */
export default function TastingMenu({ m }: { m: Messages }) {
  const tasting = price(pricing.tastingPerPerson, m.tasting.askPrice);
  const wine = price(pricing.winePairing, m.tasting.askPrice);

  return (
    <section id="menu" className="section">
      <ScrollReveal className="text-center">
        <p className="eyebrow">{m.tasting.eyebrow}</p>
        <h2 className="heading mt-3 text-3xl sm:text-4xl">{m.tasting.title}</h2>
        <p className="mx-auto mt-5 max-w-prose font-sans text-base leading-relaxed text-ink/75">
          {m.tasting.intro}
        </p>
      </ScrollReveal>

      {/* The journey: a centre line with each course as a stop. */}
      <ScrollReveal>
        <ol className="relative mx-auto mt-14 max-w-2xl border-l border-olive/25 pl-8">
          {tastingMenu.courses.map((course, i) => (
            <li key={course.name} className="relative pb-9 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-olive/40 bg-bone"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-olive" />
              </span>
              <p className="font-sans text-[11px] uppercase tracking-brand text-olive/60">
                {m.tasting.courseLabel} {i + 1}
              </p>
              <h3 className="mt-1 font-display text-xl font-normal text-forest">{course.name}</h3>
              {course.components.length > 0 && (
                <p className="mt-1 flex flex-wrap items-center gap-2 font-sans text-sm text-ink/70">
                  <span>{course.components.join(" | ")}</span>
                  <DietaryIcons dietary={course.dietary} labels={m.dietary} />
                </p>
              )}
            </li>
          ))}
        </ol>
      </ScrollReveal>

      {/* Price + service block (config-driven, seasonal). */}
      <ScrollReveal className="mx-auto mt-12 max-w-2xl rounded-lg border border-olive/20 bg-sage/15 p-6 text-center">
        <p className="font-display text-2xl font-light text-forest">
          {tasting} <span className="font-sans text-sm text-ink/60">{m.tasting.perPerson}</span>
        </p>
        <p className="mt-2 font-sans text-sm text-ink/70">
          {m.tasting.winePairing}: {wine} · {pricing.servicePercent}% {m.tasting.service}
        </p>
        <ul className="mt-4 space-y-1 font-sans text-xs text-ink/60">
          {tastingMenu.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
