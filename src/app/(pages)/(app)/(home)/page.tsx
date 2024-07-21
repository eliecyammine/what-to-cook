'use client';

import { useCallback, useState } from 'react';

import {
  addIngredient,
  clearIngredients,
  removeIngredient,
} from '@/lib/features/ingredients/ingredients-slice';
import { fetchRecipes } from '@/lib/features/recipes/recipes-slice';
import { useAppDispatch, useAppSelector } from '@/lib/state/hooks';
import { cn } from '@/lib/utils';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/core/pagination';
import { Separator } from '@/components/core/separator';
import { Skeleton } from '@/components/core/skeleton';

import AlertMessage from './_components/alert-message';
import CTAButtons from './_components/cta-buttons';
import IngredientInputField from './_components/ingredient-input-field';
import IngredientsList from './_components/ingredients-list';
import RecipesGrid from './_components/recipes-grid';
import Title from './_components/title';

/// ---------- || HOME PAGE || ---------- ///

export default function HomePage() {
  const dispatch = useAppDispatch();

  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
  const recipes = useAppSelector((state) => state.recipes.recipes);

  const [showRecipes, setShowRecipes] = useState(false);

  const [inputError, setInputError] = useState(false);

  const [isExploreCTALoading, setIsExploreCTALoading] = useState(false);
  const [isLuckyCTALoading, setIsLuckyCTALoading] = useState(false);

  const handleRemoveIngredient = (id: string) => {
    dispatch(removeIngredient(id));

    if (ingredients.length === 1) {
      setShowRecipes(false);
    }
  };

  const handleClearIngredients = () => {
    dispatch(clearIngredients());

    setShowRecipes(false);
  };

  const handleSuggestionSelected = (suggestion: string) => {
    dispatch(addIngredient({ id: String(ingredients.length + 1), text: suggestion }));

    setInputError(false);
  };

  const fetchRecipesAsync = useCallback(async () => {
    if (ingredients.length === 0) {
      setInputError(true);
      return;
    }
    setIsExploreCTALoading(true);
    const ingredientsText = ingredients.map((ingredient) => ingredient.text).join(',');

    await dispatch(fetchRecipes(ingredientsText));
    setShowRecipes(true);
    setIsExploreCTALoading(false);
  }, [dispatch, ingredients]);

  const handleExplore = () => {
    if (ingredients.length === 0) {
      setInputError(true);
    } else {
      fetchRecipesAsync();
    }
  };

  return (
    <div
      className={cn(
        'container flex w-full max-w-4xl flex-col items-center space-y-6 sm:mx-auto',
        showRecipes ? 'mb-28 mt-36 md:my-16' : 'justify-center',
      )}
    >
      <Title showRecipes={showRecipes} />

      <div className="flex w-full max-w-xl flex-col items-center space-y-4">
        <IngredientInputField
          ingredients={ingredients}
          onSuggestionSelected={handleSuggestionSelected}
          inputError={inputError}
        />

        {ingredients.length > 0 ? (
          <IngredientsList
            ingredients={ingredients}
            onRemoveIngredient={handleRemoveIngredient}
            onClearIngredients={handleClearIngredients}
          />
        ) : (
          <AlertMessage />
        )}
      </div>

      {ingredients.length > 0 && showRecipes ? (
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
              {/* <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem> */}

              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>

              {/* <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem> */}
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
  );
}
