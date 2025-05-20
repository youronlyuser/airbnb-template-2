
import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const ReviewCard = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === 'en' ? (
            <>What Our <span className="text-theme-primary">Guests Say</span></>
          ) : (
            <><span className="text-theme-primary">{t.reviews.title}</span></>
          )}
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-10 relative">
          {/* Quote mark */}
          <div className="absolute top-6 left-6 text-teal-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="opacity-50"
            >
              <path d="M11.94 3.5c-4.2 0-7.6 3.4-7.6 7.6v9.4h9.4v-9.4h-4.7c0-2.6 2.1-4.7 4.7-4.7V3.5zm8.3 0c-4.2 0-7.6 3.4-7.6 7.6v9.4h9.4v-9.4h-4.7c0-2.6 2.1-4.7 4.7-4.7V3.5z"></path>
            </svg>
          </div>
          
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 italic mb-6 relative z-10">
              "{t.reviews.reviewText}"
            </p>
            
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-theme-icon-warning fill-theme-icon-warning" />
              ))}
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt={t.reviews.reviewAuthor}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">{t.reviews.reviewAuthor}</h4>
                <p className="text-gray-500 text-sm">{t.reviews.reviewDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
