import { TESTIMONIALS } from '../data/salonData';

const QuoteIcon = () => (
  <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-white text-salon-text relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-salon-accent text-xs font-bold uppercase tracking-[0.3em]">Client Love</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Word of <span className="text-salon-accent">Mouth.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={`p-8 bg-salon-bg border border-salon-text/5 rounded-sm relative shadow-sm hover:shadow-md transition-shadow ${t.className}`}>
              <div className="text-salon-accent mb-6">
                <QuoteIcon />
              </div>
              <p className="text-salon-text/70 font-light italic mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-salon-text/40">{t.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
