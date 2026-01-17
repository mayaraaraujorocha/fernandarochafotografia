# Copilot Instructions - Fernanda Rocha Fotografia

## Project Overview
Photography landing page for Fernanda Rocha Fotografia built with **React 19.2 + TypeScript + Vite**. Single-page scrolling site showcasing family photography portfolio with sections for hero, about, video, service categories, testimonials, map, and contact. Design brief in [designer.md](../designer.md) specifies clean, emotional, family-focused aesthetic with soft colors (#8DA4D0 blue, #F5C7C9 pink) and serif + sans-serif typography.

**Status**: ✅ Code 100% Complete | ⏳ Awaiting Real Content (placeholders active)

## Architecture & Structure
- **`src/App.tsx`**: Minimal app shell that renders `<Home />` page
- **`src/pages/Home.tsx`**: Main page wrapper with `<Header>` + 8 sections + `<Footer>` (all implemented)
- **`src/components/`**: Reusable UI components (Header, Footer, Modal, ServiceCard, Button, WhatsAppFloat)
- **Single-page layout**: All sections scroll vertically on one page, no routing (react-router-dom installed but not used)

## Key Conventions & Patterns

### Component Style
- **Named exports for components**: `export function Header()` (see [Header.tsx](../src/components/Header.tsx), [Footer.tsx](../src/components/Footer.tsx))
- **Inline styles**: All components use inline `style={}` props (no CSS modules)
- **React 19.2 features**: Available but not leveraged (no Server Components or Actions)

### TypeScript Configuration
- **Strict mode enabled**: `"strict": true` with additional linting (noUnusedLocals, noUnusedParameters)
- **Bundler module resolution**: Use ESNext modules, no legacy imports
- **JSX transform**: `"jsx": "react-jsx"` (no React import needed in components)

## Developer Workflows

### Development
```bash
npm run dev          # Start Vite dev server with HMR (http://localhost:5174)
npm run build        # TypeScript check + Vite production build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on all files
```

### Automated Scripts
- **`./scripts/update-placeholders.sh`**: Interactive script to update WhatsApp, Instagram, Facebook, email in 8+ locations
- **`./scripts/pre-deploy-check.sh`**: Automated checklist verifying placeholders, images, build status before deploy

### Key Documentation
- **[QUICKSTART.md](../QUICKSTART.md)**: Complete setup guide (placeholders → images → deploy)
- **[REFERENCE.md](../REFERENCE.md)**: Technical specs (image sizes, placeholder locations, deploy instructions)
- **[designer.md](../designer.md)**: Original design specification (reference for colors, typography, sections)

## Design System (from designer.md)

### Colors
- Background: `#FFFFFF`, `#F5F5F5`
- Accent: `#8DA4D0` (blue), `#F5C7C9` (pink)
- Text: `#333333`, `#666666`

### Typography
- Headings: Serif (Playfair Display)
- Body: Sans-serif (Inter)

### Buttons
- Primary CTA: `#8DA4D0` background, white text
- Secondary: `#F5C7C9` border, transparent background

## Implemented Sections (All Complete ✅)
1. **Hero**: Full viewport height, family photo background, "Histórias que merecem ser lembradas", WhatsApp CTA ✅
2. **About**: Two-column grid with Fernanda's story (15 years experience, mother, emotional approach) ✅
3. **Video**: "Momentos em Movimento" centered video player (iframe commented, using static image) ✅
4. **Service Categories**: 11 photo categories as cards with modals showing 10 photos each ✅
5. **Testimonials**: Two client cards with 5-star ratings ✅
6. **Map/Location**: Embedded Google Maps + address (AV Ministro Laudo Ferreira de Camargo 229 Sala 4) ✅
7. **Final CTA**: "Eternize Seus Momentos" with WhatsApp button + parallax background ✅
8. **Footer**: 4-column layout with logo, navigation, services list, contact info ✅

## Integration Points

### Active Placeholders (Must Update Before Deploy)
- **WhatsApp**: `5511999999999` in 8 locations (critical for lead generation)
- **Instagram**: `@fernandarochafotografia` in Footer
- **Facebook**: `/fernandarochafotografia` in Footer
- **Email**: `contato@fernandarochafotografia.com.br` (2 locations)
- **Google Maps**: Placeholder iframe (needs real coordinates)
- **Testimonials**: Using placeholder avatars from pravatar.cc
- **Images**: 116 placeholder paths (hero, about, portfolio, testimonials, cta)

See [REFERENCE.md](../REFERENCE.md#placeholders) for exact locations.

### Features Implemented
- ✅ GSAP scroll animations (fade up, translateY)
- ✅ Modal component for photo albums (10 photos per category)
- ✅ WhatsApp floating button
- ✅ Responsive hamburger menu for mobile
- ✅ Smooth scroll navigation
- ✅ 11 service category cards with dynamic modals

## Content Requirements (Pending)

### Critical for Deploy
1. **WhatsApp number** (real business number, format: `5511XXXXXXXXX`)
2. **Minimum 30 photos** (3 categories × 10 photos each for MVP)
3. **Hero background** (1920x1080px, <500KB)
4. **Logo** (SVG or PNG with transparency)

### Optional (Can Add Post-Deploy)
5. **Video URL** (YouTube/Vimeo) - uncomment iframe in Home.tsx
6. **Real testimonials** (2 clients with photos and text)
7. **All 110 portfolio photos** (11 categories × 10 each)
8. **Custom domain** (instead of vercel.app subdomain)

## Next Steps for User

1. **Update placeholders** (5 min): Run `./scripts/update-placeholders.sh`
2. **Add images** (4-8h): See specs in [REFERENCE.md](../REFERENCE.md#image-specs)
3. **Pre-deploy check** (2 min): Run `./scripts/pre-deploy-check.sh`
4. **Deploy to Vercel** (5 min): See [QUICKSTART.md](../QUICKSTART.md#fase-3-deploy-5-minutos)

## AI Assistant Guidelines

- **Code is 100% complete**: No features missing, only content placeholders
- **Prioritize QUICKSTART.md**: Most users need setup/deploy guidance first
- **Reference designer.md**: For design decisions (colors, typography, spacing)
- **Use REFERENCE.md**: For technical specs (image sizes, placeholder locations)
- **Scripts over manual edits**: Suggest `update-placeholders.sh` for bulk updates
- **Focus on content**: Code changes rare; most help needed with images/placeholders/deploy
