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
  const [activeSection, setActiveSection] = useState("Home");

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // close mobile menu
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      navItems.forEach((item) => {
        const section = document.getElementById(item.href.replace("#", ""));
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(item.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-50 transition-all duration-500 ease-in-out left-0 right-0 rounded-xl",
        isScrolled
          ? "w-[95%] mt-3 py-2 mx-auto bg-background/80 backdrop-blur-md shadow-md"
          : "w-full py-4 bg-background/80"
      )}
    >
      <div className="flex items-center justify-between transition-all duration-500 mx-4">
        {/* Logo */}
        <a
          className={cn(
            "flex items-center font-bold text-primary transition-all duration-500",
            isScrolled ? "text-lg" : "text-2xl"
          )}
          href="/"
        >
          <span className="text-glow text-foreground">Omar</span> Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleScrollTo(item.href.replace("#", ""))}
                  className={cn(
                    "rounded-full border transition-all duration-500 font-medium",
                    "px-4 py-2",
                    "border-transparent text-foreground/80 hover:border-primary hover:text-primary",
                    activeSection === item.name &&
                      "border-primary text-primary font-semibold bg-primary/10"
                  )}
                >
                  {item.name}
                </button>
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
          <ThemeToggle />
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
          "transition-all duration-500 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col space-y-6 text-xl items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleScrollTo(item.href.replace("#", ""))}
                className={cn(
                  "rounded-full border transition-all duration-500 font-medium",
                  "px-4 py-2",
                  "border-transparent text-foreground/80 hover:border-primary hover:text-primary",
                  activeSection === item.name &&
                    "border-primary text-primary font-semibold bg-primary/10"
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
