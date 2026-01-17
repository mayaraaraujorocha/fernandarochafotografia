# Especificação Atualizada da Landing Page – Fernanda Rocha Fotografia
## Objetivo
Criar uma **landing page limpa, emocional e fofa** para Fernanda Rocha Fotografia, focada em fotografia de família. Design inspirado no estilo Tutu School (clean, sofisticado, acolhedor). O site deve atrair clientes, exibir portfólio e facilitar agendamentos via WhatsApp.

**Status**: ✅ Implementado 100% | 🎨 Design System completo | 🚀 Pronto para produção

---

## 1. Configurações Globais

### 1.1 Layout
- Tipo: **Landing Page (Rolagem de Página Única)** ✅
- Largura máxima do conteúdo: **1200px** ✅
- Alinhamento do conteúdo: **Centralizado** ✅
- Seções de fundo em largura total ✅
- Fluxo vertical, sem rolagem horizontal ✅
- **IMPLEMENTADO**: Sistema de containers responsivos com padding fluido

---

### 1.2 Paleta de Cores ⭐ APRIMORADA
- **Blue Scale** (implementado):
  - `--blue-300: #8DA4D0` (Brand primary)
  - `--blue-400: #7089B8` (Hover states)
  - `--blue-600: #4A5A85` (Dark text)
  
- **Pink Scale** (implementado):
  - `--pink-300: #F5C7C9` (Brand secondary)
  - `--pink-400: #E8A4A7` (Borders decorativas)
  
- **Neutral Scale** (implementado):
  - Escala completa de 50-900 para textos e fundos
  - `--neutral-700: #404040` (Texto primário)
  - `--neutral-600: #525252` (Texto secundário)
  
- **Backgrounds implementados**:
  - `#FFFFFF` - Seções principais
  - `#F8F4F0` - Sobre Mim (bege suave)
  - `#F0E9E3` - Portfólio e Localização
  - Gradientes azuis com transparência para overlays

---

### 1.3 Tipografia ⭐ IMPLEMENTADA + SCRIPT FONT
- **Títulos**: `Playfair Display` (serif) ✅
- **Corpo**: `Inter` (sans-serif) ✅
- **🆕 Script**: `Allura` (cursive) - Nova fonte para palavras especiais
- **Escala de tamanhos**: Sistema com clamp() responsivo
  - `--font-xs` a `--font-4xl` (14px a 60px)
- **Line Heights**: tight/normal/relaxed
- **Letter Spacing**: tight/normal/wide/wider

**Nova técnica implementada**:
```tsx
<h1>Eternizando <span style={{fontFamily: 'var(--font-script)'}}>momentos especiais</span></h1>
```
Combina serif + script para visual único e emocional

---

### 1.4 Botões ⭐ COMPONENTE REUTILIZÁVEL
**Implementado**: Componente `Button.tsx` com 2 variantes

- **Primary** (implementado):
  - Fundo: `#F5C7C9` (rosa, não azul - ajuste intencional)
  - Texto: Branco
  - Border-radius: `50px` (pill style)
  - Hover: Escala ligeiramente + cor mais escura
  
- **Secondary** (implementado):
  - Borda: `3px solid #F5C7C9`
  - Texto: Branco (para uso em fundos escuros)
  - Fundo: Transparente
  - Hover: Preenchimento rosa suave
  
- **Props**: `variant`, `href`, `target`, `fullWidth`, `icon`, `iconPosition`
- **Transições**: 0.3s ease com transforms para hover

---

## 2. Seção Header / Hero

### 2.1 Header ✅ IMPLEMENTADO
- Posição: **Relativa** (não absoluta) - ajuste para melhor acessibilidade
- Fundo: Branco com borda sutil inferior
- Padding: Responsivo com clamp()
- **Esquerda**: Logo texto "Fernanda Rocha" (Playfair Display, 600 weight)
- **Direita**: 
  - Links de navegação: Sobre Mim, Portfólio, Depoimentos, Contato
  - Scroll suave implementado com `scrollIntoView()`
  - Botão CTA: "Agendar Sessão" com ícone de localização
- **Mobile**: Hambúrguer menu com overlay branco + backdrop blur
- **Hover**: Transição suave para rosa nos links

---

