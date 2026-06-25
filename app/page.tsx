import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kök Kalkan",
  robots: { index: false, follow: false },
};

/**
 * EN is the primary language. This root page sends visitors to /en using a
 * meta refresh, which works everywhere — including the fully static GitHub
 * Pages export, where a server-side redirect() is not available. The relative
 * "./en/" target resolves correctly with or without the /kok-kalkan base path.
 */
export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=./en/" />
      </head>
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", background: "#EFE9DF", color: "#23261F" }}>
        <p>
          Redirecting to <a href="./en/">Kök Kalkan</a>…
        </p>
      </body>
    </html>
  );
}
