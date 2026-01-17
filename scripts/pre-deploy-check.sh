#!/bin/bash

# ====================================
# Script de Pré-Deploy - Checklist Automático
# Fernanda Rocha Fotografia
# ====================================

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

echo ""
echo -e "${BOLD}${BLUE}🚀 Checklist de Pré-Deploy${NC}"
echo -e "${BLUE}=====================================${NC}"
echo ""

# Contador de issues
ISSUES=0
WARNINGS=0

# ====================================
# 1. VERIFICAR PLACEHOLDERS
# ====================================
echo -e "${BOLD}📋 1. Verificando Placeholders...${NC}"

# WhatsApp
WHATSAPP_COUNT=$(grep -r "5511999999999" src/ 2>/dev/null | wc -l)
if [ $WHATSAPP_COUNT -gt 0 ]; then
    echo -e "${RED}❌ WhatsApp placeholder ainda ativo ($WHATSAPP_COUNT ocorrências)${NC}"
    echo "   Execute: ./scripts/update-placeholders.sh"
    ((ISSUES++))
else
    echo -e "${GREEN}✅ WhatsApp atualizado${NC}"
fi

# Instagram/Facebook
if grep -q "instagram.com/fernandarochafotografia" src/ 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Instagram placeholder ativo${NC}"
    ((WARNINGS++))
else
    echo -e "${GREEN}✅ Instagram atualizado${NC}"
fi

if grep -q "facebook.com/fernandarochafotografia" src/ 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Facebook placeholder ativo${NC}"
    ((WARNINGS++))
else
    echo -e "${GREEN}✅ Facebook atualizado${NC}"
fi

# Avatares placeholder
if grep -q "pravatar.cc" src/ 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Depoimentos usando avatares placeholder${NC}"
    ((WARNINGS++))
else
    echo -e "${GREEN}✅ Depoimentos com fotos reais${NC}"
fi

echo ""

# ====================================
# 2. VERIFICAR IMAGENS
# ====================================
echo -e "${BOLD}📸 2. Verificando Imagens...${NC}"

# Hero
if [ -f "public/images/hero/hero-background.jpg" ]; then
    SIZE=$(ls -lh public/images/hero/hero-background.jpg | awk '{print $5}')
    echo -e "${GREEN}✅ Hero background ($SIZE)${NC}"
else
    echo -e "${RED}❌ Hero background ausente${NC}"
    ((ISSUES++))
fi

# About
if [ -f "public/images/about/fernanda-portrait.jpg" ]; then
    SIZE=$(ls -lh public/images/about/fernanda-portrait.jpg | awk '{print $5}')
    echo -e "${GREEN}✅ Retrato Fernanda ($SIZE)${NC}"
else
    echo -e "${RED}❌ Retrato Fernanda ausente${NC}"
    ((ISSUES++))
fi

# Logo
if [ -f "public/images/logo/logo.svg" ] || [ -f "public/images/logo/logo.png" ]; then
    echo -e "${GREEN}✅ Logo presente${NC}"
else
    echo -e "${RED}❌ Logo ausente${NC}"
    ((ISSUES++))
fi

# CTA
if [ -f "public/images/cta/cta-background.jpg" ]; then
    SIZE=$(ls -lh public/images/cta/cta-background.jpg | awk '{print $5}')
    echo -e "${GREEN}✅ CTA background ($SIZE)${NC}"
else
    echo -e "${RED}❌ CTA background ausente${NC}"
    ((ISSUES++))
fi

# Portfólio
echo ""
echo -e "${BOLD}   Portfólio por Categoria:${NC}"
CATEGORIES=("casais" "gestantes" "familias" "corporativos" "newborn" "bebe-mensal" "smash-cake" "nascimento" "casamento" "aniversario" "ensaio-aniversario")
TOTAL_PORTFOLIO=0

