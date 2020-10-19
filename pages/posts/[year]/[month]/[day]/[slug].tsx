/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPost } from '../../../../../api/posts';
import CodeBlock from '../../../../../components/CodeBlock';
import Image from '../../../../../components/Image';
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

const Post = ({ frontmatter, markdownBody }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Wrapper>
    <PageHeader>{frontmatter.title}</PageHeader>
    <ReactMarkdown
      escapeHtml={false}
      source={markdownBody}
      renderers={{ code: CodeBlock, image: Image }}
      className="post-content"
    />
  </Wrapper>
);

export default Post;
