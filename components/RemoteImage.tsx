/* eslint-disable @next/next/no-img-element */
interface Props {
  url: string
  alt?: string
  className?: string
}

const HOST = 'https://photos.salolivares.com'

export function RemoteImage({ url, alt = '', className = '' }: Props) {
  return (
    <picture className={className}>
      <source
        srcSet={`${HOST}/${url}_1280.webp 1280w, ${HOST}/${url}_2880.webp 2880w`}
        type="image/webp"
      />
      <source
        srcSet={`${HOST}/${url}_1280.jpg 1280w, ${HOST}/${url}_2880.jpg 2880w`}
        type="image/jpeg"
      />
      <img alt={alt} loading="lazy" src={`${HOST}/${url}_1280.jpg`} />
    </picture>
  )
}
