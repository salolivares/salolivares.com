import PHOTO_ALBUMS from '../data/photo-albums';

export type PhotoAlbum = {
  url: string;
  title: string;
  country?: string;
  year: string;
  images: AlbumImage[];
};
type AlbumImage = { id: string; name: string; camera: string; description?: string };
type Photo = AlbumImage & { albumUrl: string; albumTitle: string };

export const getAlbum = (albumUrl: string): PhotoAlbum | undefined =>
  PHOTO_ALBUMS.find((album) => album.url === albumUrl);

export const getAllAlbums = (): PhotoAlbum[] => PHOTO_ALBUMS;

export const getAllPhotos = (): Photo[] => {
  const photos: Photo[] = [];

  PHOTO_ALBUMS.forEach((album) => {
    album.images.forEach((image) => {
      photos.push({ ...image, albumUrl: album.url, albumTitle: album.title });
    });
  });

  return photos;
};

export const getPhoto = (albumUrl: string, photoId: string): Photo => {
  const album = getAlbum(albumUrl);
  if (!album) throw new Error('Album not found');

  const photo = album.images.find((image) => image.id === photoId);
  if (!photo) throw new Error('Photo not found');

  return { ...photo, albumUrl: album.url, albumTitle: album.title };
};
