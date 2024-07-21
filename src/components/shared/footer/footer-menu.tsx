import Link from 'next/link';

/// ---------- || FOOTER MENU || ---------- ///

export default function FooterMenu() {
  return (
    <Link
      href="mailto:hello@whattocook.online"
      className="text-muted-foreground hover:text-foreground focus-visible:outline-none"
    >
      <h5 className="font-mono text-xs font-medium md:text-sm">Get in touch!</h5>
    </Link>
  );
}
