
import React from "react";
import { Map, Compass, ShoppingBag, Calendar, Waves, Utensils, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const GUIDES = [
  {
    key: "beaches",
    icon: Waves,
    name: "Local Beaches",
    desc: "Find the best stretches of sand for sunbathing, surfing, or peaceful strolls. Recommendations include Seaside Main Beach, Bluewave Bay, and Cliffview Cove."
  },
  {
    key: "trails",
    icon: Compass,
    name: "Hiking Trails",
    desc: "Venture on coastal and inland trails—try Ocean Bluffs Path or Lighthouse Loop for spectacular views and wildlife sightings."
  },
  {
    key: "center",
    icon: ShoppingBag,
    name: "City Center & Shopping",
    desc: "Explore boutique shops, art galleries, and seaside markets. Weekly events, local crafts, and more await downtown."
  },
  {
    key: "events",
    icon: Calendar,
    name: "Markets & Events",
    desc: "Don’t miss weekly farmers markets, food festivals, and live music at the open-air amphitheater."
  },
  {
    key: "sports",
    icon: Waves,
    name: "Water Sports / Boat Rentals",
    desc: "Kayak, surf, or take a sunset cruise—local outfitters offer equipment and lessons for all levels."
  },
  {
    key: "food",
    icon: Utensils,
    name: "Favorite Restaurants",
    desc: "Enjoy Seaside’s culinary highlights: The Coastal Kitchen (seafood), Harbor Cafe (breakfast), and Sunset Grill (ocean views)."
  },
];

// Placeholder downloadables
const PDFS = [
  { icon: FileText, name: "Area Map", url: "#" },
  { icon: FileText, name: "Local Guide", url: "#" },
  { icon: FileText, name: "House Manual", url: "#" },
];

export default function Explore() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-2 md:px-4">
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-12 mb-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Explore Around Seaside Home</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Discover the best local experiences, attractions, and eats within easy reach of your home base.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {GUIDES.map(g => (
            <div key={g.key} className="bg-teal-50 rounded-xl p-6 shadow flex flex-col gap-3">
              <g.icon size={28} className="text-teal-600 mb-2" />
              <h2 className="font-bold text-lg">{g.name}</h2>
              <p className="text-gray-700">{g.desc}</p>
            </div>
          ))}
        </div>

        {/* Embedded Alt Map */}
        <div className="mt-12 mb-8">
          <h3 className="text-xl font-semibold mb-3">See on the Map</h3>
          <div className="rounded-xl overflow-hidden aspect-video bg-gray-200 flex items-center justify-center min-h-[230px]">
            {/* You can embed any map here; for now, placeholder */}
            <iframe
              title="Seaside Town Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.50%2C-0.13%2C51.52&amp;layer=mapnik"
              className="w-full h-full"
              loading="lazy"
              aria-label="Map showing Seaside Home and surroundings"
            ></iframe>
          </div>
        </div>

        {/* PDFs */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Helpful Downloads</h3>
          <div className="flex flex-wrap gap-4">
            {PDFS.map(pdf => (
              <a
                key={pdf.name}
                href={pdf.url}
                className="inline-flex items-center gap-2 px-5 py-3 bg-teal-50 rounded-lg border border-teal-100 text-teal-700 hover:bg-teal-100 transition"
              >
                <pdf.icon size={18} /> {pdf.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
