import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Global section fade-in animations
  useEffect(() => {
    ScrollTrigger.killAll();

    // Section fade-in animations
    const sections = document.querySelectorAll('section');
    const triggers = [];

    sections.forEach((sec) => {
      if (sec.id === 'hero') return;
      const trigger = ScrollTrigger.create({
        trigger: sec,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        onEnter: () => gsap.fromTo(sec, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }),
        onLeaveBack: () => gsap.to(sec, { opacity: 0, y: 60, duration: 0.5 }),
      });
      triggers.push(trigger);
    });

    // Staggered service cards
    const serviceCards = document.querySelectorAll('#services .grid > div');
    if (serviceCards.length) {
      const st = ScrollTrigger.create({
        trigger: '#services',
        start: 'top 80%',
        onEnter: () => gsap.fromTo(serviceCards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }),
      });
      triggers.push(st);
    }

    // Staggered gallery items
    const galleryItems = document.querySelectorAll('#gallery .grid > div');
    if (galleryItems.length) {
      const st = ScrollTrigger.create({
        trigger: '#gallery',
        start: 'top 75%',
        onEnter: () => gsap.fromTo(galleryItems, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: 'power2.out' }),
      });
      triggers.push(st);
    }

    // Staggered team members
    const teamItems = document.querySelectorAll('#team .grid > div');
    if (teamItems.length) {
      const st = ScrollTrigger.create({
        trigger: '#team',
        start: 'top 80%',
        onEnter: () => gsap.fromTo(teamItems, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }),
      });
      triggers.push(st);
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-salon-bg text-salon-text overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
      <BookingSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
