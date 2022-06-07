/* eslint-disable react/require-default-props */
import { Moon, Sun } from 'react-feather'

interface Props {
  switchTheme: () => void
  theme: string | undefined
  className?: string
}

export function ThemeToggleButton({ switchTheme, theme: passedInTheme, className = '' }: Props) {
  let theme = passedInTheme
  if (passedInTheme == null || passedInTheme === 'null') theme = 'light'

  return (
    <button
      type="button"
      aria-label="Dark mode toggle"
      className={`${className} hover:text-gray-700 dark:hover:text-gray-400`}
      onClick={switchTheme}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  )
}
