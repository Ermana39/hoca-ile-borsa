"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function saveTheme(theme: Theme) {
  applyTheme(theme);

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The selected theme still applies for the current page when storage is unavailable.
  }
}

const buttonClassName =
  "h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-200 transition hover:border-blue-500/70 hover:bg-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export default function ThemeToggle() {
  useEffect(() => {
    function handleStorage(event: StorageEvent) {
      if (event.key !== THEME_STORAGE_KEY) return;
      applyTheme(event.newValue === "light" ? "light" : "dark");
    }

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`${buttonClassName} theme-toggle-to-light`}
        onClick={() => saveTheme("light")}
        aria-label="Açık temaya geç"
        title="Açık temaya geç"
      >
        <Sun className="h-4.5 w-4.5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className={`${buttonClassName} theme-toggle-to-dark`}
        onClick={() => saveTheme("dark")}
        aria-label="Koyu temaya geç"
        title="Koyu temaya geç"
      >
        <Moon className="h-4.5 w-4.5" aria-hidden="true" />
      </button>
    </>
  );
}
