import { Container } from '../components/Container'
import { EnhancedFrontmatter } from '../lib/mdx'

export function BestOfLayout({
  children,
  frontmatter
}: {
  children: React.ReactNode
  frontmatter: EnhancedFrontmatter
}) {
  return (
    <Container
      title="Best Of | Sal Olivares"
      description="Here are a collection of quotes I’ve had the privilege and/or misfortune of coming across on the internet."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">{frontmatter.title}</h1>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  )
}
