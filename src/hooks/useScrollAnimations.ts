/**
 * useScrollAnimations Hook - Fernanda Rocha Fotografia
 * Configuração de animações GSAP ScrollTrigger
 * Referência: designer.md §10
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { GSAP_ENABLED } from '../lib/gsapToggle';

export function useScrollAnimations() {
  useEffect(() => {
    // Prevenir execução no servidor
    if (typeof window === 'undefined') return;
    // Run marquee animation (infinite horizontal scroll) regardless of global toggle
    let marqueeTween: any = null;
    (async () => {
      const marquee = document.querySelector('.categories-marquee');
      if (marquee) {
        const gsapModule = (await import('gsap')).default as any;
        const marqueeWidth = marquee.scrollWidth / 2;
        // Use a fixed, slower duration for the marquee on all viewports (non-responsive)
        // Increased from 40s to 80s to make the marquee noticeably slower on all devices.
        const duration = 80; // seconds
        marqueeTween = gsapModule.to(marquee, { x: -marqueeWidth, duration, ease: 'none', repeat: -1 });
      }
    })();

    // If global GSAP is disabled, skip other animations
    if (!GSAP_ENABLED) {
      return () => {
        if (marqueeTween && typeof marqueeTween.kill === 'function') marqueeTween.kill();
      };
    }

    // Aguardar montagem do DOM e importar GSAP dinamicamente
    const timer = setTimeout(() => {
      (async () => {
        const gsapModule = (await import('gsap')).default as any;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsapModule.registerPlugin(ScrollTrigger);

        // ========== HERO: Staggered Animation ========== 
        const heroElements = gsapModule.utils.toArray('#hero > div > *') as HTMLElement[];
        if (heroElements.length > 0) {
          gsapModule.from(heroElements, {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.3,
          });
        }

        // ========== SECTIONS: Batch Animation (Performance Improvement) ==========
        const sections = gsapModule.utils.toArray('section:not(#hero):not(#sobre):not(#localizacao)') as HTMLElement[];
        
        if (sections.length > 0) {
          gsapModule.set(sections, { opacity: 1, y: 0 });
          ScrollTrigger.batch(sections, {
            start: 'top 85%',
            onEnter: (elements: any) => {
              gsapModule.fromTo(elements,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
              );
            },
          });
        }

        // ========== SERVICE CARDS: Scale + Stagger (Editorial Grid) ==========
        const cards = gsapModule.utils.toArray('.editorial-card') as HTMLElement[];
        if (cards.length > 0) {
          gsapModule.set(cards, { opacity: 0, scale: 0.95, y: 30 });
          ScrollTrigger.batch(cards, {
            start: 'top 80%',
            onEnter: (elements: any) => {
              gsapModule.to(elements, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'back.out(1.1)',
              });
            },
          });
        }

        // ========== TESTIMONIALS: Scale Animation ==========
        const testimonials = gsapModule.utils.toArray('#depoimentos > div > div > div') as HTMLElement[];
        if (testimonials.length > 0) {
          gsapModule.fromTo(testimonials,
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              stagger: 0.2,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: '#depoimentos',
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        // ========== CTA: Parallax Background (Scrub 0.6 for Smoothness) ==========
        const ctaSection = document.getElementById('contato');
        if (ctaSection) {
          gsapModule.to(ctaSection, {
            backgroundPosition: '50% 100%',
            ease: 'none',
            scrollTrigger: {
              trigger: ctaSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }

        // ========== HERO BACKGROUND: Subtle Parallax ==========
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          gsapModule.to(heroSection, {
            backgroundPosition: '50% 30%',
            ease: 'none',
            scrollTrigger: {
              trigger: heroSection,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }

        // ========== FOOTER: Fade Up ==========
        const footer = document.querySelector('footer');
        if (footer) {
          gsapModule.fromTo(footer,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: footer, start: 'top 90%', toggleActions: 'play none none reverse' } }
          );
        }
      })();
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      (async () => {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      })();
      if (marqueeTween && typeof marqueeTween.kill === 'function') marqueeTween.kill();
    };
  }, []);
}
