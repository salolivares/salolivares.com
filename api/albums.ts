type PhotoAlbum = { url: string; title: string; country?: string; year: string; images: AlbumImage[] };
type AlbumImage = { name: string };

export const PHOTO_ALBUMS: PhotoAlbum[] = [
  {
    url: '2019-chicago',
    title: 'Chicago',
    country: 'USA',
    year: '2019',
    images: [{ name: 'airbnb' }, { name: 'downtown' }, { name: 'grant_park' }],
  },
  {
    url: '2018-japan',
    title: 'Tokyo & Kyoto',
    country: 'Japan',
    year: '2018',
    images: [
      { name: 'tokyo_construction' },
      { name: 'skytree_view' },
      { name: 'shinjuku' },
      { name: 'nakagin_capsule_tower' },
      { name: 'imperial_palace' },
      { name: 'odaiba' },
      { name: 'castle' },
      { name: 'edwin' },
      { name: 'gion_street' },
      { name: 'kyoto_streets' },
      { name: 'kyoto_tracks' },
      { name: 'monkey_park' },
      { name: 'pika_hat' },
    ],
  },
  { url: '2017-japan', title: 'Tokyo', country: 'Japan', year: '2017', images: [] },
  { url: '2017-chikis', title: 'Chikis', year: '2017', images: [] },
];

export const getAlbum = (albumUrl: string) => {
  return PHOTO_ALBUMS.find((album) => album.url === albumUrl);
};

export const getAllAlbums = () => PHOTO_ALBUMS;
