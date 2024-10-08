"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Total Views', value: 9263510},
  { label: 'Content Pieces', value: 183 },
  { label: 'Followers', value: 8238 },
]

export function StatsSectionComponent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-10 pb-12 sm:py-20 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Short-Form Gems
        </motion.h2>
        <div className="grid grid-cols-1 gap-12 sm:gap-16 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.p 
                className="text-5xl font-bold text-gray-900 mb-4"
                initial={{ scale: 0.5 }}
                animate={isVisible ? { scale: .9 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <CountUp end={stat.value} />
              </motion.p>
              <p className="text-xl text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / 2000 // 2 seconds duration

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end])

  return <>{count.toLocaleString()}</>
}