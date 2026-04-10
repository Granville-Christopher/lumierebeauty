import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HERO_IMAGES } from '../data/salonData';

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const tl = gsap.timeline();
    tl.fromTo(el.querySelector('.hero-tag'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      .fromTo(el.querySelector('h1'), { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.6')
      .fromTo(el.querySelector('.hero-desc'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
      .fromTo(el.querySelector('.hero-btns'), { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.6');
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-80 overflow-hidden">
      {/* Background Image with Cream Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-salon-bg/90 via-salon-bg/70 to-salon-bg"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
        <span className="hero-tag block text-salon-accent text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6">Welcome to Elegance</span>
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] md:text-7xl font-bold leading-tight mb-8 text-salon-text">
          Redefining <br /> <span className="text-gradient">Luxury Beauty.</span>
        </h1>
        <p className="hero-desc text-salon-text/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
          Experience world-class hair styling, bespoke wig revamping, and premium nail care in an exclusive environment designed just for you.
        </p>
        <div className="hero-btns flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#booking" className="bg-salon-accent hover:bg-salon-accent-glow text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-salon-accent/40 w-full sm:w-auto">
            Reserve an Appointment
          </a>
          <a href="#services" className="border border-salon-text/20 hover:border-salon-text/50 text-salon-text px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all w-full sm:w-auto">
            Explore Services
          </a>
        </div>
      </div>

      {/* Service Preview Images */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center items-end gap-3 md:gap-5 px-4 md:px-16">
        {HERO_IMAGES.map((img) => (
          <div key={img.alt} className="flex-1 max-w-[160px] overflow-hidden rounded-t-full shadow-xl h-[160px] md:h-[320px]">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-top" />
          </div>
        ))}
      </div>
    </section>
  );
}
