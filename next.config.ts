import type { NextConfig } from "next";

/**
 * When building for GitHub Pages we produce a fully static export served from
 * a project sub-path (/kok-kalkan). The workflow sets GITHUB_PAGES=true. Local
 * dev and a future Vercel deploy keep the default (optimized images, server
 * runtime) by leaving that env var unset.
 */
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: isPages
    ? { unoptimized: true } // no image optimizer on static hosting
    : { formats: ["image/avif", "image/webp"] },
  ...(isPages
    ? {
        output: "export",
        basePath: "/kok-kalkan",
        assetPrefix: "/kok-kalkan/",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
