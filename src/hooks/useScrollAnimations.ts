/**
 * useScrollAnimations Hook - Fernanda Rocha Fotografia
 * Configuração de animações GSAP ScrollTrigger
 * Referência: designer.md §10
 */

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollAnimations() {
  useEffect(() => {
    // Prevenir execução no servidor
    if (typeof window === 'undefined') return;

    // Aguardar montagem do DOM
    const timer = setTimeout(() => {
      // ========== HERO: Staggered Animation ========== 
      const heroElements = gsap.utils.toArray<HTMLElement>('#hero > div > *');
      if (heroElements.length > 0) {
        gsap.from(heroElements, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3,
        });
      }

      // ========== SECTIONS: Batch Animation (Performance Improvement) ==========
      // Usa ScrollTrigger.batch ao invés de loops individuais
      // Excluindo seções com pin customizado (#sobre, #localizacao)
      const sections = gsap.utils.toArray<HTMLElement>('section:not(#hero):not(#sobre):not(#localizacao)');
      
      if (sections.length > 0) {
        gsap.set(sections, { opacity: 1, y: 0 }); // Reset inicial
        
        ScrollTrigger.batch(sections, {
          start: 'top 85%',
          onEnter: (elements) => {
            gsap.fromTo(elements,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
              }
            );
          },
        });
      }

      // ========== SERVICE CARDS: Scale + Stagger (Editorial Grid) ==========
      const cards = gsap.utils.toArray<HTMLElement>('.editorial-card');
      
      if (cards.length > 0) {
        gsap.set(cards, { opacity: 0, scale: 0.95, y: 30 }); // Estado inicial
        
        ScrollTrigger.batch(cards, {
          start: 'top 80%',
          onEnter: (elements) => {
            gsap.to(elements, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: 'back.out(1.1)', // Easing suave com ligeiro bounce
            });
          },
        });
      }

      // ========== TESTIMONIALS: Scale Animation ==========
      const testimonials = gsap.utils.toArray<HTMLElement>('#depoimentos > div > div > div');
      if (testimonials.length > 0) {
        gsap.fromTo(testimonials,
          {
            opacity: 0,
            scale: 0.95,
          },
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
        gsap.to(ctaSection, {
          backgroundPosition: '50% 100%',
          ease: 'none',
          scrollTrigger: {
            trigger: ctaSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6, // Tutu School: 0.6 = mais fluido que 1
          },
        });
      }

      // ========== HERO BACKGROUND: Subtle Parallax ==========
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        gsap.to(heroSection, {
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

      // ========== ABOUT IMAGE: Parallax Effect ==========
      // REMOVIDO: Animação movida para useStoryScrollEffect.ts
      // O novo hook controla toda a animação da seção "Minha história"

      // ========== FOOTER: Fade Up ==========
      const footer = document.querySelector('footer');
      if (footer) {
        gsap.fromTo(footer,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footer,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // ========== MARQUEE: Infinite Horizontal Scroll (Tutu School Style) ==========
      const marquee = document.querySelector('.categories-marquee');
      if (marquee) {
        const marqueeWidth = marquee.scrollWidth / 2; // Metade porque duplicamos
        
        gsap.to(marquee, {
          x: -marqueeWidth,
          duration: 30, // 30 segundos para completar um ciclo (lento e suave)
          ease: 'none',
          repeat: -1, // Infinito
        });
      }
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}
