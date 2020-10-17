import Link from 'next/link';

const PhotoAlbumListItem = () => (
  <div className="sm:flex items-center py-2">
    <div className="sm:flex-shrink-0">
      <img
        className="rounded-lg sm:w-64"
        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
        width="448"
        height="299"
        alt="Woman paying for a purchase"
      />
    </div>
    <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow flex flex-col items-center">
      <Link href="/photos">
        <a className="mt-1 text-lg leading-tight font-semibold no-underline hover:underline text-gray-900">
          Tokyo &amp; Kyoto
        </a>
      </Link>
      <p className="uppercase tracking-wider text-sm">Japan &bull; 2017</p>
    </div>
  </div>
);

export default PhotoAlbumListItem;
