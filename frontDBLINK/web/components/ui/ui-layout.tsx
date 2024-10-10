"use client";
import React, { Suspense, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../public/logo.png';
import facebookIcon from '../../public/facebook.png';
import instagramIcon from '../../public/instagram.png';
import twitterIcon from '../../public/twitter.png';
import linkedinIcon from '../../public/linkedin.png';
import { WalletButton } from '../solana/solana-provider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppHero } from './AppHero';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import toast, { Toaster } from 'react-hot-toast';
import { AccountChecker } from '../account/account-ui';

import HowItWorks from '../HowItWorks';
import AppModal from '../ui/AppModal';
import PartnerLogo from './PartnerLogo';
import Comparison from './Comparison';

// Define HeroSection as a reusable component
export const HeroSection: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-8 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mt-4 text-xl">{subtitle}</p>}
    </div>
  );
};

// Function to ellipsify long text
type EllipsifyProps = {
  text: string;
  maxLength?: number;
};

export function ellipsify({ text, maxLength = 20 }: EllipsifyProps): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

// Define the UiLayout component
interface LinkProps {
  label: string;
  path: string;
}

interface UiLayoutProps {
  children: React.ReactNode;
  links: LinkProps[];
}

const UiLayout: React.FC<UiLayoutProps> = ({ children, links }) => {
  const pathname = usePathname() || '';
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const topRef = useRef<HTMLDivElement>(null); // Create a reference for the top

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSignUp = async () => {
    if (email) {
      try {
        await axios.post('/api/signup', { email });
        toast.success('Signed up successfully!');
      } catch (error) {
        toast.error('Failed to sign up. Please try again.');
      }
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  // Function to scroll to the top using a ref instead of window.scrollTo
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return null; // Return null during server-side rendering
  }

  return (
    <div ref={topRef} className="flex flex-col bg-black"> {/* Attach the ref here */}
      <div className="navbar sticky top-0 z-40 text-purple-600 flex-col md:flex-row space-y-2 md:space-y-0 font-bold bg-gray-800 backdrop-blur-md bg-opacity-50">
        <div className="flex-1">
          <a onClick={scrollToTop} className="btn btn-ghost normal-case text-2xl font-bold mb-4 hover:text-yellow-500" style={{ cursor: 'pointer' }}>
            <img className="h-16 w-16 pb-2" alt="Logo" src="/logo.png" />Home
          </a>
          <ul className="menu menu-horizontal text-2xl">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  className={`${pathname.startsWith(link.path) ? 'text-purple-600' : 'text-purple-600'} hover:text-yellow-300`}
                  href={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none space-x-2">
          <WalletButton />
        
        </div>
      </div>
      <AppHero title={undefined} subtitle={undefined} />
      <AboutUs />
      <Comparison />
      <HowItWorks />
      <Contact />
    
      <div className="flex-grow mx-4 lg:mx-auto">
        <Suspense fallback={<div className="text-center my-32"><span className="loading loading-spinner loading-lg"></span></div>}>
          {children}
        </Suspense>
        <Toaster position="bottom-right" />
      </div>
      <PartnerLogo />
      <footer className="text-yellow-500 py-6 bg-slate-950">
        {/* Footer content */}
        {/* Contributors and other sections */}
      </footer>
      {isModalOpen && (
        <AppModal title="My Modal" onClose={() => setIsModalOpen(false)} hide={function (): void {
          throw new Error('Function not implemented.');
        }} show={false} submit={function (): void {
          throw new Error('Function not implemented.');
        }} submitLabel={''}>
          {/* Modal content here */}
          <p>This is an example modal!</p>
        </AppModal>
      )}
    </div>
  );
};

export default UiLayout;
