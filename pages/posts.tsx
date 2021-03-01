import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../api/mdx';
import Container from '../components/Container';
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
  <Container title="Posts | Sal Olivares">
    <div className="max-w-2xl mx-auto mb-16 w-full">
      <PageHeader>Posts</PageHeader>
      <div className="divide-y dark:divide-opacity-50 dark:divide-gray-400">
        {posts.map((post) => (
          <div key={`${post.date}-${post.params.slug}`} className="flex flex-col lg:flex-row lg:items-center py-2">
            <div className="text-gray-500 dark:text-gray-400 text-xs font-light tracking-wide w-40">
              <PostDate dateString={post.date} />
            </div>
            <Link href={`/posts/${post.params.year}/${post.params.month}/${post.params.day}/${post.params.slug}`}>
              <a className="no-underline hover:underline font-semibold text-gray-900 dark:text-neutral">{post.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default PostsPage;
