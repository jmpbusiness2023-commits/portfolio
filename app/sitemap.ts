import type { MetadataRoute } from "next";
import { alternatesFor, locales } from "@/content";
import { projects, site, tmrcCase } from "@/content/fr";

/** Chaque page existe en français (racine) et en anglais (/en), liées par hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = [
    { path: "/", changeFrequency: "monthly" as const, priority: 1 },
    { path: `/use-cases/${tmrcCase.slug}`, changeFrequency: "monthly" as const, priority: 0.9 },
    ...projects.map((p) => ({ path: `/use-cases/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
  return pages.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((locale) => {
      const { canonical, languages } = alternatesFor(path, locale);
      return {
        url: `${site.url}${canonical === "/" ? "" : canonical}`,
        lastModified,
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(languages).map(([l, p]) => [l, `${site.url}${p === "/" ? "" : p}`]),
          ),
        },
      };
    }),
  );
}
