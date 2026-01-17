# ⚡ Guia Rápido - Fernanda Rocha Fotografia

**Status do Projeto**: ✅ Código 100% Completo | ⏳ Aguardando Conteúdo Real

Este guia te leva de 0 a deploy em **3 fases simples**.

---

## 🎯 O Que Precisa Ser Feito

| Fase | Tarefa | Tempo | Prioridade |
|------|--------|-------|------------|
| 1 | Atualizar placeholders (WhatsApp, redes sociais) | 5 min | 🔴 CRÍTICO |
| 2 | Adicionar imagens (116 fotos otimizadas) | 4-8h | 🔴 CRÍTICO |
| 3 | Deploy (Vercel) | 5 min | ✅ Pronto |
| 4 | Conteúdo opcional (vídeo, depoimentos reais) | 2-4h | 🟡 Opcional |

---

## 📋 Fase 1: Atualizar Placeholders (5 minutos)

### Método Automático (Recomendado)

```bash
# Executar script interativo
./scripts/update-placeholders.sh

# Ele vai pedir:
# - WhatsApp: 5511XXXXXXXXX
# - Instagram: @usuario (sem @)
# - Facebook: nome_da_pagina
# - Email: (Enter para manter)
```

### Método Manual

Se preferir atualizar manualmente, veja localizações exatas em [REFERENCE.md](REFERENCE.md#placeholders).

### Verificar Mudanças

```bash
# Ver o que foi alterado
git diff src/

# Testar localmente
npm run dev
# Abrir: http://localhost:5174
# Clicar nos botões WhatsApp (deve abrir com número correto)

# Commit
git add src/
git commit -m "feat: atualizar informações de contato"
```

✅ **Pronto! WhatsApp atualizado em 8 locais**

---

## 📸 Fase 2: Adicionar Imagens (4-8 horas)

### O Que é Necessário

#### Mínimo Viável (MVP - 2-3 horas)
Foque nestas **34 imagens essenciais**:

1. **Hero Background** (1920x1080px, <500KB)
   - Foto família feliz, fundo desfocado
   - `public/images/hero/hero-background.jpg`

2. **Retrato Fernanda** (800x800px, <300KB)
   - Foto profissional, fundo neutro
   - `public/images/about/fernanda-portrait.jpg`

3. **Logo** (SVG ou PNG, <100KB)
   - Transparente
   - `public/images/logo/logo.svg` ou `logo.png`

4. **CTA Background** (1920x1080px, <500KB)
   - Foto emocional de família
   - `public/images/cta/cta-background.jpg`

5. **3 Categorias Principais** (10 fotos cada, 1200x800px, <200KB)
   - Escolha as mais populares (ex: Famílias, Gestantes, Newborn)
   - `public/images/portfolio/{categoria}/categoria-01.jpg` até `-10.jpg`
   - **Total: 30 fotos**

**= 34 imagens (essencial para MVP)**

#### Completo (4-8 horas)
- Todas as 11 categorias × 10 fotos = 110 fotos de portfólio
- 2 avatares de depoimentos (300x300px)
- **Total: 116 imagens**

### Como Otimizar Imagens

Especificações técnicas detalhadas em [REFERENCE.md](REFERENCE.md#image-specs).

#### Opção 1: Online (Mais Fácil)
- https://squoosh.app - Upload, redimensionar, download
- https://tinypng.com - Compressão automática

#### Opção 2: ImageMagick (Mais Rápido)
```bash
# Instalar
# Ubuntu: sudo apt install imagemagick
# macOS: brew install imagemagick

# Hero/CTA (1920x1080)
convert foto.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 82 -strip hero-background.jpg

# Retrato (800x800)
convert foto.jpg -resize 800x800^ -gravity center -extent 800x800 -quality 85 -strip fernanda-portrait.jpg

# Portfólio (1200x800, repetir 10x por categoria)
convert foto.jpg -resize 1200x800^ -gravity center -extent 1200x800 -quality 80 -strip familias-01.jpg
```

### Verificar e Commit

```bash
# Contar imagens por categoria
ls public/images/portfolio/familias/ | wc -l  # Deve mostrar 10

# Verificar tamanhos
du -h public/images/hero/hero-background.jpg  # < 500KB

# Commit
git add public/images/
git commit -m "feat: adicionar imagens do portfólio"
```

---

## 🚀 Fase 3: Deploy (5 minutos)

### Pré-Requisito: Verificar Se Está Pronto

```bash
# Executar checklist automatizado
./scripts/pre-deploy-check.sh

# Se retornar ✅ em WhatsApp e imagens: PRONTO!
# Se retornar ❌: Resolver issues antes de continuar
```

### Deploy no Vercel (Recomendado)

#### Via Dashboard (Mais Fácil) ⭐

1. **Criar conta**: https://vercel.com/signup (login com GitHub)

2. **Importar projeto**:
   - Clicar em "Add New..." → "Project"
   - Selecionar repositório `fernandarochafotografia`
   - Clicar em "Import"

3. **Configurar** (detecta automaticamente):
   - Framework Preset: Vite ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅

4. **Deploy**:
   - Clicar em "Deploy"
   - Aguardar 1-2 minutos
   - Copiar URL: `fernandarochafotografia.vercel.app`

5. **Testar**:
   - Abrir URL em múltiplos dispositivos
   - Testar botões WhatsApp no mobile
   - Verificar responsividade

#### Via CLI (Mais Controle)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy para produção
vercel --prod

# Copiar URL de produção
```

**🎉 SITE NO AR!**

Instruções para domínio customizado em [REFERENCE.md](REFERENCE.md#custom-domain).

---

## 🎨 Fase 4: Conteúdo Opcional (2-4 horas)

### Vídeo "Momentos em Movimento"

1. Upload vídeo para YouTube ou Vimeo
2. Copiar ID do vídeo (ex: `dQw4w9WgXcQ`)
3. Editar [src/pages/Home.tsx](src/pages/Home.tsx):
   - Descomentar linhas ~203-215 (iframe)
   - Substituir `VIDEO_ID` pelo ID real

### Depoimentos Reais

1. Coletar 2 depoimentos de clientes satisfeitos
2. Obter fotos dos clientes (300x300px)
3. Ver template em [REFERENCE.md](REFERENCE.md#testimonials-template)
4. Atualizar em [src/pages/Home.tsx](src/pages/Home.tsx) (linhas ~551 e ~596)

### Google Maps com Coordenadas Reais

1. Acessar https://www.google.com/maps
2. Pesquisar endereço: "AV Ministro Laudo Ferreira de Camargo 229, Sala 4"
3. Clicar em "Compartilhar" → "Incorporar um mapa"
4. Copiar código iframe
5. Substituir em [src/pages/Home.tsx](src/pages/Home.tsx) (linha ~613)

---

## 📱 Testar em Produção

Checklist após deploy:

- [ ] Hero carrega corretamente
- [ ] Botão WhatsApp abre app no mobile
- [ ] Portfólio mostra fotos (mínimo 3 categorias)
- [ ] Menu mobile funciona (hambúrguer)
- [ ] Footer tem links corretos (Instagram, Facebook)
- [ ] Scroll suave entre seções
- [ ] Site responsivo (mobile, tablet, desktop)

---

## 🆘 Problemas Comuns

### Build Falhou
```bash
npm run build
# Ler erros e corrigir
npm run lint
```

### Imagens Não Carregam
- Verificar nomes de arquivos (minúsculas, sem espaços)
- Verificar caminhos em `src/pages/Home.tsx`
- Limpar build: `rm -rf dist && npm run build`

### WhatsApp Não Funciona
- Verificar formato: `5511XXXXXXXXX` (sem parênteses, hífens ou espaços)
- Testar em mobile (não funciona em desktop sem WhatsApp Web)

---

## 📚 Documentação Adicional

- **[REFERENCE.md](REFERENCE.md)** - Especificações técnicas detalhadas
- **[designer.md](designer.md)** - Design original completo
- **Scripts**: Ver [scripts/update-placeholders.sh](scripts/update-placeholders.sh) e [scripts/pre-deploy-check.sh](scripts/pre-deploy-check.sh)

---

## 🎯 Prioridades por Impacto

### 🔴 CRÍTICO (Bloqueia Deploy)
1. WhatsApp atualizado → **5 minutos**
2. Mínimo 30 fotos de portfólio → **2-3 horas**
3. Build sem erros → **Verificar**

### 🟡 IMPORTANTE (Pode Adicionar Depois)
4. Todas as 110 fotos → **+4 horas**
5. Depoimentos reais → **1-2 horas**
6. Vídeo → **1 hora**
7. Domínio customizado → **24-48h propagação**

**Estimativa MVP**: 3-4 horas de trabalho + 5 minutos de deploy
