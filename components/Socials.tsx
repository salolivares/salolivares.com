import { GitHub, Twitter } from 'react-feather';

export const Socials = () => (
  <div className="flex space-x-3">
    <a href="https://github.com/salolivares" className="hover:text-gray-700 dark:hover:text-gray-400">
      <GitHub aria-label="Github" />
    </a>
    <a href="https://twitter.com/0x102c" className="hover:text-gray-700 dark:hover:text-gray-400">
      <Twitter aria-label="Twitter" />
    </a>
  </div>
);
