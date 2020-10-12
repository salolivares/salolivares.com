import { InferGetStaticPropsType } from 'next';
import { getAllPosts } from '../api';
import Wrapper from '../components/layout/Wrapper';
import PageHeader from '../components/PageHeader';

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

const PostsPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Wrapper title="Posts | Sal Olivares">
    <PageHeader>Posts</PageHeader>
    {posts.map((post) => (
      <>
        <div>{post.slug}</div>
        <div>{post.title}</div>
        <div>{post.date}</div>
      </>
    ))}
  </Wrapper>
);

export default PostsPage;
