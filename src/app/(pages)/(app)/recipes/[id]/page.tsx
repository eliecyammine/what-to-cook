'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Recipe } from '@/types/recipe.type';

import { Separator } from '@/components/core/separator';
import { Skeleton } from '@/components/core/skeleton';

import { fetchRecipeDetails } from '../_functions/fetch-recipe-details';

/// ---------- || RECIPE PAGE || ---------- ///

export default function RecipePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true);
        setError(null);

        const fetchedRecipe = await fetchRecipeDetails(id as string);

        if (fetchedRecipe) {
          setRecipe(fetchedRecipe);
        } else {
          setError('Failed to fetch recipe details');
        }

        setLoading(false);
      };

      fetchData();
    }
  }, [id]);

  if (loading)
    return (
      <div className="container mb-28 mt-36 max-w-4xl">
        <Skeleton className="h-2/3 w-full rounded-md" />

        <div className="my-4 flex flex-col space-y-4">
          <Skeleton className="h-4 w-72" />

          <Skeleton className="h-3 w-48" />
        </div>
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!recipe) return <div>No recipe found</div>;

  return (
    <div className="container mb-28 mt-36 max-w-4xl">
      <Image
        src={recipe.image ? recipe.image : '/assets/logo/What to Cook - Grayish Icon Logo.svg'}
        alt={recipe.title}
        width={2000}
        height={2000}
        className="w-full rounded-md bg-accent"
      />

      <div className="my-4 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">{recipe.title}</h1>

        <p className="text-sm">
          from:{' '}
          <Link href="" className="font-bold hover:underline">
            {recipe.creditsText}
          </Link>
        </p>

        <Separator />

        <div>
          <h4 className="font-semibold">Ingredients:</h4>

          <ul className="mt-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.amount} of {ingredient.name}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        <div>
          <h4 className="font-semibold">Instructions:</h4>

          <p className="mt-2 text-sm">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}
