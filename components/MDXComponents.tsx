/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props: React.HTMLProps<HTMLAnchorElement>) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href!}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
};

export default MDXComponents;
