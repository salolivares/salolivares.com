/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from './Head';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const navLinks = [
  { link: '/posts', name: 'Posts' },
  { link: '/projects', name: 'Projects' },
  { link: '/photos', name: 'Photos' },
  { link: '/about', name: 'About' },
];

const Wrapper = ({ children, title = 'Sal Olivares', description = '' }: LayoutProps) => {
  return (
    <>
      <Head title={title} description={description} />
      <div className="mx-10 my-5 lg:my-20">
        <header className="lg:absolute mb-16">
          <nav className="flex lg:flex-col justify-between">
            <Link href="/">
              <a className="lg:mb-2 font-bold no-underline transition-colors duration-300 ease-in-out text-black hover:text-gray-700">
                sal olivares
              </a>
            </Link>
            <ul className="flex lg:flex-col space-x-3 lg:space-x-0">
              {navLinks.map((navLink) => (
                <li>
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
        <div className="max-w-screen-sm mx-auto">{children}</div>
      </div>
    </>
  );
};

export default Wrapper;