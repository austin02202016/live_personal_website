'use client'

import Link from 'next/link'
import { useState } from 'react'

export function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center h-18">
          {/* Logo/Home Link */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200"
          >
            Home
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-800 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-1">
            {['Short-Form', 'Coding Projects', 'My Life'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2">
            {['Short-Form', 'Coding Projects', 'My Life'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="block text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
