import { IngredientsSuggestionsList } from '@/lib/constants/ingredients';

import { IngredientInput } from '@/components/core/ingredient-input';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface IngredientInputFieldProps {
  ingredients: string[];
  onSuggestionSelected: (suggestion: string) => void;
}

/// ---------- || INGREDIENT INPUT FIELD || ---------- ///

export default function IngredientInputField({
  ingredients,
  onSuggestionSelected,
}: IngredientInputFieldProps) {
  return (
    <div className="z-10 w-full">
      <IngredientInput
        id="ingredient-input-field"
        className="rounded-lg"
        placeholder="What’s in your kitchen?"
        suggestions={IngredientsSuggestionsList}
        onSuggestionSelected={onSuggestionSelected}
        existingIngredients={ingredients.map((ingredient) => ingredient)}
      />
    </div>
  );
}
