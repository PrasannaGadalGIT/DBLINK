"use client"; // Add this line if this is a Client Component

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Company Name</h2>
            <p className="text-gray-300">Your tagline or brief description goes here.</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mr-10 mb-4 md:mb-0">
              <h3 className="text-md font-semibold mb-2">Links</h3>
              <ul className="list-none">
                <li><a href="/about" className="text-purple-400 hover:text-purple-300">About Us</a></li>
                <li><a href="/services" className="text-purple-400 hover:text-purple-300">Services</a></li>
                <li><a href="/contact" className="text-purple-400 hover:text-purple-300">Contact</a></li>
                <li><a href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-600" aria-label="Facebook">
                  <Facebook size={24} color="#3b5998" />
                </a>
                <a href="#" className="hover:text-pink-600" aria-label="Instagram">
                  <Instagram size={24} color="#C13584" />
                </a>
                <a href="#" className="hover:text-blue-400" aria-label="Twitter">
                  <Twitter size={24} color="#1DA1F2" />
                </a>
                <a href="#" className="hover:text-blue-700" aria-label="LinkedIn">
                  <Linkedin size={24} color="#0077b5" />
                </a>
              
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-600 pt-4">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
