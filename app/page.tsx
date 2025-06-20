import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Shield, Users, Star, Zap, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <Crown className="h-20 w-20 text-amber-500 mx-auto mb-6 animate-pulse" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              DAMAY
            </span>
            <br />
            <span className="text-white">UNIVERSE</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where legends are born, loyalty is earned, and respect is
            everything. Join the most exclusive community in the digital realm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-black font-bold px-8 py-3 text-lg"
            >
              <Crown className="mr-2 h-5 w-5" />
              Join the Family
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Shield className="h-8 w-8 text-amber-500/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-1000">
          <Star className="h-6 w-6 text-amber-500/30" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
                The Family Code
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the pillars of loyalty, respect, and brotherhood. We are
              more than a community - we are family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">Loyalty</h3>
                <p className="text-gray-300">
                  Once family, always family. Our bonds are unbreakable and our
                  commitment unwavering.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Crown className="h-12 w-12 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">Respect</h3>
                <p className="text-gray-300">
                  Earned through actions, maintained through honor. Respect is
                  the currency of our realm.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Brotherhood
                </h3>
                <p className="text-gray-300">
                  United we stand, divided we fall. Together, we build an empire
                  that lasts forever.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-gray-300 font-medium">Active Members</div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-gray-300 font-medium">Cities Worldwide</div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-300 font-medium">Family Support</div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-gray-300 font-medium">Loyalty Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="members"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
                Elite Privileges
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className="bg-black/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900/20 via-black to-amber-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown className="h-16 w-16 text-amber-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to Join the
            <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              {" "}
              Family
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The invitation is extended, but acceptance is earned. Do you have
            what it takes?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-black font-bold px-12 py-4 text-xl"
          >
            <Crown className="mr-2 h-6 w-6" />
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
}
