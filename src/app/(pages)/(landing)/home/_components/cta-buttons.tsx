'use client';

import { Button } from '@/components/core/button';

/// ---------- || CTA BUTTONS || ---------- ///

export default function CTAButtons() {
  return (
    <div className="flex animate-fade-in flex-row items-center space-x-3">
      <Button variant="default" onClick={() => console.log(`Explore Button Clicked!`)}>
        <h4>{`Explore Recipes`}</h4>
      </Button>

      <Button variant="outline" onClick={() => console.log(`I'm Feeling Lucky Button Clicked!`)}>
        <h4>{`I'm Feeling Lucky`}</h4>
      </Button>
    </div>
  );
}
