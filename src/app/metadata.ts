import type { Metadata } from 'next';

import { BASE_URL, DESCRIPTION, SLOGAN, TITLE } from '@/lib/constants/site';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: {
    default: `${TITLE} | ${SLOGAN}`,
    template: `%s | ${TITLE}`,
  },

  description: DESCRIPTION,

  metadataBase: new URL(BASE_URL),

  authors: [
    {
      name: TITLE,
      url: BASE_URL,
    },
  ],

  creator: TITLE,

  applicationName: TITLE,

  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',

    title: TITLE,
  },

  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-16x16.png',
    apple: '/favicons/apple-touch-icon.png',
  },

  manifest: `/site.webmanifest`,

  openGraph: {
    title: {
      default: `${TITLE} | ${SLOGAN}`,
      template: `%s | ${TITLE}`,
    },

    description: DESCRIPTION,

    url: BASE_URL,
    siteName: TITLE,

    locale: 'en_US',
    type: 'website',
  },

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
