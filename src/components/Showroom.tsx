import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { showroomImages } from '../data';

export default function Showroom() {
  const { ref, visible } = useReveal();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % showroomImages.length);
  };
  const prevImage = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + showroomImages.length) % showroomImages.length);
  };

  return (
    <section id="showroom" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sand-600 text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Inside Our Showroom
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-800 leading-tight mb-4">
              Step inside Taren Point
            </h2>
            <p className="text-forest-700/60 text-lg max-w-2xl mx-auto">
              A curated space where you can explore, sit, and feel the quality of every piece.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {showroomImages.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i === 0 || i === 5 ? 'h-full min-h-[300px]' : 'h-48 md:h-56'
                  }`}
                />
                <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-forest-900/90 flex items-center justify-center p-6 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-6 text-cream/70 hover:text-cream transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={showroomImages[lightbox].url}
            alt={showroomImages[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-6 text-cream/70 hover:text-cream transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={40} />
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 text-sm">
            {lightbox + 1} / {showroomImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
