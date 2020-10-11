import Wrapper from '../components/layout/Wrapper';
import ContentSection from '../components/ContentSection';

const IndexPage = () => (
  <Wrapper title="Sal Olivares" description="Sal Olivares. Software Engineer.">
    <ContentSection className="pr-64">
      <p>Hi! I&apos;m Sal.</p>
      <p>
        I&apos;m an engineer trying his best to document his experiences. You&apos;ll find my thoughts on development
        tools, TypeScript, and other random things.
      </p>
      <p>I also enjoy taking and editing photos.</p>
    </ContentSection>
  </Wrapper>
);

export default IndexPage;
