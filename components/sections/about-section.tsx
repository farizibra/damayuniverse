import { Card, CardContent } from "@/components/ui/card"
import { Crown, Shield, Users } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Shield,
      title: "Loyalty",
      description: "Once family, always family. Our bonds are unbreakable and our commitment unwavering.",
    },
    {
      icon: Crown,
      title: "Respect",
      description: "Earned through actions, maintained through honor. Respect is the currency of our realm.",
    },
    {
      icon: Users,
      title: "Brotherhood",
      description: "United we stand, divided we fall. Together, we build an empire that lasts forever.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-deep-blue to-midnight">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
            <span className="text-gradient-gold">The Family Code</span>
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Built on the pillars of loyalty, respect, and brotherhood. We are more than a community - we are family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:shadow-gold"
            >
              <CardContent className="p-8 text-center">
                <value.icon className="h-12 w-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform icon-glow group-hover:icon-glow-strong" />
                <h3 className="text-2xl font-bold text-gradient-silver mb-4 font-display">{value.title}</h3>
                <p className="text-silver-dark">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
