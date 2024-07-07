import Link from 'next/link';

/// ---------- || HEADER || ---------- ///

export default function Header() {
  return (
    <div className="absolute top-10 flex w-full flex-col items-center space-y-2 md:flex-row md:space-y-0">
      <Link
        href="/"
        className="animate-fade-down text-muted-foreground hover:text-foreground focus-visible:outline-none md:absolute md:left-10"
      >
        <h4 className="font-logo text-2xl font-medium">What to Cook?</h4>
      </Link>

      <Link
        href="mailto:hello@whattocook.online"
        className="animate-fade-down text-muted-foreground hover:text-foreground focus-visible:outline-none md:absolute md:right-10"
      >
        <h4 className="font-mono text-sm font-medium md:text-base">Get in touch!</h4>
      </Link>
    </div>
  );
}
