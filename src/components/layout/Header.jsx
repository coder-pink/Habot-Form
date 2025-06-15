import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandsHelping } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Icon */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-blue-700 hover:text-blue-800 transition">
          <FaHandsHelping className="text-blue-500 text-3xl" />
          <span>Habot Connect</span>
        </Link>

        {/* Navigation */}
        <nav className="space-x-6">
        
          <a
            href="#about"
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            About
          </a>

          <Link
            to="/form"
            className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Submit Request
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
