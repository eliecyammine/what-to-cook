'use client';

import { IconDesk, IconDeviceLaptop, IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/core/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/core/dropdown-menu';

/// ---------- || THEME TOGGLE || ---------- ///

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="text-muted-foreground hover:text-foreground focus-visible:outline-none"
          size="none"
        >
          <IconSun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

          <IconMoon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="space-y-1">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <div className="flex flex-row items-center">
            <IconSun className="mr-2 size-3.5" />
            Light
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <div className="flex flex-row items-center">
            <IconMoon className="mr-2 size-3.5" />
            Dark
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => setTheme('system')}>
          <div className="flex flex-row items-center">
            <IconDeviceLaptop className="mr-2 size-3.5" />
            System
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
