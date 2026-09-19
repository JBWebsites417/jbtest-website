import { useEffect, useState } from 'react';
import { Star, MapPin, ArrowDown } from 'lucide-react';
import { business, heroImages } from '../data';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [heroImage, setHeroImage] = useState('');

 useEffect(() => {
  fetch(
    'https://raw.githubusercontent.com/JBWebsites417/jbtest-website/main/src/content/homepage.yml'
  )
    .then((res) => res.text())
    .then((text) => {
      const match = text.match(/hero_image:\s*["']?([^"'\n]*)/);
      const imagePath = match?.[1]?.trim();

      if (imagePath) {
        setHeroImage(
  `https://raw.githubusercontent.com/JBWebsites417/jbtest-website/main/public${imagePath}`
);
      }
    })
    .catch(console.error);
}, []);

  const images = heroImage
    ? [...heroImages, heroImage]
    : heroImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="top" className="relative h-screen min-h-[700px] overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-forest-900/50 to-forest-900/70" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up delay-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-sand-400 text-sand-400" />
              ))}
            </div>
            <span className="text-cream text-sm font-medium">
              {business.rating} · {business.reviewCount} Google reviews
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream leading-[1.1] mb-6 animate-fade-up delay-300">
            Furniture that feels
            <span className="block text-sand-300">like home</span>
          </h1>

          <p className="text-cream/85 text-lg md:text-xl leading-relaxed mb-8 max-w-xl animate-fade-up delay-400">
            Premium Australian-made lounges, sofas, and outdoor settings.
            Customisable, locally crafted, and tailored to your space —
            visit our Taren Point showroom to find your perfect piece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-500">
            <a
              href="#collections"
              className="px-8 py-4 rounded-full bg-sand-400 text-forest-800 font-semibold text-base hover:bg-sand-300 transition-all hover:scale-105 hover:shadow-xl text-center"
            >
              Explore Collections
            </a>
            <a
              href="#visit"
              className="px-8 py-4 rounded-full border-2 border-cream/40 text-cream font-semibold text-base hover:bg-cream/10 transition-all text-center"
            >
              Visit Showroom
            </a>
          </div>

          <div className="flex items-center gap-2 mt-8 text-cream/70 text-sm animate-fade-up delay-600">
            <MapPin size={16} />
            <span>{business.address}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
        <span className="text-cream/50 text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={20} className="text-cream/50 animate-bounce" />
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? 'w-10 bg-sand-400' : 'w-5 bg-cream/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
