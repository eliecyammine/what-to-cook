'use client';

import { useCallback, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/core/pagination';
import { Separator } from '@/components/core/separator';
import { Skeleton } from '@/components/core/skeleton';
import { TagItem } from '@/components/core/tag';

import AlertMessage from './_components/alert-message';
import CTAButtons from './_components/cta-buttons';
import RecipesGrid from './_components/recipes-grid';
import TagInputField from './_components/tag-input-field';
import TagsList from './_components/tags-list';
import Title from './_components/title';

/// ---------- || HOME PAGE || ---------- ///

export default function HomePage() {
  const [tags, setTags] = useState<TagItem[]>([]);

  const [showRecipes, setShowRecipes] = useState(false);
  const [recipes, setRecipes] = useState<[]>([]);

  const [inputError, setInputError] = useState(false);

  const [isExploreCTALoading, setIsExploreCTALoading] = useState(false);
  const [isLuckyCTALoading, setIsLuckyCTALoading] = useState(false);

  const SPOONACULAR_API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

  const handleRemoveTag = (id: string) => {
    const updatedTags = tags.filter((tag) => tag.id !== id);
    setTags(updatedTags);

    if (updatedTags.length === 0) {
      setShowRecipes(false);
    }
  };

  const handleClearTags = () => {
    setTags([]);

    setShowRecipes(false);
  };

  const handleSuggestionSelected = (suggestion: string) => {
    setTags([...tags, { id: String(tags.length + 1), text: suggestion }]);
    setInputError(false);
  };

  const fetchRecipes = useCallback(async () => {
    if (tags.length === 0) {
      setInputError(true);
      return;
    }

    setIsExploreCTALoading(true);
    try {
      const ingredients = tags.map((tag) => tag.text).join(',');
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${SPOONACULAR_API_KEY}`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setRecipes(data);
      setShowRecipes(true);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setIsExploreCTALoading(false);
    }
  }, [SPOONACULAR_API_KEY, tags]);

  const handleExplore = () => {
    if (tags.length === 0) {
      setInputError(true);
    } else {
      fetchRecipes();
    }
  };

  useEffect(() => {
    if (showRecipes && tags.length > 0) {
      fetchRecipes();
    } else if (tags.length === 0) {
      setShowRecipes(false);
    }
  }, [fetchRecipes, showRecipes, tags]);

  return (
    <>
      <div
        className={cn(
          'container flex w-full max-w-4xl flex-col items-center space-y-6 sm:mx-auto',
          !showRecipes ? 'justify-center' : 'mb-28 mt-36 md:my-16',
        )}
      >
        <Title showRecipes={showRecipes} />

        <div className="flex w-full max-w-xl flex-col items-center space-y-4">
          <TagInputField
            tags={tags}
            onSuggestionSelected={handleSuggestionSelected}
            inputError={inputError}
          />

          {tags.length > 0 ? (
            <TagsList tags={tags} onRemoveTag={handleRemoveTag} onClearTags={handleClearTags} />
          ) : (
            <AlertMessage />
          )}
        </div>

        {tags.length > 0 && showRecipes ? (
          <div className="mt-6 w-full animate-fade-in space-y-4">
            <Separator className="mb-6" />

            {showRecipes ? (
              <RecipesGrid recipes={recipes} />
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:justify-items-center">
                {[...Array(20)].map((_, index) => (
                  <div key={`skeleton-${index}`} className="flex items-center space-x-4">
                    <Skeleton className="size-28 rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[200px]" />
                      <Skeleton className="h-4 w-[200px]" />
                      <Skeleton className="h-4 w-[150px]" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Pagination className="max-w-xl">
              <PaginationContent className="mt-10">
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        ) : (
          <CTAButtons
            onExplore={handleExplore}
            isExploreCTALoading={isExploreCTALoading}
            isLuckyCTALoading={isLuckyCTALoading}
          />
        )}
      </div>
    </>
  );
}
