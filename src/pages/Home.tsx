/**
 * Home Page - Fernanda Rocha Fotografia
 * Landing page single-page com todas as seções
 */

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { StarDecoration } from '../components/StarDecoration';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useStoryScrollEffect } from '../hooks/useStoryScrollEffect';
import { useVideoScrollEffect } from '../hooks/useVideoScrollEffect';
import { useLocationScrollEffect } from '../hooks/useLocationScrollEffect';
import { useFAQScrollEffect } from '../hooks/useFAQScrollEffect';
import { useTestimonialsTypingEffect } from '../hooks/useTestimonialsTypingEffect';
import { 
  FaHeart, 
  FaBaby, 
  FaBirthdayCake,
  FaRing,
  FaCamera,
  FaChild,
  FaGift,
  FaHome,
  FaStar,
  FaMapMarkerAlt,
  FaTrain,
  FaWhatsapp,
  FaClock,
  FaImage,
  FaCalendarAlt,
  FaPalette
} from 'react-icons/fa';

export default function Home() {
  // Ativar animações GSAP
  useScrollAnimations();
  useStoryScrollEffect();
  useVideoScrollEffect();
  useLocationScrollEffect();
  useFAQScrollEffect();
  useTestimonialsTypingEffect();

  return (
    <>
      <Header />
      <WhatsAppFloat />

      {/* Estrelas Decorativas - Lado Esquerdo */}
      <StarDecoration position="left" top="10vh" color="pink" size="small" delay={0.3} />
      <StarDecoration position="left" top="35vh" color="blue" size="medium" delay={1.2} />
      <StarDecoration position="left" top="60vh" color="pink" size="large" delay={2.5} />
      <StarDecoration position="left" top="85vh" color="blue" size="small" delay={0.8} />

      {/* Estrelas Decorativas - Lado Direito */}
      <StarDecoration position="right" top="20vh" color="blue" size="medium" delay={0} />
      <StarDecoration position="right" top="45vh" color="pink" size="small" delay={1.8} />
      <StarDecoration position="right" top="70vh" color="blue" size="large" delay={0.5} />
      <StarDecoration position="right" top="95vh" color="pink" size="medium" delay={2.0} />

      {/* Hero - Tutu School Style */}
      <section
        id="hero"
        style={{
          padding: '0',
          backgroundColor: '#FFFFFF',
          height: 'calc(100vh - 5rem)',
        }}
      >
        <div style={{ height: '100%' }}>
          <div
            className="hero-section"
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              position: 'relative',
              backgroundImage: 'url(/images/hero/hero-background.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
              overflow: 'hidden',
              padding: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            {/* Overlay azul suave - alinhado com princípio 'cores claras, design suave' */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(141, 164, 208, 0.5), rgba(141, 164, 208, 0.4))',
              }}
            />

            {/* Título à esquerda superior - Tutu Style */}
            <div
              style={{
                position: 'absolute',
                top: 'clamp(6rem, 15vh, 10rem)',
                left: 'clamp(2rem, 5vw, 4rem)',
                zIndex: 10,
                color: '#FFFFFF',
                maxWidth: '600px',
              }}
            >
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: 600,
                  marginBottom: 0,
                  color: 'rgb(76, 90, 116)', 
                  lineHeight: 'var(--leading-tight)',
                  letterSpacing: '0.02em',
                }}
              >
                Eternizando{' '}
                <span style={{ fontFamily: 'var(--font-script)', fontWeight: 400, fontSize: '1.1em' }}>momentos especiais</span>
              </h1>
            </div>

            {/* Card Flutuante Branco - Tutu Style (Esquerda Inferior) */}
            <div
              style={{
                position: 'relative',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                maxWidth: '480px',
                width: '100%',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                zIndex: 20,
                marginBottom: 'clamp(2rem, 5vh, 3rem)',
              }}
              className="hero-card"
            >
          
              
              <p
                style={{
                  fontSize: 'var(--font-base)',
                  lineHeight: 1.6,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--neutral-700)',
                }}
              >
                Transformo seu amor em arte há{' '}
                <strong style={{ color: 'var(--blue-600)' }}>15 anos</strong>. Fotos que sua
                família vai guardar por gerações.
              </p>

              {/* Trust Badges Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-8)',
                  padding: 'var(--space-4) 0',
                  borderTop: '1px solid var(--neutral-200)',
                  borderBottom: '1px solid var(--neutral-200)',
                }}
              >
                <div style={{ textAlign: 'center', padding: '0 var(--space-2)' }}>
                  <div
                    style={{
                      fontSize: 'clamp(1.75rem, 4vw, 2rem)',
                      fontWeight: 700,
                      color: 'var(--blue-600)',
                      marginBottom: 'var(--space-1)',
                      lineHeight: 1,
                    }}
                  >
                    15+
                  </div>
                  <div style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)', color: 'var(--neutral-600)', lineHeight: 1.3 }}>
                    Anos de Experiência
                  </div>
                </div>
                <div style={{ textAlign: 'center', padding: '0 var(--space-2)', borderLeft: '1px solid var(--neutral-200)' }}>
                  <div
                    style={{
                      fontSize: 'clamp(1.75rem, 4vw, 2rem)',
                      fontWeight: 700,
                      color: 'var(--blue-600)',
                      marginBottom: 'var(--space-1)',
                      lineHeight: 1,
                    }}
                  >
                    ❤️
                  </div>
                  <div style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)', color: 'var(--neutral-600)', lineHeight: 1.3 }}>
                    Mãe & Fotógrafa
                  </div>
                </div>
              </div>
              
              <Button
                variant="primary"
                href="https://wa.me/5511919009824?text=Olá! Gostaria de agendar uma sessão de fotos."
                target="_blank"
                fullWidth
              >
                Agendar Sessão
              </Button>
            </div>
          </div>
        </div>

        {/* Responsive CSS para card */}
        <style>
          {`
            @media (max-width: 768px) {
              .hero-card {
                position: relative !important;
                bottom: auto !important;
                left: auto !important;
                margin-top: var(--space-10);
                max-width: 100% !important;
              }
            }
          `}
        </style>
      </section>

      {/* Faixa Animada de Categorias - Tutu School Style */}
      <section 
        style={{ 
          padding: 'clamp(0.5rem, 1.25vw, 1rem) 0',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div 
          className="categories-marquee"
          style={{
            display: 'flex',
            gap: 'var(--space-20)',
            whiteSpace: 'nowrap',
          }}
        >
          {/* Primeiro conjunto de categorias */}
          <div style={{ display: 'flex', gap: 'var(--space-20)', alignItems: 'center' }}>
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>casais</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>gestantes</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>famílias</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>newborn</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>smash the cake</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>casamento</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>aniversário</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
          </div>

          {/* Segundo conjunto (duplicado para loop infinito) */}
          <div style={{ display: 'flex', gap: 'var(--space-20)', alignItems: 'center' }}>
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>casais</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>gestantes</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>famílias</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>newborn</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>smash the cake</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>casamento</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
            
            <span style={{ 
              fontFamily: 'var(--font-script)', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#8DA4D0',
              fontWeight: 400,
            }}>aniversário</span>
            <span style={{ fontSize: '2rem', color: '#8DA4D0' }}>✦</span>
          </div>
        </div>
      </section>

      {/* Sobre Mim - designer.md §3 */}
      <section id="sobre" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', backgroundColor: 'rgb(240, 233, 227)' }}>
          <div className="container">
            {/* Título Principal em Outline - Tutu School Style */}
            <h2 style={{ 
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              textAlign: 'center',
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
              color: '#2D3748',
              letterSpacing: '0.05em',
            }}>
              Minha história
            </h2>
            
            {/* Texto de Introdução Centralizado */}
            <p style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              lineHeight: 1.6,
              color: '#6B7280',
            }}>
              Fundada com amor em 2010, Fernanda Rocha Fotografia é dedicada a capturar momentos especiais de famílias. Acreditamos que cada família merece experimentar a alegria de preservar suas memórias em um ambiente acolhedor e mágico.
            </p>
            
            <div
              className="story-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                gap: 'clamp(2rem, 5vw, 4rem)',
                alignItems: 'center',
              }}
            >
              {/* Texto à esquerda */}
              <div className="story-text-column">
                <p className="story-paragraph" style={{ 
                  marginBottom: 'var(--space-4)', 
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.6,
                  fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
                  color: '#6B7280',
                }}>
                  Fernanda Rocha, ex-profissional de publicidade, fundou este estúdio para oferecer às famílias uma introdução mágica à fotografia. Sua paixão pela fotografia e compromisso com a captura de expressões autênticas guiaram o crescimento do nosso trabalho ao longo dos anos.
                </p>
                <p className="story-paragraph" style={{ 
                  marginBottom: 'var(--space-4)', 
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.6,
                  fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
                  color: '#6B7280',
                }}>
                  Com <strong style={{ color: '#7089B8' }}>15 anos de experiência</strong>, Fernanda teve a oportunidade de trabalhar em diversos projetos, desde ensaios íntimos, nascimentos emocionantes, até grandes eventos, sempre com o compromisso de entregar fotografias que reflitam a essência de cada pessoa.
                </p>
                <p className="story-paragraph" style={{ 
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.6,
                  fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
                  color: '#6B7280',
                }}>
                  <strong style={{ color: '#7089B8' }}>Mãe</strong> e fotógrafa apaixonada, ela entende profundamente o valor de cada momento em família e trabalha para transformar cada imagem em uma memória inesquecível que conecta gerações.
                </p>
              </div>

              {/* Imagem à direita - sem borda */}
              <div className="story-image-column">
              <div
                className="story-image-container"
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  height: 'auto',
                  maxHeight: '550px',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
                  willChange: 'transform, opacity, filter',
                }}
              >
                <img
                  src="/images/about/fernanda-portrait.jpg"
                  alt="Fernanda Rocha - Fotógrafa"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                {/* Efeito de borda decorativa */}
                <div
                  className="story-decorative-border"
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    bottom: '20px',
                    left: '20px',
                    border: '4px solid rgba(245, 199, 201, 0.9)',
                    borderRadius: 'var(--radius-lg)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vídeo - designer.md §4 */}
        <section 
          id="video" 
          style={{ 
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: 'clamp(2rem, 4vw, 3rem) 0',
          }}
        >
          <div className="container">
            {/* Título Principal */}
            <h2
              className="video-title"
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 400,
                textAlign: 'center',
                marginBottom: 'clamp(3rem, 6vw, 5rem)',
                color: 'var(--blue-600)',
                letterSpacing: '0.05em',
                lineHeight: 1.2,
                willChange: 'transform, opacity',
              }}
            >
              Nascimento do Davi Lucca
            </h2>

            {/* Grid 2 colunas: Vídeo à esquerda, Texto à direita */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(2rem, 5vw, 4rem)',
                alignItems: 'center',
              }}
              className="video-grid"
            >
              {/* Vídeo à Esquerda */}
              <div
                className="video-container"
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  willChange: 'transform, opacity, filter',
                }}
              >
                <video
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  controls
                  preload="metadata"
                >
                  <source src="/videos/nascimento-davi-lucca.mp4" type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeo.
                </video>
                {/* Borda decorativa azul */}
                <div
                  className="video-decorative-border"
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    bottom: '15px',
                    left: '15px',
                    border: '3px solid rgba(141, 164, 208, 0.9)',
                    borderRadius: 'var(--radius-lg)',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Texto à Direita */}
              <div className="video-text-column" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 'var(--space-8)',
              }}>
                <p
                  className="video-paragraph"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                    lineHeight: 1.9,
                    color: 'var(--neutral-700)',
                    willChange: 'transform, opacity',
                  }}
                >
                  Assista a este registro mágico e emocionante do nascimento do pequeno Davi Lucca. Cada segundo capturado com carinho e dedicação, preservando a chegada de uma nova vida.
                </p>
              </div>
            </div>

            {/* CSS Responsivo */}
            <style>
              {`
                @media (max-width: 968px) {
                  .video-grid {
                    grid-template-columns: 1fr !important;
                    gap: var(--space-12) !important;
                  }
                }
              `}
            </style>
          </div>
        </section>

        {/* Portfólio/Categorias - designer.md §5 */}
        <section id="portfolio" style={{ padding: 'clamp(5rem, 10vw, 8rem) 0', backgroundColor: '#F0E9E3' }}>
          <div className="container">
            {/* Título Principal em Outline */}
            <h2 style={{ 
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              textAlign: 'center',
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
              color: '#2D3748',
              letterSpacing: '0.05em',
            }}>
              Nossos serviços
            </h2>
            
            <p
              style={{
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto',
                marginBottom: 'clamp(3rem, 5vw, 4rem)',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: 1.6,
                color: '#6B7280',
              }}
            >
              Cada família tem sua história única. Explore nossas especialidades e encontre o ensaio perfeito para você.
            </p>

            {/* Editorial Grid - Asymmetric Layout */}
            <div
              className="editorial-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
                gridTemplateRows: 'repeat(8, 1fr)',
                height: 'clamp(80vh, 85vh, 90vh)',
              }}
            >
              {/* Card 1 - Casais (vertical 3:4) */}
              <div style={{ gridColumn: '1', gridRow: '1 / 4' }}>
                <ServiceCard
                  icon={FaHeart}
                  title="Casais"
                  description="Registre o amor e cumplicidade do casal em fotos naturais e autênticas."
                  photos={generatePlaceholderPhotos(10, 'couple')}
                />
              </div>

              {/* Card 2 - Gestantes (vertical 3:4) */}
              <div style={{ gridColumn: '2', gridRow: '1 / 4' }}>
                <ServiceCard
                  icon={FaBaby}
                  title="Gestantes"
                  description="Celebre a espera com fotos que capturam a beleza e emoção da maternidade."
                  photos={generatePlaceholderPhotos(10, 'pregnant')}
                />
              </div>

              {/* Card 3 - Newborn (vertical alto 3:5) */}
              <div style={{ gridColumn: '3', gridRow: '1 / 5' }}>
                <ServiceCard
                  icon={FaChild}
                  title="Newborn"
                  description="Primeiros dias de vida registrados com delicadeza e carinho."
                  photos={generatePlaceholderPhotos(10, 'newborn')}
                />
              </div>

              {/* Card 4 - Smash the Cake (horizontal 16:9) */}
              <div style={{ gridColumn: '1 / 3', gridRow: '4 / 6' }}>
                <ServiceCard
                  icon={FaBirthdayCake}
                  title="Smash the Cake"
                  description="Primeiro aniversário com diversão, bagunça e muita alegria."
                  photos={generatePlaceholderPhotos(10, 'smash-cake')}
                />
              </div>

              {/* Card 5 - Batizado (vertical 3:4) */}
              <div style={{ gridColumn: '3', gridRow: '5 / 8' }}>
                <ServiceCard
                  icon={FaCamera}
                  title="Batizado"
                  description="Celebração especial do batismo, capturando emoções de fé e amor."
                  photos={generatePlaceholderPhotos(10, 'baby-monthly')}
                />
              </div>

              {/* Card 6 - Eventos de Nascimento (quadrado) */}
              <div style={{ gridColumn: '1', gridRow: '6 / 8' }}>
                <ServiceCard
                  icon={FaGift}
                  title="Eventos de Nascimento"
                  description="Chá de bebê, chá revelação e celebrações da chegada do bebê."
                  photos={generatePlaceholderPhotos(10, 'baby-shower')}
                />
              </div>

              {/* Card 7 - Eventos de Casamento (quadrado) */}
              <div style={{ gridColumn: '2', gridRow: '6 / 8' }}>
                <ServiceCard
                  icon={FaRing}
                  title="Eventos de Casamento"
                  description="Do pedido ao grande dia, cada detalhe do seu casamento registrado."
                  photos={generatePlaceholderPhotos(10, 'wedding')}
                />
              </div>

              {/* Card 8 - Eventos de Aniversário (horizontal) */}
              <div style={{ gridColumn: '1 / 3', gridRow: '8 / 10' }}>
                <ServiceCard
                  icon={FaStar}
                  title="Eventos de Aniversário"
                  description="Festas de aniversário com toda alegria e celebração."
                  photos={generatePlaceholderPhotos(10, 'birthday')}
                />
              </div>

              {/* Card 9 - Ensaios de Aniversário (vertical 3:4) */}
              <div style={{ gridColumn: '3', gridRow: '8 / 11' }}>
                <ServiceCard
                  icon={FaHome}
                  title="Ensaios de Aniversário"
                  description="Ensaios fotográficos especiais para comemorar seu aniversário."
                  photos={generatePlaceholderPhotos(10, 'birthday-shoot')}
                />
              </div>
            </div>
          </div>
          <style>
{`
@media (max-width: 1024px) {
  .editorial-grid {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto !important;
    height: auto !important;
  }

  .editorial-grid > div {
    grid-column: auto !important;
    grid-row: auto !important;
  }
}
`}
</style>

        </section>

        {/* Depoimentos - designer.md §6 */}
        <section id="depoimentos" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', backgroundColor: '#FFFFFF' }}>
          <div className="container">
            {/* Título Principal em Outline */}
            <h2 style={{ 
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              textAlign: 'center',
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
              color: '#2D3748',
              letterSpacing: '0.05em',
            }}>
              Depoimentos
            </h2>
            
            <p
              style={{
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto',
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: 1.6,
                color: '#6B7280',
              }}
            >
              O que nossos clientes dizem sobre a experiência de fotografar suas famílias.
            </p>

            {/* Grid de Depoimentos */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--space-10)',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              {/* Depoimento 1 */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-10)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Borda rosa decorativa do card */}
                <div
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    bottom: '15px',
                    left: '15px',
                    border: '3px solid rgba(245, 199, 201, 0.9)',
                    borderRadius: 'var(--radius-lg)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Estrelas */}
                <div
                  style={{
                    display: 'flex',
                    gap: '0.25rem',
                    marginBottom: 'var(--space-6)',
                    color: 'var(--pink-400)',
                    fontSize: '1.25rem',
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Citação */}
                <p
                  className="testimonial-text"
                  data-text='"As fotos ficaram simplesmente maravilhosas! A Fernanda conseguiu capturar a essência da nossa família de uma forma tão natural e emocionante. Cada detalhe foi registrado com muito carinho e profissionalismo."'
                  style={{
                    fontSize: 'var(--font-base)',
                    lineHeight: 1.8,
                    marginBottom: 'var(--space-8)',
                    fontStyle: 'italic',
                    color: 'var(--neutral-700)',
                  }}
                >
                  "As fotos ficaram simplesmente maravilhosas! A Fernanda conseguiu capturar a essência da nossa família de uma forma tão natural e emocionante. Cada detalhe foi registrado com muito carinho e profissionalismo."
                </p>

                {/* Cliente */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src="https://i.pravatar.cc/100?img=5"
                      alt="Ana Paula Silva"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    {/* Borda rosa decorativa */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-4px',
                        border: '3px solid rgba(245, 199, 201, 0.9)',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                      Ana Paula Silva
                    </p>
                    <p style={{ fontSize: 'var(--font-sm)', color: 'var(--neutral-600)' }}>
                      Ensaio de Família
                    </p>
                  </div>
                </div>

                {/* Link Google Reviews */}
                <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--neutral-200)' }}>
                  <a
                    href="https://www.google.com/maps/place/Fernanda+Rocha+Fotografia"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--blue-600)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--blue-400)';
                      e.currentTarget.style.gap = '0.625rem';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--blue-600)';
                      e.currentTarget.style.gap = '0.375rem';
                    }}
                  >
                    Ver no Google Reviews →
                  </a>
                </div>
              </div>

              {/* Depoimento 2 */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-10)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Borda rosa decorativa do card */}
                <div
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    bottom: '15px',
                    left: '15px',
                    border: '3px solid rgba(245, 199, 201, 0.9)',
                    borderRadius: 'var(--radius-lg)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Estrelas */}
                <div
                  style={{
                    display: 'flex',
                    gap: '0.25rem',
                    marginBottom: 'var(--space-6)',
                    color: 'var(--pink-400)',
                    fontSize: '1.25rem',
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Citação */}
                <p
                  className="testimonial-text"
                  data-text='"Experiência incrível do início ao fim! A Fernanda é extremamente atenciosa e dedicada. As fotos do newborn do nosso filho superaram todas as expectativas. Recomendo de olhos fechados!"'
                  style={{
                    fontSize: 'var(--font-base)',
                    lineHeight: 1.8,
                    marginBottom: 'var(--space-8)',
                    fontStyle: 'italic',
                    color: 'var(--neutral-700)',
                  }}
                >
                  "Experiência incrível do início ao fim! A Fernanda é extremamente atenciosa e dedicada. As fotos do newborn do nosso filho superaram todas as expectativas. Recomendo de olhos fechados!"
                </p>

                {/* Cliente */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src="https://i.pravatar.cc/100?img=32"
                      alt="Mariana e João Costa"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    {/* Borda rosa decorativa */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-4px',
                        border: '3px solid rgba(245, 199, 201, 0.9)',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                      Mariana e João Costa
                    </p>
                    <p style={{ fontSize: 'var(--font-sm)', color: 'var(--neutral-600)' }}>
                      Ensaio Newborn
                    </p>
                  </div>
                </div>

                {/* Link Google Reviews */}
                <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--neutral-200)' }}>
                  <a
                    href="https://www.google.com/maps/place/Fernanda+Rocha+Fotografia"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--blue-600)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--blue-400)';
                      e.currentTarget.style.gap = '0.625rem';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--blue-600)';
                      e.currentTarget.style.gap = '0.375rem';
                    }}
                  >
                    Ver no Google Reviews →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', backgroundColor: '#F8F4F0' }}>
          <div className="container">
            {/* Título Principal */}
            <h2
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 400,
                textAlign: 'center',
                marginBottom: 'clamp(1rem, 3vw, 2rem)',
                color: 'var(--blue-600)',
                letterSpacing: '0.05em',
              }}
            >
              Perguntas Frequentes
            </h2>

            <p
              style={{
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto',
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: 1.6,
                color: 'var(--neutral-700)',
              }}
            >
              Respondemos as dúvidas mais comuns sobre nossas sessões de fotos
            </p>

            {/* Container FAQ */}
            <div style={{ maxWidth: '900px', margin: '0 auto' }} className="faq-container">
              {/* FAQ Item 1 */}
              <details
                className="faq-item"
                style={{
                  marginBottom: 'var(--space-6)',
                  padding: 'var(--space-6)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: 'var(--font-md)',
                    color: 'var(--blue-600)',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                  }}
                >
                  <FaClock style={{ fontSize: '1.5rem', color: 'var(--pink-400)', flexShrink: 0 }} />
                  Quanto tempo dura uma sessão de fotos?
                </summary>
                <p
                  style={{
                    marginTop: 'var(--space-4)',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--neutral-700)',
                    lineHeight: 1.8,
                    paddingLeft: 'calc(1.5rem + var(--space-3))',
                  }}
                >
                  Em média 1-2 horas, dependendo do tipo de ensaio. Sessões newborn podem levar até 3 horas para garantir que o bebê esteja confortável e tranquilo durante todo o processo.
                </p>
              </details>

              {/* FAQ Item 2 */}
              <details
                className="faq-item"
                style={{
                  marginBottom: 'var(--space-6)',
                  padding: 'var(--space-6)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    fontSize: 'var(--font-md)',
                    color: 'var(--blue-600)',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                  }}
                >
                  <FaImage style={{ fontSize: '1.5rem', color: 'var(--blue-600)', flexShrink: 0 }} />
                  Quantas fotos recebo ao final?
                </summary>
                <p
                  style={{
                    marginTop: 'var(--space-4)',
                    color: 'var(--neutral-700)',
                    lineHeight: 1.8,
                    paddingLeft: 'calc(1.5rem + var(--space-3))',
                  }}
                >
                  Você recebe todas as fotos tratadas e editadas profissionalmente, geralmente entre 30 a 80 fotos por sessão, dependendo do pacote escolhido. Todas em alta resolução para impressão.
                </p>
              </details>

              {/* FAQ Item 3 */}
              <details
                className="faq-item"
                style={{
                  marginBottom: 'var(--space-6)',
                  padding: 'var(--space-6)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    fontSize: 'var(--font-md)',
                    color: 'var(--blue-600)',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                  }}
                >
                  <FaCalendarAlt style={{ fontSize: '1.5rem', color: 'var(--pink-400)', flexShrink: 0 }} />
                  Quanto tempo leva para receber as fotos?
                </summary>
                <p
                  style={{
                    marginTop: 'var(--space-4)',
                    color: 'var(--neutral-700)',
                    lineHeight: 1.8,
                    paddingLeft: 'calc(1.5rem + var(--space-3))',
                  }}
                >
                  O prazo de entrega é de até 15 dias úteis após a sessão. Você receberá um link privado para download de todas as imagens em alta resolução, além do álbum digital.
                </p>
              </details>

              {/* FAQ Item 4 */}
              <details
                className="faq-item"
                style={{
                  marginBottom: 'var(--space-6)',
                  padding: 'var(--space-6)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    fontSize: 'var(--font-md)',
                    color: 'var(--blue-600)',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                  }}
                >
                  <FaPalette style={{ fontSize: '1.5rem', color: 'var(--blue-600)', flexShrink: 0 }} />
                  O que devo vestir/levar para a sessão?
                </summary>
                <p
                  style={{
                    marginTop: 'var(--space-4)',
                    color: 'var(--neutral-700)',
                    lineHeight: 1.8,
                    paddingLeft: 'calc(1.5rem + var(--space-3))',
                  }}
                >
                  Envio um guia completo após o agendamento! Em geral, recomendo cores neutras e coordenadas entre a família. Para ensaios newborn, forneço todos os acessórios e mantas necessários.
                </p>
              </details>

         

              {/* FAQ Item 6 */}
              <details
                className="faq-item"
                style={{
                  marginBottom: 'var(--space-6)',
                  padding: 'var(--space-6)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    fontSize: 'var(--font-md)',
                    color: 'var(--blue-600)',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                  }}
                >
                  <FaCamera style={{ fontSize: '1.5rem', color: 'var(--blue-600)', flexShrink: 0 }} />
                  As sessões são em estúdio ou externas?
                </summary>
                <p
                  style={{
                    marginTop: 'var(--space-4)',
                    color: 'var(--neutral-700)',
                    lineHeight: 1.8,
                    paddingLeft: 'calc(1.5rem + var(--space-3))',
                  }}
                >
                  Trabalho tanto em estúdio quanto em locações externas! Temos nosso estúdio equipado próximo à Estação Vila Sônia, e também fazemos ensaios em parques, praias e na sua própria casa.
                </p>
              </details>

              {/* FAQ Item 7 */}
              <details
                className="faq-item"
                style={{
                  marginBottom: 'var(--space-6)',
                  padding: 'var(--space-6)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    fontSize: 'var(--font-md)',
                    color: 'var(--blue-600)',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                  }}
                >
                  <FaBaby style={{ fontSize: '1.5rem', color: 'var(--pink-400)', flexShrink: 0 }} />
                  Qual a melhor idade para ensaio newborn?
                </summary>
                <p
                  style={{
                    marginTop: 'var(--space-4)',
                    color: 'var(--neutral-700)',
                    lineHeight: 1.8,
                    paddingLeft: 'calc(1.5rem + var(--space-3))',
                  }}
                >
                  O ideal é entre 5 e 15 dias de vida, quando o bebê ainda mantém aquelas posições delicadas e dorme profundamente. Mas não se preocupe, faço ensaios lindos com bebês de qualquer idade!
                </p>
              </details>

              {/* CTA Final */}
              <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                <p style={{ marginBottom: 'var(--space-6)', fontSize: 'var(--font-lg)', color: 'var(--neutral-700)' }}>
                  Ainda tem dúvidas? Fale comigo no WhatsApp!
                </p>
                <Button
                  variant="primary"
                  href="https://wa.me/5511919009824?text=Olá! Tenho algumas dúvidas sobre as sessões de fotos."
                  target="_blank"
                >
                  Tirar Dúvidas no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa/Localização - designer.md §7 */}
        <section 
          id="localizacao" 
          style={{ 
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F0E9E3',
            padding: 'clamp(2rem, 4vw, 3rem) 0',
          }}
        >
          <div className="container">
            {/* Título Principal em Outline */}
            <h2 style={{ 
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              textAlign: 'center',
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
              color: '#2D3748',
              letterSpacing: '0.05em',
            }}>
              Venha nos visitar
            </h2>
            
            <p
              style={{
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto',
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: 1.6,
                color: '#6B7280',
              }}
            >
              Estamos localizados próximo à Estação Vila Sônia, a 5 minutos da Rodovia Raposo Tavares.
            </p>
            
            <div
              className="location-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(2rem, 5vw, 4rem)',
                alignItems: 'start',
              }}
            >
              {/* Informações à esquerda */}
              <div className="location-info-column">
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                  <div
                    className="location-info-block"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--spacing-md)',
                      marginBottom: 'var(--spacing-lg)',
                    }}
                  >
                    <div
                      className="location-icon"
                      style={{
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      }}
                    >
                      <FaMapMarkerAlt
                        style={{
                          fontSize: '1.5rem',
                          color: '#F5C7C9',
                          marginTop: '0.25rem',
                        }}
                      />
                    </div>
                    <div>
                      <p style={{ 
                        fontWeight: 600, 
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        color: '#333',
                      }}>
                        Endereço
                      </p>
                      <p style={{ 
                        lineHeight: 1.6, 
                        color: '#6B7280',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                      }}>
                        AV Ministro Laudo Ferreira de Camargo 229<br />
                        Sala 4 - São Paulo, SP
                      </p>
                    </div>
                  </div>

                  <div
                    className="location-info-block"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--spacing-md)',
                      marginBottom: 'var(--spacing-lg)',
                    }}
                  >
                    <div
                      className="location-icon"
                      style={{
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.15) translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translateX(0)';
                      }}
                    >
                      <FaTrain
                        style={{
                          fontSize: '1.5rem',
                          color: '#F5C7C9',
                          marginTop: '0.25rem',
                        }}
                      />
                    </div>
                    <div>
                      <p style={{ 
                        fontWeight: 600, 
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        color: '#333',
                      }}>
                        Proximidade
                      </p>
                      <p style={{ 
                        lineHeight: 1.6, 
                        color: '#6B7280',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                      }}>
                        Próximo da Estação Vila Sônia<br />
                        5 minutos da Rodovia Raposo Tavares
                      </p>
                    </div>
                  </div>

                  <div
                    className="location-info-block"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--spacing-md)',
                    }}
                  >
                    <div
                      className="location-icon"
                      style={{
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.15) rotate(-5deg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      }}
                    >
                      <FaWhatsapp
                        style={{
                          fontSize: '1.5rem',
                          color: '#F5C7C9',
                          marginTop: '0.25rem',
                        }}
                      />
                    </div>
                    <div>
                      <p style={{ 
                        fontWeight: 600, 
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        color: '#333',
                      }}>
                        Contato
                      </p>
                      <p style={{ 
                        lineHeight: 1.6, 
                        color: '#6B7280',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                      }}>
                        WhatsApp: (11) 99999-9999<br />
                        contato@fernandarochafotografia.com.br
                      </p>
                    </div>
                  </div>
                </div>

                <div className="location-cta-button">
                <Button
                  variant="primary"
                  href="https://www.google.com/maps/place/AV+Ministro+Laudo+Ferreira+de+Camargo+229"
                  target="_blank"
                >
                  Ver no Google Maps
                </Button>
                </div>
              </div>

              {/* Mapa à direita */}
              <div
                className="location-map-column"
                style={{
                  height: '400px',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
                  willChange: 'transform, opacity',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0!2d-46.7!3d-23.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzAwLjAiUyA0NsKwNDInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Studio"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final - designer.md §8 */}
        <section
          id="contato"
          style={{
            padding: 'var(--spacing-3xl) 0',
            backgroundImage: 'url(/images/cta/cta-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: '50% 0%',
            position: 'relative',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'var(--overlay-blue)',
            }}
          />

          {/* Conteúdo */}
          <div
            className="container"
            style={{
              position: 'relative',
              zIndex: 10,
              textAlign: 'center',
              color: '#FFFFFF',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                marginBottom: 'var(--spacing-lg)',
                textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                color: '#FFFFFF',
              }}
            >
              Vamos{' '}
              <span style={{ fontFamily: 'var(--font-script)', fontWeight: 400, fontSize: '1.1em' }}>criar memórias juntos?</span>
            </h2>
            <p
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                marginBottom: 'var(--spacing-xl)',
                maxWidth: '600px',
                margin: '0 auto var(--spacing-xl)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
              }}
            >
              Transforme suas histórias em arte. Agende sua sessão e receba fotos que vão emocionar gerações.
            </p>
            <Button
              variant="secondary"
              href="https://wa.me/5511919009824?text=Olá! Gostaria de agendar uma sessão de fotos."
              target="_blank"
              icon={<span style={{fontSize: '1.2em'}}>→</span>}
              iconPosition="right"
            >
              Agendar Agora
            </Button>
          </div>
        </section>

      <Footer />
    </>
  );
}

