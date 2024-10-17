'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export function LandingPageComponent() {
  const activities = [
    "building a community at UIUC",
    "consulting for pre-seed startup Innovo Markets",
    "running a marathon this Saturday",
    "learning new web technologies",
    "networking with industry professionals",
    "working on personal coding projects"
  ]

  const [currentActivity, setCurrentActivity] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length)
    }, 3000) // Change activity every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col bg-white text-black ${inter.className}`}>
      <nav className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-200">
        <Link href="/" className="text-xl font-semibold">Austin</Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-gray-600">About</Link>
          <Link href="/projects" className="hover:text-gray-600">Projects</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
        </div>
      </nav>
      
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center tracking-tight">
          Hey, I'm Austin
        </h1>
        <div className="text-xl md:text-2xl mb-12 text-center">
          <span>Currently I'm </span>
          <span className="font-bold text-2xl md:text-3xl text-primary transition-all duration-300 ease-in-out">
            {activities[currentActivity]}
          </span>
        </div>
        <div className="space-y-4 flex flex-col items-center mb-12">
          <Button variant="outline" className="bg-black text-white hover:bg-gray-800 text-lg py-2 px-6 rounded-full">
            Start the Conversation
          </Button>
          <Button variant="outline" className="bg-white text-black border-black hover:bg-gray-100 text-lg py-2 px-6 rounded-full">
            Check out my work
          </Button>
        </div>

        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-center">What I'm up to these days</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Promoting college entrepreneurship through <a href="https://open.spotify.com/show/6s4SW9OcCX16BCgEXStCJo" className="text-gray-400 hover:underline">Proof of Concept</a>, my podcast and media company</li>
              <li>Consultant for <a href="https://www.innovomarkets.com/" className="text-gray-400 hover:underline">Innovo Markets</a></li>
              <li>Caddying at the <a href="https://www.top100golfcourses.com/golf-course/old-elm" className="text-gray-400 hover:underline">Old Elm Club</a> in Lake Forest</li>
              <li>Member of <a href="https://www.pct-illinois.com/" className="text-gray-400 hover:underline">Phi Chi Theta Professional Business Fraternity</a></li>
              <li>Growing and fostering UIUC's entrepreneurial community through biweekly hangouts</li>
              <li>Finance Major, Computer Science Minor w/ Concentration in Commercial Real Estate @ UIUC</li>
            </ul>
          </div>

          <div className="w-px bg-gray-300 hidden md:block"></div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-center">Past-seasons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Co-Led Outreach Campaign for <a href="https://www.linkedin.com/company/illinois-sports-business-conference/mycompany/" className="text-gray-400 hover:underline">Illinois Sports Business Conference</a></li>
              <li>Knocked 1000s of doors as a Sales Representative for <a href="https://blueravensolar.com/illinois/chicago/" className="text-gray-400 hover:underline">Blue Raven Solar</a></li>
              <li>Co-Founded <a href="https://www.linkedin.com/company/reach-fam/mycompany/" className="text-gray-400 hover:underline">REACH</a> (Nationwide Social Media Club) @ UIUC</li>
              <li>Co-Founder of Defined Trajectory Personal Training (We learned a lot of what-not-to-do)</li>
              <li>Co-Founder of Set Sail Solutions SMMA (Again learned a lot of what-not-to-do)</li>
              <li>Frozen Department Shelve-Stocker for 3 Years at Marianos</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}