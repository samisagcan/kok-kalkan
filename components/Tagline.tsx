/** Renders the brand's "Roots • Memory • Modern" dotted rhythm from an array. */
export default function Tagline({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  return (
    <span className={`dotted ${className}`}>
      {words.map((w) => (
        <span key={w}>{w}</span>
      ))}
    </span>
  );
}
