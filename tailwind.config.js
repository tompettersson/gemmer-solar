/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', 'Trebuchet MS', 'Helvetica', 'sans-serif'],
      },
      colors: {
        gemmer: {
          50: '#fff1d9',
          100: '#fee3b2',
          200: '#fcd68d',
          300: '#fbc967',
          400: '#faba40',
          500: '#eba529',
          600: '#ee9e00',
          700: '#fa9b00',
          800: '#f88100',
          900: '#d95b00',
        },
      },
    },
  },
  plugins: []
};