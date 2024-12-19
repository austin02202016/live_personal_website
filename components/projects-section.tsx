'use client';

import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, LinkIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'



const projects = [
  {
    id: "uiuc.io",
    title: "Oskee",
    description: "chatbot matching prompts with UIUC students, built with Andrew Yatzkan",
    image: "/uiuc.io_photo.png",
    liveUrl: "https://www.uiuc.io/",
    githubUrl: "https://github.com/austin02202016/uiuc_sage.git",
    tags: ["Next.js", "TailwindCSS", "MongoDB", "Digital Ocean", "Open AI"],
  },
  {
    id: "personal_website",
    title: "Personal Website",
    description: "first time I built something in next.js, also the website your currently scrolling through :)",
    image: "/personal_website_photo.png",
    liveUrl: "https://austinkennedy.vercel.app/",
    githubUrl: "https://github.com/austin02202016/react_10.7_website",
    tags: ["Next.js", "React.js", "Vercel", "TailwindCSS"],
  },
  {
    id: "capital_club_landing_page",
    title: "The Capital Club",
    description: "landing page and 'new subscriber' workflows for The Capital Club newsletter",
    image: "/capital_club_photo.png",
    liveUrl: "https://casper-landing-page.vercel.app/",
    githubUrl: "https://github.com/austin02202016/casper-landing_page",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        <span>Code</span>
                      </Link>
                    )}
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

