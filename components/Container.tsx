import React, { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeToggleButton } from './ThemeToggleButton'
import Footer from './Footer'
import { BASE_URL } from '../lib/config'

type WrapperProps = {
  children?: ReactNode
  title?: string
  description?: string
  type?: string
  image?: string
  [index: string]: any
}

const navLinks = [
  { link: '/posts', name: 'Posts' },
  { link: '/projects', name: 'Projects' },
  { link: '/photos', name: 'Photos' }
]

const Container = (props: WrapperProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Sal Olivares',
    description: 'Software Engineer and TypeScript enthusiast',
    image: `${BASE_URL}/static/images/seo_banner.png`,
    type: 'website',
    ...customMeta
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`https://salolivares.com${router.asPath}`} />
        <link rel="canonical" href={`https://salolivares.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Sal Olivares" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0x102c" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {(meta as any).date && (
          <meta property="article:published_time" content={(meta as any).date} />
        )}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <nav className="flex justify-between items-center w-full mx-auto max-w-4xl p-8 my-0 md:my-8">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="flex-grow">
          <Link href="/">
            <a className="font-bold transition-colors duration-300 ease-in-out text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400">
              <div className="inline">sal</div>
              <div className="xsm:inline hidden"> olivares</div>
            </a>
          </Link>
        </div>
        <ul className="flex sm:space-x-6 space-x-3 flex-shrink">
          {navLinks.map((navLink) => (
            <li key={navLink.link}>
              <Link href={navLink.link}>
                <a className="transition duration-300 ease-in-out no-underline text-gray-900 dark:text-gray-100">
                  {navLink.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggleButton switchTheme={switchTheme} theme={theme} className="ml-3" />
      </nav>
      <main id="skip" className="flex flex-col justify-center px-8">
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Container
