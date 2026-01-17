#!/bin/bash

##############################################################################
# Script de Otimização de Imagens - Fernanda Rocha Fotografia
# Redimensiona e comprime todas as imagens mantendo qualidade
# Baseado em especificações de REFERENCE.md
##############################################################################

set -e

IMAGE_DIR="/home/mayara-rocha/Projetos/fernandarochafotografia/public/images"
TEMP_SUFFIX="_optimizing"

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Contadores
TOTAL_FILES=0
OPTIMIZED_FILES=0
SKIPPED_FILES=0

# Função para fazer backup
backup_image() {
    local file=$1
    if [[ ! -f "${file}.backup" ]]; then
        cp "$file" "${file}.backup"
        echo -e "${BLUE}✓ Backup criado: ${file##*/}.backup${NC}"
    fi
}

# Função para otimizar imagem com base na categoria
optimize_image() {
    local file=$1
    local category=$(basename $(dirname "$file"))
    local filename=$(basename "$file")
    local extension="${filename##*.}"
    
    # Verificar se é imagem válida
    if [[ ! "$extension" =~ ^(jpg|jpeg|png|webp)$ ]]; then
        return
    fi
    
    TOTAL_FILES=$((TOTAL_FILES + 1))
    
    # Pegar tamanho original
    local original_size=$(du -h "$file" | cut -f1)
    local original_bytes=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || echo 0)
    
    # Definir parâmetros por tipo de imagem
    local width height quality gravity
    
    case "$category" in
        "hero")
            width=1920
            height=1080
            quality=82
            gravity="center"
            ;;
        "cta")
            width=1920
            height=1080
            quality=82
            gravity="center"
            ;;
        "about")
            width=800
            height=800
            quality=85
            gravity="center"
            ;;
        "logo")
            # Logos não redimensionam, apenas comprimem
            convert "$file" -quality 90 -strip "${file}${TEMP_SUFFIX}" 2>/dev/null
            mv "${file}${TEMP_SUFFIX}" "$file"
            OPTIMIZED_FILES=$((OPTIMIZED_FILES + 1))
            local new_size=$(du -h "$file" | cut -f1)
            echo -e "${GREEN}✓ Logo otimizado: ${filename} (${original_size} → ${new_size})${NC}"
            return
            ;;
        "portfolio"*)
            # Portfolio: landscape ou quadrado
            width=1200
            height=800
            quality=80
            gravity="center"
            ;;
        "testimonials")
            width=300
            height=300
            quality=85
            gravity="center"
            ;;
        *)
            # Padrão: quadrado
            width=800
            height=800
            quality=80
            gravity="center"
            ;;
    esac
    
    # Verificar se arquivo é muito pequeno (já está otimizado)
    if [[ $original_bytes -lt 200000 && "$category" == "portfolio"* ]]; then
        echo -e "${YELLOW}⊘ Já otimizado (${original_size}): ${filename}${NC}"
        SKIPPED_FILES=$((SKIPPED_FILES + 1))
        return
    fi
    
    # Otimizar usando ImageMagick
    echo -e "${BLUE}→ Otimizando ${category}/${filename}...${NC}"
    
    # Converter para JPG e redimensionar com crop
    if convert "$file" \
        -resize ${width}x${height}^ \
        -gravity "$gravity" \
        -extent ${width}x${height} \
        -quality $quality \
        -strip \
        -interlace Plane \
        "${file}${TEMP_SUFFIX}" 2>/dev/null; then
        
        mv "${file}${TEMP_SUFFIX}" "$file"
        OPTIMIZED_FILES=$((OPTIMIZED_FILES + 1))
        
        # Calcular redução
        local new_bytes=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        local new_size=$(du -h "$file" | cut -f1)
        local reduction=$((100 - (new_bytes * 100 / original_bytes)))
        
        echo -e "${GREEN}✓ Otimizado: ${filename}${NC}"
        echo -e "  ${original_size} → ${new_size} (redução ${reduction}%)${NC}"
    else
        echo -e "${RED}✗ Erro ao otimizar: ${filename}${NC}"
        SKIPPED_FILES=$((SKIPPED_FILES + 1))
    fi
}

# Função principal
main() {
    echo -e "${BLUE}╔════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║  Otimizador de Imagens - Fernanda Rocha Fotografia║${NC}"
    echo -e "${BLUE}╚════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    # Verificar diretório
    if [[ ! -d "$IMAGE_DIR" ]]; then
        echo -e "${RED}✗ Erro: Diretório $IMAGE_DIR não encontrado${NC}"
        exit 1
    fi
    
    # Verificar se ImageMagick está instalado
    if ! command -v convert &> /dev/null; then
        echo -e "${RED}✗ Erro: ImageMagick não está instalado${NC}"
        echo "   Execute: sudo apt-get install imagemagick"
        exit 1
    fi
    
    echo -e "${YELLOW}📁 Diretório: $IMAGE_DIR${NC}"
    echo -e "${YELLOW}💾 Tamanho total antes: $(du -sh "$IMAGE_DIR" | cut -f1)${NC}"
    echo ""
    
    # Processar imagens por categoria
    local categories=("hero" "cta" "about" "logo" "portfolio" "testimonials")
    
    for cat in "${categories[@]}"; do
        if [[ -d "$IMAGE_DIR/$cat" ]]; then
            echo -e "${BLUE}📸 Categoria: $cat${NC}"
            find "$IMAGE_DIR/$cat" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read file; do
                optimize_image "$file"
            done
        fi
    done
    
    # Portfolio - subcategorias
    if [[ -d "$IMAGE_DIR/portfolio" ]]; then
        echo -e "${BLUE}📸 Portfólio (subcategorias)${NC}"
        find "$IMAGE_DIR/portfolio" -maxdepth 2 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read file; do
            optimize_image "$file"
        done
    fi
    
    # Resumo final
    echo ""
    echo -e "${BLUE}╔════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║                    RESUMO FINAL                    ║${NC}"
    echo -e "${BLUE}╚════════════════════════════════════════════════════╝${NC}"
    
    local new_total_size=$(du -sh "$IMAGE_DIR" | cut -f1)
    
    echo -e "${GREEN}✓ Total processado: $TOTAL_FILES imagens${NC}"
    echo -e "${GREEN}✓ Otimizadas: $OPTIMIZED_FILES imagens${NC}"
    echo -e "${YELLOW}⊘ Puladas: $SKIPPED_FILES imagens${NC}"
    echo ""
    echo -e "${BLUE}💾 Novo tamanho total: ${new_total_size}${NC}"
    echo ""
    echo -e "${GREEN}✓ Otimização concluída!${NC}"
    echo ""
    echo -e "Dicas para continuar otimizando:"
    echo -e "  • Remova arquivos .backup se tudo estiver OK: rm public/images/**/*.backup"
    echo -e "  • Confira as imagens no navegador: npm run dev"
    echo -e "  • Se houver problemas, restaure backups: for f in public/images/**/*.backup; do mv \$f \${f%.backup}; done"
}

# Executar
main
