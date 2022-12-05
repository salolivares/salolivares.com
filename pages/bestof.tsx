import { getMDXComponent } from 'mdx-bundler/client'
import { InferGetStaticPropsType } from 'next'
import { useMemo } from 'react'
import { MDXComponents } from '../components/MDXComponents'
import { BestOfLayout } from '../layouts/bestof'
import { getFileBySlug } from '../lib/mdx'

export async function getStaticProps() {
  const bestof = await getFileBySlug('bestof')

  return { props: bestof }
}

export default function BestOf({
  code,
  frontmatter
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <BestOfLayout frontmatter={frontmatter}>
      <Component components={MDXComponents} />
    </BestOfLayout>
  )
}
