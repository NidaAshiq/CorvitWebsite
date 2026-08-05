"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/corvit-logo.png"
            alt="Corvit Logo"
            width={50}
            height={50}
            className="rounded-full"
          />

          <div>
            <h2 className="text-lg sm:text-xl font-bold">
              Corvit Tech
            </h2>
            <p className="text-xs text-red-100">
              Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-semibold">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-yellow-300 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="hover:text-yellow-300 transition duration-300"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact 
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-red-700">
          <ul className="flex flex-col text-center py-4 space-y-4 text-lg font-medium">

            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}