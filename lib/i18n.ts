import en from "@/messages/en.json";
import tr from "@/messages/tr.json";
import { locales, type Locale } from "@/config/site";

/**
 * Server-side dictionary loader. No client runtime — pages are static per
 * locale, so translations never ship as JS to the browser.
 */
const dictionaries = { en, tr } as const;

/** The message shape, inferred from the English dictionary (source of truth). */
export type Messages = typeof en;

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** The "other" locale, for the language toggle. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "tr" : "en";
}
