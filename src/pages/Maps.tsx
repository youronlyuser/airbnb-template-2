
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapLocation from '@/components/MapLocation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const Maps = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Update document title
  useEffect(() => {
    document.title = "Seaside Home | Maps";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            {t.maps.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.maps.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MapLocation 
            title={t.maps.airport}
            location={[23.9484, 37.9356]} // Example coordinates for Athens Airport
          />
          <MapLocation 
            title={t.maps.harbor}
            location={[23.6450, 37.9377]} // Example coordinates for Piraeus Port
          />
          <MapLocation 
            title={t.maps.trainStation}
            location={[23.7273, 37.9908]} // Example coordinates for Athens Train Station
          />
          <MapLocation 
            title={t.maps.cityCenter}
            location={[23.7275, 37.9838]} // Example coordinates for Athens City Center
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Maps;
