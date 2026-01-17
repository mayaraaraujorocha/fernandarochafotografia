/**
 * Modal Component - Fernanda Rocha Fotografia
 * Modal reutilizável para álbuns de fotos das categorias
 */

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevenir scroll do body quando modal está aberto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1001,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--overlay-dark)',
        backdropFilter: 'blur(4px)',
        animation: 'backdropFadeIn 0.3s ease-out',
      }}
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          width: '90%',
          maxWidth: '1200px',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          animation: 'modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'clamp(1rem, 4vw, 1.5rem)',
            borderBottom: '1px solid var(--divider)',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
            flexShrink: 0,
          }}
        >
          {title && (
            <h3 style={{ 
              margin: 0, 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            }}>
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            style={{
              marginLeft: 'auto',
              background: 'none',
              border: 'none',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              padding: '0.25rem',
              lineHeight: 1,
              transition: 'color var(--transition-fast)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-pink)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div style={{ 
          padding: 'clamp(1rem, 4vw, 2rem)',
          overflowY: 'auto',
          flex: 1,
        }}>
          {children}
        </div>
      </div>

      {/* Keyframes Animation */}
      <style>
        {`
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(-30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes backdropFadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @media (max-width: 768px) {
            [style*="maxWidth: min(1200px, 90vw)"] {
              max-width: 95vw !important;
              max-height: 95vh !important;
            }
          }
        `}
      </style>
    </div>,
    document.body
  );
}
