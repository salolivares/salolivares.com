import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function PageHeader({ children }: Props) {
  return <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">{children}</h1>
}
