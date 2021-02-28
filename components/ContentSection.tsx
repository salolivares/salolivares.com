/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';

type ContentSectionProps = {
  children?: ReactNode;
  className?: string;
};

const ContentSection = ({ children, className = '' }: ContentSectionProps) => (
  <div className={`space-y-5 ${className}`}>{children}</div>
);

export default ContentSection;
