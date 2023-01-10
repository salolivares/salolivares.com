import React, { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeToggleButton } from './ThemeToggleButton'
import { Footer } from './Footer'
import { BASE_URL } from '../lib/config'
import { EnhancedOmit } from '../utils/types'

interface Props {
  children?: ReactNode
  title?: string
  description?: string
  type?: string
  image?: string
  [index: string]: unknown
}

type Meta = EnhancedOmit<Required<Props>, 'children'>

const navLinks = [
  { link: '/posts', name: 'Posts' },
  { link: '/projects', name: 'Projects' },
  { link: '/photos', name: 'Photos' }
]

export function Container(props: Props) {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }
  }

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta: Meta = {
    title: 'Sal Olivares',
    description: 'Software Engineer and TypeScript enthusiast',
    image: `${BASE_URL}/static/images/seo_banner.png`,
    type: 'website',
    ...customMeta
  }

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
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
        {meta.date && <meta property="article:published_time" content={String(meta.date)} />}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <nav className="flex justify-between items-center w-full mx-auto max-w-4xl p-8 my-0 md:my-8">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="flex-grow">
          <Link
            href="/"
            className="font-bold transition-colors duration-300 ease-in-out text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
          >
            <div className="inline">sal</div>
            <div className="xsm:inline hidden"> olivares</div>
          </Link>
        </div>
        <ul className="flex sm:space-x-6 space-x-3 flex-shrink">
          {navLinks.map((navLink) => (
            <li key={navLink.link}>
              <Link
                href={navLink.link}
                className="transition duration-300 ease-in-out no-underline text-gray-900 dark:text-gray-100"
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
        {isMounted && (
          <ThemeToggleButton switchTheme={switchTheme} theme={resolvedTheme} className="ml-3" />
        )}
      </nav>
      <main id="skip" className="flex flex-col justify-center px-8">
        {children}
        <Footer />
      </main>
    </>
  )
}
