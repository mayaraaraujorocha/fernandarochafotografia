/**
 * useTestimonialsTypingEffect Hook
 * 
 * Efeito de "typing" (digitação) para textos dos depoimentos
 * - Simula digitação character-by-character
 * - Usa scramble/typing effect do GSAP
 * - Ativa quando a seção entra na viewport
 */

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useTestimonialsTypingEffect() {
  useEffect(() => {
    // Verificar se os elementos existem
    const section = document.getElementById('depoimentos');
    const testimonialTexts = section?.querySelectorAll('.testimonial-text');

    if (!section || !testimonialTexts || testimonialTexts.length === 0) {
      console.warn('useTestimonialsTypingEffect: Elementos não encontrados');
      return;
    }

    // Estado inicial: textos vazios
    testimonialTexts.forEach((text) => {
      text.textContent = '';
    });

    // Criar animação de typing para cada depoimento
    testimonialTexts.forEach((text, index) => {
      const fullText = text.getAttribute('data-text') || '';
      const chars = fullText.split('');
      
      // Animação character-by-character
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // Adicionar delay entre os depoimentos (0.5s)
      const delayStart = index * 0.5;

      tl.to(text, {
        duration: fullText.length * 0.03, // ~30ms por caractere
        ease: 'none',
        onUpdate: function() {
          const progress = this.progress();
          const currentLength = Math.floor(progress * chars.length);
          text.textContent = chars.slice(0, currentLength).join('');
          
          // Adicionar cursor piscante durante digitação
          if (progress < 1) {
            text.textContent += '|';
          }
        },
        delay: delayStart,
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section || 
            Array.from(testimonialTexts).some(t => trigger.vars.trigger === t)) {
          trigger.kill();
        }
      });
    };
  }, []);
}
