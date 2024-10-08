"use client"
import React, { useEffect, useState } from 'react';

const Comparison: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const initScrollReveal = async () => {
      if (typeof globalThis !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal({
          distance: '50px',
          duration: 800,
          easing: 'ease-in-out',
          reset: true,
        });

        sr.reveal('.reveal', { origin: 'bottom', interval: 200 });
      }
    };

    initScrollReveal();

    const handleScroll = () => {
      const scrollPosition = globalThis.scrollY;
      const backgroundColor = scrollPosition > 50 ? '#f0f4f8' : '#f9fafb';
      globalThis.document.body.style.backgroundColor = backgroundColor;
    };

    globalThis.addEventListener('scroll', handleScroll);
    
    return () => {
      globalThis.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-5xl font-bold mb-6 text-center text-gray-300 reveal">Comparison of NFT Ticket Creation</h1>
      <h2 className="text-2xl font-semibold mb-10 text-center text-gray-500 reveal">With vs. Without Solana Blink</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Solana Blink Column */}
        <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105 reveal">
          <h3 className="text-2xl font-bold mb-6 text-center">Using Solana Blink</h3>
          <ul className="space-y-6">
            {[
              {
                title: "Setup Time",
                description: "Quick and easy setup with predefined templates",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM6 20h12"
                  />
                ),
              },
              {
                title: "Transaction Speed",
                description: "High-speed transactions optimized for NFTs",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m4 0h-1v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2h1v4h-1m4 0h-1v4h1m-4 0h1m-4-4v-4h1v4h-1zm0 0h1m0-4V9a1 1 0 112 0v1m-2 0h2m-1 1h1"
                  />
                ),
              },
              {
                title: "Costs",
                description: "Lower gas fees due to optimized processes",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM6 20h12"
                  />
                ),
              },
            ].map(({ title, description, icon }, index) => (
              <li className="flex items-center" key={index}>
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow-md">
                  <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {icon}
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">{title}</h4>
                  <p className="text-gray-600">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Without Solana Blink Column */}
        <div className="bg-gradient-to-r from-red-300 to-red-500 shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105 reveal">
          <h3 className="text-2xl font-bold mb-6 text-center">Without Solana Blink</h3>
          <ul className="space-y-6">
            {[
              {
                title: "Setup Time",
                description: "Requires extensive coding and configuration",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM6 20h12"
                  />
                ),
              },
              {
                title: "Transaction Speed",
                description: "Slower, depending on network congestion",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m4 0h-1v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2h1v4h-1m4 0h-1v4h1m-4 0h1m-4-4v-4h1v4h-1zm0 0h1m0-4V9a1 1 0 112 0v1m-2 0h2m-1 1h1"
                  />
                ),
              },
              {
                title: "Costs",
                description: "Higher gas fees due to network conditions",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM6 20h12"
                  />
                ),
              },
            ].map(({ title, description, icon }, index) => (
              <li className="flex items-center" key={index}>
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow-md">
                  <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {icon}
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">{title}</h4>
                  <p className="text-gray-600">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
