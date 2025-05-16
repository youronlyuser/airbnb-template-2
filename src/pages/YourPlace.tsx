
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bed, Bath, Tv, Utensils, Waves, Sofa } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const ROOM_TABS = {
  en: [
    {
      key: "living",
      label: "Living Room",
      icon: Sofa,
      description:
        "Bright, open concept living room with plush seating, a smart TV, fireplace, and bay windows facing the ocean. Perfect for relaxing or entertaining.",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "bedroom",
      label: "Bedrooms",
      icon: Bed,
      description:
        "Three thoughtfully decorated bedrooms: elegant master with king bed and ensuite, two guest bedrooms with queen beds and luxury linens.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "kitchen",
      label: "Kitchen",
      icon: Utensils,
      description:
        "Fully equipped kitchen with chef-quality appliances, spacious island, breakfast bar, and all cookware provided for your culinary adventures.",
      image:
        "https://images.unsplash.com/photo-1506744038136-4627383780b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "bathroom",
      label: "Bathroom",
      icon: Bath,
      description:
        "Modern bathrooms with rain showers, deep soaking tubs, premium towels, and eco-friendly toiletries.",
      image:
        "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "outdoor",
      label: "Outdoor Space",
      icon: Waves,
      description:
        "Spacious deck and private pool, outdoor dining, BBQ grill area, lounge chairs, surrounded by lush gardens and exclusive seaside access.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    },
  ],
  gr: [
    {
      key: "living",
      label: "Σαλόνι",
      icon: Sofa,
      description:
        "Φωτεινό σαλόνι ανοιχτής διαρρύθμισης με άνετα καθίσματα, smart TV, τζάκι και παράθυρα με θέα στον ωκεανό. Ιδανικό για χαλάρωση ή διασκέδαση.",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "bedroom",
      label: "Υπνοδωμάτια",
      icon: Bed,
      description:
        "Τρία προσεκτικά διακοσμημένα υπνοδωμάτια: κομψό κύριο υπνοδωμάτιο με king size κρεβάτι και ιδιωτικό μπάνιο, δύο υπνοδωμάτια επισκεπτών με queen size κρεβάτια και πολυτελή λευκά είδη.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "kitchen",
      label: "Κουζίνα",
      icon: Utensils,
      description:
        "Πλήρως εξοπλισμένη κουζίνα με συσκευές επαγγελματικής ποιότητας, ευρύχωρο νησί, μπαρ για πρωινό και όλα τα μαγειρικά σκεύη για τις γαστρονομικές σας περιπέτειες.",
      image:
        "https://images.unsplash.com/photo-1506744038136-4627383780b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "bathroom",
      label: "Μπάνιο",
      icon: Bath,
      description:
        "Μοντέρνα μπάνια με ντους βροχής, βαθιές μπανιέρες, πολυτελείς πετσέτες και οικολογικά προϊόντα περιποίησης.",
      image:
        "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "outdoor",
      label: "Εξωτερικός Χώρος",
      icon: Waves,
      description:
        "Ευρύχωρη βεράντα και ιδιωτική πισίνα, εξωτερική τραπεζαρία, χώρος μπάρμπεκιου, ξαπλώστρες, περιτριγυρισμένα από καταπράσινους κήπους και αποκλειστική πρόσβαση στη θάλασσα.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    },
  ]
};

const AMENITIES = {
  en: [
    { icon: "wifi", label: "Free Wi-Fi", desc: "Reliable, high-speed internet throughout the property." },
    { icon: "waves", label: "Swimming Pool", desc: "Private, heated outdoor pool with lounge chairs." },
    { icon: "utensils", label: "Full Kitchen", desc: "Modern appliances, cookware, and coffee maker included." },
    { icon: "car", label: "Free Parking", desc: "Dedicated parking for up to 2 vehicles." },
    { icon: "flame", label: "Fireplace", desc: "Cozy up by the fireplace in the living area." },
    { icon: "dog", label: "Pet Friendly", desc: "Pets welcome with prior notice—ask for our policy." },
    { icon: "tv", label: "Smart TV", desc: "Enjoy Netflix, Hulu, and streaming on our large TV." },
    { icon: "bath", label: "Hot Tub", desc: "Relax after a long day in the private hot tub." },
    { icon: "bell", label: "Concierge", desc: "Customizable guest experience, local tips available." },
    { icon: "bike", label: "Bicycle Rental", desc: "Complimentary bikes for exploring the coast." },
    { icon: "lock", label: "Secure Access", desc: "Keyless entry and smart home features." },
    { icon: "sofa", label: "Spacious Living", desc: "Large open-plan areas for comfort and relaxation." }
  ],
  gr: [
    { icon: "wifi", label: "Δωρεάν Wi-Fi", desc: "Αξιόπιστο, υψηλής ταχύτητας διαδίκτυο σε όλο το ακίνητο." },
    { icon: "waves", label: "Πισίνα", desc: "Ιδιωτική, θερμαινόμενη εξωτερική πισίνα με ξαπλώστρες." },
    { icon: "utensils", label: "Πλήρης Κουζίνα", desc: "Μοντέρνες συσκευές, μαγειρικά σκεύη και καφετιέρα." },
    { icon: "car", label: "Δωρεάν Πάρκινγκ", desc: "Ειδικός χώρος στάθμευσης για έως 2 οχήματα." },
    { icon: "flame", label: "Τζάκι", desc: "Χαλαρώστε δίπλα στο τζάκι στο καθιστικό." },
    { icon: "dog", label: "Φιλικό για Κατοικίδια", desc: "Τα κατοικίδια είναι ευπρόσδεκτα με προειδοποίηση—ρωτήστε για την πολιτική μας." },
    { icon: "tv", label: "Smart TV", desc: "Απολαύστε Netflix, Hulu και streaming στη μεγάλη μας τηλεόραση." },
    { icon: "bath", label: "Υδρομασάζ", desc: "Χαλαρώστε μετά από μια μεγάλη μέρα στο ιδιωτικό υδρομασάζ." },
    { icon: "bell", label: "Υπηρεσία Θυρωρού", desc: "Προσαρμόσιμη εμπειρία επισκεπτών, διαθέσιμες τοπικές συμβουλές." },
    { icon: "bike", label: "Ενοικίαση Ποδηλάτου", desc: "Δωρεάν ποδήλατα για εξερεύνηση της ακτής." },
    { icon: "lock", label: "Ασφαλής Πρόσβαση", desc: "Είσοδος χωρίς κλειδί και λειτουργίες έξυπνου σπιτιού." },
    { icon: "sofa", label: "Ευρύχωροι Χώροι", desc: "Μεγάλοι χώροι ανοιχτής διαρρύθμισης για άνεση και χαλάρωση." }
  ]
};

import * as LucideIcons from "lucide-react";

export default function YourPlace() {
  const [selected, setSelected] = useState("living");
  const { language } = useLanguage();
  const t = translations[language];
  const roomTabs = ROOM_TABS[language];
  const amenities = AMENITIES[language];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center">
            {language === 'en' ? 'Tour Seaside Home' : 'Περιήγηση στο Seaside Home'}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {language === 'en' 
              ? 'Explore every corner of your home away from home. Scroll through photos, room details, and amenities that make Seaside Home unique!'
              : 'Εξερευνήστε κάθε γωνιά του σπιτιού σας μακριά από το σπίτι. Περιηγηθείτε σε φωτογραφίες, λεπτομέρειες δωματίων και ανέσεις που κάνουν το Seaside Home μοναδικό!'}
          </p>
          
          <Tabs value={selected} onValueChange={setSelected} className="mb-8">
            <TabsList className="flex justify-center gap-1 flex-wrap">
              {roomTabs.map(tab => (
                <TabsTrigger key={tab.key} value={tab.key} className="rounded-full px-4 py-2 flex items-center gap-2">
                  <tab.icon size={18} /> {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {roomTabs.map(tab => (
              <TabsContent key={tab.key} value={tab.key} className="mt-8">
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{tab.label}</h2>
                    <p className="text-gray-700">{tab.description}</p>
                  </div>
                  <img src={tab.image} alt={tab.label} className="w-full object-cover rounded-xl shadow" />
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <h2 className="text-xl font-bold mb-2 mt-8 text-teal-700">
            {language === 'en' ? 'Amenities' : 'Παροχές'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {amenities.map(({ icon, label, desc }, i) => {
              const Icon = LucideIcons[icon.charAt(0).toUpperCase() + icon.slice(1)];
              return (
                <div key={i} className="flex items-start gap-3 bg-teal-50 rounded-lg p-4">
                  <span className="bg-white p-2 rounded-full shadow">
                    {Icon ? <Icon size={20} className="text-teal-600" /> : null}
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">{label}</div>
                    <div className="text-gray-600 text-sm">{desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              {language === 'en' ? 'How to Book' : 'Πώς να Κάνετε Κράτηση'}
            </h2>
            <p className="text-gray-600 text-center mb-3 max-w-2xl">
              {language === 'en' 
                ? 'Checking availability or ready to book? Use the Book Now button or contact us for special requests or long-term rates.'
                : 'Έλεγχος διαθεσιμότητας ή έτοιμοι για κράτηση; Χρησιμοποιήστε το κουμπί Κράτηση ή επικοινωνήστε μαζί μας για ειδικά αιτήματα ή μακροχρόνιες χρεώσεις.'}
            </p>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              {language === 'en' ? 'Book Now' : 'Κράτηση'}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
