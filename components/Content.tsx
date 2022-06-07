import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}

export function Content({ children, className = '' }: Props) {
  return <div className={`prose dark:prose-dark max-w-none ${className}`}>{children}</div>
}
