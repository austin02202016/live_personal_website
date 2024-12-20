'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Headphones, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'

interface Podcast {
  id: string;
  name: string;
  oneLiner: string;
  image: string;
  podcastUrl: string;
  tags: string[];
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

interface PodcastCategory {
  title: string;
  podcasts: Podcast[];
}

const podcastCategories: PodcastCategory[] = [
  {
    title: "Startup Founders",
    podcasts: [
      {
        id: "founder_focus",
        name: "Avi Patel",
        oneLiner: "how a former uiuc student signed 34,000 artists",
        image: "/avi_headshot.jpg",
        podcastUrl: "https://open.spotify.com/episode/2TBuuXLNLIEIup0TRAcFfE?si=_AmFsQbaSKiLVd62nOl-uA",
        tags: ["Startups", "Entrepreneurship"],
        socialLinks: {
          instagram: "https://www.instagram.com/avipat_/",
          linkedin: "https://www.linkedin.com/in/avi-patel-bb2816225/",
          twitter: "https://x.com/avipat_",
        },
      },
      {
        id: "tech_trends",
        name: "Shrikar Lekkala",
        oneLiner: "from watching moneyheist to dropping out",
        image: "/shrikar_headshot.jpg",
        podcastUrl: "https://open.spotify.com/episode/6q53xS6kwqG2pSE4MFNfrt?si=_HRlUUAOS_WjmoKeCxVjow",
        tags: ["AI", "Ed-Tech"],
        socialLinks: {
          instagram: "https://www.instagram.com/shr1kar/",
          linkedin: "https://www.linkedin.com/in/shrikar-lekkala/",
          twitter: "https://x.com/ShrikarLekkala",
        },
      },
      {
        id: "tech_trends",
        name: "Will Lawson",
        oneLiner: "Solving the problem of stolen crypto",
        image: "/will_headshot.jpg",
        podcastUrl: "https://open.spotify.com/episode/4eiKEZU8v5CY9v0SKlxkOW?si=o7NAgwF8Qgu-ABrmm9QDDQ",
        tags: ["Crypto", "Startups"],
        socialLinks: {
          instagram: "https://www.instagram.com/dakinglawson/",
          linkedin: "https://www.linkedin.com/in/king-lawson/",
          twitter: "https://x.com/DaKingLawson",
        },
      },
      {
        id: "tech_trends",
        name: "Austin Majors",
        oneLiner: "pitching whole foods as a 19 year old founder",
        image: "/austin_majors_headshot.jpg",
        podcastUrl: "https://open.spotify.com/episode/4eiKEZU8v5CY9v0SKlxkOW?si=o7NAgwF8Qgu-ABrmm9QDDQ",
        tags: ["CPG", "Family Business"],
        socialLinks: {
          instagram: "https://www.instagram.com/austinmajorss/",
          linkedin: "https://www.linkedin.com/in/austin-majors-6b3275195/",
        },
      },
    ],
  },
  {
    title: "Content Creators",
    podcasts: [
      {
        id: "creator_corner",
        name: "Sharif Caesar",
        oneLiner: "from reselling birds in Ghana to making millions by 23",
        image: "/sharif_headshot.png",
        podcastUrl: "https://open.spotify.com/episode/1Ct6B7mp5BngF0FQEAh8R5?si=LXa6H-GwQGC_jipJdGUxSw",
        tags: ["Social Media", "Instagram", "Tiktok"],
        socialLinks: {
          instagram: "https://www.instagram.com/realmelaninking/",
        },
      },
      {
        id: "video_visionaries",
        name: "Casper Opala",
        oneLiner: "how to reach 3 million follwers recording from an iPhone",
        image: "/casper_headshot.jpg",
        podcastUrl: "https://open.spotify.com/episode/2wz1ylKGrQcEJJiPD3p4WY",
        tags: ["Finance Creator", "Instagram", "Tiktok"],
        socialLinks: {
          instagram: "https://www.instagram.com/casper.capital/",
          linkedin: "https://www.linkedin.com/in/casper-opala-96b80324b/",
          twitter: "https://x.com/CapitalCasper",
        },
      },
      {
        id: "video_visionaries",
        name: "Derrick Echols",
        oneLiner: "behind the scenes of Chicago's largest highschool sports page",
        image: "/derrick_headshot.jpg",
        podcastUrl: "https://open.spotify.com/episode/2wz1ylKGrQcEJJiPD3p4WY",
        tags: ["Finance Creator", "Instagram", "Tiktok"],
        socialLinks: {
          instagram: "https://www.instagram.com/slocheofficial/",
          linkedin: "https://www.linkedin.com/in/derrickecholsii/",
          twitter: "https://x.com/sloche_o",
        },
      },
      {
        id: "video_visionaries",
        name: "Chik Egbuna",
        oneLiner: "how to bring energy into every room",
        image: "/chik_headshot.png",
        podcastUrl: "https://open.spotify.com/episode/4hfU5VBHEuOphptvNOtLqN?si=7_FFh1K-ROq-YzlIbqvOzg",
        tags: ["Fitness Creator", "Gym", "Instagram"],
        socialLinks: {
          instagram: "https://www.instagram.com/m.b.b.fitness/",
          linkedin: "https://www.linkedin.com/in/chikelu-egbuna-5bba86289/",
        },
      },
    ],
  },
  {
    title: "Fan Favorites",
    podcasts: [
      {
        id: "tech_talk",
        name: "Suyash Agrawal",
        oneLiner: "entrepreneurship isn't what you think it is",
        image: "/suyash_headshot.jpg",
        podcastUrl: "https://open.spotify.com/episode/6QNBULh4KcuKtG9OWlgYrI?si=5ac7096c180a4c28",
        tags: ["Digital Marketing Agency", "Disruptive Tech"],
        socialLinks: {
          instagram: "https://www.instagram.com/s.uyash/",
          linkedin: "https://www.linkedin.com/in/suyash-agrawal-20/",
        },
      },
      {
        id: "startup_stories",
        name: "Mlaah Singh",
        oneLiner: "why you should give back in your 20s",
        image: "/mlaah_headshot.jpg",
        podcastUrl: "https://open.spotify.com/episode/7DcIiSdUhQntixpuVv85YN?si=YGaOJVZoT7STYeFowOp3vQ",
        tags: ["non-profits", "Service", "Actress"],
        socialLinks: {
          instagram: "https://www.instagram.com/mlaahsingh/",
          linkedin: "https://www.linkedin.com/in/mlaahsingh/",
        },
      },
      {
        id: "startup_stories",
        name: "Luke Clancy",
        oneLiner: "college is a game. here's how to win",
        image: "/luke_headshot.jpg",
        podcastUrl: "https://open.spotify.com/episode/0omF1Og3ULRX9yrAkeEzch?si=xNJaBE6iQ4m8TJLtSUA83A",
        tags: ["College", "Leverage", "Infinite Games"],
        socialLinks: {
          instagram: "https://www.instagram.com/lukeclancy/",
          linkedin: "https://www.linkedin.com/in/luke-clancy-a88812191/",
          twitter: "https://x.com/luke_clancy1",
        },
      },
    ],
  },
];


function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="flex flex-col items-center space-y-3">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={podcast.image}
              alt={podcast.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-center">
            {podcast.name}
          </h3>
          {podcast.socialLinks && (
            <div className="flex justify-center space-x-2">
              {podcast.socialLinks.instagram && (
                <Link
                  href={podcast.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={`${podcast.name}'s Instagram`}
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              )}
              {podcast.socialLinks.linkedin && (
                <Link
                  href={podcast.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={`${podcast.name}'s LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              )}
              {podcast.socialLinks.twitter && (
                <Link
                  href={podcast.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={`${podcast.name}'s Twitter`}
                >
                  <Twitter className="h-4 w-4" />
                </Link>
              )}
            </div>
          )}
          <p className="text-sm text-gray-600 text-center">
            {podcast.oneLiner}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {podcast.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <Link
            href={podcast.podcastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Headphones className="h-4 w-4 mr-1" />
            <span>Listen</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export function PodcastsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="podcasts" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Podcasts
        </motion.h1>
        <motion.p
        className="text-xl text-gray-600 text-center mt-4 mb-12"
        initial={{ opacity: 0, y: -10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        These are some of the folks I&#39;ve interviewed
      </motion.p>
        {podcastCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-16 text-center">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {category.title}
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {category.podcasts.map((podcast, index) => (
                <motion.div
                  key={podcast.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                  whileHover={{ scale: 1.05 }}
                >
                  <PodcastCard podcast={podcast} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

