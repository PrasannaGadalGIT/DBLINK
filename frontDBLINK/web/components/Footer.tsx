"use client"; // Add this line if this is a Client Component

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-10">
          {/* Company Info */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-3">Company Name</h2>
            <p className="text-gray-400 max-w-sm">Delivering excellence and innovation in everything we do.</p>
          </div>

          {/* Links */}
          <div className="flex flex-col lg:flex-row">
            {/* Navigation Links */}
            <div className="mr-12 mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-purple-400 hover:text-purple-300 transition duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-purple-400 hover:text-purple-300 transition duration-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-purple-400 hover:text-purple-300 transition duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-purple-400 hover:text-purple-300 transition duration-200">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-600 transition duration-200" aria-label="Facebook">
                  <Facebook size={28} color="#3b5998" />
                </a>
                <a href="#" className="hover:text-pink-600 transition duration-200" aria-label="Instagram">
                  <Instagram size={28} color="#C13584" />
                </a>
                <a href="#" className="hover:text-blue-400 transition duration-200" aria-label="Twitter">
                  <Twitter size={28} color="#1DA1F2" />
                </a>
                <a href="#" className="hover:text-blue-700 transition duration-200" aria-label="LinkedIn">
                  <Linkedin size={28} color="#0077b5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
