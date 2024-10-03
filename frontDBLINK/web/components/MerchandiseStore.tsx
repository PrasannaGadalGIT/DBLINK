"use client"; // Ensure this is present for Next.js

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ScrollReveal from 'scrollreveal';

interface MerchandiseItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const merchandiseData: MerchandiseItem[] = [
  {
    id: 1,
    title: 'Singer T-Shirt',
    description: 'High-quality cotton t-shirt featuring the singer\'s logo.',
    image: '/taylorswift.jpg', // Add your image path
    price: '$25.00',
  },
  {
    id: 2,
    title: 'Actor Poster',
    description: 'A stunning poster of the actor in their latest movie.',
    image: '/christopher.jpg', // Add your image path
    price: '$15.00',
  },
  {
    id: 3,
    title: 'Painter Art Print',
    description: 'Limited edition print of the painter\'s masterpiece.',
    image: '/shoe.jpg', // Add your image path
    price: '$30.00',
  },
  {
    id: 4,
    title: 'Dancer Hoodie',
    description: 'Comfortable hoodie perfect for dance practice.',
    image: '/dance.jpg', // Add your image path
    price: '$40.00',
  },
];

const MerchandiseStore: React.FC = () => {
  const [bgColor, setBgColor] = useState('#000000'); // Initial background color
  const eventRefs = useRef<(HTMLDivElement | null)[]>(new Array(merchandiseData.length).fill(null));
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '30px',
      duration: 800, // Duration for each card animation
      easing: 'ease-in-out',
      reset: true,
    });

    // Reveal each merchandise item with increasing delay
    eventRefs.current.forEach((ref, index) => {
      if (ref) {
        sr.reveal(ref, { delay: (index + 1) * 300 }); // Increasing delay for each card
      }
    });

    // Animate heading and description
    if (headingRef.current) {
      sr.reveal(headingRef.current, { delay: 500, duration: 1000 });
    }
    if (descriptionRef.current) {
      sr.reveal(descriptionRef.current, { delay: 700, duration: 1000 });
    }
    if (buttonRef.current) {
      sr.reveal(buttonRef.current, { delay: 1300, duration: 1000 });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll;

      // Change background color based on scroll position (linear gradient)
      const newColor = `linear-gradient(rgba(104, 100, 100, 1), rgba(240, 240, 240, 1))`;
      setBgColor(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ background: bgColor }} className="min-h-screen text-yellow-500 p-10 flex flex-col items-center">
      <h1
        ref={headingRef}
        className="text-5xl font-bold mb-4 text-center transition-all duration-160"
      >
        Merchandise Store
      </h1>
      <p
        ref={descriptionRef} // Attach ref to the description
        className="text-xl mb-10 text-center lg:w-5/6 text-yellow-500"
      >
        Explore exclusive merchandise from your favorite artist! Find unique items that celebrate their artistry and talent.
      </p>
      <button
        ref={buttonRef} // Attach ref to the button
        className='bg-yellow-500 py-2 px-4 rounded text-black font-semibold mb-24 transition-transform duration-300 hover:scale-105'
      >
        Shop Now
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {merchandiseData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (eventRefs.current[index] = el)} // Assign the ref to each item
            className="bg-gray-900 text-yellow rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 max-w-xs mx-auto"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.description}</p>
              <span className="text-lg font-bold">{item.price}</span>
              <button className="mt-4 w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchandiseStore;
