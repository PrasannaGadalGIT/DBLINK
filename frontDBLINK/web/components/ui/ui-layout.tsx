'use client'; // Ensure this is the first line

import Image from 'next/image';
import Artist from "../../public/Artist.png";
import logo from "../../public/logo.png";
import facebookIcon from "../../public/facebook.png"; // Use absolute path
import instagramIcon from "../../public/instagram.png"; // Use absolute path
import twitterIcon from "../../public/twitter.png"; // Use absolute path
import linkedinIcon from "../../public/linkedin.png";
import { WalletButton } from '../solana/solana-provider';
import * as React from 'react';
import { ReactNode, Suspense, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AccountChecker } from '../account/account-ui';

import {
  ClusterChecker,
  ClusterUiSelect,
  ExplorerLink,
} from '../cluster/cluster-ui';
import toast, { Toaster } from 'react-hot-toast';

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
      <div className="navbar sticky top-0  z-40 text-yellow-500 flex-col md:flex-row space-y-2 md:space-y-0 font-bold"style={{ background: 'linear-gradient(to left, #373A40, #2C2F33, #1C1F22)', color: '#1C1F22' }}>

        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-2xl" href="/">
            <img className="h-12 md:h-12" alt="Logo" src="/logo.png" />
          </Link>
          <ul className="menu menu-horizontal  text-xl">
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
      <div className="relative min-h-[80vh] flex items-center justify-center" style={{ background: 'linear-gradient(to left,  #373A40, #1C1F22)', color: ' #373A40' }}>
      <div className="absolute lg:bottom-0 lg:right-0 bottom-1 lg:w-3/5 lg:h-4/5">  {/* Increase width and height */}
        <Image src={Artist} alt="Artists" className="w-full h-full object-contain" />
      </div>
      <div className="absolute lg:top-20 lg:left-20 top-4 m-4 text-left text-yellow-500">
        <p className="text-4xl lg:text-6xl font-bold mb-4">"Carve Your Adventure"</p>
        <h2 className="lg:text-5xl text-2xl font-bold mb-4">Discover and Attend Exclusive Events</h2>
          <p className="lg:text-xl mb-6">Join Blink and stay updated.</p>
          <div className="flex space-x-4">
            <button className="px-4 lg:py-2 bg-yellow-500 rounded text-black  lg:text-lg font-bold hover:bg-yellow-300">Explore Events</button>
            <button className="px-4 lg:py-2  bg-indigo-700 rounded text-white lg:text-lg  font-bold hover:bg-indigo-500">Sign Up as an Artist</button>
            </div>
      </div>
      <div className="absolute bottom-0 left-0 transform -rotate-90 text-xs text-yellow-500 hidden md:block">
    &copy; Scroll down
</div>

    </div>
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
      <footer className=" text-yellow-500 py-8" style={{ background: 'linear-gradient(to left,  #2C2F33, #1C1F22)', color: '#1C1F22' }}>      
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
            <p className=" mb-4 text-yellow-500">Get first dibs on new arrivals and advance notice on everything we do.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-l-md border border-gray-600 bg-gray-800 text-yellow-500 focus:outline-none"
              />
              <button className="bg-yellow-500 p-2 rounded-r-md hover:bg-yellow-300">
                Sign Me Up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-yellow-500 pt-4 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Blink. All Rights Reserved.
          </p>
          <p className="text-gray-500">
            <a href="/privacy" className="text-yellow-500 hover:text-yellow-300">Privacy Policies</a> | 
            <a href="/cookie" className="text-yellow-500 hover:text-yellow-300"> Cookie Policies</a>
          </p>
        </div>
      </div>
    </footer>
      <footer className="footer footer-center p-4 text-white bg-black ">
        <aside>
          <p>
            Generated by{' '}
            <a
              className="link hover:text-yellow-300 "
              href="https://github.com/solana-developers/create-solana-dapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              create-solana-dapp
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}

// AppModal and AppHero components remain unchanged

export function AppModal({
  children,
  title,
  hide,
  show,
  submit,
  submitDisabled,
  submitLabel,
}: {
  children: ReactNode;
  title: string;
  hide: () => void;
  show: boolean;
  submit?: () => void;
  submitDisabled?: boolean;
  submitLabel?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [show]);

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-box space-y-5">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <div className="modal-action">
          <div className="join space-x-2">
            {submit ? (
              <button
                className="btn btn-xs lg:btn-md btn-primary"
                onClick={submit}
                disabled={submitDisabled}
              >
                {submitLabel || 'Save'}
              </button>
            ) : null}
            <button onClick={hide} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function AppHero({
  children,
  title,
  subtitle,
}: {
  children?: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
}) {
  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          {typeof title === 'string' ? (
            <h1 className="text-5xl font-bold">{title}</h1>
          ) : (
            title
          )}
          {typeof subtitle === 'string' ? (
            <p className="py-6">{subtitle}</p>
          ) : (
            subtitle
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export function ellipsify(str = '', len = 4) {
  if (str.length > 30) {
    return (
      str.substring(0, len) + '..' + str.substring(str.length - len, str.length)
    );
  }
  return str;
}

export function useTransactionToast() {
  return (signature: string) => {
    toast.success(
      <div className={'text-center'}>
        <div className="text-lg">Transaction sent</div>
        <ExplorerLink
          path={`tx/${signature}`}
          label={'View Transaction'}
          className="btn btn-xs btn-primary"
        />
      </div>
    );
  };
}
