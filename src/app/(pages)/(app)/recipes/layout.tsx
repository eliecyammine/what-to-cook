/// ---------- || TYPES & INTERFACES || ---------- ///

interface RecipesLayoutProps {
  recipeModal: React.ReactNode;
  children: React.ReactNode;
}

/// ---------- || RECIPES LAYOUT || ---------- ///

export default function RecipesLayout({ recipeModal, children }: Readonly<RecipesLayoutProps>) {
  return (
    <>
      {recipeModal}
      {children}
    </>
  );
}
