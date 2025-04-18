
import React from 'react';
import { Bed, Bath, CheckSquare, Pool } from 'lucide-react';

const StayDetails = () => {
  return (
    <section id="place" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Your <span className="text-teal-600">Stay Details</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Bedrooms */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <Bed size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3 Bedrooms</h3>
            <p className="text-gray-600">
              Spacious master suite with ensuite bathroom, and two welcoming guest rooms.
            </p>
          </div>
          
          {/* Bathrooms */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <Bath size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2 Bathrooms</h3>
            <p className="text-gray-600">
              Luxurious main bathroom with rain shower, and a second bathroom with tub.
            </p>
          </div>
          
          {/* Amenities */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <CheckSquare size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Full Amenities</h3>
            <p className="text-gray-600">
              Every comfort of home, from high-speed WiFi to chef-quality kitchen appliances.
            </p>
          </div>
          
          {/* Private Pool */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <Pool size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Private Pool</h3>
            <p className="text-gray-600">
              Enjoy our heated pool with seaside views, perfect for morning or evening swims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayDetails;
