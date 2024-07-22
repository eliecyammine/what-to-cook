import { BASE_URL } from '@/lib/constants/site';

/// ---------- || ROBOTS || ---------- ///

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],

    host: BASE_URL,

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
