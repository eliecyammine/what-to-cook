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
      <main className="flex min-h-dvh">
        <Header />

        {children}

        <Footer />
      </main>
    </div>
  );
}
