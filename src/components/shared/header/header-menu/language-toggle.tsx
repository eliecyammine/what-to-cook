'use client';

import { IconDeviceLaptop, IconLanguage } from '@tabler/icons-react';

import { Button } from '@/components/core/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/core/dropdown-menu';

/// ---------- || LANGUAGES || ---------- ///

const languages = [
  {
    code: 'en',
    label: 'English',
    disabled: false,
  },
  {
    code: 'fr',
    label: 'French',
    disabled: true,
  },
  {
    code: 'es',
    label: 'Spanish',
    disabled: true,
  },
  {
    code: 'ar',
    label: 'Arabic',
    disabled: true,
  },
];

/// ---------- || LANGUAGE TOGGLE || ---------- ///

export function LanguageToggle() {
  // const getSelectedClass = (currentLanguage: string) => language === currentLanguage ? 'bg-accent' : '';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="group rounded-full focus-visible:outline-none"
        >
          <IconLanguage className="size-5 text-muted-foreground group-hover:text-foreground" />

          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="space-y-1">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {}}
            // className={getSelectedClass(language.code)}
            disabled={language.disabled}
          >
            <div className="flex items-center">
              <span className="mr-2 w-4 rounded-full text-center text-xs font-semibold text-muted-foreground">
                {language.code}
              </span>

              <span>{language.label}</span>
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => {}}
          // className={getSelectedClass('system')}
          disabled
        >
          <div className="flex items-center">
            <IconDeviceLaptop className="mr-2 size-4" />

            <span>System</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
