/**
 * Footer Component - Fernanda Rocha Fotografia
 * Referência: designer.md §9
 * 
 * Estrutura 4 colunas: Logo + descrição, Navegação, Serviços, Contato
 */

import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--pink-50)', paddingTop: 'clamp(6rem, 12vw, 10rem)' }}>
      <div
        className="container"
        style={{
          paddingBottom: 'var(--spacing-2xl)',
        }}
      >
        {/* Grid 4 colunas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--spacing-2xl)',
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          {/* Coluna 1: Logo + Descrição */}
          <div>
            <h3
              style={{
                fontSize: 'var(--font-xl)',
                marginBottom: 'var(--spacing-md)',
                color: 'var(--blue-600)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-script)' }}>Fernanda Rocha</span>{' '}
              <span style={{ fontFamily: 'var(--font-heading)' }}>Fotografia</span>
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--neutral-700)',
                lineHeight: 1.6,
                marginBottom: 'var(--spacing-lg)',
              }}
            >
              Fotografia de Família com 15 anos de experiência. Eternizando momentos especiais com sensibilidade e arte.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <a
                href="https://instagram.com/fernandarochafoto"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--blue-600)',
                  backgroundColor: 'var(--pink-100)',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--pink-200)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 199, 201, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--pink-100)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/fernandarochafoto"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--blue-600)',
                  backgroundColor: 'var(--pink-100)',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--pink-200)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 199, 201, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--pink-100)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                }}
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/5511919009824"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--blue-600)',
                  backgroundColor: 'var(--pink-100)',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--pink-200)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 199, 201, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--pink-100)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                }}
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4
              style={{
                fontWeight: 600,
                marginBottom: 'var(--spacing-md)',
                fontSize: '1rem',
                color: 'var(--blue-600)',
              }}
            >
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Sobre Mim', id: 'sobre' },
                { label: 'Vídeo', id: 'video' },
                { label: 'Serviços', id: 'portfolio' },
                { label: 'Depoimentos', id: 'depoimentos' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Localização', id: 'localizacao' },
                { label: 'Contato', id: 'contato' },
              ].map((link) => (
                <li key={link.id} style={{ marginBottom: 'var(--spacing-xs)' }}>
                  <a
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      color: 'var(--neutral-700)',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'color var(--transition-normal)',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--blue-600)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--neutral-700)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h4
              style={{
                fontWeight: 600,
                marginBottom: 'var(--spacing-md)',
                fontSize: '1rem',
                color: 'var(--blue-600)',
              }}
            >
              Serviços
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Casais',
                'Gestantes',
                'Newborn',
                'Smash the Cake',
                'Batizado',
                'Eventos de Nascimento',
                'Eventos de Casamento',
                'Eventos de Aniversário',
                'Eventos Corporativos',
                'Ensaios de Família',
                'Ensaios Infantis',
                'Ensaios de Aniversário',
              ].map((service) => (
                <li key={service} style={{ marginBottom: 'var(--spacing-xs)' }}>
                  <span
                    style={{
                      color: 'var(--neutral-700)',
                      fontSize: '0.95rem',
                    }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4
              style={{
                fontWeight: 600,
                marginBottom: 'var(--spacing-md)',
                fontSize: '1rem',
                color: 'var(--blue-600)',
              }}
            >
              Contato
            </h4>
            <div style={{ fontSize: '0.95rem', color: 'var(--neutral-700)', lineHeight: 1.8 }}>
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: 'var(--spacing-sm)' }}>
                <FaMapMarkerAlt style={{ marginTop: '0.25rem', flexShrink: 0, color: 'var(--accent-pink)' }} />
                <span>
                  AV Ministro Laudo Ferreira de Camargo 229, Sala 4<br />
                  São Paulo, SP
                </span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaWhatsapp style={{ flexShrink: 0, color: 'var(--accent-pink)' }} />
                <a
                  href="https://wa.me/5511919009824"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--neutral-700)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--blue-600)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--neutral-700)';
                  }}
                >
                  (11) 91900-9824
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div
        style={{
          borderTop: '3px solid var(--pink-300)',
          opacity: 0.9,
          padding: 'var(--spacing-lg) 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <p style={{ fontSize: '0.875rem', color: 'var(--neutral-700)', margin: 0 }}>
            © {new Date().getFullYear()} Fernanda Rocha Fotografia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