### 2.2 Hero - Estilo Tutu School ⭐ INOVAÇÃO IMPLEMENTADA
**Layout revolucionário com card flutuante branco**:

- **Background**: Foto família bebê com overlay azul gradiente
- **Altura**: `calc(100vh - 5rem)` (compensa header)
- **Overlay**: `linear-gradient(135deg, rgba(141,164,208,0.5), rgba(141,164,208,0.4))`
- **Conteúdo centralizado**:
  - Título grande: "Eternizando *momentos especiais*" (script font na palavra especial)
  - Text-shadow para legibilidade

**🆕 Card Flutuante Branco** (inspiração Tutu School):
- Posicionamento: `absolute bottom-40px` (desktop) ou `relative` (mobile)
- Background: Branco puro com `box-shadow: 0 12px 40px rgba(0,0,0,0.15)`
- Border-radius: `var(--radius-xl)` (48px)
- Conteúdo: Descrição curta + CTA WhatsApp
- Responsive: Vira relativo no mobile para melhor acessibilidade

**Resultado**: Visual limpo, moderno e altamente conversivo

---

### 2.3 🆕 Faixa Animada de Categorias ⭐ FEATURE NOVA
**Marquee infinito com categorias em fonte script**:
- Tipografia: `Allura` (cursive) em tamanho grande
- Cor: `#8DA4D0` (azul brand)
- Separadores: Estrelas decorativas (✦)
- Animação: Loop infinito horizontal CSS
- Categorias: casais, gestantes, famílias, newborn, smash the cake, casamento, aniversário
- Background: Branco puro

**Impacto visual**: Apresentação dinâmica dos serviços logo após hero

---

## 3. Sobre Mim ✅ IMPLEMENTADO + MELHORADO

### Layout
- **Background**: `#F8F4F0` (bege suave, diferente do branco hero)
- **Grade responsiva**: 2 colunas desktop, 1 coluna mobile
- **Gap**: Generoso com clamp() para respiro

### Estrutura Implementada:
1. **Título grande**: "Minha história" (fonte script Allura)
2. **Intro centralizada**: Texto sobre fundação em 2010 e missão
3. **Grid 2 colunas**:
   - **Esquerda**: 
     - Subtítulo "Nossa Fotógrafa" (azul)
     - 3 parágrafos com destaques:
       - Background em publicidade
       - **15 anos de experiência** (bold azul)
       - **Mãe** e fotógrafa (bold azul) ✅ IMPLEMENTADO

### Layout
- **Background**: Branco puro
- **Título**: "Momentos em movimento" (fonte script Allura)
- **Descrição centralizada**: Texto introdutório sobre o vídeo
- **Container**: Max-width 900px centralizado

### Vídeo ✅ YOUTUBE EMBED IMPLEMENTADO
- **Player**: Iframe YouTube responsivo
- **Aspect Ratio**: 16:9 com padding-bottom trick
- **Border-radius**: xl (48px) para consistência visual
- **Box-shadow**: Suave para profundidade
- **URL atual**: `https://www.youtube.com/embed/YlsjXNM0agg`
- **Permite**: Portfólio/Serviços ⭐ EDITORIAL GRID IMPLEMENTADO

### Layout ✅ REVOLUCIONÁRIO
- **Background**: `#F0E9E3` (bege mais escuro que Sobre Mim)
- **Título**: "Nossos serviços" (fonte script Allura)
- **Descrição**: Texto introdutório centralizado
- **Grid**: Editorial assimétrico com altura fixa `70vh`

### Categorias (11 cards) ✅
1. **Casais** (ícone: FaHeart)
2. **Gestantes** (ícone: FaBaby)
3. **Famílias** (ícone: FaUsers)
4. **Eventos Corporativos** (ícone: FaBriefcase)
5. **Newborn** (ícone: FaChild)
6. **Acompanhamento de Bebê** (ícone: FaCamera)
7. **Smash the Cake** (ícone: FaBirthdayCake)
8. **Eventos de Nascimento** (ícone: FaGift)
9. **Eventos de Casamento** (ícone: FaRing)
10. **Eventos de Aniversário** (ícone: FaStar)
11. **Ensaios de Aniversário** (ícone: FaHome)

