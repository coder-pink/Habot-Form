import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
        {/* Company Info */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Habot Form by P.S</span>. All rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex space-x-4 text-gray-500">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
