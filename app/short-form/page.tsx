import { ReelsPortfolioComponent } from "@/components/reels-portfolio"
import { StatsSectionComponent } from "@/components/stats-section"
import { NavbarComponent } from "@/components/navbar"


export default function Page() {
  return (
    <main className="min-h-screen">
      <NavbarComponent />
      <StatsSectionComponent />
      <ReelsPortfolioComponent />
    </main>
  )
}