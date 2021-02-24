/* eslint-disable @typescript-eslint/require-await */
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { getAlbum, getAllAlbums } from '../../api/albums';
import Container from '../../components/Container';
import RemoteImage from '../../components/RemoteImage';

// https://github.com/vercel/next.js/discussions/17600
export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const albumUrl = params?.album as string;

  // album url is guaranteed to exist since getStaticPaths guarantees
  // only valid urls are accepted
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const album = getAlbum(albumUrl)!;

  return {
    props: album,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const albums = getAllAlbums();
  const paths = albums.map((album) => ({ params: { album: album.url } }));

  return {
    paths,
    fallback: false,
  };
};

const Album = ({ title, year, url: albumUrl, images }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container title={`${title} ${year} | Sal Olivares`} photoMode>
    <div className="flex flex-col items-center">
      {images.length !== 0 ? (
        images.map((image) => (
          <div key={image.id} className="min-h-screen flex items-center">
            <Link href={`${albumUrl}/${image.id}`}>
              <a className="max-w-screen-xl">
                <RemoteImage url={`${albumUrl}/${image.id}`} />
              </a>
            </Link>
          </div>
        ))
      ) : (
        <div className="h-64 max-w-screen-xl flex items-center">
          <div className="">This album is empty :(</div>
        </div>
      )}
    </div>
  </Container>
);

export default Album;
