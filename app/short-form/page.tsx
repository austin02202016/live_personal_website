import { ShortFormContentSection } from "@/components/short-form-section"
import { NavbarComponent } from "@/components/navbar"


export default function Page() {
  return (
    <main className="min-h-screen">
      <NavbarComponent />
      <ShortFormContentSection />
    </main>
  )
}