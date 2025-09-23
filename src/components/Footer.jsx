import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 pt-8 flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground text-center">
        &copy; {currentYear} Made with ❤️ Omar Dahmani. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
