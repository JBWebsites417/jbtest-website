import { useReveal } from '../hooks/useReveal';
import { Award, Heart, Home } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: "Australian Made",
    description: "Proudly supporting local artisans and Australian craftsmanship in every piece we create.",
  },
  {
    icon: Heart,
    title: "Personalised Service",
    description: "Our showroom team takes the time to understand your space, style, and needs — no pressure, just genuine care.",
  },
  {
    icon: Home,
    title: "Tailored to You",
    description: "Customisable configurations, fabrics, and sizing so your furniture fits your home and your life perfectly.",
  },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-sand-600 text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-800 leading-tight mb-6">
                A showroom built on
                <span className="text-sand-600"> passion and craft</span>
              </h2>
              <div className="space-y-4 text-forest-700/80 text-lg leading-relaxed">
                <p>
                  Lounge Life by Living Unlimited is more than a furniture store — it's a destination
                  where comfort meets craftsmanship. Our Taren Point showroom brings together
                  premium indoor lounges, outdoor settings, and Australian-made collections under one roof.
                </p>
                <p>
                  Our team — Danny, Liz, Serg and more — are known for going above and beyond,
                  helping you understand everything from spring systems to leather grades, so you
                  can make a choice you'll love for years.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6969781/pexels-photo-6969781.jpeg?auto=compress&cs=tinysrgb&w=940&h=700"
                  alt="Beautifully styled living room with comfortable sofa"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-sand-400 flex items-center justify-center shadow-xl hidden md:flex">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-forest-800">4.9</div>
                  <div className="text-xs text-forest-700 font-medium">Google Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-cream border border-sand-200/50 hover:border-sand-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-forest-700 flex items-center justify-center mb-5 group-hover:bg-sand-500 transition-colors">
                  <value.icon size={26} className="text-sand-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-forest-700/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
