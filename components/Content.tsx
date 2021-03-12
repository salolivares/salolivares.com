/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';

type ContentProps = {
  children?: ReactNode;
  className?: string;
};

const Content = ({ children, className = '' }: ContentProps) => (
  <div className={`prose dark:prose-dark max-w-none ${className}`}>{children}</div>
);

export default Content;
