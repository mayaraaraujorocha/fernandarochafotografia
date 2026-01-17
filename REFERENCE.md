# 📖 Referência Técnica - Fernanda Rocha Fotografia

Documentação técnica completa com especificações, localização de placeholders, instruções de deploy e uso de scripts.

---

## 📋 Índice

- [Especificações de Imagens](#image-specs)
- [Placeholders Ativos](#placeholders)
- [Deploy no Vercel](#deploy)
- [Domínio Customizado](#custom-domain)
- [Scripts Automatizados](#scripts)
- [Template de Depoimentos](#testimonials-template)
- [Troubleshooting](#troubleshooting)

---

## 📸 Especificações de Imagens {#image-specs}

### Hero & CTA Backgrounds
- **Tamanho**: 1920x1080px (Full HD landscape)
- **Formato**: JPG
- **Peso máximo**: 500KB
- **Qualidade**: 80-85%
- **Arquivos**:
  - `public/images/hero/hero-background.jpg`
  - `public/images/cta/cta-background.jpg`

### Retrato (Sobre Mim)
- **Tamanho**: 800x800px (quadrado)
- **Formato**: JPG
- **Peso máximo**: 300KB
- **Qualidade**: 85-90%
- **Arquivo**: `public/images/about/fernanda-portrait.jpg`

### Logo
- **Tamanho**: Variável (manter proporção)
- **Formato**: SVG (preferencial) ou PNG com transparência
- **Peso máximo**: 100KB
- **Arquivo**: `public/images/logo/logo.svg` ou `logo.png`

### Portfólio (110 fotos)
- **Tamanho**: 1200x800px (landscape) ou 800x800px (quadrado)
- **Formato**: JPG
- **Peso máximo**: 200KB cada
- **Qualidade**: 80%
- **Nomenclatura**: `categoria-01.jpg` até `categoria-10.jpg`
- **Categorias** (10 fotos cada):
  - `casais/`
  - `gestantes/`
  - `familias/`
  - `corporativos/`
  - `newborn/`
  - `bebe-mensal/`
  - `smash-cake/`
  - `nascimento/`
  - `casamento/`
  - `aniversario/`
  - `ensaio-aniversario/`

### Depoimentos (Avatares)
- **Tamanho**: 300x300px (quadrado)
- **Formato**: JPG
- **Peso máximo**: 100KB
- **Qualidade**: 85%
- **Arquivos**:
  - `public/images/testimonials/cliente-01.jpg`
  - `public/images/testimonials/cliente-02.jpg`

### Comandos de Otimização (ImageMagick)

```bash
# Hero/CTA backgrounds (1920x1080, < 500KB)
convert input.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 82 -strip output.jpg

# Retrato (800x800, < 300KB)
convert input.jpg -resize 800x800^ -gravity center -extent 800x800 -quality 85 -strip fernanda-portrait.jpg

# Portfólio landscape (1200x800, < 200KB)
convert input.jpg -resize 1200x800^ -gravity center -extent 1200x800 -quality 80 -strip categoria-01.jpg

# Avatar depoimentos (300x300, < 100KB)
convert input.jpg -resize 300x300^ -gravity center -extent 300x300 -quality 85 -strip cliente-01.jpg

# Processar lote de 10 fotos de uma categoria
cd public/images/portfolio/gestantes/
for i in {01..10}; do
  convert "raw-${i}.jpg" -resize 1200x800^ -gravity center -extent 1200x800 -quality 80 -strip "gestantes-${i}.jpg"
done
```

---

## 🔍 Placeholders Ativos {#placeholders}

### WhatsApp (8 ocorrências)

**Placeholder**: `5511999999999`  
**Formato esperado**: `5511XXXXXXXXX` (código país + DDD + número, sem espaços ou hífens)

| Arquivo | Linha | Contexto |
|---------|-------|----------|
| `src/pages/Home.tsx` | ~120 | Hero CTA button |
| `src/pages/Home.tsx` | ~720 | Final CTA button |
| `src/components/Header.tsx` | ~115 | Desktop menu CTA |
| `src/components/Header.tsx` | ~183 | Mobile menu CTA |
| `src/components/Footer.tsx` | ~98 | Social media icon |
| `src/components/Footer.tsx` | ~225 | Contact info |
| `src/components/WhatsAppFloat.tsx` | ~12 | Floating button |
| `src/components/ServiceCard.tsx` | ~144 | Modal "Ver Mais" button |

**Buscar todas as ocorrências**:
```bash
grep -rn "5511999999999" src/
```

**Substituir todas de uma vez**:
```bash
# Substitua NUMERO_REAL pelo número correto
find src/ -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/5511999999999/NUMERO_REAL/g' {} +
```

### Instagram (1 ocorrência)

**Placeholder**: `https://instagram.com/fernandarochafoto`  
**Arquivo**: `src/components/Footer.tsx` (linha ~86)

**Substituir**:
```bash
sed -i 's|instagram.com/fernandarochafotografia|instagram.com/USERNAME_REAL|g' src/components/Footer.tsx
```

### Facebook (1 ocorrência)

**Placeholder**: `https://facebook.com/fernandarochafotografia`  
**Arquivo**: `src/components/Footer.tsx` (linha ~96)

**Substituir**:
```bash
sed -i 's|facebook.com/fernandarochafoto|facebook.com/PAGE_NAME|g' src/components/Footer.tsx
```

### Email (2 ocorrências)

**Placeholder**: `contato@fernandarochafotografia.com.br`  
**Arquivos**:
- `src/components/Footer.tsx` (linha ~237)
- `src/pages/Home.tsx` (linha ~669)

**Status**: Pode ser mantido ou substituído

### Endereço Físico (2 ocorrências)

**Endereço atual**: AV Ministro Laudo Ferreira de Camargo 229, Sala 4  
**Arquivos**:
- `src/components/Footer.tsx` (linhas ~225-229)
- `src/pages/Home.tsx` (linhas ~636-640)

**Status**: Confirmar se está correto

### Google Maps (1 ocorrência)

**Localização**: `src/pages/Home.tsx` (linhas ~613-616)

**Como atualizar**:
1. Acesse https://www.google.com/maps
2. Pesquise o endereço real
3. Clique em "Compartilhar" → "Incorporar um mapa"
4. Copie o código `<iframe>`
5. Substitua no arquivo

### Avatares de Depoimentos (2 ocorrências)

**Placeholders**: `https://i.pravatar.cc/100?img=5` e `img=32`  
**Arquivos**:
- `src/pages/Home.tsx` (linha ~565)
- `src/pages/Home.tsx` (linha ~610)

**Substituir por**:
```tsx
src="/images/testimonials/cliente-01.jpg"
src="/images/testimonials/cliente-02.jpg"
```

---

## 🚀 Deploy no Vercel {#deploy}

### Pré-requisitos

- [ ] WhatsApp atualizado (8 locais)
- [ ] Mínimo 30 fotos de portfólio adicionadas
- [ ] Build sem erros: `npm run build`
- [ ] Git commit + push

### Método 1: Via Dashboard (Recomendado)

1. **Criar conta no Vercel**:
   - Acesse https://vercel.com/signup
   - Login com GitHub (recomendado)

2. **Importar projeto**:
   - Clicar em "Add New..." → "Project"
   - Selecionar repositório do GitHub
   - Clicar em "Import"

3. **Configurar build** (detecta automaticamente):
   - Framework Preset: **Vite** ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
   - Install Command: `npm install` ✅

4. **Deploy**:
   - Clicar em "Deploy"
   - Aguardar 1-2 minutos
   - Copiar URL de produção (ex: `fernandarochafotografia.vercel.app`)

5. **Testar**:
   - Abrir URL em múltiplos dispositivos
   - Testar botões WhatsApp no mobile
   - Verificar responsividade

### Método 2: Via CLI

```bash
# Instalar Vercel CLI (uma vez)
npm i -g vercel

# Login
vercel login
# Seguir instruções no navegador

# Deploy para produção
vercel --prod

# Aguardar deploy...
# ✅ Deploy completo!
# 🔗 Production: https://fernandarochafotografia.vercel.app
```

### Deploys Automáticos

Vercel configura CI/CD automaticamente:
- **Push para `main`** → Deploy automático em produção
- **Pull request** → Preview deploy com URL única

---

## 🌐 Domínio Customizado {#custom-domain}

### Registrar Domínio

**Opções**:
- **Registro.br** (para `.com.br`) - ~R$40/ano
- **Namecheap** (para `.com`) - ~$10/ano
- **GoDaddy** - Alternativa popular

### Conectar Domínio ao Vercel

1. **Dashboard Vercel**:
   - Abrir projeto
   - Settings → Domains
   - Adicionar domínio: `fernandarochafotografia.com.br`

2. **Configurar DNS no Registrador**:

Vercel mostra instruções específicas, mas geralmente é:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

3. **Aguardar propagação**:
   - DNS propaga em 24-48 horas (geralmente 1-2 horas)
   - Verificar status: https://dnschecker.org

4. **HTTPS automático**:
   - Vercel configura SSL automaticamente
   - Certificado Let's Encrypt grátis
   - Nenhuma ação necessária

### Alternativas ao Vercel

**Netlify**:
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

**Cloudflare Pages**:
- Build command: `npm run build`
- Build output: `dist`

---

## 🛠️ Scripts Automatizados {#scripts}

### update-placeholders.sh

Script interativo para atualizar todos os placeholders de uma vez.

**Uso**:
```bash
./scripts/update-placeholders.sh
```

**O que faz**:
- ✅ Substitui WhatsApp em 8 localizações
- ✅ Atualiza Instagram URL
- ✅ Atualiza Facebook URL
- ✅ Atualiza email (opcional)
- ✅ Mostra resumo de mudanças

**Quando usar**: Logo após clonar o projeto e coletar informações reais de contato

---

### pre-deploy-check.sh

Checklist automatizado para verificar se o site está pronto para deploy.

**Uso**:
```bash
./scripts/pre-deploy-check.sh
```

**O que verifica**:
- ✅ Placeholders substituídos (WhatsApp, redes sociais)
- ✅ Imagens presentes (conta arquivos por categoria)
- ✅ Build funciona sem erros
- ✅ Git status (commits pendentes)
- ✅ Package.json configurado corretamente

**Quando usar**: Sempre antes de fazer deploy para produção

**Interpretação de resultados**:
- 🟢 **0 issues críticos**: Pronto para deploy
- 🟡 **Warnings**: Pode fazer deploy, mas considere resolver
- 🔴 **Issues críticos**: NÃO fazer deploy até resolver

---

## 💬 Template de Depoimentos {#testimonials-template}

### Informações Necessárias (2 clientes)

Para cada cliente, coletar:

1. **Nome completo** (ex: Ana Paula Silva)
2. **Foto quadrada** (300x300px, rosto bem iluminado)
3. **Categoria do serviço** (ex: Ensaio de Família, Newborn)
4. **Texto do depoimento** (2-4 frases, tom pessoal e genuíno)

### Exemplo de Bom Depoimento

**Estrutura ideal**:
- Menção a **emoções** ("ficamos emocionados", "superou expectativas")
- Destaque a **diferenciais** ("olhar único", "atenção aos detalhes")
- Inclua **resultados** ("fotos ficaram lindas", "capturou a essência")
- Seja **específico** ("paciência com o bebê", "família à vontade")

**Exemplo real**:
> "A Fernanda tem um dom especial para capturar momentos naturais. Durante nosso ensaio de família, ela conseguiu fazer todos se sentirem à vontade e as fotos refletem exatamente quem somos. Cada imagem conta uma história!"

### Mensagem para Enviar ao Cliente

```
Olá [Nome],

Estou finalizando meu novo site e adoraria incluir seu depoimento! 
Poderia me enviar:

1. Uma foto sua/de vocês (quadrada, rosto bem iluminado)
2. Um texto de 2-4 frases sobre sua experiência

Exemplo: "A Fernanda tem um olhar único. As fotos do ensaio de 
família ficaram lindas e capturaram perfeitamente a essência do 
momento. Recomendo muito!"

Muito obrigada! 💙
```

### Como Atualizar no Código

Editar [src/pages/Home.tsx](src/pages/Home.tsx):

**Cliente 1** (linha ~551):
```tsx
{
  name: "Nome Real do Cliente",
  avatar: "/images/testimonials/cliente-01.jpg",
  category: "Categoria Real",
  text: "Texto do depoimento real aqui...",
  rating: 5
}
```

**Cliente 2** (linha ~596):
```tsx
{
  name: "Nome Real do Cliente 2",
  avatar: "/images/testimonials/cliente-02.jpg",
  category: "Categoria Real",
  text: "Texto do depoimento real aqui...",
  rating: 5
}
```

---

## 🆘 Troubleshooting {#troubleshooting}

### Build Falha com Erro TypeScript

```bash
# Ver erros detalhados
npm run build

# Rodar linter
npm run lint

# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Imagens Não Carregam

**Causas comuns**:
- ❌ Nomes de arquivo com espaços ou caracteres especiais
- ❌ Extensão errada (JPG vs JPEG)
- ❌ Caminho incorreto no código
- ❌ Arquivo muito grande (timeout)

**Solução**:
```bash
# Verificar nomes de arquivos
ls -lh public/images/portfolio/familias/

# Renomear se necessário (sem espaços, minúsculas)
mv "Foto 01.JPG" "familias-01.jpg"

# Verificar tamanhos
du -h public/images/**/*.jpg | awk '$1 ~ /M/ {print}'

# Limpar cache do build
rm -rf dist
npm run build
```

### WhatsApp Não Funciona no Desktop

**Esperado**: WhatsApp links só funcionam em:
- Mobile com WhatsApp instalado
- Desktop com WhatsApp Web configurado

**Testar**:
```bash
# Verificar formato do número
grep -r "https://wa.me/" src/
# Deve ser: https://wa.me/5511XXXXXXXXX (sem espaços, hífens, parênteses)
```

### Menu Mobile Não Abre

**Causas comuns**:
- ❌ JavaScript desabilitado no navegador
- ❌ Build antigo em cache
- ❌ Erro no bundle JavaScript

**Solução**:
```bash
# Verificar erros no console do navegador (F12)
# Limpar build e testar
rm -rf dist
npm run dev
# Testar em http://localhost:5174
```

### Vercel Deploy Falha

**Ver logs**:
- Dashboard Vercel → Project → Deployments → Clicar no deploy → View Function Logs

**Erros comuns**:
- Build timeout (ajustar em Project Settings)
- Dependências faltando (verificar `package.json`)
- Variáveis de ambiente ausentes

**Forçar novo deploy**:
```bash
git commit --allow-empty -m "chore: trigger redeploy"
git push origin main
```

### Site Lento para Carregar

**Otimizações**:
1. Comprimir imagens ainda mais (< 200KB cada)
2. Usar formato WebP para imagens
3. Lazy load de imagens do portfólio
4. Minificar build (já automático no Vite)

**Verificar performance**:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse no Chrome DevTools (F12 → Lighthouse)

---

## 📊 Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Dev server com HMR (http://localhost:5174)
npm run build            # Build de produção (gera dist/)
npm run preview          # Preview do build localmente
npm run lint             # Rodar ESLint

# Git
git status               # Ver mudanças
git add .                # Adicionar tudo
git commit -m "msg"      # Commit
git push origin main     # Push para GitHub

# Verificações
./scripts/pre-deploy-check.sh    # Checklist pré-deploy
grep -rn "5511999999999" src/    # Buscar placeholders

# Imagens
ls public/images/portfolio/*/    # Listar todas as fotos
du -sh public/images/            # Tamanho total das imagens
```

---

**Última atualização**: 14 de janeiro de 2026
