/**
 * WhatsAppFloat Component - Fernanda Rocha Fotografia
 * Botão flutuante do WhatsApp (canto inferior direito)
 * Referência: designer.md §13
 */

import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511919009824?text=Olá! Gostaria de informações sobre os serviços de fotografia."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      style={{
        position: 'fixed',
        bottom: 'var(--spacing-lg)',
        right: 'var(--spacing-lg)',
        zIndex: 1000,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        transition: 'all var(--transition-normal)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
      }}
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp
        style={{
          fontSize: '2rem',
          color: '#FFFFFF',
        }}
      />
    </a>
  );
}
