import FooterMenu from './footer-menu';
import FooterMessage from './footer-message';

/// ---------- || FOOTER || ---------- ///

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center space-y-2 pb-8 md:flex-row md:justify-between md:space-y-0">
      <div className="animate-fade-up md:pl-10">
        <FooterMenu />
      </div>

      <div className="animate-fade-up md:pr-10">
        <FooterMessage />
      </div>
    </footer>
  );
}
