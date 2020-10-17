import Wrapper from '../components/layout/Wrapper';
import PageHeader from '../components/PageHeader';
import PhotoAlbumListItem from '../components/PhotoAlbumListItem';

const PhotosPage = () => (
  <Wrapper title="Photos | Sal Olivares">
    <PageHeader>Photos</PageHeader>
    <div className="divide-y">
      <PhotoAlbumListItem />
      <div>Chicago</div>
      <div>3</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </Wrapper>
);

export default PhotosPage;
