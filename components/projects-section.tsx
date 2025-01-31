'use client';

import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LinkIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'



const projects = [
  {
    id: "uiuc.io",
    title: "Oskee",
    description: "AI chatbot that searches directory of student entrepreneurs, built with Andrew Yatzkan",
    image: "/uiuc.io_photo.png",
    liveUrl: "https://www.uiuc.io/",
    tags: ["Next.js", "TailwindCSS", "MongoDB", "Digital Ocean", "Open AI"],
  },
  {
    id: "innovo_markets",
    title: "Innovo Markets",
    description: "website for climatetech startup, data collection through Hubspot's API",
    image: "/innovo-markets.png",
    liveUrl: "https://innovomarkets.com",
    tags: ["Next.js", "TailwindCSS", "React.js", "Hubspot API", "Vercel"],
  },
  {
    id: "write-like-them",
    title: "Write Like Them",
    description: "helps copywriting agencies convert voice memos/text files to content",
    image: "/write-like.png",
    liveUrl: "https://writelikethem-frontend.vercel.app",
    tags: ["Next.js", "Python", "Assembly API", "Ubuntu", "Flask", "Vercel",],
  },
  {
    id: "capital_club_landing_page",
    title: "The Capital Club",
    description: "Beehiv workaround to collect multiple data points for new subscribers",
    image: "/capital_club_photo.png",
    liveUrl: "https://casper-landing-page.vercel.app/",
    tags: ["Next.js", "TailwindCSS", "React.js", "Beehiv API", "Vercel"],
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects
          </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 space-y-4 md:space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white border border-gray-400 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <LinkIcon className="h-5 w-5 mr-2" />
                      <span>Visit</span>
                    </Link>
                    
                  </div>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

