'use client';

import { useRouter } from 'next/navigation';

import { TITLE } from '@/lib/constants/site';
import { clearIngredients } from '@/lib/features/ingredients/ingredients-slice';
import { useAppDispatch, useAppSelector } from '@/lib/state/hooks';

import { Badge } from '@/components/core/badge';

/// ---------- || HEADER LOGO || ---------- ///

export default function HeaderLogo() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const ingredients = useAppSelector((state) => state.ingredients.ingredients);

  const handleLogoClick = () => {
    if (ingredients.length > 0) {
      dispatch(clearIngredients());
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex items-start space-x-1">
      <a
        onClick={handleLogoClick}
        className="cursor-pointer text-muted-foreground hover:text-foreground focus-visible:outline-none"
      >
        <h4 className="font-logo text-2xl font-medium">{TITLE}</h4>
      </a>

      <Badge variant="outline" className="px-2 py-[1px] text-muted-foreground">
        Alpha
      </Badge>
    </div>
  );
}
