import Image from 'next/image';

import { IconAlertTriangle } from '@tabler/icons-react';

import { Recipe } from '@/types/recipe.type';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface RecipesGridProps {
  recipes: Recipe[];
}

/// ---------- || RECIPES GRID || ---------- ///

export default function RecipesGrid({ recipes }: RecipesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:justify-items-center">
      {recipes.map((recipe, index) => (
        <div key={index} className="flex space-x-4">
          <Image
            src={recipe.image ? recipe.image : '/assets/logo/What to Cook - Grayish Icon Logo.svg'}
            alt={recipe.title}
            width={100}
            height={100}
            className="size-28 rounded-md bg-accent"
          />

          <div className="my-3 flex w-48 flex-col justify-between">
            <h3 className="text-sm font-bold">{recipe.title}</h3>
            <p className="inline-flex items-center space-x-1 text-sm text-muted-foreground">
              <IconAlertTriangle className="size-3" />
              <span>
                {recipe.missedIngredientCount} {' missing ingredients'}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
