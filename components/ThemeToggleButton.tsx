import { Moon, Sun } from 'react-feather'

interface Props {
  switchTheme: () => void
  theme: string | undefined
  className?: string
}

export function ThemeToggleButton({ switchTheme, theme, className = '' }: Props) {
  return (
    <button
      type="button"
      aria-label="Dark mode toggle"
      className={`${className} hover:text-gray-700 dark:hover:text-gray-400`}
      onClick={switchTheme}
    >
      {theme === 'light' ? <Sun /> : <Moon />}
    </button>
  )
}
