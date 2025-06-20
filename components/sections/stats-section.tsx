export function StatsSection() {
  const stats = [
    { value: "500+", label: "Active Members" },
    { value: "50+", label: "Cities Worldwide" },
    { value: "24/7", label: "Family Support" },
    { value: "100%", label: "Loyalty Rate" },
  ]

  return (
    <section className="py-20 bg-midnight">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2 group-hover:scale-110 transition-transform font-display">
                {stat.value}
              </div>
              <div className="text-silver font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
