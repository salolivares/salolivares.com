/* eslint-disable @typescript-eslint/require-await */
import { GetStaticPaths, GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import { getAlbum, getAllAlbums } from '../../api/albums';
import PhotoWrapper from '../../components/layout/PhotoWrapper';
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

const Album = ({ title, year, url, images }: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <PhotoWrapper title={`${title} ${year} | Sal Olivares`}>
    {images.length !== 0 ? (
      images.map((image) => (
        <div className="min-h-screen max-w-screen-xl flex items-center">
          <RemoteImage url={`${url}/${image.name}`} />
        </div>
      ))
    ) : (
      <div className="h-64 max-w-screen-xl flex items-center">
        <div className="">This album is empty :(</div>
      </div>
    )}
  </PhotoWrapper>
);

export default Album;
