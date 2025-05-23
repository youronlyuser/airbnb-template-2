
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const HostCard = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="host" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt={language === 'en' ? "Sarah - Your Host" : "Sarah - Η Οικοδεσπότης σας"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {language === 'en' ? "Hi! I'm Sarah" : "Γεια! Είμαι η Sarah"}
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg">
              {language === 'en' 
                ? "I've been hosting for over 5 years and love sharing this special place with travelers. My goal is to make your stay as comfortable and memorable as possible. I'm always available to provide local tips and help with anything you need during your stay."
                : "Είμαι οικοδεσπότης για πάνω από 5 χρόνια και μου αρέσει να μοιράζομαι αυτό το ξεχωριστό μέρος με ταξιδιώτες. Ο στόχος μου είναι να κάνω τη διαμονή σας όσο πιο άνετη και αξέχαστη γίνεται. Είμαι πάντα διαθέσιμη να προσφέρω τοπικές συμβουλές και να βοηθήσω σε οτιδήποτε χρειαστείτε κατά τη διαμονή σας."}
            </p>
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://airbnb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
              >
                <span>{language === 'en' ? "View my Airbnb profile" : "Δείτε το προφίλ μου στο Airbnb"}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostCard;
