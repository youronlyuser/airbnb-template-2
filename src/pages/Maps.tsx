
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapLocation from '@/components/MapLocation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

// Define map locations with coordinates
const mapLocations = {
  en: [
    {
      title: "Athens International Airport",
      location: [23.9484, 37.9356],
      description: "The main international airport serving Athens, approximately 30 minutes from our property."
    },
    {
      title: "Piraeus Harbor",
      location: [23.6450, 37.9377],
      description: "The largest port in Greece, offering ferry connections to most Greek islands."
    },
    {
      title: "Athens Train Station",
      location: [23.7273, 37.9908],
      description: "Central railway station with connections to major cities in Greece and Europe."
    },
    {
      title: "Seaside Home Location",
      location: [23.7275, 37.9838],
      description: "Our luxury vacation property with stunning seaside views and premium amenities."
    }
  ],
  gr: [
    {
      title: "Διεθνές Αεροδρόμιο Αθηνών",
      location: [23.9484, 37.9356],
      description: "Το κύριο διεθνές αεροδρόμιο που εξυπηρετεί την Αθήνα, περίπου 30 λεπτά από την ιδιοκτησία μας."
    },
    {
      title: "Λιμάνι Πειραιά",
      location: [23.6450, 37.9377],
      description: "Το μεγαλύτερο λιμάνι της Ελλάδας, που προσφέρει συνδέσεις με πλοία προς τα περισσότερα ελληνικά νησιά."
    },
    {
      title: "Σιδηροδρομικός Σταθμός Αθηνών",
      location: [23.7273, 37.9908],
      description: "Κεντρικός σιδηροδρομικός σταθμός με συνδέσεις προς τις μεγάλες πόλεις της Ελλάδας και της Ευρώπης."
    },
    {
      title: "Τοποθεσία Seaside Home",
      location: [23.7275, 37.9838],
      description: "Η πολυτελής κατοικία διακοπών μας με εντυπωσιακή θέα στη θάλασσα και κορυφαίες ανέσεις."
    }
  ]
};

const Maps = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const locations = mapLocations[language];
  const [mapboxToken, setMapboxToken] = useState('');

  // Update document title
  useEffect(() => {
    document.title = language === "en" ? "Seaside Home | Maps" : "Seaside Home | Χάρτες";
  }, [language]);
  
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
        
        {/* Map Token Input (for demo purposes) */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 text-sm text-yellow-800">
            <p className="mb-2">
              {language === 'en' 
                ? 'For demonstration purposes, the maps are using a placeholder. In a production environment, you would use a valid Mapbox token.'
                : 'Για λόγους επίδειξης, οι χάρτες χρησιμοποιούν ένα προσωρινό token. Σε περιβάλλον παραγωγής, θα χρησιμοποιούσατε ένα έγκυρο token Mapbox.'}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <MapLocation 
              key={index}
              title={location.title}
              location={location.location}
              description={location.description}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Maps;
