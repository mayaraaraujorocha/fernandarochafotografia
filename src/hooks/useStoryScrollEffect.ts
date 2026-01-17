/**
 * useStoryScrollEffect Hook
 * 
 * Efeito de scroll com pin para a seção "Minha história"
 * - Pin da seção por ~120% da viewport
 * - Fade/translate do texto da esquerda
 * - Scale/blur/fade da foto da direita
 * - Parallax nos elementos decorativos
 */

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useStoryScrollEffect() {
  useEffect(() => {
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
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1.5,
        anticipatePin: 1,
        // markers: true, // Descomentar para debug
      },
    });

    // Animação do texto da esquerda
    // Subtítulo "Nossa Fotógrafa"
    if (subtitle) {
      timeline.fromTo(
        subtitle,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
        },
        0 // Inicia no tempo 0
      );
    }

    // Parágrafos com stagger
    if (paragraphs && paragraphs.length > 0) {
      timeline.fromTo(
        paragraphs,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.4,
          ease: 'power2.out',
        },
        0.5 // Inicia 0.5s após o subtítulo
      );
    }

    // Animação da foto da direita com blur
    if (imageContainer) {
      const blurAmount = isMobile ? 4 : 8; // Reduzir blur no mobile
      
      timeline.fromTo(
        imageContainer,
        {
          opacity: 0,
          scale: 0.92,
          filter: `blur(${blurAmount}px)`,
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 2,
          ease: 'expo.out',
        },
        0.3 // Inicia quase junto com o texto
      );
    }

    // Animação sutil da borda decorativa (pulse)
    if (decorativeBorder) {
      timeline.fromTo(
        decorativeBorder,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.2)',
        },
        1 // Entra depois da imagem começar
      );
    }

    // Parallax leve nos elementos decorativos (estrelas existentes)
    const stars = document.querySelectorAll('.star-decoration');
    stars.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1; // Alternar direção
      const distance = 50 + (index * 15); // Distâncias variadas e mais pronunciadas
      
      gsap.to(star, {
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
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);
}
