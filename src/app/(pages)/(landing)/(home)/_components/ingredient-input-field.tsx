import { IngredientsSuggestionsList } from '@/lib/constants/ingredients';
import { cn } from '@/lib/utils';

import { IngredientItem } from '@/components/core/ingredient';
import { IngredientInput } from '@/components/core/ingredient-input';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface IngredientInputFieldProps {
  ingredients: IngredientItem[];
  onSuggestionSelected: (suggestion: string) => void;
  inputError: boolean;
}

/// ---------- || INGREDIENT INPUT FIELD || ---------- ///

export default function IngredientInputField({
  ingredients,
  onSuggestionSelected,
  inputError,
}: IngredientInputFieldProps) {
  return (
    <div className="z-10 w-full animate-fade-down">
      <IngredientInput
        className={cn('rounded-lg', inputError ? 'border-destructive' : '')}
        placeholder={inputError ? 'Please add at least one ingredient' : 'What’s in your kitchen?'}
        suggestions={IngredientsSuggestionsList}
        onSuggestionSelected={onSuggestionSelected}
        existingIngredients={ingredients.map((ingredient) => ingredient.text)}
      />
    </div>
  );
}
