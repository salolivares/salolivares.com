/* eslint-disable react/require-default-props */
import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeToggleButton } from './ThemeToggleButton';
import Footer from './Footer';

type WrapperProps = {
  children?: ReactNode;
  [index: string]: any;
};

const navLinks = [
  { link: '/posts', name: 'Posts' },
  { link: '/projects', name: 'Projects' },
  { link: '/photos', name: 'Photos' },
];

const Container = (props: WrapperProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Sal Olivares',
    description: 'Software Engineer and TypeScript enthusiast',
    image: '',
    type: 'website',
    ...customMeta,
  };

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
        {(meta as any).date && <meta property="article:published_time" content={(meta as any).date} />}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />
      </Head>
      <div className="px-8">
        <nav className="flex justify-between items-center w-full max-w-2xl mx-auto my-8 md:my-14">
          <a href="#skip" className="sr-only focus:not-sr-only">
            Skip to content
          </a>
          <Link href="/">
            <a className="overflow-y-hidden h-6 font-bold no-underline flex-grow transition-colors duration-300 ease-in-out text-black dark:text-neutral hover:text-gray-700 dark:hover:text-gray-400">
              sal olivares
            </a>
          </Link>
          <ul className="flex sm:space-x-6 space-x-3">
            {navLinks.map((navLink) => (
              <li key={navLink.link}>
                <Link href={navLink.link}>
                  <a className="text-black dark:text-neutral transition duration-300 ease-in-out no-underline">
                    {navLink.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggleButton switchTheme={switchTheme} theme={theme} className="ml-2" />
        </nav>
        <main id="skip" className="flex flex-col justify-center">
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Container;
