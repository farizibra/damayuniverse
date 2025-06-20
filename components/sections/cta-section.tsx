import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-dark-navy/80 via-midnight to-deep-blue/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Crown className="h-16 w-16 text-gold mx-auto mb-6 icon-glow-strong animate-glow" />
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
          Ready to Join the
          <span className="text-gradient-gold"> Family</span>?
        </h2>
        <p className="text-xl text-silver mb-8 max-w-2xl mx-auto">
          The invitation is extended, but acceptance is earned. Do you have what it takes?
        </p>
        <Button
          size="lg"
          className="bg-gradient-gold hover:shadow-gold text-dark-navy font-bold px-12 py-4 text-xl transition-all duration-300 hover:scale-105 animate-shimmer"
        >
          <Crown className="mr-2 h-6 w-6" />
          Apply Now
        </Button>
      </div>
    </section>
  )
}
