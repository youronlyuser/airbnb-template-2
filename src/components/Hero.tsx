
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="relative h-screen min-h-[600px] bg-gray-100">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1520262454473-a1a82276a574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "center 65%"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <a
            href="#contact"
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-3 rounded-md text-lg transition transform hover:scale-105 inline-block"
          >
            {t.hero.bookNow}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="36" 
          height="36" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
