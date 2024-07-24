'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Recipe } from '@/types/recipe.type';

import { Dialog, DialogContent } from '@/components/core/dialog';
import { Separator } from '@/components/core/separator';

import { fetchRecipeDetails } from '../../../_functions/fetch-recipe-details';

/// ---------- || RECIPE MODAL || ---------- ///

export default function RecipeModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const router = useRouter();

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

  if (loading) return;
  <Dialog defaultOpen>
    <DialogContent hasClose={false} onOverlayClick={() => router.back()} className="max-w-3xl">
      Loading...
    </DialogContent>
  </Dialog>;

  if (error) return <div>{error}</div>;
  if (!recipe) return <div>No recipe found</div>;

  return (
    <Dialog defaultOpen>
      <DialogContent hasClose={false} onOverlayClick={() => router.back()} className="max-w-4xl">
        <Image
          src={recipe.image ? recipe.image : '/assets/logo/What to Cook - Grayish Icon Logo.svg'}
          alt={recipe.title}
          width={2000}
          height={2000}
          className="w-full rounded-md bg-accent"
        />

        <div className="my-3 flex flex-col space-y-2">
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
      </DialogContent>
    </Dialog>
  );
}
