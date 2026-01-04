import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "opengraph.githubassets.com" },
      { protocol: "https", hostname: "cdn.nederal.com" },
      { protocol: "https", hostname: "placehold.co" }
    ],
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 3600,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256]
  },
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
