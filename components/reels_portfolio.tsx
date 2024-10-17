"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Heart, Eye, MessageCircle } from "lucide-react"
import { NavbarComponent } from "./navbar"

const reels = [
  { id: "CdkgxnxjCG6", likes: 1500, views: 10000, comments: 200 },
  { id: "CeF0OKjD8X1", likes: 2000, views: 15000, comments: 300 },
  { id: "CdSoXXhjbHW", likes: 1800, views: 12000, comments: 250 },
  { id: "Cc7_lG4j7pV", likes: 2200, views: 18000, comments: 350 },
  { id: "CcnKSeljBUa", likes: 1700, views: 11000, comments: 180 },
  { id: "CcSNP-ODI8a", likes: 2500, views: 20000, comments: 400 },
  { id: "Cb9iKzrDtEf", likes: 1900, views: 13000, comments: 220 },
  { id: "CbpEXsIDLHM", likes: 2100, views: 16000, comments: 280 },
  { id: "CbUjc3pjTwX", likes: 1600, views: 9000, comments: 150 },
  { id: "Ca_7_JYjWgg", likes: 2300, views: 19000, comments: 370 },
]

export default function ReelsPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const nextReel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reels.length)
  }

  const prevReel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reels.length) % reels.length)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <NavbarComponent />
      <div className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center mb-2">My Top 10 Instagram Reels</h1>
            <p className="text-center text-gray-600 mb-6">
              Explore my curated collection of Instagram reels showcasing my best moments and creative content. 
              These top 10 reels represent the pinnacle of my social media journey.
            </p>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {reels.map((reel, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <iframe
                        src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                        className="w-full aspect-[9/16] max-w-[350px] mx-auto"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen
                      ></iframe>
                      <div className="flex justify-center space-x-4 mt-4">
                        <div className="flex items-center">
                          <Heart className="w-5 h-5 mr-1 text-red-500" />
                          <span>{reel.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-5 h-5 mr-1 text-blue-500" />
                          <span>{reel.views}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-5 h-5 mr-1 text-green-500" />
                          <span>{reel.comments}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevReel}
                aria-label="Previous reel"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextReel}
                aria-label="Next reel"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 text-center">
              <span className="font-semibold">
                {currentIndex + 1} / {reels.length}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}