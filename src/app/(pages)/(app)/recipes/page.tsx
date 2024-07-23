'use client';

import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/core/pagination';
import { Separator } from '@/components/core/separator';
import { Skeleton } from '@/components/core/skeleton';
import { LogoWithText } from '@/components/shared/logo';

import IngredientInputField from './_components/ingredient-input-field';
import IngredientsList from './_components/ingredients-list';
import RecipesGrid from './_components/recipes-grid';
import { fetchRecipes } from './_functions/fetch-recipes';

/// ---------- || RECIPES PAGE || ---------- ///

export default function RecipesPage({
  searchParams,
}: {
  searchParams: {
    ingredients: string;
  };
}) {
  const router = useRouter();

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Extract and memoize ingredients from searchParams
  const ingredients = useMemo(
    () => (searchParams?.ingredients ? searchParams.ingredients.split(',') : []),
    [searchParams.ingredients],
  );

  // Remove a specific ingredient and update URL
  const handleRemoveIngredient = (ingredientToRemove: string) => {
    const newIngredients = ingredients.filter((ingredient) => ingredient !== ingredientToRemove);

    if (newIngredients.length === 0) {
      router.push('/');
    } else {
      router.push(`/recipes?ingredients=${encodeURIComponent(newIngredients.join(','))}`);
    }
  };

  // Clear all ingredients and navigate to homepage
  const handleClearIngredients = () => {
    router.push('/');
  };

  // Add a new ingredient and update URL
  const handleSuggestionSelected = (ingredient: string) => {
    const newIngredients = [...ingredients, ingredient];

    router.push(`/recipes?ingredients=${encodeURIComponent(newIngredients.join(','))}`);
  };

  // Fetch recipes based on ingredients
  useEffect(() => {
    const fetchAndSetRecipes = async () => {
      setLoading(true);
      setError(null);

      const { recipes, error } = await fetchRecipes(ingredients, router);

      setRecipes(recipes);
      setError(error);
      setLoading(false);
    };

    fetchAndSetRecipes();
  }, [ingredients, router]);

  return (
    <div className="container mb-28 mt-36 flex w-full max-w-4xl animate-fade-up flex-col items-center space-y-4 sm:mx-auto md:my-16">
      <LogoWithText isSmall={true} />

      <div className="flex w-full max-w-xl animate-fade-in flex-col items-center space-y-4">
        <IngredientInputField
          ingredients={ingredients}
          onSuggestionSelected={handleSuggestionSelected}
        />

        <IngredientsList
          ingredients={ingredients}
          onRemoveIngredient={handleRemoveIngredient}
          onClearIngredients={handleClearIngredients}
        />
      </div>

      <div className="mt-6 w-full animate-fade-in space-y-3">
        <Separator className="mb-6" />

        {loading ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:justify-items-center">
            {[...Array(10)].map((_, index) => (
              <div key={`skeleton-${index}`} className="flex space-x-4">
                <Skeleton className="size-28 rounded-md" />

                <div className="my-3 flex w-48 flex-col justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>

                  <Skeleton className="h-3 w-36" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-destructive">{error}</div>
        ) : (
          <RecipesGrid recipes={recipes} />
        )}

        <Pagination className="max-w-xl">
          <PaginationContent className="mt-10">
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
