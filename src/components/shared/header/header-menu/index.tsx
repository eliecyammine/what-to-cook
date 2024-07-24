import Link from 'next/link';

import { IconBrandGithub } from '@tabler/icons-react';

import { cn } from '@/lib/utils';

import { buttonVariants } from '@/components/core/button';

import { AuthToggle } from './auth-toggle';
import { LanguageToggle } from './language-toggle';
import { SettingsToggle } from './settings-toggle';
import { ThemeToggle } from './theme-toggle';

/// ---------- || HEADER MENU || ---------- ///

export default function HeaderMenu() {
  return (
    <div className="flex items-center space-x-1">
      <Link
        href="https://github.com/eliecyammine/what-to-cook"
        className={cn(
          buttonVariants({
            variant: 'secondary',
            size: 'icon',
          }),
          'group rounded-full focus-visible:outline-none',
        )}
      >
        <IconBrandGithub className="size-5 text-muted-foreground group-hover:text-foreground" />
      </Link>

      <ThemeToggle />

      <LanguageToggle />

      <SettingsToggle />

      <AuthToggle />
    </div>
  );
}
