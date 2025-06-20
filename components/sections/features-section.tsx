import { Card, CardContent } from "@/components/ui/card"
import { Zap, Award, Shield, Star, Users, Crown } from "lucide-react"

export function FeaturesSection() {
  const features = [
    { icon: Zap, title: "VIP Access", desc: "Exclusive events and private channels" },
    { icon: Award, title: "Recognition", desc: "Earn ranks and prestigious titles" },
    { icon: Shield, title: "Protection", desc: "Full family backing and support" },
    { icon: Star, title: "Mentorship", desc: "Learn from seasoned veterans" },
    { icon: Users, title: "Network", desc: "Connect with influential members" },
    { icon: Crown, title: "Leadership", desc: "Opportunities to lead and grow" },
  ]

  return (
    <section id="members" className="py-20 bg-gradient-to-b from-midnight to-deep-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
            <span className="text-gradient-gold">Elite Privileges</span>
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Exclusive benefits reserved only for the chosen few who prove their worth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-gold"
            >
              <CardContent className="p-6">
                <feature.icon className="h-10 w-10 text-gold mb-4 group-hover:scale-110 transition-transform icon-glow group-hover:icon-glow-strong" />
                <h3 className="text-xl font-bold text-gradient-silver mb-2 font-display">{feature.title}</h3>
                <p className="text-silver-dark">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
