
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  const NAV_LINKS = [
    { to: "/", label: t.nav.home },
    { to: "/your-host", label: t.nav.yourHost },
    { to: "/your-place", label: t.nav.yourPlace },
    { to: "/explore", label: t.nav.explore },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/maps", label: t.nav.maps },
  ];

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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-theme-navbar-bg backdrop-blur-sm shadow-sm py-3' 
        : 'bg-theme-navbar-bgTransparent py-5'
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-semibold text-theme-primary">
          Seaside Home
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "font-medium hover:text-theme-navbar-hover transition",
                location.pathname === link.to ? "text-theme-navbar-active" : "text-theme-navbar-text"
              )}
              aria-current={location.pathname === link.to ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <a
            href="#contact"
            className="bg-theme-navbar-button hover:bg-theme-navbar-buttonHover text-theme-text-light px-4 py-2 rounded-md transition"
          >
            {t.nav.bookNow}
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button 
            className="text-theme-navbar-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-theme-navbar-mobileBg shadow-md absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "font-medium hover:text-theme-navbar-hover transition py-2",
                  location.pathname === link.to ? "text-theme-navbar-active" : "text-theme-navbar-text"
                )}
                aria-current={location.pathname === link.to ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-theme-navbar-button hover:bg-theme-navbar-buttonHover text-theme-text-light px-4 py-2 rounded-md transition inline-block w-full text-center"
            >
              {t.nav.bookNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
