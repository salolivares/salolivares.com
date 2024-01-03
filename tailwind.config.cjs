const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      typography: () => ({
        // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
        // This customizes the tailwind typography plugin styles.
        // They are mirrors from the styles.css file.
        custom: {
          css: {
            '--tw-prose-body': 'hsl(var(--foreground))',
            '--tw-prose-headings': 'hsl(var(--foreground))',
            '--tw-prose-quotes': 'hsl(var(--foreground))',
            '--tw-prose-code': 'hsl(var(--foreground))',
            '--tw-prose-links': 'hsl(var(--foreground))',
            '--tw-prose-invert-body': 'hsl(var(--foreground))',
            '--tw-prose-invert-headings': 'hsl(var(--foreground))',
            '--tw-prose-invert-quotes': 'hsl(var(--foreground))',
            '--tw-prose-invert-code': 'hsl(var(--foreground))',
            '--tw-prose-invert-links': 'hsl(var(--foreground))',
            h1: {
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              fontWeight: '800',
              letterSpacing: '-0.025em',
              scrollMargin: '5rem',
            },
            h2: {
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              borderBottomWidth: '1px',
              paddingBottom: '0.5rem',
              scrollMargin: '5rem',
            },
            h3: {
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              scrollMargin: '5rem',
            },
            h4: {
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              scrollMargin: '5rem',
            },
            blockquote: {
              borderLeftWidth: '2px',
              paddingLeft: '1.5rem',
              fontStyle: 'italic',
              fontWeight: '400',
            },
            a: {
              textDecorationLine: 'underline',
              textUnderlineOffset: '4px',
            },
            'a:hover': {
              textDecorationStyle: 'dotted',
              textDecorationThickness: '1px',
            },
            ul: {
              listStyleType: 'disc',
              marginLeft: '1.5rem',
              paddingLeft: '0px',
            },
            'ul > li': {
              marginTop: '0.5rem',
            },
            abbr: {
              textDecorationLine: 'dotted',
              textDecorationThickness: '1px',
              textUnderlineOffset: '4px',
            },
            code: {},
          },
        },
      }),
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      screens: {
        '-2xl': { max: '1535px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
        '@md': { min: '640px', max: '767px' },
        '@lg': { min: '768px', max: '1023px' },
        '@xl': { min: '1024px', max: '1279px' },
        '@2xl': { min: '1280px', max: '1535px' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
