/* eslint-disable  */
import { EnhancedFrontmatter } from '../api/mdx';
import Container from '../components/Container';
import PageHeader from '../components/PageHeader';

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
        <PageHeader>
          {frontmatter.title}
        </PageHeader>
        <div className="prose dark:prose-dark max-w-none w-full">{children}</div>
      </article>
    </Container>
  );
}
