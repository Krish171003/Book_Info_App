/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Calibri', 'sans-serif'], // Calibri as primary font
      },
      colors: {
        primary: '#e63946', // Red
        secondary: '#1d1d1d', // Black
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
