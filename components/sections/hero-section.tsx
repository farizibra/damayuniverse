import { Button } from "@/components/ui/button";
import { Crown, Shield, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-navy via-deep-blue to-midnight overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-dark-navy/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Crown className="h-20 w-20 text-gold mx-auto mb-6 icon-glow-strong animate-glow" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-display">
          <span className="text-gradient-gold animate-shimmer">DAMAY</span>
          <br />
          <span className="text-gradient-silver">UNIVERSE</span>
        </h1>

        <p className="text-xl sm:text-2xl text-silver mb-8 max-w-2xl mx-auto leading-relaxed">
          -WE COME IN PEACE-
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold hover:shadow-gold text-dark-navy font-bold px-8 py-3 text-lg transition-all duration-300 hover:scale-105 animate-shimmer"
          >
            <a
              href="https://instagram.com/damaysk_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Crown className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Shield className="h-8 w-8 text-gold/30 icon-glow-soft" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float delay-1000">
        <Star className="h-6 w-6 text-gold/30 icon-glow-soft" />
      </div>
    </section>
  );
}
