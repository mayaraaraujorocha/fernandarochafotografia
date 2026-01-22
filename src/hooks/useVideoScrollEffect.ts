/**
 * useVideoScrollEffect Hook
 * 
 * Efeito de scroll cinético para a seção "Momentos em movimento"
 * - Pin da seção por ~120% da viewport
 * - Blur/scale/rotateY 3D do vídeo (efeito cinemático)
 * - Fade/translate escalonado dos textos à direita
 * - Borda decorativa com pulse suave
 * - Parallax diferenciado (vídeo desce, texto sobe)
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { GSAP_ENABLED } from '../lib/gsapToggle';

export function useVideoScrollEffect() {
  useEffect(() => {
    if (!GSAP_ENABLED) return;

    (async () => {
      const gsapModule = (await import('gsap')).default as any;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsapModule.registerPlugin(ScrollTrigger);

      // Verificar se os elementos existem
      const section = document.getElementById('video');
      const videoContainer = section?.querySelector('.video-container');
      const textColumn = section?.querySelector('.video-text-column');
      const title = textColumn?.querySelector('.video-title');
      const paragraph = textColumn?.querySelector('.video-paragraph');
      const quote = textColumn?.querySelector('.video-quote');
      const decorativeBorder = section?.querySelector('.video-decorative-border');

      if (!section || !videoContainer || !textColumn) {
        console.warn('useVideoScrollEffect: Elementos da seção não encontrados');
        return;
      }

      // Detectar mobile para otimizar performance
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        gsapModule.from([videoContainer, textColumn], {
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          },
        });
        return;
      }

      const timeline = gsapModule.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 1.8,
          anticipatePin: 1,
        },
      });

      if (videoContainer) {
        const blurAmount = 12;
        timeline.fromTo(
          videoContainer,
          { opacity: 0, scale: 0.88, filter: `blur(${blurAmount}px)`, rotateY: -8, transformOrigin: 'left center' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', rotateY: 0, duration: 2.5, ease: 'expo.out' },
          0
        );
      }

      if (title) {
        timeline.fromTo(title, { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1.8, ease: 'power3.out' }, 0.4);
      }

      if (paragraph) {
        timeline.fromTo(paragraph, { opacity: 0, x: 60, y: 20 }, { opacity: 1, x: 0, y: 0, duration: 1.8, ease: 'power3.out' }, 0.8);
      }

      if (quote) {
        timeline.fromTo(quote, { opacity: 0, x: 60, y: 20 }, { opacity: 1, x: 0, y: 0, duration: 1.8, ease: 'power3.out' }, 1.2);
      }

      if (decorativeBorder) {
        timeline.fromTo(decorativeBorder, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'back.out(1.5)' }, 1.5);
      }

      if (videoContainer) {
        gsapModule.to(videoContainer, { y: -30, scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.2 } });
      }

      if (textColumn) {
        gsapModule.to(textColumn, { y: 20, scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.2 } });
      }

      const stars = document.querySelectorAll('.star-decoration');
      stars.forEach((star, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        const distance = 60 + index * 20;
        gsapModule.to(star, { y: direction * distance, rotation: direction * 15, scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1 } });
      });

      const videoElement = (videoContainer as HTMLElement).querySelector('video');

      if (videoElement) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              (videoElement as HTMLVideoElement).pause();
            }
          });
        }, { threshold: 0.1 });

        observer.observe(section!);

        return () => {
          timeline.kill();
          observer.disconnect();
          ScrollTrigger.getAll().forEach((trigger: any) => { if (trigger.vars.trigger === section) trigger.kill(); });
        };
      }

      return () => {
        timeline.kill();
        ScrollTrigger.getAll().forEach((trigger: any) => { if (trigger.vars.trigger === section) trigger.kill(); });
      };
    })();
  }, []);
}
