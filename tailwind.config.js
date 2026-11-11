/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF6EF',
          light: '#FCF9F4',
          dark: '#F0E9DC',
        },
        ivory: {
          DEFAULT: '#FCF9F3',
          soft: '#FAF5EB',
        },
        beige: {
          DEFAULT: '#EAE2D3',
          light: '#F4EFE6',
          warm: '#E5DCBE',
          hover: '#DFD5C4',
          dark: '#D6C8B2',
        },
        charcoal: {
          DEFAULT: '#24201A',
          pure: '#1B1814',
          soft: '#353028',
          muted: '#4C463C',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#DFBA73',
          champagne: '#D4AF67',
          soft: '#EED9B3',
          shimmer: '#F7ECD4',
          dark: '#9A7836',
        },
        champagne: {
          DEFAULT: '#D4AF67',
          gold: '#C5A059',
          light: '#F3E5C8',
          shimmer: '#FBF5E6',
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
          DEFAULT: '#D5C4AB',
          light: '#E8DEC8',
          dark: '#BBA78A',
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
