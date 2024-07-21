import { LogoWithText } from '@/components/shared/logo';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface TitleProps {
  showRecipes: boolean;
}

/// ---------- || TITLE || ---------- ///

export default function Title({ showRecipes }: TitleProps) {
  return <LogoWithText isSmall={showRecipes} className="animate-fade-down" />;
}
