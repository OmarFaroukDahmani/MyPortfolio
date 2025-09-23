"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const buttonRef = useRef(null);

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

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    buttonRef.current.blur();
    setIsSpinning(true);

    await document.startViewTransition(() => {
      flushSync(() => {
        const dark = document.documentElement.classList.toggle("dark");
        setIsDarkMode(dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    setTimeout(() => {
      setIsSpinning(false);
    }, 700);
  };

  if (!mounted) {
    return (
      <button
        ref={buttonRef}
        className={cn(
          "flex items-center justify-center h-10 w-10 rounded-full transition-colors duration-300",
          "border-2 border-border bg-background/80 backdrop-blur-sm text-foreground shadow-md dark:shadow-white/5 hover:bg-accent hover:text-accent-foreground hover:scale-110 active:scale-95",
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
      ref={buttonRef}
      onClick={changeTheme}
      className={cn(
        "flex items-center justify-center h-10 w-10 rounded-full transition-colors duration-300",
        "border-2 border-border bg-background/80 backdrop-blur-sm text-foreground shadow-md dark:shadow-white/5 hover:bg-accent hover:text-accent-foreground hover:scale-110 active:scale-95",
        className
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative z-10">
        {isDarkMode ? (
          <SunDim
            className={cn(
              "h-6 w-6 text-yellow-300 transition-transform duration-300 hover:rotate-12 drop-shadow-sm",
              isSpinning && "theme-toggle-spin"
            )}
          />
        ) : (
          <Moon
            className={cn(
              "h-6 w-6 text-blue-900 transition-transform duration-300 hover:rotate-12 drop-shadow-sm",
              isSpinning && "theme-toggle-spin"
            )}
          />
        )}
      </div>
    </button>
  );
};
