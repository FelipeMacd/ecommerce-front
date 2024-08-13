/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'roxo': '#54343f',
        'rosa': '#e77a77',
        'laranja': '#f6a570',
        'amarelo': '#f9df94',
        'cinza': '#cad5ad'
      }
    },
  },
  plugins: [],
}