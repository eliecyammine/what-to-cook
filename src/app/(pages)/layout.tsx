/// ---------- || TYPES & INTERFACES || ---------- ///

interface PagesLayoutProps {
  children: React.ReactNode;

  authModal: React.ReactNode;
}

/// ---------- || PAGES LAYOUT || ---------- ///

export default function PagesLayout({ children, authModal }: Readonly<PagesLayoutProps>) {
  return (
    <>
      {children}

      {authModal}
    </>
  );
}
