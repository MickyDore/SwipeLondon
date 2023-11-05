/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", '"Lexend"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'pastel-pink': {
          200: '#FCDFFF',
          400: '#FFC0CB',
          700: '#FFB2EF',
          800: '#FF69B4',
          DEFAULT: '#FFB2EF',
        },
        'pastel-green': {
          200: '#B5D2AD',
          400: '#BAFCA2',
          700: '#90EE90',
          800: '#7FBC8C',
          DEFAULT: '#90EE90',
        },
        'pastel-blue': {
          200: '#DAF5F0',
          400: '#A7DBD8',
          700: '#87CEEB',
          800: '#69D2E7',
          DEFAULT: '#87CEEB',
        },
        'pastel-purple': {
          200: '#E3DFF2',
          400: '#C4A1FF',
          700: '#A388EE',
          800: '#9723C9',
          DEFAULT: '#A388EE',
        },
        'pastel-yellow': {
          200: '#FDFD96',
          400: '#FFDB58',
          700: '#F4D738',
          800: '#E3A018',
          DEFAULT: '#F4D738',
        },
      },
    },
  },
  plugins: [],
};
