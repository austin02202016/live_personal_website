import { ProjectsSection } from "@/components/projects-section"
import { NavbarComponent } from "@/components/navbar"


export default function Page() {
  return (
    <main className="min-h-screen">
      <NavbarComponent />
      <ProjectsSection />
    </main>
  )
}