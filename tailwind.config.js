/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco' : "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop' : "url('../img/sanFranciscoDesktop.jpg')",
        'yosemite' : "url('../img/yosemite.jpg')",
        'bali' : "url('../img/bali.jpg')",
        'chicago' : "url('../img/chicago.jpg')",
        'europe' : "url('../img/europe.jpg')",
        'iceland' : "url('../img/iceland.jpg')",
        'LA' : "url('../img/LA.jpg')",
        'miami' : "url('../img/miami.jpg')",
        'new_york' : "url('../img/new_york.jpg')",
        'norway' : "url('../img/norway.jpg')",
        'seattle' : "url('../img/seattle.jpg')",
        'switzerland' : "url('../img/switzerland.jpg')",
        'sydney' : "url('../img/sydney.jpg')",
      },
      colors: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        'black': '#000000',
        'white': '#fff'
      },
      fontFamily: {
        Montserrat: ['"Montserrat"', "sans-serif"]
      }
    },
  },
  plugins: [],
}

