import type { Metadata } from 'next';

import { ThemeProvider } from '@/lib/providers/theme-provider';
import { cn } from '@/lib/utils';

import TailwindIndicator from '@/components/others/tailwind-indicator';

import { fontFlowlessLogo, fontLogo, fontMono, fontSans } from '@/styles/fonts';
import '@/styles/globals.css';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: {
    default: 'What to Cook? | Discover Delicious Recipes with What You Have',
    template: `%s | What to Cook?`,
  },

  description: 'Discover Delicious Recipes with What You Have',
};

/// ---------- || TYPES & INTERFACES || ---------- ///

interface RootLayoutProps {
  children: React.ReactNode;
}

/// ---------- || ROOT LAYOUT || ---------- ///

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          fontFlowlessLogo.variable,
          fontLogo.variable,
          fontSans.variable,
          fontMono.variable,
          'font-sans antialiased',
        )}
      >
        <ThemeProvider>
          {children}

          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
