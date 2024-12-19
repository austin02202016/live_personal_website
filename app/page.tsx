import { Inter } from 'next/font/google'
import HeroSection from '@/components/hero_section'
import ContentSection from '@/components/content_section'
import { NavbarComponent } from "@/components/navbar"
import SectionComponent from '@/components/section_divider'


const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <main className="min-h-screen">
      <NavbarComponent />
      <HeroSection />
      <SectionComponent />
      <ContentSection />
    </main>
  )
}
