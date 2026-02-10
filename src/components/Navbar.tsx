import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-kcw.png";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Cara Bergabung", href: "#cara-bergabung" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#beranda" className="flex items-center gap-3" onClick={() => handleClick("#beranda")}>
          <img src={logo} alt="Logo KSP Rakyat Jaya Sentosa" className="h-12 w-12 rounded-lg object-cover" />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-primary leading-tight">KSP RAKYAT</p>
            <p className="text-xs font-semibold text-secondary leading-tight">JAYA SENTOSA</p>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button variant="cta" size="default" onClick={() => handleClick("#kontak")}>
            Daftar Sekarang
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-card/95 backdrop-blur-md ${
          isOpen ? "max-h-96 border-b border-border" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left text-sm font-medium text-foreground/80 hover:text-secondary py-2 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button variant="cta" size="default" onClick={() => handleClick("#kontak")} className="mt-2">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </nav>
  );
}
