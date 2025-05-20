
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-theme-footer-bg text-theme-footer-text py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Seaside Home</h3>
            <p className="mb-4 text-sm leading-relaxed">
              A luxury vacation rental located in the heart of the coast, offering stunning views and unforgettable experiences.
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} Seaside Home. {t.footer.rights}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-theme-footer-link hover:text-theme-footer-linkHover transition">{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/your-host" className="text-theme-footer-link hover:text-theme-footer-linkHover transition">{t.nav.yourHost}</Link>
              </li>
              <li>
                <Link to="/your-place" className="text-theme-footer-link hover:text-theme-footer-linkHover transition">{t.nav.yourPlace}</Link>
              </li>
              <li>
                <Link to="/explore" className="text-theme-footer-link hover:text-theme-footer-linkHover transition">{t.nav.explore}</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-theme-footer-link hover:text-theme-footer-linkHover transition">{t.nav.gallery}</Link>
              </li>
              <li>
                <Link to="/maps" className="text-theme-footer-link hover:text-theme-footer-linkHover transition">{t.nav.maps}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 text-theme-primary shrink-0 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Coastal Highway, Seaside Town, Ocean State 12345</span>
              </li>
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 text-theme-primary shrink-0 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@seasidehome.com</span>
              </li>
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 text-theme-primary shrink-0 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