for cat in "${CATEGORIES[@]}"; do
    COUNT=$(ls public/images/portfolio/$cat/*.jpg 2>/dev/null | wc -l)
    TOTAL_PORTFOLIO=$((TOTAL_PORTFOLIO + COUNT))
    if [ $COUNT -eq 10 ]; then
        echo -e "   ${GREEN}✅ $cat: $COUNT fotos${NC}"
    elif [ $COUNT -gt 0 ]; then
        echo -e "   ${YELLOW}⚠️  $cat: $COUNT fotos (esperado: 10)${NC}"
        ((WARNINGS++))
    else
        echo -e "   ${RED}❌ $cat: 0 fotos${NC}"
        ((ISSUES++))
    fi
done

echo ""
echo -e "   ${BOLD}Total: $TOTAL_PORTFOLIO/110 fotos${NC}"

# Testimonials
echo ""
TESTIMONIAL_COUNT=0
if [ -f "public/images/testimonials/cliente-01.jpg" ]; then
    ((TESTIMONIAL_COUNT++))
fi
if [ -f "public/images/testimonials/cliente-02.jpg" ]; then
    ((TESTIMONIAL_COUNT++))
fi

if [ $TESTIMONIAL_COUNT -eq 2 ]; then
    echo -e "${GREEN}✅ Fotos depoimentos (2/2)${NC}"
elif [ $TESTIMONIAL_COUNT -gt 0 ]; then
    echo -e "${YELLOW}⚠️  Fotos depoimentos ($TESTIMONIAL_COUNT/2)${NC}"
    ((WARNINGS++))
else
    echo -e "${YELLOW}⚠️  Fotos depoimentos ausentes${NC}"
    ((WARNINGS++))
fi

echo ""

# ====================================
# 3. VERIFICAR BUILD
# ====================================
echo -e "${BOLD}🔨 3. Verificando Build...${NC}"

if npm run build > /tmp/build.log 2>&1; then
    echo -e "${GREEN}✅ Build concluído sem erros${NC}"
    
    # Verificar tamanho
    if [ -d "dist" ]; then
        BUILD_SIZE=$(du -sh dist | awk '{print $1}')
        echo -e "   Tamanho: $BUILD_SIZE"
    fi
else
    echo -e "${RED}❌ Build falhou${NC}"
    echo "   Ver log: /tmp/build.log"
    ((ISSUES++))
fi

echo ""

# ====================================
# 4. VERIFICAR GIT
# ====================================
echo -e "${BOLD}📦 4. Verificando Git...${NC}"

if [ -d ".git" ]; then
    echo -e "${GREEN}✅ Repositório Git inicializado${NC}"
    
    # Branch atual
    BRANCH=$(git branch --show-current)
    echo -e "   Branch: $BRANCH"
    
    # Status
    if [ -z "$(git status --porcelain)" ]; then
        echo -e "${GREEN}✅ Working directory limpo${NC}"
    else
        UNCOMMITTED=$(git status --porcelain | wc -l)
        echo -e "${YELLOW}⚠️  $UNCOMMITTED arquivo(s) não commitado(s)${NC}"
        ((WARNINGS++))
    fi
else
    echo -e "${RED}❌ Git não inicializado${NC}"
    ((ISSUES++))
fi

echo ""

# ====================================
# 5. VERIFICAR PACKAGE.JSON
# ====================================
echo -e "${BOLD}📄 5. Verificando package.json...${NC}"

if [ -f "package.json" ]; then
    echo -e "${GREEN}✅ package.json presente${NC}"
    
    # Verificar scripts
    if grep -q '"build"' package.json; then
        echo -e "${GREEN}✅ Script 'build' definido${NC}"
    else
        echo -e "${RED}❌ Script 'build' ausente${NC}"
        ((ISSUES++))
    fi
    
    if grep -q '"preview"' package.json; then
        echo -e "${GREEN}✅ Script 'preview' definido${NC}"
    else
        echo -e "${YELLOW}⚠️  Script 'preview' ausente${NC}"
    fi
else
    echo -e "${RED}❌ package.json não encontrado${NC}"
    ((ISSUES++))
fi

echo ""

# ====================================
# RESUMO
# ====================================
echo -e "${BOLD}${BLUE}=====================================${NC}"
echo -e "${BOLD}📊 RESUMO${NC}"
echo -e "${BLUE}=====================================${NC}"
echo ""

if [ $ISSUES -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}${BOLD}🎉 TUDO PRONTO PARA DEPLOY!${NC}"
    echo ""
    echo -e "${GREEN}✅ 0 problemas críticos${NC}"
    echo -e "${GREEN}✅ 0 avisos${NC}"
    echo ""
    echo -e "${BOLD}Próximos passos:${NC}"
    echo "1. npm run preview (testar build localmente)"
    echo "2. vercel --prod (fazer deploy)"
    echo ""
elif [ $ISSUES -eq 0 ]; then
    echo -e "${YELLOW}${BOLD}⚠️  PRONTO COM AVISOS${NC}"
    echo ""
    echo -e "${GREEN}✅ 0 problemas críticos${NC}"
    echo -e "${YELLOW}⚠️  $WARNINGS aviso(s)${NC}"
    echo ""
    echo "Você pode fazer deploy, mas considere revisar os avisos."
    echo ""
    echo -e "${BOLD}Próximos passos:${NC}"
    echo "1. Revisar avisos (opcional)"
    echo "2. npm run preview (testar build localmente)"
    echo "3. vercel --prod (fazer deploy)"
    echo ""
else
    echo -e "${RED}${BOLD}❌ NÃO PRONTO PARA DEPLOY${NC}"
    echo ""
    echo -e "${RED}❌ $ISSUES problema(s) crítico(s)${NC}"
    echo -e "${YELLOW}⚠️  $WARNINGS aviso(s)${NC}"
    echo ""
    echo "Resolva os problemas críticos antes de fazer deploy."
    echo ""
    echo -e "${BOLD}Ações sugeridas:${NC}"
    echo "- WhatsApp: ./scripts/update-placeholders.sh"
    echo "- Imagens: Ver scripts/GUIA_OTIMIZACAO_IMAGENS.md"
    echo "- Build: npm run build (ver erros)"
    echo ""
fi

echo -e "${BLUE}=====================================${NC}"
echo ""

# Exit code baseado em issues críticos
if [ $ISSUES -gt 0 ]; then
    exit 1
else
    exit 0
fi
