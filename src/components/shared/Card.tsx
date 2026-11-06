import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function Card({ className, children }: Props) {
  const classes = [
    'bg-container border border-outline-variant rounded-md p-5 flex flex-col',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <article className={classes}>{children}</article>
}
