/**
 * useInstagramScrollEffect Hook
 * 
 * Animação suave e orgânica para seção Instagram
 * - Título fade in com scale
 * - Grid de posts aparece em wave/onda (linha por linha)
 * - Botão CTA com bounce
 * - Hover states já implementados no JSX
 */

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useInstagramScrollEffect() {
  useEffect(() => {
    // Verificar se os elementos existem
    const section = document.getElementById('instagram');
    const title = section?.querySelector('.instagram-title');
    const description = section?.querySelector('.instagram-description');
    const posts = section?.querySelectorAll('.instagram-post');
    const cta = section?.querySelector('.instagram-cta');

    if (!section || !title || !posts || posts.length === 0) {
      console.warn('useInstagramScrollEffect: Elementos não encontrados');
      return;
    }

    // Criar timeline principal
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    // ========== TÍTULO: Fade + Scale ==========
    timeline.fromTo(
      title,
      {
        opacity: 0,
        scale: 0.9,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.2)',
      },
      0
    );

    // ========== DESCRIÇÃO: Fade simples ==========
    if (description) {
      timeline.fromTo(
        description,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        0.2
      );
    }

    // ========== POSTS: Wave effect (linha por linha) ==========
    // Grid 3x2, animar em 2 ondas horizontais
    const postsArray = Array.from(posts);
    
    // Primeira linha (posts 0, 1, 2)
    const firstRow = postsArray.slice(0, 3);
    timeline.fromTo(
      firstRow,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1, // 0.1s entre cada post da linha
        ease: 'power3.out',
      },
      0.5
    );

    // Segunda linha (posts 3, 4, 5)
    const secondRow = postsArray.slice(3, 6);
    timeline.fromTo(
      secondRow,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      },
      0.9 // Começa 0.4s depois da primeira linha
    );

    // ========== BOTÃO CTA: Bounce entrance ==========
    if (cta) {
      timeline.fromTo(
        cta,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)', // Bounce mais pronunciado
        },
        1.3 // Entra depois dos posts
      );
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
