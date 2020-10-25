/* eslint-disable @typescript-eslint/require-await */
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { getAlbum, getAllAlbums } from '../../api/albums';
import Wrapper from '../../components/layout/Wrapper';
import RemoteImage from '../../components/RemoteImage';

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const albumUrl = params?.album as string;

  return {
    props: getAlbum(albumUrl),
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
  <Wrapper title={`${title} ${year} | Sal Olivares`} photoMode>
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
  </Wrapper>
);

export default Album;
