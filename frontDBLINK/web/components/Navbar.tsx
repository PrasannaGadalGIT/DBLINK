"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-black bg-opacity-50 backdrop-blur-lg border-b border-neutral-700/80 ">
      <div className="container px-4 mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center flex-shrink-0 text-purple-600 font-bold">
          <Image src={logo} height={48} width={56} alt="DBLINK logo" />
          <span className="text-xl tracking-tight hover:text-purple-400">DBLINK</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-grow justify-center font-bold">
          <ul className="flex space-x-12 text-xl text-white">
            {['Home', 'Campaign', 'Donate', 'Service', 'About Us'].map((link) => (
              <li key={link} className={styles.navLink}>
                <Link href={`/${link.toLowerCase().replace(/\s/g, '-')}`} className='hover:text-purple-600'>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right corner box for Register and Create Your Account links */}
        <div className="hidden lg:flex items-center space-x-4 text-lg">
          <div className="border border-white bg-transparent py-1 px-2 rounded flex justify-center transition duration-300 ease-in-out hover:text-purple-400">
            <Link href="/register" className="text-purple-600 font-bold hover:text-purple-400">Register</Link>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-black px-2 py-1 rounded flex justify-center text-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-black">
            <Link href="/create-account" className="text-white font-bold">Create Your Account</Link>
          </div>
        </div>

        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-8 w-8 text-purple-600" /> : <Menu className="h-8 w-8 text-purple-600" />}
          </button>
        </div>
      </div>

      {/* Links for mobile view */}
      {isOpen && (
        <div className="flex flex-col items-center bg-black w-full py-4 mt-2 transition duration-300 ease-in-out">
          <ul className="space-y-2 text-lg font-extrabold text-purple-600">
            {['Home', 'Campaign', 'Donate', 'Service', 'About Us'].map((link) => (
              <li key={link}>
                <Link href={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="mobile-link">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="border border-white bg-transparent py-1 px-2 rounded flex justify-center transition duration-300 ease-in-out hover:text-purple-400">
              <Link href="/register" className="text-purple-600 font-bold hover:text-purple-400">Register</Link>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-black px-2 py-1 rounded flex justify-center text-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-black">
              <Link href="/create-account" className="text-white font-bold">Create Your Account</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
