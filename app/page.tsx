import SiteNav from "@/components/site-nav"
import Hero from "@/components/hero"
import DayJob from "@/components/day-job"
import AfterHours from "@/components/after-hours"
import ScoreSheet from "@/components/score-sheet"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <DayJob />
      <AfterHours />
      <ScoreSheet />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
