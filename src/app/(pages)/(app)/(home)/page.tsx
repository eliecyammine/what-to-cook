'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { LogoWithText } from '@/components/shared/logo';

import AlertMessage from './_components/alert-message';
import CTAButtons from './_components/cta-buttons';
import IngredientInputField from './_components/ingredient-input-field';
import IngredientsList from './_components/ingredients-list';

/// ---------- || HOME PAGE || ---------- ///

export default function HomePage() {
  const router = useRouter();

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputError, setInputError] = useState<string | null>(null);
  const [isExploreCTALoading, setIsExploreCTALoading] = useState(false);

  // Remove a specific ingredient
  const handleRemoveIngredient = (ingredientToRemove: string) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient !== ingredientToRemove),
    );
  };

  // Clear all ingredients
  const handleClearIngredients = () => {
    setIngredients([]);
  };

  // Add a selected suggestion
  const handleSuggestionSelected = (ingredient: string) => {
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);

    setInputError(null);
  };

  // Navigate to recipes page with ingredients
  const handleExplore = () => {
    if (ingredients.length === 0) {
      setInputError('Please add at least one ingredient.');
      return;
    }

    setIsExploreCTALoading(true);

    const ingredientsText = ingredients.join(',');
    router.push(`/recipes?ingredients=${encodeURIComponent(ingredientsText)}`);
  };

  return (
    <div className="container flex w-full max-w-4xl flex-col items-center justify-center space-y-6 sm:mx-auto">
      <LogoWithText isSmall={false} className="animate-fade-down" />

      <div className="flex w-full max-w-xl flex-col items-center space-y-4">
        <IngredientInputField
          ingredients={ingredients}
          onSuggestionSelected={handleSuggestionSelected}
          inputError={inputError}
        />

        {ingredients.length > 0 ? (
          <IngredientsList
            ingredients={ingredients}
            onRemoveIngredient={handleRemoveIngredient}
            onClearIngredients={handleClearIngredients}
          />
        ) : (
          <AlertMessage />
        )}
      </div>

      <CTAButtons onExplore={handleExplore} isExploreCTALoading={isExploreCTALoading} />
    </div>
  );
}
