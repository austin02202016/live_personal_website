'use client'

import Link from 'next/link'

export function NavbarComponent() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200">
            Home
          </Link>
          <div className="flex space-x-8">
            <Link href="/short-form" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
              Short-Form
            </Link>
            <Link href="/podcasts" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
              Podcasts
            </Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}