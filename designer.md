# Especificação da Landing Page – Fernanda Rocha Fotografia
## Objetivo
Criar uma **landing page limpa, emocional e fofa** para Fernanda Rocha Fotografia, focada em fotografia de família. Incorporar notas da entrevista para branding, público-alvo, objetivos, estrutura, portfólio, identidade visual e funcionalidades. O site deve atrair clientes, exibir portfólio e facilitar agendamentos via WhatsApp.

---

## 1. Configurações Globais

### 1.1 Layout
- Tipo: **Landing Page (Rolagem de Página Única)**
- Largura máxima do conteúdo: **1200px**
- Alinhamento do conteúdo: **Centralizado**
- Seções de fundo em largura total
- Fluxo vertical, sem rolagem horizontal

---

### 1.2 Paleta de Cores
- Fundo Primário: **#FFFFFF (branco)**
- Fundo Secundário: **#F5F5F5 (cinza claro)**
- Cor de Destaque (CTA / destaques): **#8DA4D0 (azul suave) e #F5C7C9 (rosa suave)**
- Texto Primário: **#333333**
- Texto Secundário: **#666666**
- Linhas divisórias: **#E0E0E0**

---

### 1.3 Tipografia
- Fonte dos Títulos: **Serifa Elegante (Playfair Display / Cormorant / similar)**
- Fonte do Corpo: **Sans-serif Limpa (Inter / Poppins / Lato)**
- Espaçamento entre letras:
  - Títulos: Ligeiramente aumentado
  - Botões: Maiúsculo, espaçamento amplo

---

### 1.4 Botões
- Forma: **Retângulo arredondado**
- CTA Primário:
  - Fundo: #8DA4D0
  - Texto: Branco
- CTA Secundário:
  - Borda: #F5C7C9
  - Texto: #F5C7C9
  - Fundo: Transparente
- Hover:
  - Aumento ligeiro de brilho
  - Transição suave (0.3s ease)

---

## 2. Seção Header / Hero

### 2.1 Header
- Posição: **Absoluta sobre o hero**
- Esquerda: Logo (Fernanda Rocha Fotografia, texto branco ou imagem se disponível)
- Direita:
  - Links de navegação: Sobre Mim, Portfólio, Depoimentos, Contato
  - Botão CTA primário: Agendar via WhatsApp

---

### 2.2 Fundo do Hero
- Altura total da viewport (100vh)
- Fundo: **Foto de fotografia de família (ex.: família feliz)**
- Sobreposição: **Gradiente claro ou nenhum, para manter o ar fofo**
- Frase na frente da foto: "Histórias que merecem ser lembradas."
- Botão que ao clicar leva ao WhatsApp

---

### 2.3 Conteúdo do Hero
- Alinhamento: Centro
- Ordem dos elementos:
  1. Subtítulo pequeno (maiúsculo): Fotografia de Família
  2. Título principal (serifa grande): Eternizando Momentos Especiais
  3. Botão: Agendar Sessão (leva para WhatsApp)

---

## 3. Sobre Mim

### Layout
- Grade de duas colunas
- Esquerda: Conteúdo de texto
- Direita: Imagem de retrato de Fernanda (designer diferenciado na imagem, efeitos)

---

### Conteúdo
- Título: Fotógrafa Apaixonada por Contar Histórias
- Parágrafo: Fotógrafa apaixonada por contar histórias através das lentes. Com um olhar sensível e uma abordagem autêntica, busco capturar momentos únicos e emoções genuínas, transformando cada imagem em uma memória inesquecível. Ao longo dos meus 15 anos de experiência, tive a oportunidade de trabalhar em diversos projetos, desde ensaios, nascimentos, até grandes eventos, sempre com o compromisso de entregar fotografias que reflitam a essência de cada pessoa ou situação. Acredito que a fotografia é mais do que apenas um registro visual; é uma forma de arte que conecta pessoas, revivendo sentimentos e preservando experiências. Mãe e com 15 anos de experiência.
- Tom: Emocional, autêntico, orientado para a família

---

## 4. Seção de Vídeo – "Momentos em Movimento"

### Layout
- Seção em largura total
- Fundo claro
- Miniatura de vídeo centralizada

### Vídeo
- Miniatura com sobreposição de botão de reprodução
- Hover: Botão de reprodução escala ligeiramente
- Clique: Inicia o vídeo

---

## 5. Seção de Categorias de Foto

### Título
- Título da seção centralizado: Nossos Serviços

### Cards (categorias)
- Casais
- Gestantes
- Famílias
- Eventos Corporativos
- Newborn
- Acompanhamento de Bebê (tipo mêsversário)
- Smash the Cake
- Eventos de Nascimento
- Eventos de Casamento
- Eventos de Aniversário
- Ensaios de Aniversário

#### Design do Card
- Ícone no topo
- Título
- Descrição curta
- Clique abre modal com 10 fotos, botão para ver mais do mesmo tema
- Cards de altura igual
- Borda ou sombra sutil

---




## 6. Depoimentos – "O Que os Clientes Dizem"

### Layout
- Dois cards de depoimento
- Avaliação por estrelas no topo
- Texto da citação
- Nome do cliente + avatar

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
