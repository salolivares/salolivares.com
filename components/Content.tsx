/* eslint-disable react/require-default-props */
import { ReactNode } from 'react'

type ContentProps = {
  children?: ReactNode
  className?: string
}

export default function Content({ children, className = '' }: ContentProps) {
  return <div className={`prose dark:prose-dark max-w-none ${className}`}>{children}</div>
}
