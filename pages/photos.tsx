import { PHOTO_ALBUMS } from '../api/albums';
import Wrapper from '../components/layout/Wrapper';
import PageHeader from '../components/PageHeader';
import PhotoAlbumListItem from '../components/PhotoAlbumListItem';

const PhotosPage = () => (
  <Wrapper title="Photos | Sal Olivares">
    <PageHeader>Photos</PageHeader>
    <div className="divide-y">
      {PHOTO_ALBUMS.map((album) => (
        <PhotoAlbumListItem key={album.url} {...album} url={`/photos/${album.url}`} />
      ))}
    </div>
  </Wrapper>
);

export default PhotosPage;
