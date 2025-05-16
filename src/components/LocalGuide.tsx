
import React from 'react';
import { MapPin, Compass, Car, Utensils, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const GuideCard = ({ 
  icon: Icon, 
  title, 
  children 
}: { 
  icon: React.ElementType; 
  title: string; 
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
    <div className="flex items-center mb-4">
      <div className="bg-teal-50 p-3 rounded-full mr-4">
        <Icon size={24} className="text-teal-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <div>
      {children}
    </div>
  </div>
);

const LocalGuide = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="explore" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {language === 'en' ? (
            <>Explore the <span className="text-teal-600">Area</span></>
          ) : (
            <><span className="text-teal-600">{t.explore.title}</span></>
          )}
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {t.explore.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <GuideCard icon={MapPin} title={t.explore.cards.location.title}>
            <p className="text-gray-600">
              {t.explore.cards.location.description}
            </p>
          </GuideCard>
          
          <GuideCard icon={Compass} title={t.explore.cards.activities.title}>
            <ul className="text-gray-600 space-y-2 list-disc pl-5">
              {t.explore.cards.activities.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </GuideCard>
          
          <GuideCard icon={Car} title={t.explore.cards.rentals.title}>
            <p className="text-gray-600">
              {t.explore.cards.rentals.description}
            </p>
          </GuideCard>
          
          <GuideCard icon={Utensils} title={t.explore.cards.restaurants.title}>
            <p className="text-gray-600">
              {t.explore.cards.restaurants.description}
            </p>
          </GuideCard>
        </div>
        
        {/* Helpful PDFs */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6">{t.explore.guides.title}</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {t.explore.guides.items.map((item, index) => (
              <a 
                key={index}
                href={item.url} 
                className="flex items-center justify-center gap-2 bg-white px-5 py-3 rounded-lg border border-gray-200 text-teal-600 hover:bg-teal-50 transition"
              >
                <FileText size={20} />
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalGuide;
