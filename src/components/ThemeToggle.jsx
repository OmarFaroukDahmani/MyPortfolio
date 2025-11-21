"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  const changeTheme = () => {
    const dark = document.documentElement.classList.toggle("dark");
    setIsDarkMode(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <button
        className={cn(
          "flex items-center justify-center h-10 w-10 rounded-full",
          "border-2 border-border bg-background/80 backdrop-blur-sm text-foreground shadow-md dark:shadow-white/5 hover:bg-accent hover:text-accent-foreground",
          className
        )}
        aria-label="Switch theme"
        suppressHydrationWarning
      >
        <Moon className="h-6 w-6 text-blue-900" />
      </button>
    );
  }

  return (
    <button
      onClick={changeTheme}
      className={cn(
        "flex items-center justify-center h-10 w-10 rounded-full",
        "border-2 border-border bg-background/80 backdrop-blur-sm text-foreground shadow-md dark:shadow-white/5 hover:bg-accent hover:text-accent-foreground",
        className
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative z-10">
        {isDarkMode ? (
          <SunDim className="h-6 w-6 text-yellow-300 drop-shadow-sm" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900 drop-shadow-sm" />
        )}
      </div>
    </button>
  );
};
