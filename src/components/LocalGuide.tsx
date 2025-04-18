
import React from 'react';
import { MapPin, Compass, Car, Utensils, FileText } from 'lucide-react';

const GuideCard = ({ 
  icon: Icon, 
  title, 
  children 
}: { 
  icon: React.ElementType; 
  title: string; 
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
    <div className="flex items-center mb-4">
      <div className="bg-teal-50 p-3 rounded-full mr-4">
        <Icon size={24} className="text-teal-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <div>
      {children}
    </div>
  </div>
);

const LocalGuide = () => {
  return (
    <section id="explore" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Explore the <span className="text-teal-600">Area</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Discover all that the surrounding area has to offer during your stay.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <GuideCard icon={MapPin} title="About Your Rental">
            <p className="text-gray-600">
              Nestled just 5 minutes from the beach, our property offers the perfect blend of privacy and convenience. The nearby town center is a short 10-minute walk away.
            </p>
          </GuideCard>
          
          <GuideCard icon={Compass} title="What to See and Do">
            <ul className="text-gray-600 space-y-2 list-disc pl-5">
              <li>Sandy beaches (5 min drive)</li>
              <li>Coastal hiking trails (15 min)</li>
              <li>Historic city center (10 min walk)</li>
              <li>Local farmers market (Saturdays)</li>
              <li>Water sports rentals (10 min)</li>
            </ul>
          </GuideCard>
          
          <GuideCard icon={Car} title="Car & Boat Rentals">
            <p className="text-gray-600">
              We've partnered with local rental companies to provide special discounts for our guests. Use promo code "SEASIDE" when booking with Coastal Rentals or Bay Boats.
            </p>
          </GuideCard>
          
          <GuideCard icon={Utensils} title="Local Restaurants">
            <p className="text-gray-600">
              Don't miss The Coastal Kitchen for fresh seafood, Harbor Cafe for breakfast, and Sunset Grill for outdoor dining with ocean views. We've included a detailed restaurant guide in your welcome package.
            </p>
          </GuideCard>
        </div>
        
        {/* Helpful PDFs */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6">Helpful Guides</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {[
              { icon: FileText, title: "Area Map", url: "#" },
              { icon: FileText, title: "Local Guide", url: "#" },
              { icon: FileText, title: "House Manual", url: "#" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.url} 
                className="flex items-center justify-center gap-2 bg-white px-5 py-3 rounded-lg border border-gray-200 text-teal-600 hover:bg-teal-50 transition"
              >
                <item.icon size={20} />
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalGuide;
