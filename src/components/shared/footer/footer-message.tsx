import Link from 'next/link';

/// ---------- || FOOTER MESSAGE || ---------- ///

export default function FooterMessage() {
  return (
    <Link
      href="https://flowless.xyz"
      className="group text-muted-foreground hover:text-foreground focus-visible:outline-none"
    >
      <h5 className="font-mono text-xs font-medium md:text-sm">
        Made with <span className="group-hover:font-sans">❤️</span> by{' '}
        <span className="font-flowless-logo group-hover:text-[#38d66d]">Flowless</span>
      </h5>
    </Link>
  );
}
