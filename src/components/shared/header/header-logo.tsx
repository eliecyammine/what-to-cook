import Link from 'next/link';

import { TITLE } from '@/lib/constants/site';

import { Badge } from '@/components/core/badge';

/// ---------- || HEADER LOGO || ---------- ///

export default function HeaderLogo() {
  return (
    <div className="flex items-start space-x-1">
      <Link href="/" className="focus-visible:outline-none">
        <h4 className="font-logo text-2xl text-muted-foreground hover:text-foreground">{TITLE}</h4>
      </Link>

      <Badge variant="outline" className="px-2 py-[1px]">
        <span className="font-medium text-muted-foreground">Alpha</span>
      </Badge>
    </div>
  );
}
