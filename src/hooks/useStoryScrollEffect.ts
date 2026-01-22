/**
 * useStoryScrollEffect Hook
 * 
 * Efeito de scroll com pin para a seção "Minha história"
 * - Pin da seção por ~120% da viewport
 * - Fade/translate do texto da esquerda
 * - Scale/blur/fade da foto da direita
 * - Parallax nos elementos decorativos
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { GSAP_ENABLED } from '../lib/gsapToggle';

export function useStoryScrollEffect() {
  useEffect(() => {
    if (!GSAP_ENABLED) return;

    (async () => {
      const gsapModule = (await import('gsap')).default as any;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsapModule.registerPlugin(ScrollTrigger);

      // Verificar se os elementos existem
      const section = document.getElementById('sobre');
      const textColumn = section?.querySelector('.story-text-column');
      const imageColumn = section?.querySelector('.story-image-column');
      const subtitle = textColumn?.querySelector('.story-subtitle');
      const paragraphs = textColumn?.querySelectorAll('.story-paragraph');
      const imageContainer = imageColumn?.querySelector('.story-image-container');
      const decorativeBorder = imageColumn?.querySelector('.story-decorative-border');

      if (!section || !textColumn || !imageColumn) {
        console.warn('useStoryScrollEffect: Elementos da seção não encontrados');
        return;
      }

      // Detectar mobile para otimizar performance
      const isMobile = window.innerWidth < 768;

      // Criar timeline principal com ScrollTrigger
      const timeline = gsapModule.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        },
      });

      // Animação do texto da esquerda
      if (subtitle) {
        timeline.fromTo(
          subtitle,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' },
          0
        );
      }

      // Parágrafos com stagger
      if (paragraphs && paragraphs.length > 0) {
        timeline.fromTo(
          paragraphs,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.5, stagger: 0.4, ease: 'power2.out' },
          0.5
        );
      }

      // Animação da foto da direita com blur
      if (imageContainer) {
        const blurAmount = isMobile ? 4 : 8;
        timeline.fromTo(
          imageContainer,
          { opacity: 0, scale: 0.92, filter: `blur(${blurAmount}px)` },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 2, ease: 'expo.out' },
          0.3
        );
      }

      // Animação sutil da borda decorativa (pulse)
      if (decorativeBorder) {
        timeline.fromTo(
          decorativeBorder,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'back.out(1.2)' },
          1
        );
      }

      // Parallax leve nos elementos decorativos (estrelas existentes)
      const stars = document.querySelectorAll('.star-decoration');
      stars.forEach((star, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const distance = 50 + index * 15;
        gsapModule.to(star, {
          y: direction * distance,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Cleanup
      return () => {
        timeline.kill();
        ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.vars.trigger === section) {
            trigger.kill();
          }
        });
      };
    })();
  }, []);
}
