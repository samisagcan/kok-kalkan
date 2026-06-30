/**
 * Section divider carrying the brand's signature marks: a small root/branch
 * linemark flanked by a lavender sprig and thin rules. Decorative only.
 */
export default function Divider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-6" aria-hidden="true">
      <span className="h-px flex-1 bg-olive/25" />
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-olive">
        {/* root / branch linemark */}
        <path d="M12 21V9" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M12 13c0-2.4 1.7-4 4.2-4-.1 2.4-1.8 4-4.2 4Z" stroke="currentColor" strokeWidth="0.9" />
        <path d="M12 15c0-2.4-1.7-4-4.2-4 .1 2.4 1.8 4 4.2 4Z" stroke="currentColor" strokeWidth="0.9" />
        {/* lavender sprig dots */}
        <circle cx="12" cy="4" r="0.8" fill="#A7B0A0" />
        <circle cx="10.6" cy="6" r="0.7" fill="#A7B0A0" />
        <circle cx="13.4" cy="6" r="0.7" fill="#A7B0A0" />
      </svg>
      <span className="h-px flex-1 bg-olive/25" />
    </div>
  );
}
