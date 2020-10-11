/* eslint-disable react/require-default-props */
import NextHead from 'next/head';

interface HeadProps {
  title: string;
  description?: string;
}

const Head = ({ title, description }: HeadProps) => (
  <NextHead>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    {description ? <meta name="description" content={description} /> : null}
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico" />
  </NextHead>
);

export default Head;
