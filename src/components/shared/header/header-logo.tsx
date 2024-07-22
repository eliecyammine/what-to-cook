'use client';

import { useRouter } from 'next/navigation';

import { TITLE } from '@/lib/constants/site';

import { Badge } from '@/components/core/badge';

/// ---------- || HEADER LOGO || ---------- ///

export default function HeaderLogo() {
  const router = useRouter();

  // Navigate to homepage
  const handleLogoClick = () => {
    router.push('/');
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
