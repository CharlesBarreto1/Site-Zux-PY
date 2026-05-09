import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import zuxLogo from "@/assets/zux-logo.png";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Diferenciales", href: "#diferenciales" },
  { label: "Planes", href: "#planes" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Empresas", href: "#empresas" },
  { label: "Cobertura", href: "#cobertura" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-border/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#hero" className="flex items-center">
          <img src={zuxLogo} alt="Zux" className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="hero" size="lg" asChild>
            <a href="https://wa.me/595984056260" target="_blank" rel="noopener noreferrer">
              Lo quiero
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass-card mt-2 mx-4 rounded-xl p-6 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-foreground text-base"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="mt-2" asChild>
              <a href="https://wa.me/595984056260" target="_blank" rel="noopener noreferrer">
                Lo quiero
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
