import { SERVICES } from '../data/salonData';

const ICONS = {
  arrow: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />,
  briefcase: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  sparkle: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
  smile: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 bg-salon-bg text-salon-text relative border-t border-salon-text/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-salon-accent text-xs font-bold uppercase tracking-[0.3em]">Our Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">The Lumière <span className="text-gradient">Portfolio</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-white border border-salon-text/5 rounded-sm p-8 hover:border-salon-accent/30 transition-all shadow-sm hover:shadow-xl hover:-translate-y-2">
              <div className="mb-6 w-12 h-12 bg-salon-bg rounded-full flex items-center justify-center text-salon-accent group-hover:bg-salon-accent group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {ICONS[service.icon]}
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-salon-text/60 text-sm font-light leading-relaxed mb-6">{service.description}</p>
              <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-salon-accent transition-colors">{service.link} &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
