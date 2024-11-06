'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Github, ExternalLink } from 'lucide-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
  const activities = [
    "growing UIUC's entrepreneurship community",
    "consulting for pre-seed startup Innovo",
    "trainig to complete my first dunk",
    "growing Illini Run Club",
    "working on personal coding projects"
  ]

  // const projects = [
  //   // Sample project objects for demo
  //   {
  //     title: "Project One",
  //     description: "A cool project description here.",
  //     tags: ["React", "Next.js", "Tailwind CSS"],
  //     what: "An amazing project that solves a problem.",
  //     why: "Because I wanted to learn more about web development.",
  //     how: "It&apos;s going great, and I&apos;m learning a lot!",
  //     github: "https://github.com/projectone",
  //     link: "https://projectone.com"
  //   },
  //   // Add other projects as needed
  // ]

  const [currentActivity, setCurrentActivity] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length)
    }, 3000) // Change activity every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col bg-white text-black ${inter.className}`}>
      <main className="flex-grow flex flex-col items-center justify-start p-16 pt-10 md:pt-50 space-y-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hey, I&apos;m Austin
          </h1>
          <div className="text-xl md:text-2xl">
            <span>Currently I&apos;m </span>
            <span className="font-bold text-2xl md:text-3xl text-primary transition-all duration-300 ease-in-out">
              {activities[currentActivity]}
            </span>
          </div>
          <div className="space-y-4 flex flex-col items-center">
            <a
              className="bg-black text-white hover:bg-gray-800 text-lg py-2 px-6 rounded-full"
              href="mailto:austin25@illinois.edu?subject=Subject%20Here&body=Body%20text%20here"
            >
              Start the Conversation
            </a>
            <Button variant="outline" className="bg-white text-black border-black hover:bg-gray-100 text-lg py-2 px-6 rounded-full">
              Check out my work
            </Button>
          </div>
        </div>

        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-center">What I&apos;m up to these days</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Promoting college entrepreneurship through <a href="https://open.spotify.com/show/6s4SW9OcCX16BCgEXStCJo" className="text-gray-400 hover:underline">Proof of Concept</a>, my podcast and media company</li>
              <li>Media and branding consultant for <a href="https://www.innovomarkets.com/" className="text-gray-400 hover:underline">Innovo Markets</a></li>
              <li>Helping grow and secure partnerships for <a href="https://www.instagram.com/illinirunclub/" className="text-gray-400 hover:underline">Illini Run Club</a></li>
              <li>Member of <a href="https://www.pct-illinois.com/" className="text-gray-400 hover:underline">Phi Chi Theta Professional Business Fraternity</a></li>
              <li>Hosting biweekly hangouts for UIUC&apos;s most killer content-creators, entrepreneurs, and builders</li>
              <li>Finance Major, Computer Science Minor w/ Concentration in Commercial Real Estate @ UIUC</li>
            </ul>
          </div>

          <div className="w-px bg-gray-300 hidden md:block"></div>

          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-center">Past-seasons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Previous caddy at the <a href="https://www.top100golfcourses.com/golf-course/old-elm" className="text-gray-400 hover:underline">Old Elm Club</a> in Lake Forest, met some really wise retired CEOs</li>
              <li>Recruited speakers for <a href="https://www.linkedin.com/company/illinois-sports-business-conference/mycompany/" className="text-gray-400 hover:underline">Illinois Sports Business Conference and moderated a convo with Chris Gronkowski</a></li>
              <li>Knocked 1000s of doors as a Sales Representative for <a href="https://blueravensolar.com/illinois/chicago/" className="text-gray-400 hover:underline">Blue Raven Solar</a></li>
              <li>Co-Founded <a href="https://www.linkedin.com/company/reach-fam/mycompany/" className="text-gray-400 hover:underline">REACH</a> (Nationwide Social Media Club) @ UIUC</li>
              <li>Co-Founder of Defined Trajectory Personal Training (We learned a lot of what-not-to-do)</li>
              <li>Co-Founder of Set Sail Solutions SMMA (Again learned a lot of what-not-to-do)</li>
              <li>Frozen Department Shelve-Stocker for 3 Years at Marianos</li>
            </ul>
          </div>
        </div>

        {/* Featured Projects Section
        <div className="w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">What it is</h3>
                    <p className="text-sm text-gray-600">{project.what}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Why I do it</h3>
                    <p className="text-sm text-gray-600">{project.why}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">How it&apos;s going</h3>
                    <p className="text-sm text-gray-600">{project.how}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  <Button variant="default" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div> */}
      </main>
    </div>
  )
}
