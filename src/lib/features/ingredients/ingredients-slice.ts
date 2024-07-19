import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IngredientItem } from '@/components/core/ingredient';

interface IngredientsState {
  ingredients: IngredientItem[];
}

const initialState: IngredientsState = {
  ingredients: [],
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<IngredientItem>) => {
      state.ingredients.push(action.payload);
    },
    removeIngredient: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload,
      );
    },
    clearIngredients: (state) => {
      state.ingredients = [];
    },
  },
});

export const { addIngredient, removeIngredient, clearIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
