/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: "'Jost', sans-serif",
        quicksand: "'Quicksand', sans-serif",
      },
      colors:{
        green: '#360',
        grey: '#7D7C7C',
        lightGrey: '#F1EFEF',
        beige: '#ECE3CE'
      },
    },
  },
  plugins: [require("daisyui")],
}

