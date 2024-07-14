/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     backgroundColor:{
      'rd':'#1A89F2'
     },
     animation:{
      'bnc-slow': 'bounce 3s linear infinite'
     },
     colors:{
      'ok':'#B1D810'
     }
    
    },
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
  },
  plugins: [],
}
