
import React from 'react';
import { Bed, Bath, CheckSquare, Waves } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const StayDetails = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="place" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === 'en' ? (
            <>Your <span className="text-teal-600">Stay Details</span></>
          ) : (
            <><span className="text-teal-600">{t.stayDetails.title}</span></>
          )}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Bedrooms */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <Bed size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3 {t.stayDetails.bedrooms}</h3>
            <p className="text-gray-600">
              {t.stayDetails.bedroomsDesc}
            </p>
          </div>
          
          {/* Bathrooms */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <Bath size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2 {t.stayDetails.bathrooms}</h3>
            <p className="text-gray-600">
              {t.stayDetails.bathroomsDesc}
            </p>
          </div>
          
          {/* Amenities */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <CheckSquare size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t.stayDetails.amenities}</h3>
            <p className="text-gray-600">
              {t.stayDetails.amenitiesDesc}
            </p>
          </div>
          
          {/* Private Pool */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <Waves size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t.stayDetails.pool}</h3>
            <p className="text-gray-600">
              {t.stayDetails.poolDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayDetails;
