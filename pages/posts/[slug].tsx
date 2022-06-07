import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from '../../lib/mdx'
import { BlogLayout } from '../../layouts/blog'

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string
  const post = await getFileBySlug('posts', slug)

  return { props: post }
}

export function getStaticPaths() {
  const posts = getFiles('posts')
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export default function Blog({
  mdxSource,
  frontmatter
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlogLayout frontmatter={frontmatter}>
      <MDXRemote {...mdxSource} />
    </BlogLayout>
  )
}
