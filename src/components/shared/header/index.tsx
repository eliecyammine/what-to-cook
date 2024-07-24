import HeaderLogo from './header-logo';
import HeaderMenu from './header-menu';

/// ---------- || HEADER || ---------- ///

export default function Header() {
  return (
    <header className="flex w-full flex-col items-center space-y-2 pt-6 md:flex-row md:justify-between md:space-y-0">
      <div className="animate-fade-down md:pl-10">
        <HeaderLogo />
      </div>

      <div className="animate-fade-down md:pr-10">
        <HeaderMenu />
      </div>
    </header>
  );
}
