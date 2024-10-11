import { NavbarComponent } from "@/components/navbar"
import LandingPage from "@/components/landing-page"

export default function Page() {
  return (
    <main className="min-h-screen">
      <NavbarComponent />
      <LandingPage />
    </main>
  )
}
