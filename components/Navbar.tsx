"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-serif text-[22px] tracking-[4px] text-[#e8e6e1]">
          MM
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-[12px] font-medium tracking-[3px] uppercase text-white/40 hover:text-white/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Language switch */}
        <div className="hidden md:flex items-center gap-2 font-sans text-[13px]">
          <span className="text-white/60">EN</span>
          <span className="text-white/20">|</span>
          <span className="text-white/30 hover:text-white/60 cursor-pointer transition-colors">IT</span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-5 right-6 text-white/50"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif italic text-3xl text-[#e8e6e1]"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 font-sans text-[14px] mt-8">
            <span className="text-white/60">EN</span>
            <span className="text-white/20">|</span>
            <span className="text-white/30">IT</span>
          </div>
        </div>
      )}
    </nav>
  );
}
