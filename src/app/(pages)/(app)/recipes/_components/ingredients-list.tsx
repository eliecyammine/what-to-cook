import { Button } from '@/components/core/button';
import { Ingredient } from '@/components/core/ingredient';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface IngredientsListProps {
  ingredients: string[];

  onRemoveIngredient: (id: string) => void;
  onClearIngredients: () => void;
}

/// ---------- || INGREDIENTS LIST || ---------- ///

export default function IngredientsList({
  ingredients,
  onRemoveIngredient,
  onClearIngredients,
}: IngredientsListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient}
          ingredient={ingredient}
          onRemoveIngredient={onRemoveIngredient}
        />
      ))}

      {ingredients.length > 0 && (
        <Button onClick={onClearIngredients} variant="link" size="sm" className="text-destructive">
          <span className="text-xs">{`Clear Ingredients`}</span>
        </Button>
      )}
    </div>
  );
}
