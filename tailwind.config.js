/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heading:['Merriweather','sans-serif'],
        body: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
