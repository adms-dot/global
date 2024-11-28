/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['HelveticaCustom', 'sans-serif'], // Adding custom font
      },
      backgroundImage:{
        'program':"url('./program-bg.jpg')",
        'hero':"url('./src/assets/home-hero.png')",

      }
    },
  },
  plugins: [],
}
