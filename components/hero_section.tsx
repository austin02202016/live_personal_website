'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Instagram, Linkedin, Podcast, Twitter, Github, Mail, Music, Coffee, Book, Briefcase, Rocket, Cpu, Globe, Camera, Pen } from 'lucide-react'

const BackgroundIcon = ({ Icon, gridArea }: { Icon: React.ElementType, gridArea: string }) => (
  <div className="flex items-center justify-center" style={{ gridArea }}>
    <Icon className="w-12 h-12 md:w-16 md:h-16 opacity-5" />
  </div>
)

export default function HeroSection() {
    const activities = [
      "growing UIUC's entrepreneurship community",
      "consulting for pre-seed startup Innovo",
        "training to complete my first dunk",
        "growing Illini Run Club",
      "working on personal coding projects"
    ]

  const [currentActivity, setCurrentActivity] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length)
    }, 3000) // Change activity every 3 seconds
     return () => clearInterval(timer)
  }, [activities.length]) // Added activities.length to the dependency array

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-black px-4 py-8 overflow-hidden">
      {/* Background Icons and Logos */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 pointer-events-none">
        <BackgroundIcon Icon={Code} gridArea="1 / 1" />
        <BackgroundIcon Icon={Instagram} gridArea="1 / 3" />
        <BackgroundIcon Icon={Linkedin} gridArea="1 / 5" />
        <BackgroundIcon Icon={Podcast} gridArea="2 / 2" />
        <BackgroundIcon Icon={Twitter} gridArea="2 / 4" />
        <BackgroundIcon Icon={Github} gridArea="2 / 6" />
        <BackgroundIcon Icon={Mail} gridArea="3 / 1" />
        <BackgroundIcon Icon={Music} gridArea="3 / 3" />
        <BackgroundIcon Icon={Coffee} gridArea="3 / 5" />
        <BackgroundIcon Icon={Book} gridArea="4 / 2" />
        <BackgroundIcon Icon={Briefcase} gridArea="4 / 4" />
        <BackgroundIcon Icon={Rocket} gridArea="4 / 6" />
        <BackgroundIcon Icon={Cpu} gridArea="5 / 1" />
        <BackgroundIcon Icon={Globe} gridArea="5 / 3" />
        <BackgroundIcon Icon={Camera} gridArea="5 / 5" />
        <BackgroundIcon Icon={Pen} gridArea="6 / 2" />

      </div>

      {/* Main Content */}
      <motion.div 
        className="text-center z-10 flex flex-col items-center"
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Hey, I&apos;m Austin
        </h1>
        <div className="text-xl md:text-2xl mb-8">
          <span>Currently I&apos;m </span>
          <div className="h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentActivity}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-2xl md:text-3xl absolute whitespace-nowrap" // Add the whitespace-nowrap class here
              >
                {activities[currentActivity]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            className="bg-black text-white hover:bg-gray-800 text-lg py-2 px-6 rounded-full transition-colors"
            href="mailto:austin25@illinois.edu?subject=Subject%20Here&body=Body%20text%20here"
          >
            Start the Conversation
          </a>
          <Button 
            variant="outline" 
            className="bg-white text-black border-black hover:bg-gray-100 text-lg py-2 px-6 rounded-full transition-colors"
          >
            Check out my work
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

