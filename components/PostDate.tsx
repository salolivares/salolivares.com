import { parseISO, format } from 'date-fns';

interface PostDateProps {
  dateString: string;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

export default function PostDate({ dateString, className }: PostDateProps) {
  const date = parseISO(dateString);
  return (
    <time className={className} dateTime={dateString}>
      {format(date, 'LLLL yyyy')}
    </time>
  );
}
