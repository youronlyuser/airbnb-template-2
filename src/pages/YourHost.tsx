import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TESTIMONIALS = [
  {
    name: "Jessica W.",
    review: "Sarah went above and beyond to ensure our stay was perfect. Her warm hospitality made all the difference!",
    stars: 5,
  },
  {
    name: "Adam R.",
    review: "The best host we've ever had—super responsive and knowledgeable about the area.",
    stars: 5,
  },
];

export default function YourHost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Sarah - Your Host"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-teal-100 shadow"
            />
            <div className="absolute bottom-1 right-1 bg-amber-400 px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-white shadow">
              <Star size={16} className="text-white" aria-hidden="true" />
              Superhost
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mt-6">Meet Sarah, Your Host</h1>
          <div className="text-gray-600 text-center mt-3 mb-6">
            <div>
              <strong>About Me:</strong> <br />
              I’m Sarah, your dedicated Airbnb Superhost, and for five years I’ve opened Seaside Home to guests from around the world. Hosting is my passion—it means sharing my love for our coast, and making every stay uniquely memorable. <br />
              <br />
              My journey began as a solo traveler. I learned that feeling truly welcome can make a trip magical. That’s why I always greet guests with a smile, a personalized local guide, and a stocked kitchen. I’m available for recommendations or a friendly chat, but I always respect your privacy. <br />
              <br />
              Whether you’re planning a weekend escape or a family adventure, my goal is to help you experience the very best of Seaside Town!
            </div>
          </div>
          <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 mb-6">
            <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
              View Airbnb Profile
            </a>
          </Button>

          <section aria-label="Guest Testimonials" className="w-full mt-4">
            <h2 className="text-lg font-semibold text-teal-700 mb-4 text-center">What Past Guests Say</h2>
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
}
