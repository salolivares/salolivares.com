import { InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { BestOfLayout } from '../layouts/bestof'
import { getFileBySlug } from '../lib/mdx'

export async function getStaticProps() {
  const bestof = await getFileBySlug('bestof')

  return { props: bestof }
}

export default function BestOf({
  mdxSource,
  frontmatter
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BestOfLayout frontmatter={frontmatter}>
      <MDXRemote {...mdxSource} />
    </BestOfLayout>
  )
}
