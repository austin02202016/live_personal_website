'use client'

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const reels = [
  "C8LX4tRxg2y", "C5t2wMMRjZP", "C6ej6mtRizm", "C9x9-uGym7r", 
  "C_34DcZSLaW", "C_i6fzQxMY1", "C__EJ92vKsS", "C-v4YwESIDR", 
  "C-B1ketx0u_", "DAWx1jTB12x", "C__vv7Ay8yk", "C4TpUZgxcg9"
]

export function ShortFormContentSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    const timer = setTimeout(() => setIsVisible(true), 500);

    return () => {
      document.body.removeChild(script)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section id="short-form-content" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Short-Form Content
        </motion.h1>
        <Card className="w-full bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reels.map((reelId, index) => (
                <motion.div 
                  key={index} 
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="aspect-[9/16] max-w-[350px] mx-auto bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.instagram.com/reel/${reelId}/embed/`}
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

