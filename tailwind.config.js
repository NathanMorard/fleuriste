/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#fffaf4', //background
          100: '#fef5e7', //background image
          200: '#f3e8ff', //survol link navbar
          300: '#fae1dd', //input
          400: '#ffedd5', //étoile avis ne pas changer
          500: '#dda15e', //menu burger
          600: '#b5838d', //fond navbar footer et titre
          700: '#a084ca', //couleur h2
          800: '#8e7f7b', //ne sais pas
          900: '#6b705c', //ne sais pas

        }
      }
    },
  },
  plugins: [],
}
