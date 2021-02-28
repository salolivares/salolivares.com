import { ReactNode } from 'react';

interface PageHeaderProps {
  children: ReactNode;
}

const PageHeader = ({ children }: PageHeaderProps) => (
  <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">{children}</h1>
);

export default PageHeader;
