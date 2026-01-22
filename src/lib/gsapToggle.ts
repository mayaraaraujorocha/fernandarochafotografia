// Toggle to enable/disable GSAP-driven animations at runtime/build time.
// Controlled by Vite env variable VITE_ENABLE_GSAP (set to 'true' to enable).
export const GSAP_ENABLED = import.meta.env.VITE_ENABLE_GSAP === 'true';
