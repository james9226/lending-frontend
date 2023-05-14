const path = require('path');


/** @type {import('tailwindcss').Config} */
export const content = [
  path.join(__dirname, './pages/**/*.{js,ts,jsx,tsx,mdx}'),
  path.join(__dirname, './components/**/*.{js,ts,jsx,tsx,mdx}'),
  path.join(__dirname, './app/**/*.{js,ts,jsx,tsx,mdx}'),
];
export const theme = {
  extend: {
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      'primary-orange': '#FF5722',
    }
  },
  daisyui: {
    themes: false,
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
  require("daisyui"),
];