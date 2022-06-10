import Image from 'next/image'
import { Container } from '../components/Container'
import { Content } from '../components/Content'

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
          <p>Hello there 🧙‍♂️</p>
          <p>
            I&apos;m a software engineer that digs technology and photography. I love endlessly
            tinkering with my development tools and I&apos;m always on the hunt for a new hobby.
          </p>
        </Content>
      </div>
    </Container>
  )
}

export default AboutPage
