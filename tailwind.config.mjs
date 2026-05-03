import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F0',
        terracota: {
          DEFAULT: '#C1694F',
          dark: '#A35741',
          light: '#D88874',
        },
        oliva: {
          DEFAULT: '#7A8C5E',
          dark: '#5F6F48',
          light: '#95A679',
        },
        tinta: '#2C2416',
        areia: {
          DEFAULT: '#E8DDD0',
          dark: '#D4C5B2',
        },
        ocre: '#D9A441',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        organic: '0 12px 40px -12px rgba(44, 36, 22, 0.25)',
        handmade: '4px 6px 0 0 rgba(44, 36, 22, 0.12)',
      },
      borderRadius: {
        blob: '42% 58% 63% 37% / 40% 45% 55% 60%',
        leaf: '0 80% 0 80%',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'draw': 'draw 2.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.tinta'),
            maxWidth: '65ch',
            fontFamily: theme('fontFamily.body').join(', '),
            h1: { fontFamily: theme('fontFamily.display').join(', ') },
            h2: { fontFamily: theme('fontFamily.display').join(', ') },
            h3: { fontFamily: theme('fontFamily.display').join(', ') },
            a: {
              color: theme('colors.terracota.DEFAULT'),
              textDecorationThickness: '2px',
              '&:hover': { color: theme('colors.terracota.dark') },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
