export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 bg-white text-salon-text relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-salon-accent text-xs font-bold uppercase tracking-[0.3em]">The Lumière Experience</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Where Artistry Meets <span className="text-salon-text tracking-normal border-b-2 border-salon-accent">Exclusivity.</span>
          </h2>
          <p className="text-salon-text/70 text-lg md:text-xl font-light leading-relaxed">
            Step into a sanctuary crafted for those who demand perfection. At Lumière, we don't just restyle hair and nails; we curate a transformative experience using the world's most elite products and techniques.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-salon-text/10">
            <div>
              <h4 className="font-display text-3xl font-bold text-salon-text mb-2">15+</h4>
              <p className="text-[10px] uppercase tracking-widest text-salon-text/60 font-bold">Years of Mastery</p>
            </div>
            <div>
              <h4 className="font-display text-3xl font-bold text-salon-text mb-2">VIP</h4>
              <p className="text-[10px] uppercase tracking-widest text-salon-text/60 font-bold">Private Suites Available</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 w-[90%] md:w-full ml-auto">
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200" alt="Salon Details" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-12 -left-8 w-2/3 h-full bg-salon-accent/10 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
