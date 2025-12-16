import React from 'react';

import Navbar from '../components/Navbar.tsx';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
      <div className="min-h-screen bg-white dark:bg-black font-sans text-gray-900 dark:text-white selection:bg-brown-900 selection:text-white transition-colors duration-300">
        <Navbar />
        <Hero />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  };
  
  export default Home;
  