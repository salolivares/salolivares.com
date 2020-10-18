import Wrapper from '../components/layout/Wrapper';
import PageHeader from '../components/PageHeader';
import PhotoAlbumListItem from '../components/PhotoAlbumListItem';

const PhotosPage = () => (
  <Wrapper title="Photos | Sal Olivares">
    <PageHeader>Photos</PageHeader>
    <div className="divide-y">
      <PhotoAlbumListItem url="/photos" title="Chicago" country="USA" year="2018" />
      <PhotoAlbumListItem url="/photos" title="Tokyo &amp; Kyoto" country="Japan" year="2018" />
      <PhotoAlbumListItem url="/photos" title="Tokyo" country="Japan" year="2017" />
      <PhotoAlbumListItem url="/photos" title="Chikis" year="2017" />
    </div>
  </Wrapper>
);

export default PhotosPage;
