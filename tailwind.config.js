module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  variants: {},
  plugins: [],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'neutral': '#131516'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'neutral':'#d8d4cf'
    })
  }
}