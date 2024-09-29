"use client"; // Add this line to specify that this is a Client Component

import React from 'react';

const TrustedSection: React.FC = () => {
  return (
    <section className="relative bg-purple-400 text-white py-16 text-center overflow-hidden">
      <div className="container mx-auto">
        <h1 className="lg:text-4xl font-bold mb-8 text-3xl ">
          Trusted by thousands of organizations, schools, and churches
        </h1>
        <div className="flex justify-center gap-10 mb-4">
          <ul className="list-none lg:text-lg text-sm">
            <li className="mb-4">✔️ SECURE FORMS & CAMPAIGN PAGES</li>
            <li className="mb-4">✔️ 5 MINUTES TO SIGN UP</li>
            <li className="mb-4">✔️ INTEGRATE WITH EASE</li>
          </ul>
          <ul className="list-none lg:text-lg text-sm">
            <li className="mb-4">✔️ NO SETUP FEES OR HIDDEN COSTS</li>
            <li className="mb-4">✔️ NO LIMITED FUNCTIONS</li>
            <li className="mb-4">✔️ NO CONTRACTS</li>
          </ul>
        </div>
        <button
          className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300"
          onClick={() => console.log('Get started button clicked')}
        >
          Get started now
        </button>
      </div>
      <div className="wave-container absolute bottom-[-2rem] left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V120H1200V0C1146.67,20.67,1093.33,41.33,1035.33,54.67C977.33,68,915.33,74,853.33,74C791.33,74,729.33,68,671.33,58C613.33,48,551.33,34,489.33,29.33C427.33,24.67,365.33,29.33,307.33,41.33C249.33,53.33,187.33,72.67,125.33,84.67C63.33,96.67,0,101.33,0,101.33"
            fill="#fff"
          />
        </svg>
      </div>
    </section>
  );
};

export default TrustedSection;
