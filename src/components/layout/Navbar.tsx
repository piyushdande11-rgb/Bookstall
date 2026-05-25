"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Articles", href: "/articles" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         {/* Logo */}
          <div className="flex-shrink-0">
            {/* Added flex, items-center, and gap-3 to align the logo and text */}
            <Link href="/" className="flex items-center gap-3">
              
              {/* Add the circular Image component here */}
              <Image 
                src="/images/logo.webp" /* Update if your image name is different */
                alt="Nirbhay Bookstall Logo" 
                width={40} 
                height={40} 
                className="rounded-full object-cover" 
              />
              
              {/* Wrapped your existing text and custom classes in a span */}
              <span className="text-2xl font-bold text-lbc-blue tracking-tight">
                Nirbhay Bookstall
              </span>
              
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-lbc-blue font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-lbc-blue text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-colors shadow-sm"
            >
              Join the Movement
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-lbc-blue focus:outline-none"
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
          </div>
        </div>
      )}
    </header>
  );
}