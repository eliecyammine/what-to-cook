import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface ProfileLayoutProps {
  children: React.ReactNode;
}

/// ---------- || PROFILE LAYOUT || ---------- ///

export default function ProfileLayout({ children }: Readonly<ProfileLayoutProps>) {
  return (
    <div className="relative overflow-hidden">
      <Header />

      <main className="flex min-h-dvh">{children}</main>

      <Footer />
    </div>
  );
}
