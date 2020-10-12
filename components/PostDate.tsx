import { parseISO, format } from 'date-fns';

interface PostDateProps {
  dateString: string;
}

export default function PostDate({ dateString }: PostDateProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
