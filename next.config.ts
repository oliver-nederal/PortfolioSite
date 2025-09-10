import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    publicRuntimeConfig: {
        baseUrl: 'https://oliver.nederal.com',
    },
    images: {
        domains: ['opengraph.githubassets.com', 'placehold.co', 'ik.imagekit.io'],
        dangerouslyAllowSVG: true,
        minimumCacheTTL: 3600, // Cache for 1 hour minimum
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2048], // Better responsive sizes
        imageSizes: [16, 32, 48, 64, 96, 128, 256], // More granular icon sizes
    },
    staticPageGenerationTimeout: 120,
};

export default nextConfig;
