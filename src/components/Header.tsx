/**
 * Header Component - Fernanda Rocha Fotografia
 * Referência: designer.md §2.1
 * 
 * Position absoluto sobre o hero
 * Logo à esquerda, navegação + CTA WhatsApp à direita
 * Menu hambúrguer responsivo para mobile
 */

import { useState } from 'react';
import { Button } from './Button';
import { FaBars, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Fechar menu ao navegar
    }
  };

  const navLinks = [
    { label: 'Sobre Mim', id: 'sobre' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Depoimentos', id: 'depoimentos' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <header
      style={{
        position: 'relative',
        padding: '0.5rem 0',
        backgroundColor: '#FFFFFF',
        boxShadow: 'none',
        borderBottom: '1px solid #F0F0F0',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 4vw, 3rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'clamp(2rem, 4vw, 4rem)',
        }}
      >
        {/* Logo à Esquerda */}
        <div
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="/images/logo/logo.png" 
            alt="Fernanda Rocha Fotografia"
            style={{
              height: 'clamp(3.5rem, 6vw, 5rem)',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Navegação + CTA à Direita */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                color: '#6B7280',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F5C7C9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6B7280';
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://wa.me/5511919009824?text=Olá! Gostaria de agendar uma sessão de fotos."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#8DA4D0',
              color: '#FFFFFF',
              padding: '0.875rem 2rem',
              borderRadius: '50px',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#7089B8';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px #4A5A85';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#8DA4D0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FaMapMarkerAlt style={{ fontSize: '0.9rem' }} />
            Agendar Sessão
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="mobile-menu-button"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            padding: 'var(--spacing-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-md)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                padding: 'var(--spacing-sm)',
                transition: 'color var(--transition-normal)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            href="https://wa.me/5511919009824?text=Olá! Gostaria de agendar uma sessão de fotos."
            target="_blank"
            fullWidth
          >
            Agendar via WhatsApp
          </Button>
        </div>
      )}

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 968px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-button {
              display: block !important;
            }
          }
          
          @media (min-width: 969px) {
            .mobile-menu {
              display: none !important;
            }
          }
        `}
      </style>
    </header>
  );
}
