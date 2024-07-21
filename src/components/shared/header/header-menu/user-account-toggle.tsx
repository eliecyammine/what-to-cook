import Link from 'next/link';

import { User } from '@supabase/supabase-js';
import { IconUserCircle } from '@tabler/icons-react';

import { signOut } from '@/lib/actions/auth';

import { Avatar, AvatarFallback } from '@/components/core/avatar';
import { Button } from '@/components/core/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/core/dropdown-menu';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'email'>;
}

/// ---------- || USER ACCOUNT TOGGLE || ---------- ///

export function UserAccountToggle({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full text-muted-foreground hover:text-foreground focus-visible:outline-none"
        >
          <Avatar>
            <AvatarFallback>
              <IconUserCircle className="size-5" />
            </AvatarFallback>
          </Avatar>

          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="space-y-1">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">Welcome back,</p>

            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild disabled>
          <Link href="/history">History</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer" asChild>
          <form action={signOut}>
            <button>Logout</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
