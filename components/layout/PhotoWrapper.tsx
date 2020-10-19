/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from './Head';

type PhotoWrapperProps = {
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

const PhotoWrapper = ({ children, title = 'Sal Olivares', description = '' }: PhotoWrapperProps) => {
  return (
    <>
      <Head title={title} description={description} />
      <div className="mx-10 my-5">
        <header className="">
          <nav className="flex justify-between">
            <Link href="/">
              <a className="overflow-y-hidden h-6 font-bold no-underline transition-colors duration-300 ease-in-out text-black hover:text-gray-700">
                sal olivares
              </a>
            </Link>
            <ul className="flex space-x-3">
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
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </>
  );
};

export default PhotoWrapper;
