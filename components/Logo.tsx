/** KÖK KALKAN wordmark with the small root linemark. Light, wide-tracked. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M12 12.5c0-2.5 1.8-4.2 4.4-4.2-.1 2.5-1.9 4.2-4.4 4.2Z" stroke="currentColor" strokeWidth="1" />
        <path d="M12 14.5c0-2.5-1.8-4.2-4.4-4.2.1 2.5 1.9 4.2 4.4 4.2Z" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="font-display text-lg font-light uppercase tracking-brand">
        Kök&nbsp;Kalkan
      </span>
    </span>
  );
}
