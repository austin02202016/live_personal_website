"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Eye, MessageCircle } from "lucide-react"

const reels = [
  { id: "C8LX4tRxg2y", likes: 1500, views: 10000, comments: 200 },
  { id: "C5t2wMMRjZP", likes: 2000, views: 15000, comments: 300 },
  { id: "C6ej6mtRizm", likes: 1800, views: 12000, comments: 250 },
  { id: "C9x9-uGym7r", likes: 2200, views: 18000, comments: 350 }, // Cristian 2nd reel 
  { id: "C_34DcZSLaW", likes: 1700, views: 11000, comments: 180 },
  { id: "C_i6fzQxMY1", likes: 2500, views: 20000, comments: 400 }, //michael 
  { id: "C__EJ92vKsS", likes: 1900, views: 13000, comments: 220 },
  { id: "C-v4YwESIDR", likes: 2100, views: 16000, comments: 280 },
  { id: "C-B1ketx0u_", likes: 1600, views: 9000, comments: 150 },
  { id: "DAWx1jTB12x", likes: 2300, views: 19000, comments: 370 },
  { id: "C__vv7Ay8yk", likes: 1600, views: 9000, comments: 150 },
  { id: "C4TpUZgxcg9", likes: 2300, views: 19000, comments: 370 },
]

export function ReelsPortfolioComponent() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-6xl bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reels.map((reel, index) => (
                <div key={index} className="w-full">
                  <div className="aspect-[9/16] max-w-[350px] mx-auto bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex justify-center space-x-6 mt-4">
                    <div className="flex items-center text-gray-600">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-sm">{reel.likes}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="text-sm">{reel.views}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">{reel.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}