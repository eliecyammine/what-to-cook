import FooterMenu from './footer-menu';
import FooterMessage from './footer-message';

/// ---------- || FOOTER || ---------- ///

export default function Footer() {
  return (
    <footer className="absolute bottom-10 flex w-full flex-col items-center space-y-2 md:flex-row md:space-y-0">
      <div className="animate-fade-up md:absolute md:left-10">
        <FooterMenu />
      </div>

      <div className="animate-fade-up md:absolute md:right-10">
        <FooterMessage />
      </div>
    </footer>
  );
}
