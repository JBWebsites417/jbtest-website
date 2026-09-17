import { useReveal } from '../hooks/useReveal';
import { ArrowRight, Check } from 'lucide-react';
import { collections } from '../data';

export default function Collections() {
  const { ref, visible } = useReveal();

  return (
    <section id="collections" className="py-24 md:py-32 bg-forest-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sand-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sand-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Our Collections
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-4">
              Find your perfect piece
            </h2>
            <p className="text-cream/60 text-lg max-w-2xl mx-auto">
              Three distinct ranges, each crafted with care and built to last a lifetime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((col, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-forest-700 cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-display text-2xl font-bold text-cream mb-2">
                    {col.title}
                  </h3>
                  <p className="text-cream/70 text-sm leading-relaxed mb-4">
                    {col.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {col.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-cream/60 text-xs">
                        <Check size={14} className="text-sand-400" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sand-400 text-sm font-medium group-hover:gap-3 transition-all">
                    <span>Discover more</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
