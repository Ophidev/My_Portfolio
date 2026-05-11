import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#notes", label: "Notes" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between rounded-2xl transition-all ${
          scrolled ? "glass shadow-[var(--shadow-elegant)] py-3 px-4" : ""
        }`}
      >
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient">Aditya</span>
          <span className="text-foreground">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:bhattadi60@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-shadow"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
