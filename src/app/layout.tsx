import { ThemeProvider } from '@/lib/providers/theme-provider';
import { cn } from '@/lib/utils';

import { TooltipProvider } from '@/components/core/tooltip';
import TailwindIndicator from '@/components/others/tailwind-indicator';

import { fontFlowlessLogo, fontLogo, fontMono, fontSans } from '@/styles/fonts';
import '@/styles/globals.css';

export { metadata } from './metadata';

export { viewport } from './viewport';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface RootLayoutProps {
  children: React.ReactNode;
}

/// ---------- || ROOT LAYOUT || ---------- ///

export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          fontFlowlessLogo.variable,
          fontLogo.variable,
          fontSans.variable,
          fontMono.variable,
          'overflow-x-hidden font-sans antialiased',
        )}
      >
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>

          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
