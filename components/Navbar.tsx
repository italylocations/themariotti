"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/italian-lifestyle-photography", label: "Portfolio" },
  { href: "/about-photographer", label: "About" },
  { href: "/contact-photographer", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0a0a0a]/95 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-[28px] tracking-[4px] text-[#e8e6e1] leading-none"
            onClick={() => setMenuOpen(false)}
          >
            MM
          </Link>

          {/* Desktop nav — center */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[12px] uppercase tracking-wider text-white/50 hover:text-[#e8e6e1] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language switch — desktop only */}
            <span className="hidden md:block font-sans text-[11px] uppercase tracking-wider text-white/40 cursor-pointer select-none hover:text-white/60 transition-colors duration-200">
              EN | IT
            </span>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden text-[#e8e6e1] p-1"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-sans text-[13px] uppercase tracking-[5px] text-[#e8e6e1] hover:text-white/60 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <span className="font-sans text-[11px] uppercase tracking-wider text-white/40 cursor-pointer mt-4 select-none">
          EN | IT
        </span>
      </div>
    </>
  );
}
