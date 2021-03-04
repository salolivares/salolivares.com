/* eslint-disable  */
import { format, parseISO } from 'date-fns';
import { EnhancedFrontmatter } from '../lib/mdx';
import Container from '../components/Container';

export default function BlogLayout({
  children,
  frontmatter,
}: {
  children: React.ReactNode;
  frontmatter: EnhancedFrontmatter;
}) {
  return (
    <Container title={`${frontmatter.title} | Sal Olivares`} description={frontmatter.summary} type="article">
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          {frontmatter.title}
        </h1>
        <div className="w-full mt-2 mb-10">
          <p className="text-sm text-gray-500">
            {format(parseISO(frontmatter.publishedOn!), 'MMMM dd, yyyy')}{` • `}
            {frontmatter.readingTime.text}
          </p>
       </div>
        <div className="prose dark:prose-dark max-w-none w-full">{children}</div>
      </article>
    </Container>
  );
}
