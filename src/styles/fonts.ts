import { Cookie, Pacifico } from 'next/font/google';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

/// ---------- || FONT LOGO || ---------- ///

export const fontFlowlessLogo = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-flowless-logo',
});

/// ---------- || FONT LOGO || ---------- ///

export const fontLogo = Cookie({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-logo',
});

/// ---------- || FONT SANS || ---------- ///

export const fontSans = GeistSans;

/// ---------- || FONT MONO || ---------- ///

export const fontMono = GeistMono;
