/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { getAllPosts, getPostBySlug } from '../../api';

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug as string;

  return {
    props: await getPostBySlug(slug),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const Post = ({ frontmatter }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{frontmatter.title}</div>;
};

export default Post;
