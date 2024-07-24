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

  if (user) {
    return <UserAccountToggle user={user} />;
  }

  return (
    <Link
      href="/login"
      className={cn(
        buttonVariants({
          variant: 'secondary',
          size: 'sm',
        }),
        'group rounded-full focus-visible:outline-none',
      )}
    >
      <span className="text-muted-foreground group-hover:text-foreground">Login</span>
    </Link>
  );
}