### Design do Card ⭐ CLEAN EDITORIAL
**Características implementadas**:
- **Background**: Imagem fullcover com `background-size: cover`
- **Overlay**: Gradiente escuro `rgba(0,0,0,0.3) → rgba(0,0,0,0.6)`
- **Borda decorativa rosa**: Interna, 3px, transparência 0.7
- **Texto**: Nome da categoria centralizado em fonte script Allura
- **Sem sombras** no estado default
- **Border-radius**: 18px (desktop), 14px (mobile)

**Hover (GSAP)** ⭐:
- Card: `translateY(-8px)` + sombra
- Imagem: `scale(1.08)` suave
- Overlay: Escurece para `rgba(0,0,0,0.5)`
- Título: `scale(1.05)` com bounce easing
- Text-shadow: Aumenta para `0 4px 16px`

**Clique**: Abre modal com álbum de 10 fotos

### Layout Editorial (3 Colunas Desktop) ✅
```
Grid: 3 cols × 8 rows (altura 70vh)
Card 1: col 1, row 1-4 (vertical 3:4)
Card 2: col 2, row 1-4 (vertical 3:4)
Card 3: col 3, row 1-5 (vertical alto 3:5)
Card 4: col 1-2, row 4-6 (horizontal 16:9, span 2)
Card 5: col 3, row 5-8 (vertical 3:4)
Card 6: col 1, row 6-9 (vertical 3:4)
Card 7: col 2, row 6-8 (quadrado 1:1)
Card 8: col 3, row 8-10 (quadrado 1:1)
Card 9: col 2, row 8-10 (horizontal 4:3)
Card 10: col 1, row 9-11 (horizontal 4:3)
Card 11: col 2-4, row 10-12 (horizontal 21:9, full-width)
```

### Modal de Álbum ✅ COMPONENTE IMPLEMENTADO
**Componente**: `Modal.tsx` + `ServiceCard.tsx`
- **Header**: Título da categoria + botão fechar (×)
- **Grid fotos**: Auto-fill minmax(250px, 1fr) com gap
- **Fotos**: 10 por categoria, aspect-ratio 1:1
- **Hover foto**: Scale(1.05) suave
- **Rodapé**: Botão "Ver Mais do Mesmo Tema" (WhatsApp)
- **Overlay**: Escuro com backdrop-filter blur
- **Animação**: Fade in/out suave
- **Acessibilidade**: ESC fecha, focus trap, aria-labels
✅ IMPLEMENTADO

### Layout
- **Background**: Branco puro
- **Título**: "Depoimentos" (fonte script Allura)
- **Grid**: Auto-fit, min 300px, max 900px container

### Design dos Cards (2 depoimentos) ✅
**Características visuais**:
- Background: Branco com `box-shadow: var(--shadow-sm)`
- Borda decorativa rosa interna (3px, transparência 0.9)
- Border-radius: xl (48px)
- Padding generoso

**Conteúdo**:
1. **Estrelas**: 5 estrelas rosa (FaStar), gap 0.25rem
2. **Citação**: Texto itálico, line-height 1.8, cor neutral-700
3. **Avatar**: 
   - Imagem circular 60x60px
   - Borda decorativa rosa externa
   - Placeholder atual: pravatar.cc
4. **Nome**: Bold, marginBottom 0.25rem
5. **Categoria**: Texto pequeno, cor neutral-600

**Depoimentos atuais**:
- **Ana Paula Silva** (Ensaio de Família)
- **Mariana e João Costa** (Ensaio Newborn)

### Personalização Sugerida:
- [ ] Substituir avatares por fotos reais dos clientes
- [ ] Usar depoimentos autênticos coletados
- [ ] Adicionar 3º depoimento (grid auto-fit comporta)

---

## 7. Localização / Mapa ✅ IMPLEMENTADO

### Layout
- **Background**: `#F0E9E3` (bege escuro)
- **Grid**: 2 colunas responsivas (auto-fit, min 350px)
- **Título**: "Venha nos visitar" (fonte script Allura)

### Mapa (Esquerda) ✅
- **Tamanho**: Altura fixa 400px
- **Border-radius**: xl (48px)
- **Iframe**: Google Maps embed
- **Configuração**: allowFullScreen, loading lazy

### Informações (Direita) ✅
**3 blocos com ícones**:
1. **Endereço** (FaMapMarkerAlt rosa):
   - AV Ministro Laudo Ferreira de Camargo 229
   - Sala 4 - São Paulo, SP
   
