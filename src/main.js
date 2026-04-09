import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

console.log('Lumière Salon Loaded');

document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.killAll(); // Prevents overlapping animations during Vite hot-reload

    // 1. Hero Entrance Animations
    const heroTl = gsap.timeline();
    heroTl.fromTo('#hero span.text-salon-accent', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
          .fromTo('#hero h1', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.6')
          .fromTo('#hero p', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
          .fromTo('#hero .flex', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.6');

    // 2. Global Section Fade-In
    gsap.utils.toArray('section').forEach((sec) => {
        if(sec.id !== 'hero') {
            gsap.fromTo(sec, 
                { opacity: 0, y: 60 },
                {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sec,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    });

    // 3. Staggered Service Cards Animation
    gsap.fromTo('#services .grid > div', 
        { opacity: 0, y: 40 },
        {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#services',
            start: 'top 80%'
        }
    });

    // 4. Staggered Gallery Items Animation
    gsap.fromTo('#gallery .grid > div', 
        { opacity: 0, scale: 0.95 },
        {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#gallery',
            start: 'top 75%'
        }
    });

    // 5. Staggered Team Member Animation
    gsap.fromTo('#team .grid > div', 
        { opacity: 0, y: 50 },
        {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#team',
            start: 'top 80%'
        }
    });
});

