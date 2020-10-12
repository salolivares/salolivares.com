/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPost } from '../../../../../api';
import Wrapper from '../../../../../components/layout/Wrapper';
import PageHeader from '../../../../../components/PageHeader';

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const year = params?.year as string;
  const month = params?.month as string;
  const day = params?.day as string;
  const slug = params?.slug as string;

  return {
    props: await getPost({ year, month, day, slug }),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { year: post.params.year, month: post.params.month, day: post.params.day, slug: post.params.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const Post = ({ frontmatter, markdownBody }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Wrapper>
    <PageHeader>{frontmatter.title}</PageHeader>
    <div>
      <ReactMarkdown source={markdownBody} />
    </div>
  </Wrapper>
);

export default Post;
