import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../api';
import Wrapper from '../components/layout/Wrapper';
import PageHeader from '../components/PageHeader';
import PostDate from '../components/PostDate';

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const sortedPosts = posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

const PostsPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Wrapper title="Posts | Sal Olivares">
    <PageHeader>Posts</PageHeader>
    <div className="divide-y">
      {posts.map((post) => (
        <div key={`${post.date}-${post.params.slug}`} className="flex flex-col lg:flex-row lg:items-center py-2">
          <div className="text-gray-500 text-xs font-light tracking-wide w-40">
            <PostDate dateString={post.date} />
          </div>
          <Link href={`/posts/${post.params.year}/${post.params.month}/${post.params.day}/${post.params.slug}`}>
            <a className="no-underline hover:underline font-medium">{post.title}</a>
          </Link>
        </div>
      ))}
    </div>
  </Wrapper>
);

export default PostsPage;
