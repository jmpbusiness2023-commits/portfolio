import type { MetadataRoute } from "next";
import { projects, site, tmrcCase } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/use-cases/${tmrcCase.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projects.map((p) => ({
      url: `${site.url}/use-cases/${p.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
