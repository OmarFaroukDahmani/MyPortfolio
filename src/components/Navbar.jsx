import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="/"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Omar</span> Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center md:hidden space-x-3">
          {/* Theme Toggle on mobile */}
          <ThemeToggle />

          {/* Burger Menu */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col space-y-8 text-xl items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
