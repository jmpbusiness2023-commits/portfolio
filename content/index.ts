import { lang } from "next/root-params";
import * as fr from "./fr";
import * as en from "./en";

/** Le français est servi à la racine (`/`), l'anglais sous `/en`. */
export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export type Content = typeof fr;

/** `en` doit avoir exactement la même structure que `fr` : TypeScript le vérifie ici. */
const dictionaries: Record<Locale, Content> = { fr, en };

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/**
 * Contenu de la langue courante. Sans argument, la langue est lue dans l'URL
 * (segment `[lang]`) : utilisable dans n'importe quel composant serveur.
 */
export async function getContent(locale?: string): Promise<Content> {
  const value = locale ?? (await lang());
  return dictionaries[hasLocale(value) ? value : defaultLocale];
}

/** Chemin public d'une page dans une langue donnée (`path` est le chemin français, ex. "/use-cases/x"). */
export function localizedPath(path: string, locale: Locale) {
  if (locale === defaultLocale) return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** URL canonique et liens hreflang d'une page. */
export function alternatesFor(path: string, locale: Locale) {
  return {
    canonical: localizedPath(path, locale),
    languages: {
      fr: localizedPath(path, "fr"),
      en: localizedPath(path, "en"),
      "x-default": localizedPath(path, defaultLocale),
    },
  };
}
