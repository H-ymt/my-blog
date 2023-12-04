import { Moon, Sun } from "lucide-react";
import * as React from "react";

export default function ThemeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const handleClick = () => {
    setThemeState(theme === "theme-light" ? "dark" : "theme-light");
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={handleClick}
        className="text-black dark:text-white"
      >
        {theme === "theme-light" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
