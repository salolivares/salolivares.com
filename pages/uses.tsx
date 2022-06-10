import { InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { Container } from '../components/Container'
import { getFileBySlug } from '../lib/mdx'

export async function getStaticProps() {
  const uses = await getFileBySlug('uses')
  return { props: uses }
}

export default function Uses({
  mdxSource,
  frontmatter
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Uses | Sal Olivares"
      description="Here is a list of all the stuff I use on a daily basis."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">{frontmatter.title}</h1>
        <div className="prose dark:prose-dark prose-headings:mb-5 prose-headings:mt-10 w-full">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </Container>
  )
}
