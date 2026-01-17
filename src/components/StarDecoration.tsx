/**
 * StarDecoration Component - Fernanda Rocha Fotografia
 * Estrelas decorativas animadas nas laterais do site
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StarDecorationProps {
  position: 'left' | 'right';
  top: string;
  color: 'pink' | 'blue';
  size?: 'small' | 'medium' | 'large';
  delay?: number;
}

export function StarDecoration({ position, top, color, size = 'medium', delay = 0 }: StarDecorationProps) {
  const starRef = useRef<HTMLDivElement>(null);

  const colorMap = {
    pink: '#F5C7C9',
    blue: '#8DA4D0',
  };

  const sizeMap = {
    small: { width: '60px', height: '60px' },
    medium: { width: '100px', height: '100px' },
    large: { width: '140px', height: '140px' },
  };

  useEffect(() => {
    if (!starRef.current) return;

    const star = starRef.current;

    // Animação de rotação contínua suave
    gsap.to(star, {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: 'none',
    });

    // Efeito de "flash de foto" - aparece e desaparece como um flash
    const flashAnimation = () => {
      const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: Math.random() * 1.5 + 0.5, // Delay aleatório entre 0.5-2s (frequência aumentada)
      });

      timeline
        .fromTo(
          star,
          {
            opacity: 0,
            scale: 0.3,
          },
          {
            opacity: 0.9,
            scale: 1.1,
            duration: 0.2,
            ease: 'power2.out',
          }
        )
        .to(star, {
          opacity: 0.7,
          scale: 1,
          duration: 0.3,
          ease: 'power1.inOut',
        })
        .to(star, {
          opacity: 0.8,
          scale: 1.05,
          duration: 1.5,
          ease: 'sine.inOut',
        })
        .to(star, {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: 'power2.in',
        });

      return timeline;
    };

    // Inicia com delay baseado na prop delay
    gsap.delayedCall(delay, () => {
      flashAnimation();
    });

    // Scroll trigger apenas para ativar a visibilidade inicial
    ScrollTrigger.create({
      trigger: star,
      start: 'top bottom-=100',
      onEnter: () => {
        star.style.visibility = 'visible';
      },
    });

    // Flutuação sutil enquanto visível
    gsap.to(star, {
      y: '+=10',
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: delay * 0.3,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(star);
    };
  }, [delay]);

  return (
    <div
      ref={starRef}
      className="star-decoration"
      style={{
        position: 'fixed',
        [position]: position === 'left' ? '2%' : '2%',
        top: top,
        width: sizeMap[size].width,
        height: sizeMap[size].height,
        zIndex: 10,
        pointerEvents: 'none',
        opacity: 0,
        visibility: 'hidden',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 696 696"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="matrix(1.0794954299926758,0,0,1.0794954299926758,27.507293701171875,25.6693115234375)">
          <g transform="matrix(1,0,0,1,296.46600341796875,296.46600341796875)">
            <path
              fill={colorMap[color]}
              fillOpacity="0.8"
              d="M296.21600341796875,0 C32.91299819946289,18.177000045776367 18.177000045776367,32.91299819946289 0,296.21600341796875 C-18.17799949645996,32.91299819946289 -32.91299819946289,18.177000045776367 -296.21600341796875,0 C-32.91299819946289,-18.177000045776367 -18.17799949645996,-32.91299819946289 0,-296.21600341796875 C18.177000045776367,-32.91299819946289 32.91299819946289,-18.177000045776367 296.21600341796875,0z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
