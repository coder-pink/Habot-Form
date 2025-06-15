import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 via-blue-50 to-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight mb-6">
          Empowering Every Child’s Potential
        </h1>
        <p className="text-lg md:text-xl text-blue-700 max-w-2xl mx-auto mb-10">
          Connect with certified learning support professionals tailored to your child's unique needs.
        </p>
        <Link
          to="/form"
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-full shadow hover:bg-blue-700 transition"
        >
          Request Support Now
        </Link>
      </div>

      {/* Decorative blob background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3 pointer-events-none"></div>
    </section>
  );
}

export default Hero;
