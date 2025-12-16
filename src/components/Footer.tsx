import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-950 dark:bg-black text-white py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter mb-4 text-brown-50 dark:text-stone-200">ORNAVA</h3>
            <p className="text-brown-200 dark:text-stone-400 text-sm max-w-xs">
              Redefining spaces through sophisticated design and architectural excellence.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-brown-300 dark:text-stone-500 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-brown-300 dark:text-stone-500 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-brown-300 dark:text-stone-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-brown-300 dark:text-stone-500 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-brown-900 dark:border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brown-400 dark:text-stone-600">
          <p>&copy; {new Date().getFullYear()} Ornava Architecture. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
