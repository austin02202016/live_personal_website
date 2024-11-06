import { AboutMeSection } from "@/components/about-me"
import { NavbarComponent } from "@/components/navbar"


export default function Page() {
  return (
    <main className="min-h-screen">
      <NavbarComponent />
      <AboutMeSection />
    </main>
  )
}