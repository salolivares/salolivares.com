import { parseISO, format } from 'date-fns'

interface Props {
  dateString: string
  className?: string
}

export function PostDate({ dateString, className }: Props) {
  const date = parseISO(dateString)
  return (
    <time className={className} dateTime={dateString}>
      {format(date, 'LLLL yyyy')}
    </time>
  )
}
