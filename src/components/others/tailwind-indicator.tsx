'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

/// ---------- || TAILWIND INDICATOR || ---------- ///

function TailwindIndicator() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 flex items-center justify-center rounded-full bg-gray-800/40 px-3 py-1 font-mono text-xs text-white">
      <div className="block xs:hidden">
        <span className="font-bold">xxs</span> - h:{windowDimensions.height}px - w:
        {windowDimensions.width}px
      </div>

      <div className="hidden xs:block sm:hidden">
        <span className="font-bold">xs</span> - h:{windowDimensions.height}px - w:
        {windowDimensions.width}px
      </div>

      <div className="hidden sm:block md:hidden">
        <span className="font-bold">sm</span> - h:{windowDimensions.height}px - w:
        {windowDimensions.width}px
      </div>

      <div className="hidden md:block lg:hidden">
        <span className="font-bold">md</span> - h:{windowDimensions.height}px - w:
        {windowDimensions.width}px
      </div>

      <div className="hidden lg:block xl:hidden">
        <span className="font-bold">lg</span> - h:{windowDimensions.height}px - w:
        {windowDimensions.width}px
      </div>

      <div className="hidden xl:block 2xl:hidden">
        <span className="font-bold">xl</span> - h:{windowDimensions.height}px - w:
        {windowDimensions.width}px
      </div>

      <div className="hidden 2xl:block">
        <span className="font-bold">2xl</span> - h:{windowDimensions.height}px - w:
        {windowDimensions.width}px
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(TailwindIndicator), {
  ssr: false,
});
