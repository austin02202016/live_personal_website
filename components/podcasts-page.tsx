'use client'

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Podcast {
  id: string
  title: string
  description: string
  imageUrl: string
  listenUrl: string
}

const biggestHits: Podcast[] = [
  {
    id: "1",
    title: "The Future of AI",
    description: "Exploring the latest advancements in artificial intelligence and their impact on society.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    listenUrl: "#",
  },
  {
    id: "2",
    title: "Web Development Trends",
    description: "Discussing the newest frameworks, libraries, and best practices in web development.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    listenUrl: "#",
  },
  {
    id: "3",
    title: "Startup Stories",
    description: "Interviews with successful entrepreneurs sharing their journey and insights.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    listenUrl: "#",
  },
]

const otherPodcasts: Podcast[] = [
  {
    id: "4",
    title: "Mindfulness & Productivity",
    description: "Tips and techniques for staying focused and productive in a distracted world.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    listenUrl: "#",
  },
  {
    id: "5",
    title: "The Science of Happiness",
    description: "Exploring scientific research on what truly makes us happy and fulfilled.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    listenUrl: "#",
  },
  {
    id: "6",
    title: "Crypto & Blockchain 101",
    description: "Demystifying cryptocurrencies and blockchain technology for beginners.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    listenUrl: "#",
  },
]

function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <Image
          src={podcast.imageUrl}
          alt={podcast.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-xl mb-2">{podcast.title}</CardTitle>
        <CardDescription>{podcast.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild className="w-full">
          <Link href={podcast.listenUrl}>
            <Play className="mr-2 h-4 w-4" /> Listen Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function PodcastsPageComponent() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Podcasts</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Biggest Hits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {biggestHits.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">More Episodes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </section>
    </div>
  )
}