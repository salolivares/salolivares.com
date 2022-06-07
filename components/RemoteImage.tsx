/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
interface RemoteImageProps {
  url: string
  alt?: string
  className?: string
}

const HOST = 'https://photos.salolivares.com'

function RemoteImage({ url, alt = '', className = '' }: RemoteImageProps) {
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

export default RemoteImage
