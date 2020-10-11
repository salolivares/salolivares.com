import { ReactNode } from 'react';

interface PageHeaderProps {
  children: ReactNode;
}

const PageHeader = ({ children }: PageHeaderProps) => <h1 className="text-3xl font-medium mb-8">{children}</h1>;

export default PageHeader;
