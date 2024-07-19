import Image from 'next/image';

import { IconAlertTriangle } from '@tabler/icons-react';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface RecipesGridProps {
  recipes: any[];
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
            width={112}
            height={112}
            className="size-28 rounded-md"
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
