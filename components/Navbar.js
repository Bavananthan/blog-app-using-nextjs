'use client'; 

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/">My Portfolio</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
         
          <Link href="/projects" className=" text-white hover:text-gray-400">Projects</Link>
          <Link href="/skills" className="text-white hover:text-gray-400">Skills</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mt-4 ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <div className="space-y-4">
          <Link
            href="/"
            className="block text-white hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-gray-300"
          >
            About
          </Link>
          
          <Link href="/projects" className="block text-white hover:text-gray-300">Projects</Link>
          <Link href="/skills" className="block text-white hover:text-gray-300">Skills</Link>
          <Link
            href="/contact"
            className="block text-white hover:text-gray-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
