import Link from 'next/link';

/// ---------- || FOOTER || ---------- ///

export default function Footer() {
  return (
    <div className="absolute bottom-10 flex w-full flex-col items-center space-y-2 md:flex-row md:space-y-0">
      <Link
        href="mailto:hello@whattocook.online"
        className="animate-fade-up text-muted-foreground hover:text-foreground focus-visible:outline-none md:absolute md:left-10"
      >
        <h5 className="font-mono text-xs font-medium md:text-sm">Get in touch!</h5>
      </Link>

      <Link
        href="https://flowless.xyz"
        className="group animate-fade-up text-muted-foreground hover:text-foreground focus-visible:outline-none md:absolute md:right-10"
      >
        <h5 className="font-mono text-xs font-medium md:text-sm">
          Made with <span className="group-hover:font-sans">❤️</span> by{' '}
          <span className="font-flowless-logo group-hover:text-[#38d66d]">Flowless</span>
        </h5>
      </Link>
    </div>
  );
}