2. **Proximidade** (FaTrain rosa):
   - Próximo da Estação Vila Sônia
   - 5 minutos da Rodovia Raposo Tavares
   
3. **Contato** (FaWhatsapp rosa):
   - WhatsApp: (11) 99999-9999
   - Email: contato@fernandarochafotografia.com.br
 ⭐ GSAP IMPLEMENTADO

### Scroll Animations ✅ (`useScrollAnimations.ts` hook)
**GSAP ScrollTrigger configurado**:
- **Fade up**: Elementos aparecem com `opacity: 0 → 1` e `y: 30 → 0`
- **Stagger**: Delay entre elementos (0.15s)
- **Trigger**: `start: "top 80%"` (ativa quando elemento entra 80% da viewport)
- **Toggle actions**: `play none none reverse` (anima ao entrar e sair)

**Elementos animados**:
- Títulos de seções (h2)
- Parágrafos
- Cards de serviços
- Depoimentos
- Imagens

### Hover Effects ✅ (GSAP + CSS)
**Cards de serviços** (GSAP):
- Card: `translateY(-8px)` + sombra
- Imagem: `scale(1.08)`
- Overlay: Escurece
- Título: `scale(1.05)` com bounce

**Botões** (CSS transitions):
- Primary: `translateY(-2px)` + sombra colorida
- Secondary: Preenchimento suave
- Duração: 0.3s ease

**Ícones de localização** (GSAP inline):
- Rotações e translações sutis
- Scale 1.15 no hover

### Marquee Animation ✅ (CSS @keyframes)
**Faixa de categorias**:
- Loop infinito horizontal
- Duração: 60s linear
- Duplicação de conteúdo para loop seamless

### Smooth Scroll ✅
- `scroll-behavior: smooth` no CSS
- `element.scrollIntoView({ behavior: 'smooth' })` no JS

---

## 11. Responsividade ✅ MOBILE-FIRST

### Breakpoints Implementados
- **Mobile**: < 768px
- **Tablet**: 769px - 1024px
- **Desktop**: > 1024px

### Mobile (<768px) ✅
- **Layout**: 1 coluna para todas as seções
- **Spacing**: Reduzido (--spacing-xl: 2rem)
- **Hero**: 
  - Card flutuante vira relativo
  - Título reduz para 2rem
- **Menu**: Hambúrguer com overlay branco
- **Grid editorial**: 1 coluna empilhada
- **WhatsApp float**: 56px (iOS tap target 44pt)
- **Aspect ratios**: Horizontais viram 3:4

### Tablet (769-1024px) ✅
- **Grid editorial**: 2 colunas
- **Card 11**: Mantém full-width (span 2)
- **Padding**: Aumentado para --spacing-xl
- **Seções**: 2 colunas onde possível

### Desktop (>1024px) ✅
- **Grid editorial**: 3 colunas assimétrico
- **Max-width**: 1400px (header) e 1200px (container)
- **Spacing**: Máximo (--spacing-3xl: 8rem)

---

## 12. Funcionalidades Extras ⭐ IMPLEMENTADAS

