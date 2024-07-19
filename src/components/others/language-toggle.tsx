'use client';

import { IconLanguage } from '@tabler/icons-react';

import { Button } from '@/components/core/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/core/dropdown-menu';

const languages = [
  {
    code: 'en',
    label: 'English',
    disabled: false,
  },
  // {
  //   code: 'ar',
  //   label: 'Arabic',
  //   disabled: true,
  // },
  // {
  //   code: 'fr',
  //   label: 'French',
  //   disabled: true,
  // },
  // {
  //   code: 'es',
  //   label: 'Spanish',
  //   disabled: true,
  // },
];

/// ---------- || LANGUAGE TOGGLE || ---------- ///

export function LanguageToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="rounded-full text-muted-foreground hover:text-foreground focus-visible:outline-none"
          size="icon"
        >
          <IconLanguage className="size-5" />

          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="space-y-1">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} onClick={() => {}} disabled={language.disabled}>
            <div className="flex flex-row items-center">
              <span>{language.label}</span>
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => {}} disabled>
          <div className="flex flex-row items-center">System</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
