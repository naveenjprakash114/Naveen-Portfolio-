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
          DEFAULT: '#F8F5EF',
          light: '#FCFAF7',
          surface: '#FBF9F4',
          border: '#E8DFC9',
        },
        beige: {
          DEFAULT: '#E9DDCB',
          light: '#F3EBDD',
          hover: '#DECDB5',
          dark: '#CCA986',
        },
        taupe: {
          DEFAULT: '#B7A58D',
          light: '#C9BAA3',
          dark: '#938169',
        },
        charcoal: {
          DEFAULT: '#24221F',
          pure: '#1A1816',
          soft: '#332F2B',
          muted: '#4A453F',
        },
        muted: {
          DEFAULT: '#89847D',
          light: '#A59F97',
          dark: '#6B6660',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        editorial: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.22em',
        'loose-luxury': '0.15em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(36, 34, 31, 0.04), 0 2px 6px -1px rgba(36, 34, 31, 0.02)',
        'luxury': '0 20px 40px -15px rgba(36, 34, 31, 0.07)',
        'card-hover': '0 24px 48px -12px rgba(36, 34, 31, 0.1)',
        'inner-fine': 'inset 0 0 0 1px rgba(183, 165, 141, 0.18)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
};

