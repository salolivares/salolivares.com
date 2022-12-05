import Link from 'next/link'

interface Props {
  url: string
  title: string
  country?: string
  year: string
}

export function PhotoAlbumListItem({ url, title, country, year }: Props) {
  return (
    <Link
      href={url}
      className="no-underline flex flex-col items-center justify-center h-32 py-2 group transition-colors duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-25"
    >
      <p className="mt-1 text-lg leading-tight font-semibold no-underline">{title}</p>
      <p className="uppercase tracking-wider text-sm">
        {country ? `${country} • ${year}` : `${year}`}
      </p>
    </Link>
  )
}
