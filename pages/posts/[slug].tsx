import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getFileBySlug, getFiles } from '../../lib/mdx'
import { BlogLayout } from '../../layouts/blog'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import { MDXComponents } from '../../components/MDXComponents'

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

export default function Post({
  code,
  frontmatter
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <BlogLayout frontmatter={frontmatter}>
      <Component components={MDXComponents} />
    </BlogLayout>
  )
}
