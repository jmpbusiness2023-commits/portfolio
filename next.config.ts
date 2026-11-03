import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site entièrement statique : pas de Cache Components, ce qui permet
  // dynamicParams = false (vraie 404 sur une URL /use-cases/... inconnue).
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
