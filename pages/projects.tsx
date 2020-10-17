import Wrapper from '../components/layout/Wrapper';
import PageHeader from '../components/PageHeader';

const ProjectsPage = () => (
  <Wrapper title="Projects | Sal Olivares">
    <PageHeader>Projects</PageHeader>
    <div className="grid grid-cols-3 gap-4">
      <div>
        Tokyo &amp; Kyoto
        <div>Japan &bull; 2017</div>
      </div>
      <div>Chicago</div>
      <div>3</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </Wrapper>
);

export default ProjectsPage;
