const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primaryBlue': '#6497ce'
      },
      fontFamily: {
        'jost': ['Jost', "sans-serif", ...defaultTheme.fontFamily.sans]
      }
    },
    container: {
      screens: {
        '2xl': '1436px',
      },
      center: true,
      // padding: {
      //   default: '1.5rem',
      //   sm: '2rem',
      //   md: '3rem',
      //   lg: '4rem',
      //   xl: '6rem',
      //   '2xl': '8rem'
      // }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    // ...
  ],
}