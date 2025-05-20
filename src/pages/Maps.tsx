
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import MapLocation from '@/components/MapLocation';

// Define map locations with coordinates
const mapLocations = {
  en: [
    {
      title: "Athens International Airport",
      location: [23.9484, 37.9356] as [number, number],
      description: "The main international airport serving Athens, approximately 30 minutes from our property.",
      googleMapsUrl: "https://www.google.com/maps?q=37.9356,23.9484"
    },
    {
      title: "Piraeus Harbor",
      location: [23.6450, 37.9377] as [number, number],
      description: "The largest port in Greece, offering ferry connections to most Greek islands.",
      googleMapsUrl: "https://www.google.com/maps?q=37.9377,23.6450"
    },
    {
      title: "Athens Train Station",
      location: [23.7273, 37.9908] as [number, number],
      description: "Central railway station with connections to major cities in Greece and Europe.",
      googleMapsUrl: "https://www.google.com/maps?q=37.9908,23.7273"
    },
    {
      title: "Seaside Home Location",
      location: [23.7275, 37.9838] as [number, number],
      description: "Our luxury vacation property with stunning seaside views and premium amenities.",
      googleMapsUrl: "https://www.google.com/maps?q=37.9838,23.7275"
    }
  ],
  gr: [
    {
      title: "Διεθνές Αεροδρόμιο Αθηνών",
      location: [23.9484, 37.9356] as [number, number],
      description: "Το κύριο διεθνές αεροδρόμιο που εξυπηρετεί την Αθήνα, περίπου 30 λεπτά από την ιδιοκτησία μας.",
      googleMapsUrl: "https://www.google.com/maps?q=37.9356,23.9484"
    },
    {
      title: "Λιμάνι Πειραιά",
      location: [23.6450, 37.9377] as [number, number],
      description: "Το μεγαλύτερο λιμάνι της Ελλάδας, που προσφέρει συνδέσεις με πλοία προς τα περισσότερα ελληνικά νησιά.",
      googleMapsUrl: "https://www.google.com/maps?q=37.9377,23.6450"
    },
    {
      title: "Σιδηροδρομικός Σταθμός Αθηνών",
      location: [23.7273, 37.9908] as [number, number],
      description: "Κεντρικός σιδηροδρομικός σταθμός με συνδέσεις προς τις μεγάλες πόλεις της Ελλάδας και της Ευρώπης.",
      googleMapsUrl: "https://www.google.com/maps?q=37.9908,23.7273"
    },
    {
      title: "Τοποθεσία Seaside Home",
      location: [23.7275, 37.9838] as [number, number],
      description: "Η πολυτελής κατοικία διακοπών μας με εντυπωσιακή θέα στη θάλασσα και κορυφαίες ανέσεις.",
      googleMapsUrl: "https://www.google.com/maps?q=37.9838,23.7275"
    }
  ]
};

const Maps = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const locations = mapLocations[language];

  // Update document title
  useEffect(() => {
    document.title = language === "en" ? "Seaside Home | Maps" : "Seaside Home | Χάρτες";
  }, [language]);
  
  return (
    <div className="min-h-screen bg-theme-background">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
            {t.maps.title}
          </h1>
          <p className="text-lg text-theme-text-muted max-w-2xl mx-auto">
            {t.maps.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <MapLocation 
              key={index}
              title={location.title}
              location={location.location}
              description={location.description}
              googleMapsUrl={location.googleMapsUrl}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Maps;
