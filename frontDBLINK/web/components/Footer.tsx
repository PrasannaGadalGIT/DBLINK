"use client"; // Add this line if this is a Client Component
import Image from 'next/image';
import logo from "../public/logo.png"; // Ensure the path is correct
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-6 md:w-1/3 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-2">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <Image src={logo} alt="Company Logo" width={94} height={94} className="object-cover" />
              </div>
            </div>
            <p className="text-gray-300 mb-4">Connect with us to know more about us and to explore the activites that we do.</p>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="#" className="rounded-full bg-purple-200 p-2 hover:bg-purple-600" aria-label="Facebook">
                <Facebook size={20} color="#3b5998" />
              </a>
              <a href="#" className="rounded-full bg-purple-200 p-2 hover:bg-purple-600" aria-label="Instagram">
                <Instagram size={20} color="#C13584" />
              </a>
              <a href="#" className="rounded-full bg-purple-200 p-2 hover:bg-purple-600" aria-label="Twitter">
                <Twitter size={20} color="#1DA1F2" />
              </a>
              <a href="#" className="rounded-full bg-purple-200 p-2 hover:bg-purple-600" aria-label="LinkedIn">
                <Linkedin size={20} color="#0077b5" />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="mb-6 md:w-1/3 text-center">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li><a href="/blog" className="text-purple-400 hover:text-purple-300">Donate</a></li>
              <li><a href="/faqs" className="text-purple-400 hover:text-purple-300">FAQs</a></li>
              <li><a href="/contact" className="text-purple-400 hover:text-purple-300">Contact</a></li>
              <li><a href="/campaign" className="text-purple-400 hover:text-purple-300">Campaign</a></li>
              <li><a href="/aboutus" className="text-purple-400 hover:text-purple-300">About us</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="mb-6 md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Sign Up for Emails</h3>
            <p className="text-gray-300 mb-4">Get first dibs on new arrivals and advance notice on everything we do.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-l-md border border-gray-600 bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-purple-600 p-2 rounded-r-md hover:bg-purple-500">
                Sign Me Up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-600 pt-4 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} DBlink. All Rights Reserved.
          </p>
          <p className="text-gray-500">
            <a href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policies</a> | 
            <a href="/cookie" className="text-purple-400 hover:text-purple-300"> Cookie Policies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
