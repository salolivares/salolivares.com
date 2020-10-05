import Layout from '../components/Layout';
import ParagraphSection from '../components/ParagraphSection';

const AboutPage = () => (
  <Layout title="About | Sal Olivares">
    <ParagraphSection>
      <img alt="Sal Olivares" src="/assets/images/me.jpg" />
      <p>My name is Sal.</p>
      <p>
        I&apos;m a software engineer with a passion for technology and photography. I love learning about the bleeding
        edge in software development (frameworks, tooling, languages), thinking about code ergonomics, and architecting
        scalable services. I usually work on all parts of the software stack from product deployment to frontend design
        and enjoy evangelizing others to the wonders of TypeScript.
      </p>
      <p>In my free time I enjoy watching movies, discovering new places to eat, and try my best to stay fit.</p>
      <p>You can find me on GitHub or Twitter.</p>
    </ParagraphSection>
  </Layout>
);

export default AboutPage;
