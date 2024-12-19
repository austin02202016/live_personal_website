'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'

export function AboutMeSection() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }, []);
    
    const timelineEvents = [
    { year: 2003, event: 'Born in Elmwood Park to some great parents. Shoutout Mom and Dad' },
    { year: 2018, event: 'Graduated from St. Celestine Elementary, started playing baseball at Illinois Travel Baseball Club in Mount Prospect. Played pretty much every sport in 8th grade - baseball, basketball, hockey, soccer, track and field, cross-country, and bowling' },
    { year: 2019, event: 'Made the freshman basketball team, got my first job at Habetler Bowl in Jefferson Park, read "Can&#39;t Hurt Me" by David Goggins and got deep into the self-help space, got big into the gym and science-based lifting' },
    { year: 2020, event: 'Covid - probably most disciplined I&#39;ve been in my life. Lot of my attention went towards travel baseball and lifting. Got deeper into the "motivational" and "stoicism" space, started reading "Rich Dad, Poor Dad", "12 Rules for Life" and more similar books' },
    { year: 2021, event: 'Met my future roommates working at Mariano&#39;s, most of my attention was directed towards getting more playing time for senior year baseball' },
    { year: 2022, event: 'Graduated high school at Notre Dame College Prep, lost in sectional final for high school baseball final and retired, varsity bowler captain, managed the frozen department at Mariano&#39;s in Harwood Heights' },
    { year: 2023, event: 'Went skydiving, worked a door-to-door sales job (very character building), started attending Luke Clancy&#39;s jam sessions and overdosed on the entrepreneurship pill' },
    { year: 2024, event: 'Interned at Innovo Markets and transitioned to a consultant role thereafter, ran a marathon, helped with the founding and growth of Illini Run Club, started recording short-form reels for Proof of Concept' },
    ];

    return (
      <div className="min-h-screen bg-white text-black font-sans">
        <div className="container mx-auto px-[10%] py-16">
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center mb-24"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Deep Dive About Me
          </motion.h2>
        <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
          Here&#39;s a detailed description of my life. Long story short - I&#39;ve been down a lot of different rabbit holes.
        </p>

        <div className="flex justify-center mb-8">
          <ChevronDown className="animate-bounce w-8 h-8" />
        </div>

        <div className="border border-gray-200 rounded-lg shadow-lg p-8 bg-white">
          <div className="space-y-12">
            {timelineEvents.map((item, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-px h-full bg-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-black mt-1"></div>
                </div>
                <div className="pb-8">
                  <p className="text-2xl font-bold">{item.year}</p>
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.event }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}