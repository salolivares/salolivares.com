import React from 'react'
import { AppProps } from 'next/app'

import '../styles/globals.css'
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from '../components/MDXComponents'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
