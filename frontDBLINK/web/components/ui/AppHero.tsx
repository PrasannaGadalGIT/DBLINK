// ui/AppHero.tsx
'use client';

import Image from 'next/image';
import Artist from '../../public/Artist.png';
import * as React from 'react';

interface AppHeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children?: React.ReactNode; // Accept children
}

export const AppHero = ({ title, subtitle, children }: AppHeroProps) => {
  return (
    <div className="app-hero">
      {/* Title and Subtitle */}
      <div>
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        {children} {/* Render children here if needed */}
      </div>

      {/* Background Image and Content */}
      <div className="relative min-h-[80vh] flex items-center justify-center" style={{ background: '#131313' }}>
        <div className="absolute lg:bottom-0 lg:right-0 bottom-1 lg:w-3/5 lg:h-4/5">
          <Image src={Artist} alt="Artists" className="w-full h-full object-contain" />
        </div>
        <div className="absolute lg:top-20 lg:left-20 top-4 m-4 text-left text-yellow-500">
          <p className="text-4xl lg:text-5xl font-bold mb-4">"Create Your First Blink as an Artist"</p>
          <h2 className="lg:text-4xl text-2xl font-bold mb-4">Discover and Attend Exclusive Events</h2>
          <p className="lg:text-lg mb-6 font-semibold">Join Blink and stay updated.</p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-yellow-500 rounded text-black lg:text-lg font-bold hover:bg-yellow-300">Explore Events</button>
            <button className="px-4 py-2 bg-indigo-700 rounded text-white lg:text-lg font-bold hover:bg-indigo-500">Sign Up as an Artist</button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 transform -rotate-90 text-xs text-yellow-500 hidden md:block">
          &copy; Scroll down
        </div>
      </div>
    </div>
  );
};
