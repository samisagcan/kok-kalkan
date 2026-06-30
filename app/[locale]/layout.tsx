import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { display, body } from "@/app/fonts";
import { getMessages, isLocale } from "@/lib/i18n";
import { restaurantJsonLd } from "@/lib/structured-data";
import { locales, siteUrl, type Locale } from "@/config/site";

/** Only en/tr are built; any other segment 404s. */
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = getMessages(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: m.meta.title,
    description: m.meta.description,
    keywords: [
      "Kalkan fine dining",
      "Kalkan tasting menu",
      "chef's table Kalkan",
      "modern Turkish cuisine Kalkan",
      "Kök Kalkan",
      "Ozan Orakcı",
    ],
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        tr: `${siteUrl}/tr`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Kök Kalkan",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      title: m.meta.title,
      description: m.meta.description,
      url: `${siteUrl}/${locale}`,
      images: [
        {
          url: "/assets/images/og-terrace-sunset.jpg",
          width: 1200,
          height: 630,
          alt: m.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.meta.title,
      description: m.meta.description,
      images: ["/assets/images/og-terrace-sunset.jpg"],
    },
    // Favicon is provided by the file convention at app/icon.svg.
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;

  return (
    <html lang={typedLocale} className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-forest focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd(typedLocale)),
          }}
        />
      </body>
    </html>
  );
}
