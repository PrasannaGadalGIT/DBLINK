"use client";
import Image from 'next/image';
import logo from '../public/logo.png';
import facebookIcon from '../public/facebook.png';
import instagramIcon from '../public/instagram.png';
import twitterIcon from '../public/twitter.png';
import linkedinIcon from '../public/linkedin.png';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
