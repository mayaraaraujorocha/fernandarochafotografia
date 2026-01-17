/**
 * useLocationScrollEffect Hook
 * 
 * Efeito de scroll com pin para a seção "Localização"
 * - Pin da seção por ~100% da viewport
 * - Scale/fade do mapa da esquerda
 * - Stagger dos blocos de informação da direita
 * - Animação dos ícones com rotação
 * - Botão CTA com bounce no final
 */

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLocationScrollEffect() {
  useEffect(() => {
    // Verificar se os elementos existem
    const section = document.getElementById('localizacao');
    const mapColumn = section?.querySelector('.location-map-column');
    const infoColumn = section?.querySelector('.location-info-column');
    const infoBlocks = infoColumn?.querySelectorAll('.location-info-block');
    const ctaButton = section?.querySelector('.location-cta-button');
    const icons = section?.querySelectorAll('.location-icon');

    if (!section || !mapColumn || !infoColumn) {
      console.warn('useLocationScrollEffect: Elementos da seção não encontrados');
      return;
    }

    // Detectar mobile para desabilitar pin
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // No mobile, usar apenas fade simples sem pin
      gsap.from([mapColumn, infoColumn], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
      return;
    }

    // Criar timeline principal com ScrollTrigger (apenas desktop)
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

    // Animação do mapa da esquerda (scale + fade)
    if (mapColumn) {
      timeline.fromTo(
        mapColumn,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
        },
        0 // Inicia no tempo 0
      );
    }

    // Animação dos blocos de informação com stagger
    if (infoBlocks && infoBlocks.length > 0) {
      timeline.fromTo(
        infoBlocks,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.4, // 0.4s entre cada bloco
          ease: 'power2.out',
        },
        0.3 // Inicia 0.3s após o mapa
      );
    }

    // Animação dos ícones (rotação + scale)
    if (icons && icons.length > 0) {
      icons.forEach((icon, index) => {
        const rotation = index % 2 === 0 ? 360 : -360; // Alterna direção
        
        timeline.fromTo(
          icon,
          {
            opacity: 0,
            scale: 0.5,
            rotation: 0,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: rotation,
            duration: 0.8,
            ease: 'back.out(1.5)',
          },
          0.3 + (index * 0.4) // Sincroniza com os blocos
        );
      });
    }

    // Botão CTA entra por último com bounce
    if (ctaButton) {
      timeline.fromTo(
        ctaButton,
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
        },
        1.5 // Entra depois de todos os blocos
      );
    }

    // Parallax leve nos ícones durante scroll da página
    if (icons && icons.length > 0) {
      icons.forEach((icon, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const distance = 20 + (index * 5);
        
        gsap.to(icon, {
          y: direction * distance,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }

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
