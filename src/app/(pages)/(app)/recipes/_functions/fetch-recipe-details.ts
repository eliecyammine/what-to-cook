import axios from 'axios';

import { Recipe } from '@/types/recipe.type';

const spoonacularAPI = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY!;

/// ---------- || FETCH RECIPE DETAILS || ---------- ///

export const fetchRecipeDetails = async (id: string): Promise<Recipe | null> => {
  // try {
  //   await fetch('/api/log-history', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ ingredients }),
  //   });
  // } catch (error) {
  //   console.error('Error logging fetch history:', error);
  // }

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${spoonacularAPI}`,
    );
    const data = response.data;

    const ingredients = data.extendedIngredients.map((ingredient: any) => ({
      name: ingredient.name,
      amount: `${ingredient.amount} ${ingredient.unit}`,
    }));

    return {
      id: data.id,
      title: data.title,
      image: data.image,
      creditsText: data.creditsText,
      ingredients: ingredients,
      instructions: data.instructions,
    };
  } catch (error) {
    console.error('Failed to fetch recipe details:', error);
    return null;
  }
};
