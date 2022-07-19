/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'portfolio-primary': '#FFCA6C',
        'portfolio-secondary': '#34353A',
      },

      animation: {
        'slide-in': 'slide-in 1s ease',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            opacity: 0,
            transform: 'translateY(6rem)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
    fontFamily: {
      Rubik: "'Rubik', sans-serif",
      FiraCode: "'Fira Code', monospace",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      },
    },
  },
  plugins: [],
};
