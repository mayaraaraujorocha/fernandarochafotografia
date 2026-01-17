# 📸 Fernanda Rocha Fotografia

Landing page profissional para fotógrafa especializada em ensaios de família, gestante, newborn e eventos. Site single-page otimizado com React 19.2 + TypeScript + Vite.

**Status**: ✅ Código 100% Completo | ⏳ Aguardando Conteúdo Real

---

## 🚀 Quick Start

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev
# Abrir: http://localhost:5174

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## 📖 Documentação

- **[QUICKSTART.md](QUICKSTART.md)** - Guia completo de setup e deploy (começar aqui)
- **[REFERENCE.md](REFERENCE.md)** - Especificações técnicas e referências
- **[designer.md](designer.md)** - Design original e diretrizes

---

## 🛠️ Tech Stack

- **React 19.2** - Framework
- **TypeScript 5.9** - Type safety
- **Vite 7.2** - Build tool & dev server
- **GSAP** - Animações e scroll effects
- **React Icons** - Ícones (Font Awesome)

---

## 📁 Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis
│   ├── Header.tsx     # Menu + navegação
│   ├── Footer.tsx     # Rodapé completo
│   ├── ServiceCard.tsx # Cards de categoria
│   └── Modal.tsx      # Modal de álbuns
├── pages/
│   └── Home.tsx       # Página principal (todas as 8 seções)
└── hooks/
    └── useScrollAnimations.ts  # GSAP ScrollTrigger

public/images/         # Assets (116 imagens necessárias)
scripts/               # Scripts automatizados
```

---

## ✅ O Que Fazer Agora

1. **Atualizar placeholders** (5 min):
   ```bash
   ./scripts/update-placeholders.sh
   ```

2. **Adicionar imagens** (4-8h):
   - Ver especificações em [REFERENCE.md](REFERENCE.md#image-specs)
   - Mínimo: 34 imagens essenciais

3. **Deploy** (5 min):
   - Ver instruções em [QUICKSTART.md](QUICKSTART.md#fase-3-deploy-5-minutos)
   - Recomendado: Vercel (deploy automático)

---

## 🧪 Scripts Disponíveis

```bash
npm run dev           # Dev server (http://localhost:5174)
npm run build         # Build de produção
npm run preview       # Preview do build
npm run lint          # ESLint

# Scripts automatizados
./scripts/update-placeholders.sh     # Atualizar WhatsApp/redes sociais
./scripts/pre-deploy-check.sh        # Verificar se está pronto para deploy
```

---

## 📦 Features

- ✅ 8 seções completas (Hero, Sobre, Vídeo, Portfólio, Depoimentos, Mapa, CTA, Footer)
- ✅ 11 categorias de serviço com modais de álbum (10 fotos cada)
- ✅ Menu hambúrguer responsivo mobile
- ✅ Botão flutuante WhatsApp
- ✅ Animações GSAP com ScrollTrigger
- ✅ Smooth scroll entre seções
- ✅ Integração WhatsApp em múltiplos CTAs
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ TypeScript strict mode
- ✅ Build otimizado (~440KB)

---

## 🎨 Sistema de Design

**Cores**: `#8DA4D0` (azul), `#F5C7C9` (rosa), `#333333` (texto)  
**Tipografia**: Playfair Display (headings) + Inter (body)  
**Layout**: Single-page scroll com 8 seções

Ver especificações completas em [designer.md](designer.md).

---

## 📱 Deploy

**Recomendado**: Vercel (deploy automático via GitHub)

Ver guia completo em [QUICKSTART.md](QUICKSTART.md#fase-3-deploy-5-minutos) ou [REFERENCE.md](REFERENCE.md#deploy).

---

## 📄 Licença

Proprietary - © 2026 Fernanda Rocha Fotografia
