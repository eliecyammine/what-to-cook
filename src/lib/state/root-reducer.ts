import { combineReducers } from '@reduxjs/toolkit';

import ingredientsReducer from '@/lib/features/ingredients/ingredients-slice';
import recipesReducer from '@/lib/features/recipes/recipes-slice';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  recipes: recipesReducer,
});

export default rootReducer;
