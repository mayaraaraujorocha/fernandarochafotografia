/**
 * ServiceCard Component - Fernanda Rocha Fotografia
 * Card para cada categoria de serviço com modal de álbum
 * Referência: designer.md §5
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from 'react';
import type { IconType } from 'react-icons';
import { Modal } from './Modal';
import { Button } from './Button';
import { GSAP_ENABLED } from '../lib/gsapToggle';

export interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  photos: string[];
}

export function ServiceCard({ title, photos }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    const title = titleRef.current;

    if (!card || !image || !overlay || !title) return;

    if (GSAP_ENABLED) {
      // If GSAP is enabled, dynamically import and use it for richer hover effects
      (async () => {
        const gsapModule = (await import('gsap')).default as any;

        const handleMouseEnter = () => {
          gsapModule.to(card, { y: -8, boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)', duration: 0.4, ease: 'power2.out' });
          gsapModule.to(image, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
          gsapModule.to(overlay, { background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%)', duration: 0.4 });
          gsapModule.to(title, { scale: 1.05, textShadow: '0 4px 16px rgba(0, 0, 0, 0.6)', duration: 0.3, ease: 'back.out(1.2)' });
        };

        const handleMouseLeave = () => {
          gsapModule.to(card, { y: 0, boxShadow: '0 0 0 rgba(0, 0, 0, 0)', duration: 0.4, ease: 'power2.out' });
          gsapModule.to(image, { scale: 1, duration: 0.6, ease: 'power2.out' });
          gsapModule.to(overlay, { background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)', duration: 0.4 });
          gsapModule.to(title, { scale: 1, textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)', duration: 0.3, ease: 'power2.out' });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      })();
    } else {
      // Fallback: simple CSS/JS transformations without GSAP
      const handleMouseEnter = () => {
        (card as HTMLElement).style.transform = 'translateY(-8px)';
        (card as HTMLElement).style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15)';
        (image as HTMLElement).style.transform = 'scale(1.08)';
        (overlay as HTMLElement).style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%)';
        (title as HTMLElement).style.transform = 'scale(1.05)';
        (title as HTMLElement).style.textShadow = '0 4px 16px rgba(0, 0, 0, 0.6)';
      };

      const handleMouseLeave = () => {
        (card as HTMLElement).style.transform = '';
        (card as HTMLElement).style.boxShadow = '';
        (image as HTMLElement).style.transform = '';
        (overlay as HTMLElement).style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)';
        (title as HTMLElement).style.transform = '';
        (title as HTMLElement).style.textShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <>
      {/* Card - Editorial Style with Full Image */}
      <div
        ref={cardRef}
        className="editorial-card"
        onClick={() => setIsModalOpen(true)}
        style={{
          position: 'relative',
          borderRadius: '18px',
          cursor: 'pointer',
          overflow: 'hidden',
          height: '100%',
          width: '100%',
          minHeight: '100px',
          transition: 'box-shadow 0.4s ease',
        }}
        role="button"
        tabIndex={0}
        aria-label={`Ver álbum de ${title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
      >
        {/* Background Image */}
        <div
          ref={imageRef}
          className="card-image"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${photos[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform',
          }}
        />

        {/* Dark Gradient Overlay */}
        <div
          ref={overlayRef}
          className="card-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)',
          }}
        />

        {/* Borda decorativa rosa */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            bottom: '12px',
            left: '12px',
            border: '3px solid rgba(245, 199, 201, 0.7)',
            borderRadius: '10px',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Centered Text Overlay */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-lg)',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <h3
            ref={titleRef}
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              color: '#FFFFFF',
              letterSpacing: '0.02em',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              margin: 0,
              willChange: 'transform',
            }}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Modal com Álbum */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      >
        {/* Grid de Fotos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                paddingBottom: '100%',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform var(--transition-normal)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={photo}
                alt={`${title} - Foto ${index + 1}`}
                loading="lazy"
                onClick={() => {
                  setCurrentImage(photo);
                  setIsImageOpen(true);
                }}
                onError={(e) => {
                  console.error('Erro ao carregar imagem:', photo);
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop&q=80';
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>

        {/* Botão Ver Mais */}
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="primary"
            href={`https://wa.me/5511919009824?text=Olá! Gostaria de ver mais fotos de ${title}`}
            target="_blank"
          >
            Marcar Ensaio
          </Button>
        </div>
      </Modal>

      {/* Image Lightbox Modal: open when a photo is clicked inside the album modal */}
      <Modal isOpen={isImageOpen} onClose={() => { setIsImageOpen(false); setCurrentImage(null); }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          {currentImage && (
            <img
              src={currentImage}
              alt={title}
              // show image at original size (within viewport limits) without any border or rounding
              style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: 0 }}
            />
          )}
        </div>
      </Modal>
    </>
  );
}
