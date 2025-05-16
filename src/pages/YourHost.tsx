
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const YourHost = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const TESTIMONIALS = [
    {
      name: "Jessica W.",
      review: language === 'en' 
        ? "Sarah went above and beyond to ensure our stay was perfect. Her warm hospitality made all the difference!"
        : "Η Sarah έκανε τα πάντα για να διασφαλίσει ότι η διαμονή μας ήταν τέλεια. Η ζεστή φιλοξενία της έκανε τη διαφορά!",
      stars: 5,
    },
    {
      name: "Adam R.",
      review: language === 'en'
        ? "The best host we've ever had—super responsive and knowledgeable about the area."
        : "Ο καλύτερος οικοδεσπότης που είχαμε ποτέ—πολύ εξυπηρετική και με γνώσεις για την περιοχή.",
      stars: 5,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt={language === 'en' ? "Sarah - Your Host" : "Sarah - Ο Οικοδεσπότης σας"}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-teal-100 shadow"
            />
            <div className="absolute bottom-1 right-1 bg-amber-400 px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-white shadow">
              <Star size={16} className="text-white" aria-hidden="true" />
              {language === 'en' ? "Superhost" : "Υπερ-οικοδεσπότης"}
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mt-6">
            {language === 'en' ? "Meet Sarah, Your Host" : "Γνωρίστε τη Sarah, τον Οικοδεσπότη σας"}
          </h1>
          <div className="text-gray-600 text-center mt-3 mb-6">
            <div>
              <strong>{language === 'en' ? "About Me:" : "Σχετικά με εμένα:"}</strong> <br />
              {language === 'en' 
                ? "I'm Sarah, your dedicated Airbnb Superhost, and for five years I've opened Seaside Home to guests from around the world. Hosting is my passion—it means sharing my love for our coast, and making every stay uniquely memorable."
                : "Είμαι η Sarah, ο αφοσιωμένος Υπερ-οικοδεσπότης του Airbnb, και εδώ και πέντε χρόνια ανοίγω το Seaside Home σε επισκέπτες από όλο τον κόσμο. Η φιλοξενία είναι το πάθος μου—σημαίνει να μοιράζομαι την αγάπη μου για την ακτή μας και να κάνω κάθε διαμονή μοναδικά αξέχαστη."}
              <br /><br />
              {language === 'en'
                ? "My journey began as a solo traveler. I learned that feeling truly welcome can make a trip magical. That's why I always greet guests with a smile, a personalized local guide, and a stocked kitchen. I'm available for recommendations or a friendly chat, but I always respect your privacy."
                : "Το ταξίδι μου ξεκίνησε ως μοναχική ταξιδιώτισσα. Έμαθα ότι το να αισθάνεσαι πραγματικά ευπρόσδεκτος μπορεί να κάνει ένα ταξίδι μαγικό. Γι' αυτό πάντα υποδέχομαι τους επισκέπτες με ένα χαμόγελο, έναν προσωποποιημένο τοπικό οδηγό και μια γεμάτη κουζίνα. Είμαι διαθέσιμη για συστάσεις ή μια φιλική κουβέντα, αλλά πάντα σέβομαι την ιδιωτικότητά σας."}
              <br /><br />
              {language === 'en'
                ? "Whether you're planning a weekend escape or a family adventure, my goal is to help you experience the very best of Seaside Town!"
                : "Είτε σχεδιάζετε μια απόδραση για το Σαββατοκύριακο είτε μια οικογενειακή περιπέτεια, στόχος μου είναι να σας βοηθήσω να βιώσετε το καλύτερο της Παραθαλάσσιας Πόλης!"}
            </div>
          </div>
          <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 mb-6">
            <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
              {language === 'en' ? "View Airbnb Profile" : "Προβολή Προφίλ Airbnb"}
            </a>
          </Button>

          <section aria-label="Guest Testimonials" className="w-full mt-4">
            <h2 className="text-lg font-semibold text-teal-700 mb-4 text-center">
              {language === 'en' ? "What Past Guests Say" : "Τι λένε οι προηγούμενοι επισκέπτες"}
            </h2>
            <div className="flex flex-col gap-5 md:flex-row md:gap-7">
              {TESTIMONIALS.map((t, i) => (
                <blockquote
                  key={i}
                  className="bg-teal-50 rounded-2xl shadow px-5 py-6 flex-1"
                >
                  <div className="flex gap-1 text-amber-400 mb-2" aria-label={`Rating: ${t.stars} stars`}>
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={16} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-2">{t.review}</p>
                  <footer className="text-sm font-semibold text-gray-600">— {t.name}</footer>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default YourHost;
