
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Hero from '../components/layout/Hero';
import Services from '../components/layout/Services';
import Footer from '../components/layout/Footer';
import About from '../components/layout/About';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About/>
        <Services />
      
      </main>
      <Footer />
    </div>
  );
}

export default Home;
