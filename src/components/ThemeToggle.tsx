import { Menu } from "@headlessui/react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    () => {
      const storedTheme = window.localStorage.getItem("theme");
      return storedTheme
        ? (storedTheme as "theme-light" | "dark" | "system")
        : "theme-light";
    },
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
    <div>
      <Menu as="div" className="relative">
        <Menu.Button>
          <div role="button" tabIndex={0} className="flex items-center px-2">
            <span className="sr-only">テーマを切り替える</span>
            {theme === "theme-light" ? (
              <Sun size={20} strokeWidth={1.5} />
            ) : (
              <Moon size={20} strokeWidth={1.5} />
            )}
          </div>
        </Menu.Button>
        <Menu.Items className="bg-background border-border absolute right-0 mt-2 w-32 rounded-lg border px-1.5 py-2 text-sm [&>li]:cursor-pointer">
          <Menu.Item>
            <li
              onClick={() => setThemeState("theme-light")}
              className="gap-2 rounded p-1 px-2 hover:bg-muted"
            >
              Light
            </li>
          </Menu.Item>
          <Menu.Item>
            <li
              onClick={() => setThemeState("dark")}
              className="gap-2 rounded p-1 px-2 hover:bg-muted"
            >
              Dark
            </li>
          </Menu.Item>
          <Menu.Item>
            <li
              onClick={() => setThemeState("system")}
              className="gap-2 rounded p-1 px-2 hover:bg-muted"
            >
              System
            </li>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}
