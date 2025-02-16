import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    publicRuntimeConfig: {
        baseUrl: 'https://oliver.nederal.com',
    },
    images: {
        domains: ['opengraph.githubassets.com'],
    }
};

export default nextConfig;
