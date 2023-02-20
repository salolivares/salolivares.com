/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { getAllFilesFrontMatter } from '../lib/mdx'
import { Container } from '../components/Container'
import { PostDate } from '../components/PostDate'
import { Content } from '../components/Content'

export const getStaticProps = () => {
  const posts = getAllFilesFrontMatter('posts')
  const sortedPosts = posts.sort((a, b) => +new Date(b.publishedOn!) - +new Date(a.publishedOn!))

  return {
    props: {
      posts: sortedPosts
    }
  }
}

function PostsPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container title="Posts | Sal Olivares">
      <div className="max-w-2xl mx-auto mb-16 w-full">
        <Content>
          <h1>Posts</h1>
        </Content>
        <div className="divide-y dark:divide-opacity-50 dark:divide-gray-400">
          {posts.map((post) => (
            <div key={`${post.slug!}`} className="flex flex-col lg:flex-row lg:items-center py-4">
              <div className="text-gray-500 dark:text-gray-400 text-xs font-normal tracking-wide w-40">
                <PostDate dateString={post.publishedOn!} />
              </div>
              <Link
                href={`/posts/${post.slug!}`}
                className="no-underline hover:underline font-semibold text-gray-900 dark:text-gray-100"
              >
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default PostsPage
