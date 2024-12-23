import type { MetadataRoute } from 'next'

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const baseUrl = publicRuntimeConfig.baseUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
      sitemap: `${baseUrl}/sitemap.xml`,
  }
}
