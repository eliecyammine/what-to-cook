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

  const renderIcon = () => {
    switch (theme) {
      case 'light':
        return <IconSun className="size-5 transition-transform" />;

      case 'dark':
        return <IconMoon className="size-5 transition-transform" />;

      case 'system':
      default:
        return <IconDeviceLaptop className="size-5 transition-transform" />;
    }
  };

  const getSelectedClass = (currentTheme: string) => (theme === currentTheme ? 'bg-accent' : '');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="rounded-full text-muted-foreground hover:text-foreground focus-visible:outline-none"
          size="icon"
        >
          {renderIcon()}

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
            <div className="flex flex-row items-center">
              <theme.icon className="mr-2 size-4" />
              <span>{theme.label}</span>
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => setTheme('system')} className={getSelectedClass('system')}>
          <div className="flex flex-row items-center">
            <IconDeviceLaptop className="mr-2 size-4" />

            <span>System</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
