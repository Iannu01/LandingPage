/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily:{
        playfair:"'Playfair Display', serif",
        lato:"'Lato', sans-serif",
      }
    },
  },
  plugins: [],
}

