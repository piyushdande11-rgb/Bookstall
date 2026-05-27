"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Nirbhay Bookstall", href: "/nirbhay-bookstall" },
  { name: "Articles", href: "/articles" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { icon: "ti-brand-youtube",   label: "YouTube",   href: "#" },
  { icon: "ti-brand-instagram", label: "Instagram", href: "#" },
  { icon: "ti-brand-facebook",  label: "Facebook",  href: "#" },
  { icon: "ti-brand-medium",    label: "Medium",    href: "#" },
  { icon: "ti-brand-x",         label: "X",         href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo — fixed width so centered nav doesn't overlap */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="ABC Foundation Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="text-2xl font-bold text-lbc-blue tracking-tight">
                ABC Foundation
              </span>
            </Link>
          </div>

          {/* Desktop Nav — truly centered in the middle third */}
          <nav className="hidden md:flex items-center gap-8 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-lbc-blue font-medium transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side: Social icons + Mobile hamburger */}
          <div className="flex-1 flex justify-end items-center gap-1">

            {/* Social icons — desktop only */}
            <div className="hidden md:flex items-center gap-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-lbc-blue hover:bg-slate-100 transition-colors"
                >
                  <i className={`ti ${s.icon} text-[20px]`} />
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-slate-600 hover:text-lbc-blue focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-lbc-blue hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}

            {/* Social icons row in mobile menu */}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2 px-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-lbc-blue hover:bg-slate-100 transition-colors"
                >
                  <i className={`ti ${s.icon} text-[20px]`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}