import Link from 'next/link';

import { IconBrandGithub } from '@tabler/icons-react';

import { ThemeToggle } from '@/components/others/theme-toggle';

/// ---------- || FOOTER || ---------- ///

export default function Footer() {
  return (
    <div className="absolute bottom-10 flex w-full flex-col items-center space-y-2 md:flex-row md:space-y-0">
      <div className="inline-flex items-center space-x-3 md:absolute md:left-10">
        <Link
          href="https://github.com/eliecyammine/what-to-cook"
          className="animate-fade-up text-muted-foreground hover:text-foreground focus-visible:outline-none"
        >
          <IconBrandGithub className="mb-0.5 ml-1 size-5" />
        </Link>

        <ThemeToggle />
      </div>

      <Link
        href="https://flowless.xyz"
        className="group animate-fade-up text-muted-foreground hover:text-foreground focus-visible:outline-none md:absolute md:right-10"
      >
        <h4 className="font-mono text-sm font-medium md:text-base">
          Made with <span className="group-hover:font-sans">❤️</span> by{' '}
          <span className="font-flowless-logo group-hover:text-[#38d66d]">Flowless</span>
        </h4>
      </Link>
    </div>
  );
}
