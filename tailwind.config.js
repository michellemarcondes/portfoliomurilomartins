/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dourado': '#d69e2e',
        'azul-escuro': '#1a202c',
        'neutro-fundo': '#f7fafc',
        'neutro-texto': '#2d3748',
      },
    },
  },
  plugins: [],
}