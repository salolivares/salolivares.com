/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

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
            <a className="lg:mb-2 font-bold">sal olivares</a>
          </Link>
          <ul className="flex lg:flex-col space-x-3 lg:space-x-0">
            <li>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/photos">
                <a>Photos</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="max-w-screen-sm mx-auto">{children}</div>
    </div>
  </>
);

export default Layout;
