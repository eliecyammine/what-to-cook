'use client';

import { IconClover, IconCookie } from '@tabler/icons-react';

import { Button } from '@/components/core/button';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface CTAButtonsProps {
  onExplore: () => void;
  isExploreCTALoading: boolean;
}

/// ---------- || CTA BUTTONS || ---------- ///

export default function CTAButtons({ onExplore, isExploreCTALoading }: CTAButtonsProps) {
  return (
    <div className="flex animate-fade-in flex-row items-center">
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
    </div>
  );
}
