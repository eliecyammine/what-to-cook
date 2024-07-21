import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/lib/constants/site';

/// ---------- || SITEMAP || ---------- ///

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [''].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
