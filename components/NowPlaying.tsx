import { Music, PauseCircle } from 'react-feather'
import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'

export function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher)

  const Icon = data?.isPlaying ? (
    <Music className="text-gray-800 dark:text-gray-200" />
  ) : (
    <PauseCircle className="text-gray-800 dark:text-gray-100" />
  )

  return (
    <div className="flex flex-row-reverse sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full">
      {Icon}
      <div className="inline-flex flex-col sm:flex-row w-full max-w-full truncate">
        {data?.songUrl ? (
          <a
            className="text-gray-800 dark:text-gray-200 font-medium  max-w-max truncate"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p className="text-gray-800 dark:text-gray-200 font-medium">Not Playing</p>
        )}
        <span className="mx-2 text-gray-500 dark:text-gray-300 hidden sm:block">{' – '}</span>
        <p className="text-gray-500 dark:text-gray-300 max-w-max truncate">
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  )
}
