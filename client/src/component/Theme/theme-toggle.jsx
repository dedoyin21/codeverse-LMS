import { useTheme } from "../lib/theme-context"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="p-2 rounded-md bg-gray-200 dark:bg-gray-800">
      {theme === "light" ? "🌙" : "☀️"}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

