
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { MapPin } from 'lucide-react';

interface MapLocationProps {
  title: string;
  location: [number, number]; // [longitude, latitude]
  description?: string;
}

const MapLocation = ({ title, location, description }: MapLocationProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (!mapRef.current) return;
    
    // Create a realistic map visualization
    const mapContainer = mapRef.current;
    const [longitude, latitude] = location;
    
    // Set up the map container with styling
    mapContainer.style.position = 'relative';
    mapContainer.style.backgroundColor = '#e5e7eb';
    mapContainer.style.borderRadius = '0.5rem';
    mapContainer.style.overflow = 'hidden';
    
    // Add a background that resembles a map
    const mapBackground = document.createElement('div');
    mapBackground.style.position = 'absolute';
    mapBackground.style.inset = '0';
    mapBackground.style.backgroundImage = `url('https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${longitude},${latitude},12,0/600x400?access_token=pk.eyJ1IjoiZHVtbXl0b2tlbiIsImEiOiJjbGRtbmJvaXowMDh1M29wZnhzeWl3OW5wIn0.XUn82GqIm-5LLH7qgUl76g')`;
    mapBackground.style.backgroundSize = 'cover';
    mapBackground.style.backgroundPosition = 'center';
    mapContainer.appendChild(mapBackground);
    
    // Add a pin indicator
    const pin = document.createElement('div');
    pin.innerHTML = `
      <div class="absolute flex items-center justify-center p-2 bg-brand-primary text-white rounded-full" style="top: 50%; left: 50%; transform: translate(-50%, -50%)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>
    `;
    mapContainer.appendChild(pin.firstChild as Node);
    
    // Add coordinates overlay
    const coords = document.createElement('div');
    coords.innerHTML = `
      <div class="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded text-xs">
        ${latitude.toFixed(4)}, ${longitude.toFixed(4)}
      </div>
    `;
    mapContainer.appendChild(coords.firstChild as Node);
    
    return () => {
      // Clean up if needed
      while (mapContainer.firstChild) {
        mapContainer.removeChild(mapContainer.firstChild);
      }
    };
  }, [location]);

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-2 text-brand-primary">{title}</h3>
      {description && <p className="text-gray-600 mb-3 text-sm">{description}</p>}
      <div 
        ref={mapRef}
        className="w-full flex-1 min-h-[240px] bg-gray-200 rounded-lg shadow-md"
        aria-label={`Map showing ${title}`}
      />
    </div>
  );
};

export default MapLocation;
