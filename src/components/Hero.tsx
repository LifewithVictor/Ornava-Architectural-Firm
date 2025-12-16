import React from 'react';
import { motion } from 'framer-motion';

const heroBg = 'https://images.unsplash.com/photo-1615725475020-1f7625d5ac72?auto=format&fit=crop&w=2000&q=80';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Designing the Future <br /> of Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-gray-200"
        >
          Ornava creates spaces that inspire, connect, and endure. Sophisticated design meets functional elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-3 border border-white text-white hover:bg-brown-900 hover:border-brown-900 transition-all duration-300 text-sm tracking-widest uppercase"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
