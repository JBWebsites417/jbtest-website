import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { business } from '../data';

const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Showroom", href: "#showroom" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest-700/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-sand-400 flex items-center justify-center font-display text-2xl font-bold text-forest-800 transition-transform group-hover:scale-105">
            L
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-xl font-semibold transition-colors ${scrolled ? "text-cream" : "text-forest-800"}`}>
              Lounge Life
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${scrolled ? "text-sand-300" : "text-sand-600"}`}>
              by Living Unlimited
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                scrolled ? "text-cream/90 hover:text-sand-300" : "text-forest-700 hover:text-sand-600"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sand-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={`tel:${business.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sand-400 text-forest-800 text-sm font-semibold hover:bg-sand-300 transition-colors"
          >
            <Phone size={16} />
            Call Us
          </a>
        </div>

        <button
          className="md:hidden text-forest-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} className={scrolled ? "text-cream" : "text-forest-800"} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-forest-700 shadow-xl animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-cream/90 hover:text-sand-300 text-sm font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-sand-400 text-forest-800 text-sm font-semibold justify-center"
            >
              <Phone size={16} />
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
