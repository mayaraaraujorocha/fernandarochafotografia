/**
 * useFAQScrollEffect Hook
 * 
 * Animação staggered para seção FAQ (Perguntas Frequentes)
 * - Entrada da esquerda para direita
 * - Uma pergunta por vez com delay escalonado
 * - Fade + translate horizontal
 * - Easing suave power3.out
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { GSAP_ENABLED } from '../lib/gsapToggle';

export function useFAQScrollEffect() {
  useEffect(() => {
    if (!GSAP_ENABLED) return;

    // função assíncrona para importar GSAP dinamicamente
    (async () => {
      const gsapModule = (await import('gsap')).default as any;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsapModule.registerPlugin(ScrollTrigger);

      // Verificar se os elementos existem
      const section = document.getElementById('faq');
      const faqItems = section?.querySelectorAll('.faq-item');

      if (!section || !faqItems || faqItems.length === 0) {
        console.warn('useFAQScrollEffect: Elementos FAQ não encontrados');
        return;
      }

      // Estado inicial: perguntas fora da tela à esquerda
      gsapModule.set(faqItems, {
        opacity: 0,
        x: -100,
        rotateX: -15,
      });

      // Animação staggered: uma por vez da esquerda para direita
      gsapModule.to(faqItems, {
        opacity: 1,
        x: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    })();

    // Cleanup: remover triggers relacionados a esta seção
    return () => {
      if (!GSAP_ENABLED) return;
      (async () => {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.vars.trigger === document.getElementById('faq')) {
            trigger.kill();
          }
        });
      })();
    };
  }, []);
}
