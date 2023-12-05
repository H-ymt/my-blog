import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light",
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    window.localStorage.setItem("theme", theme); // ローカルストレージにThemeを保存
  }, [theme]);

  return (
    <div className="flex gap-2">
      <div className="dropdown dropdown-end">
        <div role="button" tabIndex={0} className="btn btn-ghost m-1 px-2 py-1">
          {theme === "theme-light" ? <Sun /> : <Moon />}
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] flex w-36 gap-2 rounded-lg border border-muted/20 px-4 py-3 text-base shadow [&>li]:cursor-pointer"
        >
          <li onClick={() => setThemeState("theme-light")} className="gap-2">
            Light
          </li>
          <li onClick={() => setThemeState("dark")} className="gap-2">
            Dark
          </li>
          <li onClick={() => setThemeState("system")} className="gap-2">
            System
          </li>
        </ul>
      </div>
    </div>
  );
}
