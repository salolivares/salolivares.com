/* eslint-disable react/require-default-props */
import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import { ThemeToggleButton } from './ThemeToggleButton';

type WrapperProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const navLinks = [
  { link: '/posts', name: 'Posts' },
  { link: '/projects', name: 'Projects' },
  { link: '/photos', name: 'Photos' },
];

const Container = ({ children, title = 'Sal Olivares', description = '' }: WrapperProps) => {
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

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {description ? <meta name="description" content={description} /> : null}
        <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />
      </Head>
      <div className="mx-5 my-5">
        <header className="max-w-screen-xl mx-auto">
          <nav className="flex justify-between">
            <Link href="/">
              <a className="overflow-y-hidden h-6 font-bold no-underline flex-grow transition-colors duration-300 ease-in-out text-black dark:text-neutral hover:text-gray-700 dark:hover:text-gray-400 lg:mb-2">
                sal olivares
              </a>
            </Link>
            <ul className="flex space-x-3">
              {navLinks.map((navLink) => (
                <li key={navLink.link}>
                  <Link href={navLink.link}>
                    <a className="text-black dark:text-neutral transition duration-300 ease-in-out no-underline hover:underline">
                      {navLink.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggleButton switchTheme={switchTheme} theme={theme} className="self-start ml-4" />
          </nav>
        </header>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Container;
