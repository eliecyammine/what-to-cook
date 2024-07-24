'use client';

import { IconDeviceLaptop, IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/core/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/core/dropdown-menu';

/// ---------- || THEMES || ---------- ///

const themes = [
  {
    code: 'light',
    label: 'Light',
    icon: IconSun,
    disabled: false,
  },
  {
    code: 'dark',
    label: 'Dark',
    icon: IconMoon,
    disabled: false,
  },
];

/// ---------- || THEME TOGGLE || ---------- ///

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const renderToggleIcon = () => {
    switch (theme) {
      case 'light':
        return (
          <IconSun className="size-5 text-muted-foreground transition-transform group-hover:text-foreground" />
        );

      case 'dark':
        return (
          <IconMoon className="size-5 text-muted-foreground transition-transform group-hover:text-foreground" />
        );

      case 'system':
      default:
        return (
          <IconDeviceLaptop className="size-5 text-muted-foreground transition-transform group-hover:text-foreground" />
        );
    }
  };

  const getSelectedClass = (currentTheme: string) => (theme === currentTheme ? 'bg-accent' : '');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="group rounded-full focus-visible:outline-none"
        >
          {renderToggleIcon()}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="space-y-1">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.code}
            onClick={() => setTheme(theme.code)}
            className={getSelectedClass(theme.code)}
            disabled={theme.disabled}
          >
            <div className="flex items-center">
              <theme.icon className="mr-2 size-4" />

              <span>{theme.label}</span>
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => setTheme('system')} className={getSelectedClass('system')}>
          <div className="flex items-center">
            <IconDeviceLaptop className="mr-2 size-4" />

            <span>System</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
