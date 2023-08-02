import LandingContent from '@/components/LandingContent'
import LandingHero from '@/components/LandingHero'
import LandingNavBar from '@/components/LandingNavBar'

export default function Landing() {
  return (
    <main className="h-screen">
      <LandingNavBar />
      <LandingHero />
      <LandingContent />
    </main>
  )
}
