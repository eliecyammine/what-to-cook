'use client';

import { useState } from 'react';

import { IconFridge, IconInfoCircle } from '@tabler/icons-react';

import { IngredientsSuggestionsList } from '@/lib/constants/ingredients';

import { Alert, AlertDescription, AlertTitle } from '@/components/core/alert';
import { Tag, TagItem } from '@/components/core/tag';
import { TagInput } from '@/components/core/tag-input';

import CTAButtons from './_components/cta-buttons';

/// ---------- || HOME PAGE || ---------- ///

export default function HomePage() {
  const [tags, setTags] = useState<TagItem[]>([
    // { id: '1', text: 'Salt' },
    // { id: '2', text: 'Flour' },
    // { id: '3', text: 'Potato' },
    // { id: '4', text: 'Tomato' },
    // { id: '5', text: 'Bread' },
  ]);

  const handleRemoveTag = (id: string) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const handleSuggestionSelected = (suggestion: string) => {
    console.log('Selected suggestion:', suggestion);
  };

  return (
    <>
      <div className="mx-6 flex w-full max-w-xl flex-col items-center justify-center space-y-6 sm:mx-auto">
        <div className="flex animate-fade-down flex-col items-center space-y-3">
          <IconFridge strokeWidth="1.5" className="size-10 sm:size-16" />

          <h4 className="font-logo text-5xl font-medium sm:text-7xl">What to Cook?</h4>
        </div>

        <div className="flex w-full flex-col items-center space-y-3">
          <div className="w-full animate-fade-down">
            <TagInput
              className="rounded-lg"
              placeholder="What’s in your kitchen?"
              suggestions={IngredientsSuggestionsList}
              onSuggestionSelected={handleSuggestionSelected}
            />
          </div>

          {tags.length > 0 ? (
            <div className="flex animate-fade-down flex-wrap justify-center gap-2">
              {tags.map((tag) => (
                <Tag key={tag.id} tag={tag} onRemoveTag={handleRemoveTag} />
              ))}
            </div>
          ) : (
            <Alert className="animate-fade-in">
              <IconInfoCircle className="size-4" />

              <AlertTitle>Get Started!</AlertTitle>

              <AlertDescription className="text-muted-foreground">
                Our search engine will find delicious recipes you can make with what’s available in
                your fridge or pantry. Start by typing your ingredients and let us do the rest!
              </AlertDescription>
            </Alert>
          )}
        </div>

        <CTAButtons />
      </div>
    </>
  );
}
