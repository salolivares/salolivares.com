/* eslint-disable react/require-default-props */
import { Moon, Sun } from 'react-feather';

interface ThemeToggleButtonProps {
  switchTheme: () => void;
  theme: string | undefined;
  className?: string;
}

export const ThemeToggleButton = ({ switchTheme, theme: passedInTheme, className = '' }: ThemeToggleButtonProps) => {
  let theme = passedInTheme;
  if (passedInTheme == null || passedInTheme === 'null') theme = 'light';

  return (
    <button type="button" className={`${className} hover:text-gray-700 dark:hover:text-gray-400`} onClick={switchTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};
