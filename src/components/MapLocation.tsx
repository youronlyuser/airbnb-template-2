
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
  // Generate Google Maps Embed URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&zoom=12`;

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2 text-theme-primary flex items-center">
        <MapPin className="mr-2 text-theme-primary" size={18} />
        {title}
      </h3>
      
      {description && <p className="text-theme-text-muted mb-4 text-sm">{description}</p>}
      
      {/* Google Maps Embed */}
      <div className="w-full h-48 rounded-md overflow-hidden mb-4">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={embedUrl}
          title={title}
        ></iframe>
      </div>
      
      <div className="mt-auto">
        <a 
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full gap-2 bg-theme-primary text-theme-text-light py-2 px-4 rounded-md hover:bg-theme-primary-dark transition-colors"
        >
          <ExternalLink size={16} />
          <span>{t.maps.viewOnGoogleMaps}</span>
        </a>
      </div>
    </div>
  );
};

export default MapLocation;
