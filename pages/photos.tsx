import { PHOTO_ALBUMS } from '../api/albums';
import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import PhotoAlbumListItem from '../components/PhotoAlbumListItem';

const PhotosPage = () => (
  <Container title="Photos | Sal Olivares">
    <PageHeader>Photos</PageHeader>
    <div className="divide-y dark:divide-opacity-50 dark:divide-gray-400">
      {PHOTO_ALBUMS.map((album) => (
        <PhotoAlbumListItem key={album.url} {...album} url={`/photos/${album.url}`} />
      ))}
    </div>
  </Container>
);

export default PhotosPage;
