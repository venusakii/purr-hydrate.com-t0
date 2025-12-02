const benefits = [
  {
    emoji: "❤️",
    title: "Healthier Pets",
    stat: "3x",
    description: "Pets drink 3x more water with flowing fountains, reducing kidney disease risk by 40%",
    color: "from-red-400 to-pink-400",
  },
  {
    emoji: "⭐",
    title: "Vet Approved",
    stat: "95%",
    description: "of veterinarians recommend water fountains for optimal pet hydration",
    color: "from-yellow-400 to-orange-400",
  },
  {
    emoji: "⏰",
    title: "Time Saved",
    stat: "30min",
    description: "per week saved on refilling bowls. Set it and forget it convenience",
    color: "from-purple-400 to-pink-400",
  },
  {
    emoji: "🌍",
    title: "Eco-Friendly",
    stat: "500+",
    description: "disposable bowls saved per year. Better for pets and the planet",
    color: "from-green-400 to-teal-400",
  },
]

export function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background relative">
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute top-10 left-20 text-9xl">💧</div>
        <div className="absolute bottom-10 right-20 text-8xl">❤️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Why Pet Parents{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Love Us
            </span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Join thousands of happy pet owners who&apos;ve transformed their pets&apos; health and happiness!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4">
              <div
                className={`inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${benefit.color} shadow-lg text-4xl`}
              >
                {benefit.emoji}
              </div>
              <div>
                <p className="text-5xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                  {benefit.stat}
                </p>
                <p className="text-xl font-display font-bold mb-2">{benefit.title}</p>
                <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
