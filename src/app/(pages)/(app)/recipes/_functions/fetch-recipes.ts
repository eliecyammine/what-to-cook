import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import axios from 'axios';

const spoonacularAPI = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY!;

/// ---------- || FETCH RECIPES || ---------- ///

export const fetchRecipes = async (ingredients: string[], router: AppRouterInstance) => {
  if (ingredients.length === 0) {
    router.push('/');
    return {
      recipes: [],
      error: 'No ingredients provided',
    };
  }

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
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredients.join(','))}&number=30&ranking=2&ignorePantry=true&apiKey=${spoonacularAPI}`,
    );

    return {
      recipes: response.data,
      error: null,
    };
  } catch (error) {
    console.error('Failed to fetch recipes:', error);
    return {
      recipes: [],
      error: 'Failed to fetch recipes',
    };
  }
};
