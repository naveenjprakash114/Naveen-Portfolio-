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
          DEFAULT: '#F7F3EB',
          light: '#FAF7F2',
          dark: '#EFE9DE',
        },
        ivory: {
          DEFAULT: '#FDFBF7',
          soft: '#FBF8F2',
        },
        beige: {
          DEFAULT: '#E8DDCB',
          light: '#F0E7D8',
          hover: '#DDD0BC',
        },
        charcoal: {
          DEFAULT: '#292722',
          pure: '#1F1D1A',
          soft: '#383530',
          muted: '#4A4742',
        },
        bronze: {
          DEFAULT: '#A18B70',
          light: '#B5A28A',
          dark: '#8C775D',
        },
        taupe: {
          DEFAULT: '#D4C6B3',
          light: '#E2D8C9',
          dark: '#BFAEA7',
          muted: '#8E8579',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.22em',
        'loose-luxury': '0.15em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(41, 39, 34, 0.04), 0 2px 6px -1px rgba(41, 39, 34, 0.02)',
        'luxury': '0 20px 40px -15px rgba(41, 39, 34, 0.08)',
        'card-hover': '0 24px 48px -12px rgba(41, 39, 34, 0.12)',
      },
    },
  },
  plugins: [],
};
