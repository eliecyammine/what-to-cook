'use client';

import { useState } from 'react';

import Link from 'next/link';

import { User } from '@supabase/supabase-js';
import { IconUserCircle } from '@tabler/icons-react';

import { signOut } from '@/lib/actions/auth';

import { Avatar, AvatarFallback } from '@/components/core/avatar';
import { Button } from '@/components/core/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/core/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/core/dropdown-menu';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface UserAccountToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'email'>;
}

/// ---------- || USER ACCOUNT TOGGLE || ---------- ///

export function UserAccountToggle({ user }: UserAccountToggleProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogout = () => {
    setIsDialogOpen(false);

    signOut();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="group rounded-full focus-visible:outline-none"
          >
            <Avatar>
              <AvatarFallback>
                <IconUserCircle className="size-5 text-muted-foreground group-hover:text-foreground" />
              </AvatarFallback>
            </Avatar>

            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="space-y-1">
          <div className="flex min-w-52 flex-col space-y-1 p-2 leading-none">
            <h4 className="text-sm font-medium">Welcome back,</h4>

            {user.email && <p className="truncate text-sm text-muted-foreground">{user.email}</p>}
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild disabled>
            <Link href="/history">History</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild className="p-0">
            <Button
              variant="destructive"
              size="sm"
              type="button"
              className="w-full"
              onClick={() => setIsDialogOpen(true)}
            >
              <span>Logout</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>

            <DialogDescription>
              <p>Are you sure you want to log out?</p>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>

            <Button variant="destructive" onClick={handleLogout}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
