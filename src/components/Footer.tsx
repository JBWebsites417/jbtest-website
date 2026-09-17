import { MapPin, Phone, Globe } from 'lucide-react';
import { business } from '../data';

export default function Footer() {
  return (
    <footer className="bg-forest-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-sand-400 flex items-center justify-center font-display text-2xl font-bold text-forest-800">
                L
              </div>
              <div>
                <span className="font-display text-xl font-semibold text-cream block">
                  Lounge Life
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-sand-400">
                  by Living Unlimited
                </span>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
              Premium Australian-made furniture, customisable and crafted locally.
              Visit our Taren Point showroom to discover your perfect piece.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-5">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#collections" className="text-cream/50 text-sm hover:text-sand-300 transition-colors">Collections</a></li>
              <li><a href="#showroom" className="text-cream/50 text-sm hover:text-sand-300 transition-colors">Showroom Gallery</a></li>
              <li><a href="#reviews" className="text-cream/50 text-sm hover:text-sand-300 transition-colors">Reviews</a></li>
              <li><a href="#visit" className="text-cream/50 text-sm hover:text-sand-300 transition-colors">Visit Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-cream/50 text-sm">
                <MapPin size={16} className="text-sand-400 mt-0.5 flex-shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-center gap-3 text-cream/50 text-sm">
                <Phone size={16} className="text-sand-400 flex-shrink-0" />
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover:text-sand-300 transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-cream/50 text-sm">
                <Globe size={16} className="text-sand-400 flex-shrink-0" />
                <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-sand-300 transition-colors">
                  {business.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-forest-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Lounge Life by Living Unlimited. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-cream/30 text-xs mr-2">Rated</span>
            <span className="text-sand-400 font-semibold text-sm">{business.rating}</span>
            <span className="text-cream/30 text-xs">/5 on Google</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
