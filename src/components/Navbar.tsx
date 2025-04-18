
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl md:text-2xl font-semibold text-teal-600"
        >
          Seaside Home
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#host" 
            className="font-medium text-gray-700 hover:text-teal-600 transition"
          >
            Your Host
          </a>
          <a 
            href="#place" 
            className="font-medium text-gray-700 hover:text-teal-600 transition"
          >
            Your Place
          </a>
          <a 
            href="#explore" 
            className="font-medium text-gray-700 hover:text-teal-600 transition"
          >
            Explore
          </a>
          <a 
            href="#contact" 
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#host" 
              className="font-medium text-gray-700 hover:text-teal-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Your Host
            </a>
            <a 
              href="#place" 
              className="font-medium text-gray-700 hover:text-teal-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Your Place
            </a>
            <a 
              href="#explore" 
              className="font-medium text-gray-700 hover:text-teal-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </a>
            <a 
              href="#contact" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition inline-block w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
