/* eslint-disable react/require-default-props */
import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import Head from './Head';
import { ThemeToggleButton } from '../ThemeToggleButton';

type WrapperProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
  photoMode?: boolean;
};

const navLinks = [
  { link: '/posts', name: 'Posts' },
  { link: '/projects', name: 'Projects' },
  { link: '/photos', name: 'Photos' },
];

const Wrapper = ({ children, title = 'Sal Olivares', description = '', photoMode = false }: WrapperProps) => {
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
      <Head title={title} description={description} />
      <div className={clsx('mx-5 my-5 lg:mx-10', { 'lg:my-20': !photoMode })}>
        <ThemeToggleButton
          switchTheme={switchTheme}
          theme={theme}
          className={clsx('hidden', { 'lg:block lg:absolute top-5 right-5': !photoMode })}
        />
        <header className={clsx({ 'mb-16 lg:absolute': !photoMode })}>
          <nav className={clsx('flex justify-between', { 'lg:flex-col': !photoMode })}>
            <Link href="/">
              <a className="overflow-y-hidden h-6 font-bold no-underline flex-grow transition-colors duration-300 ease-in-out text-black dark:text-neutral hover:text-gray-700 dark:hover:text-gray-400 lg:mb-2">
                sal olivares
              </a>
            </Link>
            <ul className={clsx('flex space-x-3', { 'lg:flex-col lg:space-x-0': !photoMode })}>
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
            <ThemeToggleButton
              switchTheme={switchTheme}
              theme={theme}
              className={clsx('self-start ml-4', { 'lg:ml-0 lg:hidden': !photoMode })}
            />
          </nav>
        </header>
        <div className={clsx({ 'max-w-screen-sm mx-auto': !photoMode }, { '': photoMode })}>{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
