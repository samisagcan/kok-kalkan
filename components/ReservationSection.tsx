import ScrollReveal from "./ScrollReveal";
import Reservation from "./Reservation";
import type { Messages } from "@/lib/i18n";

/** Server wrapper: heading + intro around the client reservation widget. */
export default function ReservationSection({ m }: { m: Messages }) {
  return (
    <section id="reserve" className="bg-forest text-bone">
      <div className="section">
        <ScrollReveal className="mx-auto max-w-prose text-center">
          <p className="font-sans text-xs uppercase tracking-brand text-sage">
            {m.reservation.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-light text-bone sm:text-4xl">
            {m.reservation.title}
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-bone/85">
            {m.reservation.intro}
          </p>
        </ScrollReveal>
        <Reservation r={m.reservation} />
      </div>
    </section>
  );
}
