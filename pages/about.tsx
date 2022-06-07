import Image from 'next/image'
import Container from '../components/Container'
import Content from '../components/Content'

const ASPECT_RATIO = 2048 / 1365

function AboutPage() {
  return (
    <Container title="About | Sal Olivares">
      <div className="max-w-2xl mx-auto mb-16">
        <Content>
          <Image
            alt="Sal Olivares"
            src="/static/images/sal.jpg"
            height={500}
            width={500 * ASPECT_RATIO}
          />
          <p>Hello there!</p>
          <p>
            I&apos;m a software engineer with a passion for technology and photography. I love
            learning about the bleeding edge in software development (frameworks, tooling,
            languages), thinking about code ergonomics, and endlessly tinkering with my development
            tools.
          </p>
          <p>
            I usually work on all parts of the software stack from deployment to frontend design.
          </p>
          <p>
            In my free time I enjoy watching movies, discovering new places to eat, and try my best
            to stay fit.
          </p>
        </Content>
      </div>
    </Container>
  )
}

export default AboutPage
