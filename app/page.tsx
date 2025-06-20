import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { StatsSection } from "@/components/sections/stats-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}
