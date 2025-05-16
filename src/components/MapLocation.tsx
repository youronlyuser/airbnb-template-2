
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { MapPin, ExternalLink } from 'lucide-react';

interface MapLocationProps {
  title: string;
  location: [number, number]; // [longitude, latitude]
  description?: string;
  googleMapsUrl?: string;
}

const MapLocation = ({ title, location, description, googleMapsUrl }: MapLocationProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [longitude, latitude] = location;
  
  // Generate Google Maps URL if not provided
  const mapUrl = googleMapsUrl || `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2 text-brand-primary flex items-center">
        <MapPin className="mr-2 text-teal-600" size={18} />
        {title}
      </h3>
      
      {description && <p className="text-gray-600 mb-4 text-sm">{description}</p>}
      
      <div className="mt-auto">
        <div className="bg-gray-100 rounded-md p-2 mb-3 text-xs text-gray-600 font-mono">
          {latitude.toFixed(4)}, {longitude.toFixed(4)}
        </div>
        
        <a 
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full gap-2 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
        >
          <ExternalLink size={16} />
          <span>{language === 'en' ? "View on Google Maps" : "Προβολή στο Google Maps"}</span>
        </a>
      </div>
    </div>
  );
};

export default MapLocation;
