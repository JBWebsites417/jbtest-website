import { useReveal } from '../hooks/useReveal';
import { MapPin, Phone, Clock, Globe, Navigation } from 'lucide-react';
import { business } from '../data';

export default function Visit() {
  const { ref, visible } = useReveal();

  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="visit" className="py-24 md:py-32 bg-forest-800 relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 rounded-full bg-sand-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sand-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Visit Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-4">
              Come say hello
            </h2>
            <p className="text-cream/60 text-lg max-w-2xl mx-auto">
              Our Taren Point showroom is open six days a week. We'd love to help you find your perfect piece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-forest-700 rounded-2xl p-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sand-400 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-forest-800" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-cream mb-1">Address</h3>
                    <p className="text-cream/60 text-sm leading-relaxed">{business.address}</p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Lounge+Life+Taren+Point"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sand-400 text-sm font-medium hover:text-sand-300 transition-colors"
                    >
                      <Navigation size={14} />
                      Get directions
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-forest-700 rounded-2xl p-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sand-400 flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-forest-800" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-cream mb-1">Phone</h3>
                    <a
                      href={`tel:${business.phone.replace(/\s/g, '')}`}
                      className="text-cream/60 text-sm hover:text-sand-300 transition-colors"
                    >
                      {business.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-forest-700 rounded-2xl p-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sand-400 flex items-center justify-center flex-shrink-0">
                    <Globe size={22} className="text-forest-800" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-cream mb-1">Website</h3>
                    <a
                      href={`https://${business.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/60 text-sm hover:text-sand-300 transition-colors"
                    >
                      {business.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forest-700 rounded-2xl p-7">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-sand-400 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-forest-800" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-cream mb-1">Opening Hours</h3>
                  <p className="text-cream/50 text-xs">
                    {business.hours[dayIndex].day}: {business.hours[dayIndex].time}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                {business.hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-2.5 px-4 rounded-lg transition-colors ${
                      i === dayIndex
                        ? "bg-sand-400/15 border border-sand-400/30"
                        : ""
                    }`}
                  >
                    <span className={`text-sm font-medium ${i === dayIndex ? "text-sand-300" : "text-cream/70"}`}>
                      {h.day}
                    </span>
                    <span className={`text-sm ${i === dayIndex ? "text-sand-300 font-semibold" : h.time === "Closed" ? "text-cream/30" : "text-cream/50"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden h-72 shadow-2xl">
            <iframe
              title="Lounge Life location map"
              src="https://www.google.com/maps?q=Lounge+Life+Living+Unlimited+Taren+Point&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
