
import React from 'react';
import { Wifi, Waves, Utensils, Car, Flame, Dog, Tv, Bath, Bell, Bike, Lock, Sofa } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const AmenityItem = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex flex-col items-center text-center gap-3 p-4">
    <div className="bg-teal-50 p-3 rounded-full">
      <Icon size={24} className="text-teal-600" />
    </div>
    <span className="text-gray-700 font-medium">{title}</span>
  </div>
);

const Amenities = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const amenities = [
    { icon: Wifi, title: language === 'en' ? "Free Wi-Fi" : "Δωρεάν Wi-Fi" },
    { icon: Waves, title: language === 'en' ? "Swimming Pool" : "Πισίνα" },
    { icon: Utensils, title: language === 'en' ? "Full Kitchen" : "Πλήρης Κουζίνα" },
    { icon: Car, title: language === 'en' ? "Free Parking" : "Δωρεάν Πάρκινγκ" },
    { icon: Flame, title: language === 'en' ? "Fireplace" : "Τζάκι" },
    { icon: Dog, title: language === 'en' ? "Pet Friendly" : "Φιλικό για Κατοικίδια" },
    { icon: Tv, title: language === 'en' ? "Smart TV" : "Έξυπνη Τηλεόραση" },
    { icon: Bath, title: language === 'en' ? "Hot Tub" : "Υδρομασάζ" },
    { icon: Bell, title: language === 'en' ? "Concierge" : "Υπηρεσία Θυρωρού" },
    { icon: Bike, title: language === 'en' ? "Bicycle Rental" : "Ενοικίαση Ποδηλάτων" },
    { icon: Lock, title: language === 'en' ? "Secure Access" : "Ασφαλής Πρόσβαση" },
    { icon: Sofa, title: language === 'en' ? "Spacious Living Room" : "Ευρύχωρο Σαλόνι" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {language === 'en' ? (
            <>Our <span className="text-teal-600">Amenities</span></>
          ) : (
            <>Οι <span className="text-teal-600">Παροχές</span> μας</>
          )}
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {language === 'en' 
            ? "Everything you need for a comfortable and luxurious stay at Seaside Home."
            : "Όλα όσα χρειάζεστε για μια άνετη και πολυτελή διαμονή στο Seaside Home."}
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {amenities.map((amenity, index) => (
            <AmenityItem key={index} icon={amenity.icon} title={amenity.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
