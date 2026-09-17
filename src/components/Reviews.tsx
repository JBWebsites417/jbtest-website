import { useReveal } from '../hooks/useReveal';
import { Star, Quote } from 'lucide-react';
import { business, reviews, reviewHighlights, ratingBreakdown } from '../data';

export default function Reviews() {
  const { ref, visible } = useReveal();

  return (
    <section id="reviews" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sand-600 text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Customer Stories
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-800 leading-tight mb-4">
              Loved by our community
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-forest-700 rounded-2xl p-8 text-center">
              <div className="font-display text-6xl font-bold text-sand-400 mb-2">
                {business.rating}
              </div>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-sand-400 text-sand-400" />
                ))}
              </div>
              <p className="text-cream/60 text-sm">
                Based on {business.reviewCount} Google reviews
              </p>
            </div>

            <div className="bg-cream border border-sand-200 rounded-2xl p-6 flex flex-col justify-center">
              <h3 className="font-display text-lg font-semibold text-forest-800 mb-4">
                Rating Breakdown
              </h3>
              <div className="space-y-2">
                {ratingBreakdown.map((r) => (
                  <div key={r.stars} className="flex items-center gap-3">
                    <span className="text-xs text-forest-700/60 w-3">{r.stars}</span>
                    <Star size={12} className="fill-sand-400 text-sand-400" />
                    <div className="flex-1 h-2 bg-sand-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sand-400 rounded-full transition-all duration-700"
                        style={{ width: `${(r.count / business.reviewCount) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-forest-700/50 w-6 text-right">{r.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream border border-sand-200 rounded-2xl p-6 flex flex-col justify-center">
              <h3 className="font-display text-lg font-semibold text-forest-800 mb-4">
                What People Mention
              </h3>
              <div className="flex flex-wrap gap-2">
                {reviewHighlights.map((h) => (
                  <span
                    key={h.label}
                    className="px-3 py-1.5 rounded-full bg-forest-50 text-forest-700 text-xs font-medium border border-forest-100"
                  >
                    {h.label} · {h.count}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm border border-sand-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <Quote size={32} className="text-sand-300 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-sand-400 text-sand-400" />
                  ))}
                </div>
                <p className="text-forest-700/80 leading-relaxed text-sm mb-5 flex-1">
                  "{review.text}"
                </p>

                {review.ownerResponse && (
                  <div className="bg-forest-50 rounded-lg p-4 mb-5 border-l-3 border-forest-300">
                    <p className="text-xs font-semibold text-forest-700 mb-1">
                      Response from the owner
                    </p>
                    <p className="text-xs text-forest-700/60 leading-relaxed">
                      {review.ownerResponse}
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-3 pt-4 border-t border-sand-100">
                  <div className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center text-sand-300 font-semibold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-forest-800 text-sm">{review.name}</span>
                      {review.badge && (
                        <span className="text-[10px] bg-sand-100 text-sand-700 px-2 py-0.5 rounded-full">
                          {review.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-forest-700/50">{review.date}</span>
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
