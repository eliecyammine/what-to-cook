export interface Recipe {
  id: string;
  title: string;
  image: string;
  creditsText: string;
  ingredients: { name: string; amount: string }[];
  instructions: string;

  missedIngredientCount?: number;
}
