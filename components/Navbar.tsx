"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-2" : "py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-lg shadow-primary/30">
            <span className="material-icons text-white">bolt</span>
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-slate-900 dark:text-white uppercase">
            iTech<span className="text-accent">Poliban</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="text-sm font-medium hover:text-accent transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="text-sm font-medium hover:text-accent transition-colors"
            href="#visi-misi"
          >
            Visi Misi
          </a>
          <a
            className="text-sm font-medium hover:text-accent transition-colors"
            href="#divisi"
          >
            Divisi
          </a>
          <a
            className="text-sm font-medium hover:text-accent transition-colors"
            href="#prestasi"
          >
            Prestasi
          </a>
          <a
            className="text-sm font-medium hover:text-accent transition-colors"
            href="#struktur"
          >
            Struktur
          </a>
          <a
            className="px-5 py-2 bg-primary hover:bg-primary/80 text-white rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20"
            href="#kontak"
          >
            Hubungi Kami
          </a>
        </div>
        <button type="button" className="md:hidden text-white">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </nav>
  );
}
