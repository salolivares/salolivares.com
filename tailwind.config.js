const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  variants: {},
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'neutral': '#131516'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'neutral':'#d8d4cf'
    })
  },
  plugins: [require("@tailwindcss/typography")],
}