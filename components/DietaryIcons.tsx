import type { Dietary } from "@/data/menu";
import type { Messages } from "@/lib/i18n";

/** Compact dietary markers shown beside à la carte / tasting dishes. */
const GLYPH: Record<Dietary, string> = {
  vegetarian: "V",
  vegan: "Ve",
  "gluten-free": "GF",
};

export default function DietaryIcons({
  dietary,
  labels,
}: {
  dietary?: Dietary[];
  labels: Messages["dietary"];
}) {
  if (!dietary || dietary.length === 0) return null;
  return (
    <span className="inline-flex flex-wrap gap-1.5">
      {dietary.map((d) => (
        <span
          key={d}
          title={labels[d]}
          aria-label={labels[d]}
          className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-olive/40 px-1.5 text-[10px] font-medium leading-none text-olive"
        >
          {GLYPH[d]}
        </span>
      ))}
    </span>
  );
}
