#!/bin/bash

# ====================================
# Script de Atualização de Placeholders
# Fernanda Rocha Fotografia
# ====================================

echo "🔄 Atualizando placeholders do projeto..."
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ====================================
# 1. WHATSAPP
# ====================================
echo -e "${BLUE}📱 WhatsApp${NC}"
echo "Número atual: 5511999999999"
echo -n "Digite o número real (formato: 5511XXXXXXXXX): "
read WHATSAPP_NUMBER

if [ ! -z "$WHATSAPP_NUMBER" ]; then
    echo "Substituindo em 8 locais..."
    find src/ -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i "s/5511999999999/$WHATSAPP_NUMBER/g" {} +
    echo -e "${GREEN}✅ WhatsApp atualizado${NC}"
else
    echo -e "${YELLOW}⏭️  WhatsApp pulado${NC}"
fi
echo ""

# ====================================
# 2. INSTAGRAM
# ====================================
echo -e "${BLUE}📸 Instagram${NC}"
echo "URL atual: https://instagram.com/fernandarochafotografia"
echo -n "Digite o username real (sem @): "
read INSTAGRAM_USER

if [ ! -z "$INSTAGRAM_USER" ]; then
    find src/components/Footer.tsx -type f -exec sed -i "s|https://instagram.com/fernandarochafotografia|https://instagram.com/$INSTAGRAM_USER|g" {} +
    echo -e "${GREEN}✅ Instagram atualizado${NC}"
else
    echo -e "${YELLOW}⏭️  Instagram pulado${NC}"
fi
echo ""

# ====================================
# 3. FACEBOOK
# ====================================
echo -e "${BLUE}👥 Facebook${NC}"
echo "URL atual: https://facebook.com/fernandarochafotografia"
echo -n "Digite o nome da página: "
read FACEBOOK_PAGE

if [ ! -z "$FACEBOOK_PAGE" ]; then
    find src/components/Footer.tsx -type f -exec sed -i "s|https://facebook.com/fernandarochafotografia|https://facebook.com/$FACEBOOK_PAGE|g" {} +
    echo -e "${GREEN}✅ Facebook atualizado${NC}"
else
    echo -e "${YELLOW}⏭️  Facebook pulado${NC}"
fi
echo ""

# ====================================
# 4. EMAIL
# ====================================
echo -e "${BLUE}📧 Email${NC}"
echo "Email atual: contato@fernandarochafotografia.com.br"
echo -n "Digite o email real (ou Enter para manter): "
read EMAIL_ADDRESS

if [ ! -z "$EMAIL_ADDRESS" ]; then
    find src/ -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i "s|contato@fernandarochafotografia.com.br|$EMAIL_ADDRESS|g" {} +
    echo -e "${GREEN}✅ Email atualizado${NC}"
else
    echo -e "${YELLOW}⏭️  Email mantido${NC}"
fi
echo ""

# ====================================
# RESUMO
# ====================================
echo ""
echo -e "${GREEN}✨ Atualização concluída!${NC}"
echo ""
echo "📋 Próximos passos:"
echo "1. Verificar mudanças: git diff src/"
echo "2. Testar no navegador: npm run dev"
echo "3. Fazer commit: git add . && git commit -m 'feat: atualizar informações de contato'"
echo ""
echo "⚠️  Lembre-se de ainda:"
echo "   - Atualizar coordenadas do Google Maps em src/pages/Home.tsx"
echo "   - Confirmar endereço físico"
echo "   - Fazer upload das imagens"
echo ""
