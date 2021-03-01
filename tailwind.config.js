const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
            css: {
                color: theme('colors.gray.700'),
                a: {
                  color: theme('colors.blue.500'),
                  '&:hover': {
                    color: theme('colors.blue.700')
                  },
                  code: { color: theme('colors.blue.400') }
                },
            },
        },
        dark: {
            css: {
                color: '#d8d4cf',
                a: {
                  color: theme('colors.blue.400'),
                  '&:hover': {
                    color: theme('colors.blue.600')
                  },
                  code: { color: theme('colors.blue.400') }
                },
                'h1,h2,h3,h4,h5,h6': {
                    color: '#d8d4cf',
                },
                strong: {
                    color: theme('colors.gray.300'),
                },
                code: {
                    color: theme('colors.gray.300'),
                },
                figcaption: {
                    color: theme('colors.gray.500'),
                },
            },
        },
      }),
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
  variants: {
    extend:{
      typography: ['dark']
    }
  },
  plugins: [require("@tailwindcss/typography")],
}