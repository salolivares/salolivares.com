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
    <button type="button" className={`${className}`} onClick={switchTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};
