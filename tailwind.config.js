/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'salmao': '#ee715d',
        'rosa-claro': '#fbbc9b',
        'verde': '#244c54',
        'azul-claro': '#6b8994',
        'cinza': '#c2c9cd'
      }
    },
  },
  plugins: [],
}