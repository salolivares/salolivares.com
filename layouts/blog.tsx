import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import Container from '../components/Container';
import { Frontmatter } from '../api/mdx';

export default function BlogLayout({ children, frontmatter }: { children: React.ReactNode; frontmatter: Frontmatter }) {
  return (
    <Container>
      <article>
        <h1>test</h1>
        <div>{children}</div>
      </article>
    </Container>
  );
}
