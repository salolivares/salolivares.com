/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const navLinks = [
  { link: '/posts', name: 'Posts' },
  { link: '/photos', name: 'Photos' },
  { link: '/projects', name: 'Projects' },
  { link: '/about', name: 'About' },
];

const Layout = ({ children, title = 'This is the default title' }: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="mx-10 my-5 lg:my-20">
      <header className="lg:absolute mb-16">
        <nav className="flex lg:flex-col justify-between">
          <Link href="/">
            <a className="lg:mb-2 font-bold no-underline text-black">sal olivares</a>
          </Link>
          <ul className="flex lg:flex-col space-x-3 lg:space-x-0">
            {navLinks.map((navLink) => (
              <li>
                <Link href={navLink.link}>
                  <a className="no-underline text-black">{navLink.name}</a>
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

export default Layout;
