import { InferGetStaticPropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import MDXComponents from '../components/MDXComponents';
import BestOfLayout from '../layouts/bestof';
import { getFileBySlug } from '../lib/mdx';

export async function getStaticProps() {
  const bestof = await getFileBySlug('bestof');

  return { props: bestof };
}

export default function BestOf({ mdxSource, frontmatter }: InferGetStaticPropsType<typeof getStaticProps>) {
  const content = hydrate(mdxSource, { components: MDXComponents });

  return <BestOfLayout frontmatter={frontmatter}>{content}</BestOfLayout>;
}
