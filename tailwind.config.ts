import { Montserrat } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        hero: ['Heaters'],
        montserrat: ['Montserrat'],
      },
      colors: {
        'bone-white': '#F9F6EE',
        ivory: '#FFFFF0',
        parchement: 'FCF5E5',
        pearl: 'E2DFD2',
        'sea-shell': 'FFF5EE',
        'mint-cream': '#F5FFFA',
        'rajah-yellow': '#F9BC60',
        'sherpa-blue': '#004643',

        'black-100': '#2B2C35',
        'primary-blue': {
          DEFAULT: '#2B59FF',
          100: '#F5F8FF',
        },
        'secondary-orange': '#f79761',
        'secondary-red': '#E16162',
        'light-white': {
          DEFAULT: 'rgba(238, 235, 227, 1)',
          100: 'rgba(238, 235, 227, 0.1)',
        },
        grey: '#747A88',
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
