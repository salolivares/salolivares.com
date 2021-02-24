/* eslint-disable @typescript-eslint/require-await */
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { getAllPhotos, getPhoto } from '../../../api/albums';
import Wrapper from '../../../components/Wrapper';
import RemoteImage from '../../../components/RemoteImage';

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const albumUrl = params?.album as string;
  const photoId = params?.photo as string;

  return {
    props: getPhoto(albumUrl, photoId),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const photos = getAllPhotos();
  const paths = photos.map((photo) => ({ params: { album: photo.albumUrl, photo: photo.id } }));

  return {
    paths,
    fallback: false,
  };
};

const Photo = ({ id, name, camera, albumUrl, albumTitle }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Wrapper title={`${name} - ${albumTitle} | Sal Olivares`} photoMode>
    <div className="min-h-screen flex items-center justify-center">
      <RemoteImage className="max-w-screen-xl" url={`${albumUrl}/${id}`} />
    </div>
    <div className="flex justify-between max-w-screen-sm mx-auto my-24">
      <div>
        <h1 className="font-semibold">{name}</h1>
        <div>Ⓒ Sal Olivares. All Rights Reserved.</div>
      </div>
      <div className="text-right">
        Camera: <span className="font-semibold">{camera}</span>
      </div>
    </div>
  </Wrapper>
);

export default Photo;
