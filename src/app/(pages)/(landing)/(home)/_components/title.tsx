import Image from 'next/image';

import { cn } from '@/lib/utils';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface TitleProps {
  showRecipes: boolean;
}

/// ---------- || TITLE || ---------- ///

export default function Title({ showRecipes }: TitleProps) {
  return (
    <div className="flex animate-fade-down flex-col items-center space-y-3">
      <Image
        src="/assets/logo/What to Cook - Icon Logo.svg"
        alt="What to Cook?"
        width={showRecipes ? 50 : 80}
        height={showRecipes ? 50 : 80}
      />

      <h4
        className={cn('font-logo font-medium', !showRecipes ? 'text-5xl sm:text-6xl' : 'text-4xl')}
      >
        What to Cook?
      </h4>
    </div>
  );
}
