"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Partners", href: "/partners" },

  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative  flex items-center justify-between py-4 px-4 mx-4 bg-transparent">
      {/* Logo */}
      {pathname === "/event" ? null : (
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            priority
            className="w-9 h-9 md:w-11 md:h-11"
          />
        </Link>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden  lg:block absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-16 text-base">
          {navLinks.map((link) => (
            <li key={link.href} className="whitespace-nowrap">
              <Link
                href={link.href}
                className={`${
                  pathname === link.href ? "text-primary" : "text-black"
                } hover:text-primary transition font-medium`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle Button */}
      {!menuOpen && (
        <button className="lg:hidden z-50" onClick={() => setMenuOpen(true)}>
          <Image src="/menu toggle.svg" alt="Menu" width={28} height={28} />
        </button>
      )}

      {/* Mobile Navigation Overlay */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-full h-2/3 text-center bg-[#FFF0E8] bg-opacity-95 flex flex-col items-center justify-center z-40 shadow-lg transition">
          <button
            className="absolute top-6 right-8 text-black font-light text-5xl"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          <ul className="space-y-8 text-black text-lg mt-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
