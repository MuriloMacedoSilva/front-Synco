/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        synco: {
          blue: '#0056B3',
          green: '#28A745',
          dark: '#1A1A1A',
        }
      }
    },
  },
  plugins: [],
}