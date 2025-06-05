 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C9F70', 
        secondary: '#2B6777', 
        accent: '#FFB400', 
        background: '#F5F7F8', 
        text : '#1C1C1C'
      },
    },
  },
  plugins: [],
}