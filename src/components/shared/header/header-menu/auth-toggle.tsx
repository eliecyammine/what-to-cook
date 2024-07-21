import Link from 'next/link';

import { createClient } from '@/lib/services/supabase/server';
import { cn } from '@/lib/utils';

import { buttonVariants } from '@/components/core/button';

import { UserAccountToggle } from './user-account-toggle';

/// ---------- || AUTH TOGGLE || ---------- ///

export async function AuthToggle() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <UserAccountToggle user={user} />
  ) : (
    <Link
      href="/login"
      className={cn(
        buttonVariants({
          variant: 'secondary',
          size: 'sm',
        }),
        'rounded-full text-muted-foreground hover:text-foreground focus-visible:outline-none',
      )}
    >
      Login
    </Link>
  );
}
