import { IngredientsSuggestionsList } from '@/lib/constants/ingredients';
import { cn } from '@/lib/utils';

import { IngredientInput } from '@/components/core/ingredient-input';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface IngredientInputFieldProps {
  ingredients: string[];
  onSuggestionSelected: (suggestion: string) => void;
  inputError: string | null;
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
        id="ingredient-input-field"
        className={cn('rounded-lg', inputError ? 'border-destructive' : '')}
        placeholder={inputError ? inputError : 'What’s in your kitchen?'}
        suggestions={IngredientsSuggestionsList}
        onSuggestionSelected={onSuggestionSelected}
        existingIngredients={ingredients}
      />
    </div>
  );
}
