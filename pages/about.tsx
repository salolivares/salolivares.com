import Image from 'next/image';
import Container from '../components/Container';
import Content from '../components/Content';

const AboutPage = () => (
  <Container title="About | Sal Olivares">
    <div className="max-w-2xl mx-auto mb-16">
      <Content>
        <div className="h-96">
          <div className="relative w-full h-full">
            <Image alt="Sal Olivares" src="/static/images/sal.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
        <p>My name is Sal.</p>
        <p>
          I&apos;m a software engineer with a passion for technology and photography. I love learning about the bleeding
          edge in software development (frameworks, tooling, languages), thinking about code ergonomics, and endlessly
          tinkering with my development tools.
        </p>
        <p>
          I usually work on all parts of the software stack from deployment to frontend design and enjoy evangelizing
          others to the wonders of TypeScript.
        </p>
        <p>In my free time I enjoy watching movies, discovering new places to eat, and try my best to stay fit.</p>
      </Content>
    </div>
  </Container>
);

export default AboutPage;
