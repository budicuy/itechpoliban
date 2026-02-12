"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";

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
      <div className="max-w-7xl mx-auto px-6 h-13 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
            <Image
              alt="iTech Poliban Logo"
              className="object-contain"
              src="/logo-itech.svg"
              fill
              priority
            />
          </div>  
          <span className="text-xl font-extrabold tracking-tighter text-slate-900 dark:text-white uppercase">
            iTech<span className="text-accent">Poliban</span>
          </span>
        </Link>
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
            href="#history-leaders"
          >
            History
          </a>
          <a
            className="px-5 py-2 bg-primary hover:bg-primary/80 text-white rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20"
            href="#kontak"
          >
            Hubungi Kami
          </a>
        </div>
        <button type="button" className="md:hidden text-white">
          <HiBars3 className="text-2xl" />
        </button>
      </div>
    </nav>
  );
}
