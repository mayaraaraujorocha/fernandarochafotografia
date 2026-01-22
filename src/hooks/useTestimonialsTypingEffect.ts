/**
 * useTestimonialsTypingEffect Hook
 * 
 * Efeito de "typing" (digitação) para textos dos depoimentos
 * - Simula digitação character-by-character
 * - Usa scramble/typing effect do GSAP
 * - Ativa quando a seção entra na viewport
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { GSAP_ENABLED } from '../lib/gsapToggle';

export function useTestimonialsTypingEffect() {
  useEffect(() => {
    if (!GSAP_ENABLED) return;

    (async () => {
      const gsapModule = (await import('gsap')).default as any;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsapModule.registerPlugin(ScrollTrigger);

      const section = document.getElementById('depoimentos');
      const testimonialTexts = section?.querySelectorAll('.testimonial-text');

      if (!section || !testimonialTexts || testimonialTexts.length === 0) {
        console.warn('useTestimonialsTypingEffect: Elementos não encontrados');
        return;
      }

      testimonialTexts.forEach((text) => {
        text.textContent = '';
      });

      testimonialTexts.forEach((text, index) => {
        const fullText = text.getAttribute('data-text') || '';
        const chars = fullText.split('');

        const tl = gsapModule.timeline({
          scrollTrigger: {
            trigger: text,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });

        const delayStart = index * 0.5;

        let currentTween: any = null;
        currentTween = tl.to(text, {
          duration: fullText.length * 0.03,
          ease: 'none',
          onUpdate: () => {
            const progress = currentTween.progress();
            const currentLength = Math.floor(progress * chars.length);
            text.textContent = chars.slice(0, currentLength).join('');
            if (progress < 1) text.textContent += '|';
          },
          delay: delayStart,
        });
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.vars.trigger === section || Array.from(testimonialTexts).some(t => trigger.vars.trigger === t)) {
            trigger.kill();
          }
        });
      };
    })();
  }, []);
}
