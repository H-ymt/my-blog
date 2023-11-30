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
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => setThemeState("theme-light")}
        className="text-black dark:text-white"
      >
        Light
      </button>
      <button
        type="button"
        onClick={() => setThemeState("dark")}
        className="text-black dark:text-white"
      >
        Dark
      </button>
    </div>
  );
}
