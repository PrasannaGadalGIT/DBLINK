"use client";
import React, { Suspense, useState } from 'react';
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
import { AppHero } from '../ui/AppHero';
import ExploreEvent from '../ui/ExploreEvent';
import AboutUs from '../AboutUs';
import MerchandiseStore from '../MerchandiseStore';
import Contact from '../Contact';
import toast, { Toaster } from 'react-hot-toast';
import { AccountChecker } from '../account/account-ui';
import { ClusterUiSelect, ClusterChecker } from '../cluster/cluster-ui';
import HowItWorks from '../HowItWorks';
import AppModal from '../ui/AppModal'; // Ensure AppModal is imported

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
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col bg-black">
      <div className="navbar sticky top-0 z-40 text-yellow-500 flex-col md:flex-row space-y-2 md:space-y-0 font-bold bg-gray-800 backdrop-blur-md bg-opacity-50">
        <div className="flex-1">
          <a onClick={scrollToTop} className="btn btn-ghost normal-case text-xl font-bold mb-4" style={{ cursor: 'pointer' }}>
            <img className="h-14 md:h-14 pb-2" alt="Logo" src="/logo.png" />Home
          </a>
          <ul className="menu menu-horizontal text-xl">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  className={`${pathname.startsWith(link.path) ? 'text-yellow-500' : 'text-yellow-500'} hover:text-yellow-300`}
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
          <ClusterUiSelect />
        </div>
      </div>
      <AppHero title={undefined} subtitle={undefined} />
      <ExploreEvent />
      <MerchandiseStore />
      <AboutUs />
      <HowItWorks />
      <Contact />
      <ClusterChecker>
        <AccountChecker />
      </ClusterChecker>
      <div className="flex-grow mx-4 lg:mx-auto">
        <Suspense
          fallback={
            <div className="text-center my-32">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          }
        >
          {children}
        </Suspense>
        <Toaster position="bottom-right" />
      </div>
      <footer className="text-yellow-500 py-8" style={{ background: '#171717' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:w-1/3 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-2">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <Image src={logo} alt="Company Logo" width={94} height={94} className="object-cover" />
                </div>
              </div>
              <p className="text-yellow-500 mb-4">Connect with us to know more about us and to explore the activities that we do.</p>
              <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <a href="#" className="rounded-full bg-yellow-100 p-2 hover:bg-yellow-500" aria-label="Facebook">
                  <Image src={facebookIcon} alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" className="rounded-full bg-yellow-100 p-2 hover:bg-yellow-500" aria-label="Instagram">
                  <Image src={instagramIcon} alt="Instagram" width={20} height={20} />
                </a>
                <a href="#" className="rounded-full bg-yellow-100 p-2 hover:bg-yellow-500" aria-label="Twitter">
                  <Image src={twitterIcon} alt="Twitter" width={20} height={20} />
                </a>
                <a href="#" className="rounded-full bg-yellow-100 p-2 hover:bg-yellow-500" aria-label="LinkedIn">
                  <Image src={linkedinIcon} alt="LinkedIn" width={20} height={20} />
                </a>
              </div>
            </div>
            <div className="mb-6 md:w-1/3 text-center">
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">Quick Links</h3>
              <ul className="list-none space-y-2">
                <li><a href="/home" className="text-yellow-500 hover:text-yellow-300">Home</a></li>
                <li><a href="/aboutus" className="text-yellow-500 hover:text-yellow-300">About Us</a></li>
                <li><a href="/exploreevent" className="text-yellow-500 hover:text-yellow-300">Explore Event</a></li>
                <li><a href="/contact" className="text-yellow-500 hover:text-yellow-300">Contact</a></li>
              </ul>
            </div>
            <div className="mb-6 md:w-1/3 text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">Sign Up for Emails</h3>
              <p className="mb-4 text-yellow-500">Get first dibs on new arrivals and advance notice on everything we do.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-l bg-gray-800 text-yellow-500"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button className="px-4 bg-yellow-500 text-black rounded-r" onClick={handleSignUp}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {isModalOpen && (
        <AppModal title="My Modal" onClose={() => setIsModalOpen(false)} hide={function (): void {
          throw new Error('Function not implemented.');
        } } show={false} submit={function (): void {
          throw new Error('Function not implemented.');
        } } submitLabel={''}>
          {/* Modal content here */}
          <p>This is an example modal!</p>
        </AppModal>
      )}
    </div>
  );
};

export default UiLayout; // Ensure UiLayout is exported as a default export
