/* eslint-disable react/require-default-props */
import Link from 'next/link';

interface PhotoAlbumListItemProps {
  url: string;
  title: string;
  country?: string;
  year: string;
}

const PhotoAlbumListItem = ({ url, title, country, year }: PhotoAlbumListItemProps) => (
  <Link href={url}>
    <a className="no-underline flex flex-col items-center justify-center h-32 py-2 group transition-colors duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-25">
      <p className="mt-1 text-lg leading-tight font-semibold no-underline">{title}</p>
      <p className="uppercase tracking-wider text-sm">
        {country ? `${country} • ${year}` : `${year}`}
      </p>
    </a>
  </Link>
);

export default PhotoAlbumListItem;
