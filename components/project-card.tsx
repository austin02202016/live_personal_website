import { Badge } from "@/components/ui/badge"
import { Github, LinkIcon, PlayCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  liveUrl: string
  githubUrl?: string
  demoUrl?: string
  tags: string[]
}

export function ProjectCard({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  demoUrl,
  tags,
}: ProjectCardProps) {
  return (
    <div className="w-full">
      <div className="aspect-video max-w-[350px] mx-auto bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={350}
          height={197}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
            <LinkIcon className="w-4 h-4 mr-1" />
            <span className="text-sm">Live</span>
          </Link>
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
              <Github className="w-4 h-4 mr-1" />
              <span className="text-sm">Code</span>
            </Link>
          )}
          {demoUrl && (
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
              <PlayCircle className="w-4 h-4 mr-1" />
              <span className="text-sm">Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

