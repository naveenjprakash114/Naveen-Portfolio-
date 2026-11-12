/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FDFBF7',
          light: '#FFFFFF',
          warm: '#FAF6EE',
          soft: '#F7F3EA',
          border: 'rgba(212, 175, 103, 0.25)',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          light: '#FFFFFF',
          dark: '#F7F3EA',
        },
        beige: {
          DEFAULT: '#F5EFE6',
          light: '#FAF7F2',
          warm: '#F2E9DC',
          hover: '#EDE3D4',
          dark: '#E2D5C3',
        },
        charcoal: {
          DEFAULT: '#221F1B',
          pure: '#181613',
          soft: '#332E28',
          muted: '#47413A',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#DFBA73',
          champagne: '#D4AF67',
          soft: '#F4E8D0',
          shimmer: '#FAF2E2',
          dark: '#9A7836',
        },
        champagne: {
          DEFAULT: '#D4AF67',
          gold: '#C5A059',
          light: '#F5E8CE',
          shimmer: '#FCF7ED',
          dark: '#9E7B35',
          border: 'rgba(212, 175, 103, 0.35)',
        },
        // Mapped for backwards-compatible styling across components to Champagne Gold
        bronze: {
          DEFAULT: '#C5A059',
          light: '#DFBA73',
          dark: '#9E7B35',
        },
        taupe: {
          DEFAULT: '#D8CEBE',
          light: '#EBE3D5',
          dark: '#BBAE9B',
          muted: '#8E8579',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.22em',
        'loose-luxury': '0.15em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(36, 32, 26, 0.04), 0 2px 6px -1px rgba(36, 32, 26, 0.02)',
        'luxury': '0 20px 40px -15px rgba(36, 32, 26, 0.08)',
        'card-hover': '0 24px 48px -12px rgba(197, 160, 89, 0.16)',
        'gold-glow': '0 0 25px -5px rgba(212, 175, 103, 0.25)',
      },
    },
  },
  plugins: [],
};
