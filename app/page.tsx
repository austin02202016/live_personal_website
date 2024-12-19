import { Inter } from 'next/font/google'
import HeroSection from '@/components/hero_section'
import ContentSection from '@/components/content_section'
import { NavbarComponent } from "@/components/navbar"
import SectionComponent from '@/components/section_divider'


const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
  return (
    <div className={`min-h-screen flex flex-col bg-white text-black ${inter.className}`}>
      <main className="flex-grow flex flex-col">
        <NavbarComponent />
        <HeroSection />
        <SectionComponent />
        <ContentSection />
      </main>
    </div>
  )
}

