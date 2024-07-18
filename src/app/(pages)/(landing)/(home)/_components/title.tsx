import { IconFridge } from '@tabler/icons-react';

import { cn } from '@/lib/utils';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface TitleProps {
  showRecipes: boolean;
}

/// ---------- || TITLE || ---------- ///

export default function Title({ showRecipes }: TitleProps) {
  return (
    <div className="flex animate-fade-down flex-col items-center space-y-2">
      <IconFridge
        strokeWidth="1.5"
        className={cn(!showRecipes ? 'size-10 sm:size-16' : 'size-7')}
      />

      <h4
        className={cn('font-logo font-medium', !showRecipes ? 'text-5xl sm:text-7xl' : 'text-4xl')}
      >
        What to Cook?
      </h4>
    </div>
  );
}
