/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#242A38',
          50: '#F3F4F6',
          100: '#E4E6EB',
          400: '#5B6478',
          600: '#3A4256',
          700: '#2E3444',
          800: '#242A38',
          900: '#171B25',
        },
        ocean: {
          DEFAULT: '#0D90C4',
          50: '#EAF7FC',
          100: '#CDECF7',
          300: '#6FC3E4',
          500: '#0D90C4',
          600: '#0B76A3',
          700: '#095E82',
        },
        sun: {
          DEFAULT: '#EC9136',
          100: '#FDEBD6',
          300: '#F3B171',
          500: '#EC9136',
          600: '#D97B1E',
        },
        leaf: {
          DEFAULT: '#4FAA4A',
          100: '#DEF0DC',
          300: '#8FCB8B',
          500: '#4FAA4A',
          600: '#3C8B38',
        },
        violet: {
          DEFAULT: '#61589B',
          100: '#E4E2F0',
          300: '#A69FC8',
          500: '#61589B',
          600: '#4C4480',
        },
        cream: '#FBF9F4',
        sand: '#F2EDE2',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'spin-slow': 'spinSlow 40s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(36, 42, 56, 0.25)',
        soft: '0 10px 30px -12px rgba(36, 42, 56, 0.18)',
      },
    },
  },
  plugins: [],
}
