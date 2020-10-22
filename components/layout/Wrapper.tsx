/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Head from './Head';

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
  { link: '/about', name: 'About' },
];

const Wrapper = ({ children, title = 'Sal Olivares', description = '', photoMode = false }: WrapperProps) => {
  return (
    <>
      <Head title={title} description={description} />
      <div className={clsx('mx-5 my-5 lg:mx-10', { 'lg:my-20': !photoMode })}>
        <header className={clsx({ 'mb-16 lg:absolute': !photoMode })}>
          <nav className={clsx('flex justify-between', { 'lg:flex-col': !photoMode })}>
            <Link href="/">
              <a className="overflow-y-hidden h-6 font-bold no-underline transition-colors duration-300 ease-in-out text-black hover:text-gray-700 lg:mb-2">
                sal olivares
              </a>
            </Link>
            <ul className={clsx('flex space-x-3', { ' lg:flex-col lg:space-x-0': !photoMode })}>
              {navLinks.map((navLink) => (
                <li key={navLink.link}>
                  <Link href={navLink.link}>
                    <a className="text-black transition duration-300 ease-in-out no-underline hover:underline">
                      {navLink.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className={clsx({ 'max-w-screen-sm mx-auto': !photoMode }, { 'flex flex-col items-center': photoMode })}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
