type PhotoAlbum = { url: string; title: string; country?: string; year: string; images: AlbumImage[] };
type AlbumImage = { id: string; name: string; camera: string; description?: string };
type Photo = AlbumImage & { albumUrl: string; albumTitle: string };

export const PHOTO_ALBUMS: PhotoAlbum[] = [
  {
    url: '2019-chicago',
    title: 'Chicago',
    country: 'USA',
    year: '2019',
    images: [
      { id: 'airbnb', name: 'Airbnb', camera: 'Canon EOS Rebel T3i' },
      { id: 'downtown', name: 'Chicago downtown', camera: 'Canon EOS Rebel T3i' },
      { id: 'grant_park', name: 'Grant park', camera: 'Canon EOS Rebel T3i' },
    ],
  },
  {
    url: '2018-japan',
    title: 'Tokyo & Kyoto',
    country: 'Japan',
    year: '2018',
    images: [
      { id: 'tokyo_construction', name: 'Skyrise construction', camera: 'Canon EOS Rebel T3i' },
      { id: 'skytree_view', name: 'Skytree view', camera: 'Canon EOS Rebel T3i' },
      { id: 'shinjuku', name: 'Busy streets of Shinjuku', camera: 'Canon EOS Rebel T3i' },
      { id: 'nakagin_capsule_tower', name: 'Nakagin capsule tower', camera: 'Canon EOS Rebel T3i' },
      { id: 'imperial_palace', name: 'The imperial palace', camera: 'Canon EOS Rebel T3i' },
      { id: 'odaiba', name: 'The big ball', camera: 'Canon EOS Rebel T3i' },
      { id: 'castle', name: 'Temple', camera: 'Canon EOS Rebel T3i' },
      { id: 'edwin', name: 'Edwin', camera: 'Canon EOS Rebel T3i' },
      { id: 'gion_street', name: 'Streets of Gion', camera: 'Canon EOS Rebel T3i' },
      { id: 'kyoto_streets', name: 'Kyoto streets', camera: 'Canon EOS Rebel T3i' },
      { id: 'kyoto_tracks', name: 'Kyoto tracks', camera: 'Canon EOS Rebel T3i' },
      { id: 'monkey_park', name: 'Kyoto Monkey park', camera: 'Canon EOS Rebel T3i' },
      { id: 'pika_hat', name: 'Pika pika', camera: 'Canon EOS Rebel T3i' },
    ],
  },
  { url: '2017-japan', title: 'Tokyo', country: 'Japan', year: '2017', images: [] },
  { url: '2017-chikis', title: 'Chikis', year: '2017', images: [] },
];

export const getAlbum = (albumUrl: string) => {
  return PHOTO_ALBUMS.find((album) => album.url === albumUrl);
};

export const getAllAlbums = () => PHOTO_ALBUMS;

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
