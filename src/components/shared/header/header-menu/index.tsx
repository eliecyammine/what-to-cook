import Link from 'next/link';

import { IconBrandGithub } from '@tabler/icons-react';

import { createClient } from '@/lib/services/supabase/server';
import { cn } from '@/lib/utils';

import { buttonVariants } from '@/components/core/button';

import { AuthToggle } from './auth-toggle';
import { LanguageToggle } from './language-toggle';
import { SettingsToggle } from './settings-toggle';
import { ThemeToggle } from './theme-toggle';

/// ---------- || HEADER MENU || ---------- ///

export default function HeaderMenu() {
  const canInitSupabaseClient = () => {
    try {
      createClient();

      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="inline-flex items-center space-x-1">
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

      <SettingsToggle />

      {isSupabaseConnected && <AuthToggle />}
    </div>
  );
}
