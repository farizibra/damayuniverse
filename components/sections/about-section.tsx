import { Card, CardContent } from "@/components/ui/card";
import { Crown, Users, Gamepad2, ShoppingCart } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Crown,
      title: "Society",
      description:
        "Once family, always family. Our bonds are unbreakable and our commitment unwavering.",
    },
    {
      icon: ShoppingCart,
      title: "Merchandise",
      description:
        "Wear your loyalty with pride. Our exclusive merchandise is a symbol of our unity and strength.",
    },
    {
      icon: Users,
      title: "Football",
      description:
        "On the field, we are warriors. Off the field, we are brothers. Together, we conquer every challenge.",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description:
        "In the world of gaming, we are not just players; we are legends. Join us in the arena of champions.",
    },
  ];

  return (
    <section id="about" className="py-10">
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
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-gold/20 hover:border-gold/40 transition-all duration-300 group hover:shadow-gold"
            >
              <CardContent className="p-8 text-center">
                <value.icon className="h-12 w-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform icon-glow group-hover:icon-glow-strong" />
                <h3 className="text-2xl font-bold text-gradient-silver mb-4 font-display">
                  {value.title}
                </h3>
                <p className="text-silver-dark">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
