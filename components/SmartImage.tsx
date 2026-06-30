import Image from "next/image";
import { getSlot, slotImageExists, aspectToRatio } from "@/lib/images";

/**
 * Renders a real photo from a manifest slot when it exists, otherwise a
 * calm, palette-toned placeholder carrying the brand linemark. The alt text
 * always comes from the manifest, so SEO/accessibility hold either way.
 *
 * Server component — file existence is resolved at build time, so the browser
 * never requests a missing image and ships no extra JS.
 */
export default function SmartImage({
  slot: slotId,
  sizes = "100vw",
  priority = false,
  className = "",
  rounded = true,
}: {
  slot: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  rounded?: boolean;
}) {
  const slot = getSlot(slotId);
  const exists = slotImageExists(slot);
  const ratio = aspectToRatio(slot.aspect);
  const radius = rounded ? "rounded-lg" : "";

  return (
    <div
      className={`relative w-full overflow-hidden bg-sage/30 ${radius} ${className}`}
      style={{ aspectRatio: String(ratio) }}
    >
      {exists ? (
        <Image
          src={`/assets/images/${slot.file}`}
          alt={slot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <Placeholder label={slot.content} alt={slot.alt} />
      )}
    </div>
  );
}

/** Neutral, on-brand stand-in until a real photo is dropped in. */
function Placeholder({ label, alt }: { label: string; alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-sage/40 via-bone to-wood/30 p-6 text-center"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-olive/70"
        aria-hidden="true"
      >
        <path d="M12 22V8" />
        <path d="M12 12c0-3 2-5 5-5 0 3-2 5-5 5Z" />
        <path d="M12 14c0-3-2-5-5-5 0 3 2 5 5 5Z" />
      </svg>
      <span className="font-sans text-[11px] uppercase tracking-brand text-olive/70">
        {label}
      </span>
    </div>
  );
}
