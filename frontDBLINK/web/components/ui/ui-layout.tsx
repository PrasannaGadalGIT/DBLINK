'use client';

import Image from 'next/image';
import logo from '../../public/logo.png';
import facebookIcon from '../../public/facebook.png';
import instagramIcon from '../../public/instagram.png';
import twitterIcon from '../../public/twitter.png';
import linkedinIcon from '../../public/linkedin.png';
import { WalletButton } from '../solana/solana-provider';
import * as React from 'react';
import { ReactNode, Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AccountChecker } from '../account/account-ui';
import {
  ClusterChecker,
  ClusterUiSelect,
  ExplorerLink,
} from '../cluster/cluster-ui';
import toast, { Toaster } from 'react-hot-toast';
import { AppHero } from '../ui/AppHero'; 
import ExploreEvent from '../ui/ExploreEvent';
interface AppModalProps {
  title: string; // The title of the modal
  hide: () => void; // Function to hide the modal
  show: boolean; // Boolean to control the visibility of the modal
  submit: () => void; // Function to handle submit action
  submitLabel: string; // Label for the submit button
  children: React.ReactNode; // Children elements to render inside the modal
}
export const AppModal: React.FC<AppModalProps> = ({ title, hide, show, submit, submitLabel, children }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <h2>{title}</h2>
      <button onClick={hide}>Close</button>
      <div>{children}</div>
      <button onClick={submit}>{submitLabel}</button>
    </div>
  );
};
const UILayout: React.FC = () => {
  return (
    <div>
      <h1>UI Layout</h1>
      <AppModal
        title="Example Modal"
        hide={() => {}}
        show={false}
        submit={() => {}}
        submitLabel="Submit"
      >
        <p>This is an example modal content.</p>
      </AppModal>
    </div>
  );
};

export default UILayout;

export const ellipsify = (text: string, maxLength: number = 20): string => {
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }
  return text;
};
export function UiLayout({
  children,
  links,
}: {
  children: ReactNode;
  links: { label: string; path: string }[];
}) {
  const pathname = usePathname();

  return (
  
    <div className="flex flex-col bg-black">
      <div className="navbar sticky top-0 z-40 text-yellow-500 flex-col md:flex-row space-y-2 md:space-y-0 font-bold bg-black backdrop-blur-md bg-opacity-50">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-2xl" href="/">
            <img className="h-12 md:h-12" alt="Logo" src="/logo.png" />
          </Link>
          <ul className="menu menu-horizontal text-xl">
            {links.map(({ label, path }) => (
              <li key={path}>
                <Link
                  className={`${pathname.startsWith(path) ? 'text-yellow-500' : 'text-yellow-500'} hover:text-yellow-300`}
                  href={path}
                >
                  {label}
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
      {/* Hero section */}
      <AppHero title={undefined} subtitle={undefined} /> {/* Using the AppHero component */}
      {/*ExploreEvent*/}
      <ExploreEvent /> {/* Using the imported ExploreEvent component */}
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
            {/* Left Section */}
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

            {/* Middle Section */}
            <div className="mb-6 md:w-1/3 text-center">
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">Quick Links</h3>
              <ul className="list-none space-y-2">
                <li><a href="/home" className="text-yellow-500 hover:text-yellow-300">Home</a></li>
                <li><a href="/contact" className="text-yellow-500 hover:text-yellow-300">Contact</a></li>
                <li><a href="/aboutus" className="text-yellow-500 hover:text-yellow-300">About us</a></li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="mb-6 md:w-1/3 text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">Sign Up for Emails</h3>
              <p className="mb-4 text-yellow-500">Get first dibs on new arrivals and advance notice on everything we do.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-l bg-gray-800 text-yellow-500"
                />
                <button className="px-4 bg-yellow-500 text-black rounded-r">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export { AppHero };

