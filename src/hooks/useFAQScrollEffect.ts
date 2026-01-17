/**
 * useFAQScrollEffect Hook
 * 
 * Animação staggered para seção FAQ (Perguntas Frequentes)
 * - Entrada da esquerda para direita
 * - Uma pergunta por vez com delay escalonado
 * - Fade + translate horizontal
 * - Easing suave power3.out
 */

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useFAQScrollEffect() {
  useEffect(() => {
    // Verificar se os elementos existem
    const section = document.getElementById('faq');
    const faqItems = section?.querySelectorAll('.faq-item');

    if (!section || !faqItems || faqItems.length === 0) {
      console.warn('useFAQScrollEffect: Elementos FAQ não encontrados');
      return;
    }

    // Estado inicial: perguntas fora da tela à esquerda
    gsap.set(faqItems, {
      opacity: 0,
      x: -100, // Começa 100px à esquerda
      rotateX: -15, // Leve inclinação 3D
    });

    // Animação staggered: uma por vez da esquerda para direita
    gsap.to(faqItems, {
      opacity: 1,
      x: 0,
      rotateX: 0,
      duration: 0.8,
      stagger: 0.15, // 0.15s entre cada pergunta
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 70%', // Começa quando seção entra 70% da viewport
        toggleActions: 'play none none reverse',
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);
}
