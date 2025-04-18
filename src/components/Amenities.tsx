
import React from 'react';
import { Wifi, Waves, Utensils, Car, Flame, Dog, Tv, Bath, Bell, Bike, Lock, Sofa } from 'lucide-react';

const AmenityItem = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex flex-col items-center text-center gap-3 p-4">
    <div className="bg-teal-50 p-3 rounded-full">
      <Icon size={24} className="text-teal-600" />
    </div>
    <span className="text-gray-700 font-medium">{title}</span>
  </div>
);

const Amenities = () => {
  const amenities = [
    { icon: Wifi, title: "Free Wi-Fi" },
    { icon: Waves, title: "Swimming Pool" },
    { icon: Utensils, title: "Full Kitchen" },
    { icon: Car, title: "Free Parking" },
    { icon: Flame, title: "Fireplace" },
    { icon: Dog, title: "Pet Friendly" },
    { icon: Tv, title: "Smart TV" },
    { icon: Bath, title: "Hot Tub" },
    { icon: Bell, title: "Concierge" },
    { icon: Bike, title: "Bicycle Rental" },
    { icon: Lock, title: "Secure Access" },
    { icon: Sofa, title: "Spacious Living Room" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our <span className="text-teal-600">Amenities</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Everything you need for a comfortable and luxurious stay at Seaside Home.
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
