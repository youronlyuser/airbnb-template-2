
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { MapPin } from 'lucide-react';

interface MapLocationProps {
  title: string;
  location: [number, number]; // [longitude, latitude]
}

const MapLocation = ({ title, location }: MapLocationProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  // In a real implementation, this would initialize a map library
  useEffect(() => {
    if (!mapRef.current) return;
    
    // Simulate map rendering with a colored div
    const mapContainer = mapRef.current;
    mapContainer.style.position = 'relative';
    mapContainer.style.backgroundColor = '#e5e7eb';
    mapContainer.style.borderRadius = '0.5rem';
    
    // Add a pin indicator for visual effect
    const pin = document.createElement('div');
    pin.innerHTML = '<div class="absolute flex items-center justify-center p-2 bg-brand-primary text-white rounded-full" style="top: 50%; left: 50%; transform: translate(-50%, -50%)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>';
    mapContainer.appendChild(pin.firstChild as Node);
    
    return () => {
      // Cleanup if needed
    };
  }, [location]);

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-2 text-brand-primary">{title}</h3>
      <div 
        ref={mapRef}
        className="w-full flex-1 min-h-[200px] bg-gray-200 rounded-lg shadow-md"
        aria-label={`Map showing ${title}`}
      />
    </div>
  );
};

export default MapLocation;
