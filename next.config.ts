import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site entièrement statique : pas de Cache Components, ce qui permet
  // dynamicParams = false (vraie 404 sur une URL /use-cases/... inconnue).

  // Les pages vivent sous app/[lang]. Le français garde ses URL à la racine :
  // "/" et "/use-cases/..." sont servis en interne depuis "/fr/...".
  // L'anglais est servi tel quel sous "/en/...".
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        { source: "/", destination: "/fr" },
        { source: "/use-cases/:slug", destination: "/fr/use-cases/:slug" },
      ],
      fallback: [],
    };
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
