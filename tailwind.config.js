/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'portfolio-primary': '#FFCA6C',
        'portfolio-secondary': '#34353A',
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
