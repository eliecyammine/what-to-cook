import HeaderLogo from './header-logo';
import HeaderMenu from './header-menu';

/// ---------- || HEADER || ---------- ///

export default function Header() {
  return (
    <div className="absolute top-10 flex w-full flex-col items-center space-y-2 md:flex-row md:space-y-0">
      <div className="animate-fade-down md:absolute md:left-10">
        <HeaderLogo />
      </div>

      <div className="animate-fade-down md:absolute md:right-10">
        <HeaderMenu />
      </div>
    </div>
  );
}
