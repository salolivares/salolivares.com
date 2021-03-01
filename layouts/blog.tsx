import Container from '../components/Container';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <article>
        <h1>test</h1>
        <div>{children}</div>
      </article>
    </Container>
  );
}
