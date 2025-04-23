import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as LucideIcons from "lucide-react";

const TABS = [
  { key: "all", label: "All" },
  { key: "living", label: "Living Room" },
  { key: "kitchen", label: "Kitchen" },
  { key: "bedroom", label: "Bedroom" },
  { key: "outdoor", label: "Outdoor" },
];

const IMAGES = [
  // Room, url, alt
  { room: "living", url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80", alt: "Living Room" },
  { room: "kitchen", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", alt: "Kitchen" },
  { room: "bedroom", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", alt: "Bedroom" },
  { room: "outdoor", url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80", alt: "Outdoor Space" },
  { room: "living", url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80", alt: "Living Room Angle" },
  { room: "bedroom", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80", alt: "Bedroom (2)" },
];

function filterImages(room: string) {
  if (room === "all") return IMAGES;
  return IMAGES.filter(img => img.room === room);
}

export default function Gallery() {
  const [selected, setSelected] = useState("all");
  const [lightbox, setLightbox] = useState<null | { url: string; i: number }>(
    null
  );

  const images = filterImages(selected);

  function openModal(i: number) {
    setLightbox({ url: images[i].url, i });
  }
  function closeModal() {
    setLightbox(null);
  }
  function navModal(dir: number) {
    if (!lightbox) return;
    let idx = lightbox.i + dir;
    if (idx < 0) idx = images.length - 1;
    if (idx >= images.length) idx = 0;
    setLightbox({ url: images[idx].url, i: idx });
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Gallery</h1>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {TABS.map(tab => (
              <button
                key={tab.key}
                type="button"
                aria-pressed={selected === tab.key}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${selected === tab.key
                    ? "bg-teal-500 text-white shadow"
                    : "bg-teal-50 text-teal-700 hover:bg-teal-100"}
                `}
                onClick={() => setSelected(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {images.map((img, i) => (
              <button
                key={img.url + i}
                type="button"
                className="aspect-square rounded-lg overflow-hidden group focus:outline-teal-500"
                onClick={() => openModal(i)}
                aria-label={`View ${img.alt} in fullscreen`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  draggable={false}
                />
              </button>
            ))}
          </div>

          {lightbox && (
            <div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
            >
              <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal} aria-label="Close gallery">
                <LucideIcons.X size={32} />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl"
                onClick={() => navModal(-1)}
                aria-label="Previous image"
              >
                <LucideIcons.ArrowLeft size={32} />
              </button>
              <img src={lightbox.url} alt="" className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg border-8 border-white" />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl"
                onClick={() => navModal(1)}
                aria-label="Next image"
              >
                <LucideIcons.ArrowRight size={32} />
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
