import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface LandingLayoutProps {
  children: React.ReactNode;
}

/// ---------- || LANDING LAYOUT || ---------- ///

export default function LandingLayout({ children }: Readonly<LandingLayoutProps>) {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-img animate-fade-in" />

      <div className="flex min-h-dvh flex-col space-y-8">
        <Header />

        <main className="flex flex-1">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
