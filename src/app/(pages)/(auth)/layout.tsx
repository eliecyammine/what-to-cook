import Link from 'next/link';

import { IconChevronLeft } from '@tabler/icons-react';

import { cn } from '@/lib/utils';

import { buttonVariants } from '@/components/core/button';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface AuthLayoutProps {
  children: React.ReactNode;
}

/// ---------- || AUTH LAYOUT || ---------- ///

export default function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-img animate-fade-in" />

      <div className="absolute left-6 top-6">
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: 'ghost',
              size: 'sm',
            }),
            'rounded-full pl-2 text-muted-foreground hover:text-foreground focus-visible:outline-none',
          )}
        >
          <>
            <IconChevronLeft className="mr-1 size-4" />

            {'Back'}
          </>
        </Link>
      </div>

      <main className="flex min-h-dvh items-center">{children}</main>
    </div>
  );
}
