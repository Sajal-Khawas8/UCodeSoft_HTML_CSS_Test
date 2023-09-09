const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        '2xl': '1436px'
      },
      colors:{
        'primaryBlue': '#6497ce'
      },
      fontFamily:{
        'jost': ['Jost', "sans-serif", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}