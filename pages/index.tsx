import Layout from '../components/Layout';
import ContentSection from '../components/ContentSection';

const IndexPage = () => (
  <Layout title="Sal Olivares">
    <ContentSection className="pr-64">
      <p>Hi! I&apos;m Sal.</p>
      <p>
        I&apos;m an engineer trying his best to document his experiences. You&apos;ll find my thoughts on development
        tools, TypeScript, and other random things.
      </p>
      <p>I also enjoy taking and editing photos.</p>
    </ContentSection>
  </Layout>
);

export default IndexPage;
