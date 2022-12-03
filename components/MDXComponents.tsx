import Link from 'next/link'
import Image from 'next/image'

function CustomLink(props: React.HTMLProps<HTMLAnchorElement>) {
  const { href } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return <Link href={href} {...(props as any)}></Link>
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export const MDXComponents = {
  Image,
  a: CustomLink
}
