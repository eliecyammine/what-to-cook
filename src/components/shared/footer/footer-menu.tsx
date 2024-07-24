import Link from 'next/link';

import { Separator } from '@/components/core/separator';

/// ---------- || FOOTER MENU || ---------- ///

export default function FooterMenu() {
  return (
    <div className="flex h-5 items-center space-x-3">
      <Link href="/privacy" className="pointer-events-none focus-visible:outline-none">
        <h5 className="font-mono text-sm text-muted-foreground hover:text-foreground">{`Privacy`}</h5>
      </Link>

      <Separator orientation="vertical" />

      <Link href="/terms" className="pointer-events-none focus-visible:outline-none">
        <h5 className="font-mono text-sm text-muted-foreground hover:text-foreground">{`Terms`}</h5>
      </Link>

      <Separator orientation="vertical" />

      <Link href="/about" className="pointer-events-none focus-visible:outline-none">
        <h5 className="font-mono text-sm text-muted-foreground hover:text-foreground">{`About`}</h5>
      </Link>

      <Separator orientation="vertical" />

      <Link href="mailto:hello@whattocook.online" className="focus-visible:outline-none">
        <h5 className="font-mono text-sm text-muted-foreground hover:text-foreground">
          {`Get in touch!`}
        </h5>
      </Link>
    </div>
  );
}
