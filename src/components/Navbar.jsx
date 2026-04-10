import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 px-6 transition-all duration-300 bg-salon-bg/90 backdrop-blur-md border-b border-salon-text/5 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-display font-bold text-2xl tracking-widest uppercase text-salon-text">
          Lumière<span className="text-salon-accent">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-salon-text/70">
          <a href="#experience" className="hover:text-salon-accent transition-colors">Experience</a>
          <a href="#services" className="hover:text-salon-accent transition-colors">Services</a>
          <a href="#gallery" className="hover:text-salon-accent transition-colors">Gallery</a>
        </div>
        <a href="#booking" className="hidden sm:inline-block bg-salon-accent hover:bg-salon-accent-glow text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-[10px] transition-all shadow-md">
          Book Now
        </a>

        {/* Mobile menu toggle */}
        <button className="md:hidden ml-4 p-2 text-salon-text" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-salon-bg/95 backdrop-blur-xl border-b border-salon-text/5 md:hidden">
          <div className="flex flex-col gap-4 p-6 text-xs font-bold uppercase tracking-[0.2em] text-salon-text/70">
            <a href="#experience" onClick={() => setMobileOpen(false)} className="hover:text-salon-accent transition-colors">Experience</a>
            <a href="#services" onClick={() => setMobileOpen(false)} className="hover:text-salon-accent transition-colors">Services</a>
            <a href="#gallery" onClick={() => setMobileOpen(false)} className="hover:text-salon-accent transition-colors">Gallery</a>
            <a href="#booking" onClick={() => setMobileOpen(false)} className="bg-salon-accent text-white px-6 py-3 rounded-sm text-center mt-2">Book Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}
