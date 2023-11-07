/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: "'Jost', sans-serif",
        quicksand: "'Quicksand', sans-serif",
      },
      colors:{
        green: '#360',
        lightGreen: '#F9FFF5',
        grey: '#7D7C7C',
        lightGrey: '#F1EFEF',
        beige: '#ECE3CE'
      },
    },
  },
  plugins: [require("daisyui"), require('preline/plugin'),],
}