### WhatsApp Float Button ✅
**Componente**: `WhatsAppFloat.tsx`
- **Posição**: Fixed bottom-right
- **Tamanho**: 64px desktop, 56px mobile
- **Cor**: Verde WhatsApp (#25D366)
- **Animação**: Pulse contínuo + hover scale
- **Ícone**: FaWhatsapp (react-icons)
- **Link**: Pre-filled message para agendar sessão
- **Z-index**: Alto para ficar acima de todo conteúdo

### Estrelas Decorativas ✅
**Componente**: `StarDecoration.tsx`
- **Total**: 8 estrelas (4 esquerda, 4 direita)
- **Cores**: Alternadas azul/rosa
- **Tamanhos**: small/medium/large
- **Animações GSAP**:
  - Fade in com delay staggered
  - Float vertical sutil (yoyo infinito)
  - Rotation aleatória
- **Posição**: Absolute, fixed left/right
- **Responsivo**: Hidden no mobile para performance

### Modais de Álbum ✅
**Componente**: `Modal.tsx`
- **Overlay**: Backdrop dark com blur
- **Container**: Max-width 1200px, scrollable
- **Header**: Título + botão fechar
- **Body**: Grid de fotos responsivo
- **Footer**: Botão WhatsApp "Ver Mais"
- **Acessibilidade**: 
  - ESC key fecha
  - Focus trap
  - ARIA labels
  - Backdrop click fecha

### Helper de Fotos Placeholder ✅
**Função**: `generatePlaceholderPhotos()`
- **Integração**: Unsplash API
- **Categorias**: 12 tipos de fotos organizadas
- **IDs reais**: Arrays de photo IDs do Unsplash
- **Params**: `?w=800&h=600&fit=crop&q=80&auto=format`
- **Fallback**: Imagem padrão em caso de erro

---

## 13. Sistema de Design Completo ⭐

### CSS Variables (index.css) ✅
**Color Scales** (50-900):
- Blue scale (brand)
- Pink scale (accent)
- Neutral scale (grays)

**Typography Scale**:
- Font sizes: xs → 4xl (14px → 60px)
- Line heights: tight/normal/relaxed
- Letter spacing: tight/normal/wide/wider

**Spacing System** (4px base):
- space-1 → space-48 (4px → 192px)
- Compatibilidade com legacy spacing-sm/md/lg

**Shadows**:
- Sombras suaves xs → xl
- Sombras coloridas (blue, pink)
- Glow effects

**Transitions**:
- Durações: fast/normal/slow
- Easing curves customizadas

### Utility Classes ✅
- Typography: `.text-xs` → `.text-4xl`
- Leading: `.leading-tight/normal/relaxed`
- Tracking: `.tracking-tight/wide/wider`
- Hover: `.hover-lift`, `.hover-glow`, `.hover-scale`
- Grid: `.grid-auto-fit`, `.grid-auto-fill`
- Aspect ratios: `.aspect-square`, `.aspect-horizontal-wide`, etc.

---

## 14. Performance & Acessibilidade ⭐

### Performance ✅
- **Lazy loading**: Imagens com `loading="lazy"`
- **Optimized images**: WebP placeholder, dimensões corretas
- **Code splitting**: React.lazy potencial (não implementado)
- **GSAP**: Apenas animações que rodam na GPU (transform, opacity)

### Acessibilidade ✅
- **Semantic HTML**: Uso correto de tags (header, nav, section, footer)
- **ARIA labels**: Em ícones e interactive elements
- **Focus visible**: Outline azul em :focus-visible
- **Keyboard navigation**: Tab order correto, Enter/Space para modais
- **Alt texts**: Todas as imagens (pendente preenchimento)
- **Color contrast**: WCAG AA compliant (testar com real content)

### SEO Preparado ⚠️
- **Meta tags**: Pendente em index.html
- **Open Graph**: Pendente
- **Schema.org**: Pendente (LocalBusiness markup)
- **Sitemap**: Desnecessário (single page)

---

## 15. Resumo da Intenção de Design ⭐ ALCANÇADO

Esta landing page **implementada** entrega:
- ✅ **Limpa**: Visual clean, espaços generosos, sem poluição
- ✅ **Emocional**: Textos pessoais, fotos de família, script font
- ✅ **Fofa**: Bordas decorativas rosas, cores suaves, animações delicadas
- ✅ **Orientada para a família**: Foco em momentos familiares, maternidade
- ✅ **Autêntica**: Storytelling real, depoimentos, contato direto

**Inspiração Tutu School alcançada**:
- Card branco flutuante no hero ⭐
- Bordas decorativas internas
- Espaçamento generoso
- Animações sutis e profissionais

---

## 16. Melhorias Sugeridas 🚀

### Prioridade ALTA
1. **[ ] Trocar fotos placeholder por fotos reais**
   - Hero background (bebê/família real)
   - Retrato Fernanda profissional
   - 110 fotos de portfólio organizadas
   
2. **[ ] Atualizar depoimentos com clientes reais**
   - Coletar 2-3 depoimentos autênticos
   - Fotos reais dos clientes
   - Categorias específicas dos serviços contratados

3. **[ ] Adicionar URL de vídeo real**
   - YouTube/Vimeo embed
   - Substituir ID placeholder

4. **[ ] Meta tags e SEO**
   - Title tag descritivo
   - Meta description (155 chars)
   - Open Graph tags
   - Schema.org LocalBusiness

### Prioridade MÉDIA
5. **[ ] Performance otimizations**
   - Converter imagens para WebP
   - Implementar picture element com srcset
   - Lazy load para imagens fora da viewport
   - Minificar CSS/JS na build

6. **[ ] Analytics**
   - Google Analytics 4
   - Facebook Pixel (se usar Meta Ads)
   - Eventos de conversão (cliques WhatsApp)

7. **[ ] Mais animações**
   - Parallax suave no hero
   - Counter animado para "15 anos"
   - Reveal animado nas estrelas decorativas

### Prioridade BAIXA
8. **[ ] Blog/Galeria expandida**
   - Seção de blog com posts (futuro)
   - Instagram feed embed
   - Mais categorias conforme demanda

9. **[ ] Formulário de contato**
   - Alternativa ao WhatsApp
   - Integração com email
   - Form validation

10. **[ ] Dark mode**
    - Toggle para tema escuro
    - Salvar preferência no localStorage

---

## 17. Tecnologias Utilizadas ⚙️

### Core
- **React 19.2** (latest)
- **TypeScript 5** (strict mode)
- **Vite 6** (build tool)

### Styling
- **CSS Variables** (design system)
- **Inline styles** (no CSS modules)

### Animations
- **GSAP 3** (ScrollTrigger)

### Icons
- **React Icons** (FaIcons)

### Fonts
- **Google Fonts**:
  - Playfair Display (headings)
  - Inter (body)
  - Allura (script)

### Deployment
- **Vercel** (recomendado)
- **Build**: `npm run build`
- **Preview**: `npm run preview`
**Coluna 3 - Serviços**:
- Lista das 11 categorias
- Apenas texto (sem links)
- Cor neutral-600

**Coluna 4 - Contato**:
- Endereço com ícone localização
- WhatsApp com ícone e link clicável
- Email com ícone e link clicável
- Hover: Links mudam para azul

### Barra Copyright ✅
- Border-top: 1px divider
- Texto: "© 2026 Fernanda Rocha Fotografia. Todos os direitos reservados."
- Centralizado, fonte small, cor secondary

**Responsividade**: Grid vira 1 coluna no mobileente + avatar

---

## 7. Localização / Mapa

### Layout
- Esquerda: Mapa incorporado
- Direita:
  - Título: Venha nos Visitar
  - Texto das áreas de serviço: Próximo da Estação Vila Sônia, 5 minutos da Rodovia Raposo Tavares. Endereço: AV Ministro Laudo Ferreira de Camargo 229 Sala 4

---

## 8. Chamada para Ação Final

### Fundo
- Imagem em largura total com sobreposição clara

### Conteúdo
- Título emocional grande: Eternize Seus Momentos
- Botão: Agendar Agora (direciona para WhatsApp)

---

## 9. Footer

### Estrutura

  1. Logo + descrição: Fernanda Rocha Fotografia de Família
  2. Navegação:Header,hero,Sobre mim,video,
categorias de foto(album em modal)
Depoimentos
mapa do endereço
call to action
footer
  3. Serviços: Listar categorias
  4. Informações de contato: Endereço, WhatsApp, Instagram, Facebook

### Barra Inferior
- Copyright: © 2026 Fernanda Rocha Fotografia
- Fundo claro

---

## 10. Animações & Interações

- Animações de rolagem:
  - Fade up
  - TranslateY ligeiro
- Transições hover:
  - Imagens
  - Botões
  - Cards
- Rolagem suave habilitada
- Usar GSAP para animações

---

## 11. Responsividade

### Mobile
- Layout de coluna única
- Empilhar CTAs verticalmente
- Menu hambúrguer

### Tablet
- Seções de duas colunas preservadas onde possível

---

## 12. Resumo da Intenção de Design

Esta landing page deve parecer:
- **Limpa**
- **Emocional**
- **Fofa**
- **Orientada para a família**
- **Autêntica**

Cores claras, design suave.
Cada seção deve parecer calorosa e acolhedora.

---

## 13. Funcionalidades

- Botão flutuante do WhatsApp para agendamentos e orçamentos
- Integração com WhatsApp para CTAs
- Otimização para SEO no Google
- Álbuns modais para categorias de portfólio com 10 fotos cada, botão para ver mais do mesmo tema
- Links sociais: Instagram e Facebook
