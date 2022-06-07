import PHOTO_ALBUMS from '../data/photo-albums'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import PhotoAlbumListItem from '../components/PhotoAlbumListItem'

function PhotosPage() {
  return (
    <Container title="Photos | Sal Olivares">
      <div className="max-w-2xl mx-auto mb-16 w-full">
        <PageHeader>Photos</PageHeader>
        <div className="divide-y dark:divide-opacity-50 dark:divide-gray-400">
          {PHOTO_ALBUMS.map((album) => (
            <PhotoAlbumListItem key={album.url} {...album} url={`/photos/${album.url}`} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default PhotosPage
