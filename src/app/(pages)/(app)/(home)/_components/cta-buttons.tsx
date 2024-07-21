'use client';

import { IconClover, IconCookie } from '@tabler/icons-react';

import { Button } from '@/components/core/button';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface CTAButtonsProps {
  onExplore: () => void;
  isExploreCTALoading: boolean;
  isLuckyCTALoading: boolean;
}

/// ---------- || CTA BUTTONS || ---------- ///

export default function CTAButtons({
  onExplore,
  isExploreCTALoading,
  isLuckyCTALoading,
}: CTAButtonsProps) {
  return (
    <div className="flex animate-fade-in flex-row items-center space-x-3">
      <Button
        onClick={onExplore}
        aria-label={isExploreCTALoading ? 'Loading...' : 'Explore Recipes'}
        disabled={isExploreCTALoading}
      >
        {isExploreCTALoading ? (
          <IconCookie className="animate-spin" aria-hidden="true" />
        ) : (
          'Explore Recipes'
        )}
      </Button>

      <Button
        variant="outline"
        onClick={() => console.log(`I'm Feeling Lucky Button Clicked!`)}
        aria-label={isLuckyCTALoading ? 'Loading...' : `I'm Feeling Lucky`}
        disabled
      >
        {isLuckyCTALoading ? (
          <IconClover className="animate-spin" aria-hidden="true" />
        ) : (
          `I'm Feeling Lucky`
        )}
      </Button>
    </div>
  );
}
