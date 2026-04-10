import { PACKAGES } from '../data/salonData';

const CheckIcon = () => (
  <svg className="w-4 h-4 text-salon-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-6 bg-salon-bg text-salon-text relative border-t border-salon-text/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-salon-accent text-xs font-bold uppercase tracking-[0.3em]">Investment</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Featured <span className="text-gradient">Packages.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.title}
              className={`p-8 bg-white rounded-sm flex flex-col ${
                pkg.highlighted
                  ? 'border-2 border-salon-accent shadow-[0_15px_40px_rgba(183,110,121,0.15)] relative transform md:-translate-y-4'
                  : 'border border-salon-text/10 hover:border-salon-accent transition-colors group shadow-sm hover:shadow-xl'
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-salon-accent text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-sm">
                  {pkg.badge}
                </div>
              )}
              <h3 className="font-display text-2xl font-bold mb-2">{pkg.title}</h3>
              <p className="text-salon-text/50 text-sm mb-6">{pkg.description}</p>
              <div className={`text-4xl font-bold font-display mb-8 ${pkg.priceClass}`}>{pkg.price}</div>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-light text-salon-text/80">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 font-bold uppercase tracking-widest text-[10px] transition-all ${
                  pkg.highlighted
                    ? 'bg-salon-accent text-white hover:bg-salon-accent-glow shadow-lg shadow-salon-accent/20 hover:-translate-y-1'
                    : 'border border-salon-accent text-salon-accent group-hover:bg-salon-accent group-hover:text-white'
                }`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
