'use client'

import Link from 'next/link'

export function NavbarComponent() {
  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center h-18">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200">
            Home
          </Link>
          <div className="flex space-x-1">
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
      </div>
    </nav>
  )
}