// Helper para gerar fotos reais do portfólio
/**
 * Retorna caminhos das fotos reais organizadas por categoria
 */
function generatePlaceholderPhotos(count: number, category: string): string[] {
  // Fotos reais por categoria (migradas da pasta SITE/)
  const photoFiles: Record<string, string[]> = {
    couple: [
      'IMG_3558.jpg',
      'IMG_3565.jpg',
      'IMG_3578.jpg',
      'IMG_3590.jpg',
      'IMG_3626.jpg',
      'IMG_3642.jpg',
      'IMG_3682.jpg',
      'IMG_3691.jpg',
      'IMG_3712.jpg',
    ],
    pregnant: [
       'IMG_2544.jpg',
      '1008.jpg',
      '1032.jpg',
      '1053.jpg',
      '1057.jpg',
      '1058.jpg',
     
      'IMG_2555.jpg',
      'IMG_4004.jpg',
      'IMG_5568.jpg',
      'IMG_5613.jpg',
    ],

    newborn: [
      '1001.jpg',
      '1003.jpg',
      '1018.jpg',
      'IMG_4189.jpg',
      'IMG_4257.jpg',
      'IMG_4424.jpg',
      'IMG_4438.jpg',
      'IMG_5252.jpg',
      'IMG_5292.jpg',
      'IMG_6215.jpg',
    ],
    'baby-monthly': [
      'capa.jpg',
      '(1075).jpg',
      '(1074).jpg',
      '(1057).jpg',
      '(1098).jpg',
      '(1109).jpg',
      '(1134).jpg',
      '(1265).jpg',
    ],
    'smash-cake': [
      'IMG_5461.jpg',
      '(1074).jpg',
      'IMG_5324.jpg',
      'IMG_5383.jpg',
      'IMG_5385.jpg',
      'IMG_7688.jpg',
      'IMG_7690.jpg',
      'IMG_7733.jpg',
      'IMG_7734.jpg',
    ],
    'baby-shower': [
      '1041.jpg',
      '1001.jpg',
      '1005.jpg',
      '1006.jpg',
      '1015.jpg',
      '1017.jpg',
      '1018.jpg',
      '1030.jpg',
      '1032.jpg',
      '1040.jpg',
    ],
    wedding: [
      '1101.jpg',
      '1145.jpg',
      '1164.jpg',
      '461799205_2517063665144091_6459358390704285832_n.jpg',
      '461897273_2517063678477423_4892160348851846161_n.jpg',
      '462466087_2526574010859723_8335929781812483774_n.jpg',
      '462625826_2526573997526391_6974888551444778871_n.jpg',
      '462712247_2527433170773807_1277884787182863107_n.jpg',
      '462718825_2527433264107131_3699975730151117843_n.jpg',
      '462740053_2527402494110208_4350526521542077937_n.jpg',
    ],
    birthday: [
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
    ],
    'birthday-shoot': [
      'capa.jpg',
      '1019.jpg',
      '1023.jpg',
      '1045.jpg',
      '1046.jpg',
      'IMG_6100.jpg',
      'IMG_6136.jpg',
      'IMG_6158.jpg',
      'IMG_6205.jpg',
      'IMG_6222.jpg',
    ],
  };

  // Mapeamento de categoria para pasta
  const folderMap: Record<string, string> = {
    couple: 'casais',
    pregnant: 'gestantes',

    newborn: 'newborn',
    'baby-monthly': 'batizado',
    'smash-cake': 'smash-cake',
    'baby-shower': 'nascimento',
    wedding: 'casamento',
    birthday: 'aniversario',
    'birthday-shoot': 'ensaio-aniversario',
  };

  const folder = folderMap[category] || 'familias';
  const categoryPhotos = photoFiles[category] || photoFiles.family;
  
  return categoryPhotos.slice(0, count).map(filename => {
    return `/images/portfolio/${folder}/${filename}`;
  });
}

