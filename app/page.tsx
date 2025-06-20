import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Shield, Users, Star, Zap, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
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
            Where legends are born, loyalty is earned, and respect is
            everything. Join the most exclusive community in the digital realm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-gold hover:shadow-gold text-dark-navy font-bold px-8 py-3 text-lg transition-all duration-300 hover:scale-105 animate-shimmer"
            >
              <Crown className="mr-2 h-5 w-5" />
              Join the Family
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-dark-navy px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
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

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-deep-blue to-midnight"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
              <span className="text-gradient-gold">The Family Code</span>
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Built on the pillars of loyalty, respect, and brotherhood. We are
              more than a community - we are family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:shadow-gold">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform icon-glow group-hover:icon-glow-strong" />
                <h3 className="text-2xl font-bold text-gradient-silver mb-4 font-display">
                  Loyalty
                </h3>
                <p className="text-silver-dark">
                  Once family, always family. Our bonds are unbreakable and our
                  commitment unwavering.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:shadow-gold">
              <CardContent className="p-8 text-center">
                <Crown className="h-12 w-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform icon-glow group-hover:icon-glow-strong" />
                <h3 className="text-2xl font-bold text-gradient-silver mb-4 font-display">
                  Respect
                </h3>
                <p className="text-silver-dark">
                  Earned through actions, maintained through honor. Respect is
                  the currency of our realm.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:shadow-gold">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform icon-glow group-hover:icon-glow-strong" />
                <h3 className="text-2xl font-bold text-gradient-silver mb-4 font-display">
                  Brotherhood
                </h3>
                <p className="text-silver-dark">
                  United we stand, divided we fall. Together, we build an empire
                  that lasts forever.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-midnight">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2 group-hover:scale-110 transition-transform font-display">
                500+
              </div>
              <div className="text-silver font-medium">Active Members</div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2 group-hover:scale-110 transition-transform font-display">
                50+
              </div>
              <div className="text-silver font-medium">Cities Worldwide</div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2 group-hover:scale-110 transition-transform font-display">
                24/7
              </div>
              <div className="text-silver font-medium">Family Support</div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2 group-hover:scale-110 transition-transform font-display">
                100%
              </div>
              <div className="text-silver font-medium">Loyalty Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="members"
        className="py-20 bg-gradient-to-b from-midnight to-deep-blue"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
              <span className="text-gradient-gold">Elite Privileges</span>
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Exclusive benefits reserved only for the chosen few who prove
              their worth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "VIP Access",
                desc: "Exclusive events and private channels",
              },
              {
                icon: Award,
                title: "Recognition",
                desc: "Earn ranks and prestigious titles",
              },
              {
                icon: Shield,
                title: "Protection",
                desc: "Full family backing and support",
              },
              {
                icon: Star,
                title: "Mentorship",
                desc: "Learn from seasoned veterans",
              },
              {
                icon: Users,
                title: "Network",
                desc: "Connect with influential members",
              },
              {
                icon: Crown,
                title: "Leadership",
                desc: "Opportunities to lead and grow",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-gold"
              >
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-gold mb-4 group-hover:scale-110 transition-transform icon-glow group-hover:icon-glow-strong" />
                  <h3 className="text-xl font-bold text-gradient-silver mb-2 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-silver-dark">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy/80 via-midnight to-deep-blue/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown className="h-16 w-16 text-gold mx-auto mb-6 icon-glow-strong animate-glow" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
            Ready to Join the
            <span className="text-gradient-gold"> Family</span>?
          </h2>
          <p className="text-xl text-silver mb-8 max-w-2xl mx-auto">
            The invitation is extended, but acceptance is earned. Do you have
            what it takes?
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
    </div>
  );
}
