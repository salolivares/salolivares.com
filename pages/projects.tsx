import { Container } from '../components/Container'
import { Content } from '../components/Content'

export default function ProjectsPage() {
  return (
    <Container title="Projects | Sal Olivares">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <Content>
          <h1>Projects</h1>
          <p>Sal&apos;s been pretty busy. He&apos;ll update this page asap.</p>
        </Content>
      </div>
    </Container>
  )
}
