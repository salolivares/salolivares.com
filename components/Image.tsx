/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
interface ImageProps {
  src: string;
  alt?: string;
}

const Image: React.FunctionComponent<ImageProps> = ({ src, alt = '' }) => (
  <picture>
    <source srcSet={require(`../images${src}?webp`)} type="image/webp" />
    <source srcSet={require(`../images${src}`)} type="image/jpeg" />
    <img alt={alt} loading="lazy" src={require(`../images${src}`)} />
  </picture>
);

export default Image;
