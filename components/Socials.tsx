import { GitHub, Twitter } from 'react-feather';

export const Socials = () => (
  <div className="flex space-x-2">
    <a href="https://github.com/salolivares" className="hover:text-gray-700 dark:hover:text-gray-400">
      <GitHub />
    </a>
    <a href="https://twitter.com/0x102c" className="hover:text-gray-700 dark:hover:text-gray-400">
      <Twitter />
    </a>
  </div>
);
