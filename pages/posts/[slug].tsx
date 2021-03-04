import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import { getFileBySlug, getFiles } from '../../lib/mdx';
import MDXComponents from '../../components/MDXComponents';
import BlogLayout from '../../layouts/blog';

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const post = await getFileBySlug('blog', slug);

  return { props: post };
}

export function getStaticPaths() {
  const posts = getFiles('blog');
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function Blog({ mdxSource, frontmatter }: InferGetStaticPropsType<typeof getStaticProps>) {
  const content = hydrate(mdxSource, { components: MDXComponents });

  return <BlogLayout frontmatter={frontmatter}>{content}</BlogLayout>;
}
