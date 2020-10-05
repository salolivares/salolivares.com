/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';

type TextSectionProps = {
  children?: ReactNode;
};

const TextSection = ({ children }: TextSectionProps) => <div className="space-y-3">{children}</div>;

export default TextSection;
