'use client';

import { useState } from 'react';

import Link from 'next/link';

import { IconAdjustments, IconBrandGithub, IconUser, IconUserCircle } from '@tabler/icons-react';

import { cn } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/core/avatar';
import { Badge } from '@/components/core/badge';
import { buttonVariants } from '@/components/core/button';
import { LanguageToggle } from '@/components/others/language-toggle';
import { ThemeToggle } from '@/components/others/theme-toggle';

/// ---------- || HEADER || ---------- ///

export default function Header() {
  const [hasUser, setHasUser] = useState(false);

  return (
    <div className="absolute top-10 flex w-full flex-col items-center space-y-2 md:flex-row md:space-y-0">
      <div className="flex animate-fade-down items-start space-x-1 md:absolute md:left-10">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground focus-visible:outline-none"
        >
          <h4 className="font-logo text-2xl font-medium">What to Cook?</h4>
        </Link>

        <Badge variant="outline" className="px-2 py-[1px] text-muted-foreground">
          Alpha
        </Badge>
      </div>

      <div className="inline-flex animate-fade-down items-center space-x-1 md:absolute md:right-10">
        <Link
          href="https://github.com/eliecyammine/what-to-cook"
          className={cn(
            buttonVariants({
              variant: 'secondary',
              size: 'icon',
            }),
            'rounded-full text-muted-foreground hover:text-foreground focus-visible:outline-none',
          )}
        >
          <IconBrandGithub className="size-5" />
        </Link>

        <ThemeToggle />

        <LanguageToggle />

        <Link
          href=""
          className={cn(
            buttonVariants({
              variant: 'secondary',
              size: 'icon',
            }),
            'cursor-not-allowed rounded-full text-muted-foreground opacity-50 focus-visible:outline-none',
          )}
        >
          <IconAdjustments className="size-5" />
        </Link>

        <Link
          href=""
          className={cn(
            buttonVariants({
              variant: 'secondary',
              size: hasUser ? 'icon' : 'sm',
            }),
            'cursor-not-allowed rounded-full text-muted-foreground opacity-50 focus-visible:outline-none',
          )}
        >
          {hasUser ? (
            <Avatar>
              {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
              <AvatarFallback>
                <IconUserCircle className="size-5" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <span>{`Login`}</span>
          )}
        </Link>
      </div>
    </div>
  );
}
