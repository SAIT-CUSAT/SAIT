/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      dropShadow: {
        '3xl': '0px 0px 20px  rgba(255,255,255,0.1)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'p_red': '#FE004E',
        'p_back': '#212529',
        'p_grey': '#899FBC',
        'p_dullgrey': '#A3ABB3',
        'white': '#FFFFFF',
        'p_bggrey': '#525252',
        
      },
    },
  },
  plugins: [],
};
