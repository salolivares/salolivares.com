import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  // eslint-disable-next-line react/require-default-props
  language?: string;
  value: string;
}

const CodeBlock = ({ language, value }: CodeBlockProps) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <SyntaxHighlighter language={language} style={vscDarkPlus}>
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;
