import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import UnderConstruction from '../components/UnderConstruction';

const ProjectsPage = () => (
  <Container title="Projects | Sal Olivares">
    <div className="max-w-2xl mx-auto mb-16 w-full">
      <PageHeader>Projects</PageHeader>
      <UnderConstruction />
    </div>
  </Container>
);

export default ProjectsPage;
