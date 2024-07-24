import Image from 'next/image';
import Link from 'next/link';

import { IconAlertTriangle } from '@tabler/icons-react';

import { Recipe } from '@/types/recipe.type';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/core/tooltip';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface RecipesGridProps {
  recipes: Recipe[];
}

/// ---------- || RECIPES GRID || ---------- ///

export default function RecipesGrid({ recipes }: RecipesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:justify-items-center">
      {recipes.map((recipe, index) => (
        <Link
          key={index}
          href={`/recipes/${recipe.id}`}
          className="flex space-x-4 rounded-lg p-1.5 hover:bg-muted"
        >
          <Image
            src={recipe.image ? recipe.image : '/assets/logo/What to Cook - Grayish Icon Logo.svg'}
            alt={recipe.title}
            width={2000}
            height={2000}
            className="size-28 rounded-md bg-accent"
          />

          <div className="my-3 flex w-48 flex-col justify-between">
            <Tooltip>
              <TooltipTrigger asChild>
                <h3 className="line-clamp-2 text-ellipsis text-sm font-bold">{recipe.title}</h3>
              </TooltipTrigger>

              <TooltipContent>{recipe.title}</TooltipContent>
            </Tooltip>

            <p className="flex items-center space-x-1 text-sm text-muted-foreground">
              <IconAlertTriangle className="size-3" />
              <span>
                {recipe.missedIngredientCount} {' missing ingredients'}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
