'use client';

import { IngredientsSuggestionsList } from '@/lib/constants/ingredients';

import { IngredientInput } from '@/components/core/ingredient-input';

/// ---------- || COMING SOON PAGE || ---------- ///

export default function ComingSoonPage() {
  return (
    <>
      <div className="mx-6 flex w-full max-w-xl flex-col items-center justify-center space-y-6 sm:mx-auto">
        <div className="flex animate-fade-down flex-col items-center">
          <h4 className="font-logo text-5xl font-medium sm:text-7xl">Coming Soon!</h4>
        </div>

        <div className="flex w-full flex-col items-center">
          <div className="z-10 w-full animate-fade-down">
            <IngredientInput
              disabled
              className="rounded-lg"
              placeholder="What’s in your kitchen?"
              suggestions={IngredientsSuggestionsList}
            />
          </div>
        </div>
      </div>
    </>
  );
}
