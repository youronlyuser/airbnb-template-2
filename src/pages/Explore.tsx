
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Map, Compass, ShoppingBag, Calendar, Waves, Utensils, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export default function Explore() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const GUIDES = [
    {
      key: "beaches",
      icon: Waves,
      name: language === 'en' ? "Local Beaches" : "Τοπικές Παραλίες",
      desc: language === 'en' 
        ? "Find the best stretches of sand for sunbathing, surfing, or peaceful strolls. Recommendations include Seaside Main Beach, Bluewave Bay, and Cliffview Cove."
        : "Βρείτε τις καλύτερες παραλίες για ηλιοθεραπεία, σερφ ή ήρεμες βόλτες. Οι προτάσεις περιλαμβάνουν την Κεντρική Παραλία, τον Κόλπο Bluewave και τον Όρμο Cliffview."
    },
    {
      key: "trails",
      icon: Compass,
      name: language === 'en' ? "Hiking Trails" : "Μονοπάτια Πεζοπορίας",
      desc: language === 'en'
        ? "Venture on coastal and inland trails—try Ocean Bluffs Path or Lighthouse Loop for spectacular views and wildlife sightings."
        : "Περιπλανηθείτε σε παραθαλάσσια και ενδοχώρια μονοπάτια—δοκιμάστε το Μονοπάτι Ocean Bluffs ή το Κυκλικό του Φάρου για εντυπωσιακή θέα και παρατήρηση άγριας ζωής."
    },
    {
      key: "center",
      icon: ShoppingBag,
      name: language === 'en' ? "City Center & Shopping" : "Κέντρο Πόλης & Αγορές",
      desc: language === 'en'
        ? "Explore boutique shops, art galleries, and seaside markets. Weekly events, local crafts, and more await downtown."
        : "Εξερευνήστε μπουτίκ, γκαλερί τέχνης και παραθαλάσσιες αγορές. Εβδομαδιαίες εκδηλώσεις, τοπική χειροτεχνία και πολλά άλλα σας περιμένουν στο κέντρο."
    },
    {
      key: "events",
      icon: Calendar,
      name: language === 'en' ? "Markets & Events" : "Αγορές & Εκδηλώσεις",
      desc: language === 'en'
        ? "Don't miss weekly farmers markets, food festivals, and live music at the open-air amphitheater."
        : "Μην χάσετε τις εβδομαδιαίες αγορές αγροτών, τα φεστιβάλ φαγητού και τη ζωντανή μουσική στο υπαίθριο αμφιθέατρο."
    },
    {
      key: "sports",
      icon: Waves,
      name: language === 'en' ? "Water Sports / Boat Rentals" : "Θαλάσσια Σπορ / Ενοικιάσεις Σκαφών",
      desc: language === 'en'
        ? "Kayak, surf, or take a sunset cruise—local outfitters offer equipment and lessons for all levels."
        : "Κάντε καγιάκ, σερφ ή μια κρουαζιέρα στο ηλιοβασίλεμα—οι τοπικοί πάροχοι προσφέρουν εξοπλισμό και μαθήματα για όλα τα επίπεδα."
    },
    {
      key: "food",
      icon: Utensils,
      name: language === 'en' ? "Favorite Restaurants" : "Αγαπημένα Εστιατόρια",
      desc: language === 'en'
        ? "Enjoy Seaside's culinary highlights: The Coastal Kitchen (seafood), Harbor Cafe (breakfast), and Sunset Grill (ocean views)."
        : "Απολαύστε τα κορυφαία γαστρονομικά σημεία της Παραλίας: The Coastal Kitchen (θαλασσινά), Harbor Cafe (πρωινό) και Sunset Grill (θέα στον ωκεανό)."
    },
  ];

  // Placeholder downloadables
  const PDFS = [
    { icon: FileText, name: language === 'en' ? "Area Map" : "Χάρτης Περιοχής", url: "#" },
    { icon: FileText, name: language === 'en' ? "Local Guide" : "Τοπικός Οδηγός", url: "#" },
    { icon: FileText, name: language === 'en' ? "House Manual" : "Εγχειρίδιο Σπιτιού", url: "#" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">
            {language === 'en' ? "Explore Around Seaside Home" : "Εξερευνήστε γύρω από το Seaside Home"}
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {language === 'en' 
              ? "Discover the best local experiences, attractions, and eats within easy reach of your home base."
              : "Ανακαλύψτε τις καλύτερες τοπικές εμπειρίες, αξιοθέατα και φαγητά σε κοντινή απόσταση από τη βάση σας."}
          </p>
          
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
            <h3 className="text-xl font-semibold mb-3">
              {language === 'en' ? "See on the Map" : "Δείτε στον Χάρτη"}
            </h3>
            <div className="rounded-xl overflow-hidden aspect-video bg-gray-200 flex items-center justify-center min-h-[230px]">
              {/* You can embed any map here; for now, placeholder */}
              <iframe
                title={language === 'en' ? "Seaside Town Map" : "Χάρτης Παραθαλάσσιας Πόλης"}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.50%2C-0.13%2C51.52&amp;layer=mapnik"
                className="w-full h-full"
                loading="lazy"
                aria-label={language === 'en' ? "Map showing Seaside Home and surroundings" : "Χάρτης που δείχνει το Seaside Home και τα περίχωρα"}
              ></iframe>
            </div>
          </div>

          {/* PDFs */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">
              {language === 'en' ? "Helpful Downloads" : "Χρήσιμα Αρχεία για Κατέβασμα"}
            </h3>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
