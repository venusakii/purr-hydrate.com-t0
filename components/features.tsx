import { Card } from "@/components/ui/card"

const features = [
  {
    emoji: "💧",
    title: "Triple Filtration System",
    description:
      "Super clean water that even the pickiest cats will love! Advanced filters keep every sip fresh and tasty.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    emoji: "🤫",
    title: "Whisper Quiet Operation",
    description: "So quiet, your pets won't even notice! Perfect for nervous kitties and easily startled pups.",
    color: "from-purple-400 to-pink-400",
  },
  {
    emoji: "⚡",
    title: "Energy Efficient",
    description:
      "Uses less power than a nightlight! Save money while keeping your furry friends hydrated all day long.",
    color: "from-yellow-400 to-orange-400",
  },
  {
    emoji: "🌊",
    title: "Flowing Water Design",
    description:
      "Pets naturally love running water! Our gentle flow encourages even stubborn drinkers to hydrate more.",
    color: "from-teal-400 to-emerald-400",
  },
  {
    emoji: "🛡️",
    title: "BPA-Free & Safe",
    description: "Premium pet-safe materials that are non-toxic and durable. Built to withstand playful paws!",
    color: "from-green-400 to-lime-400",
  },
  {
    emoji: "🌱",
    title: "Eco-Friendly",
    description: "Help save the planet while hydrating your pets! One fountain replaces hundreds of plastic bowls.",
    color: "from-pink-400 to-rose-400",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative">
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute top-10 right-10 text-8xl">🐾</div>
        <div className="absolute bottom-20 left-20 text-7xl">❤️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Everything Your{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Fur Baby
            </span>{" "}
            Needs
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Designed by veterinarians and pet lovers! Every feature is crafted to keep your adorable companions healthy,
            happy, and hydrated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 bg-white">
              <div
                className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 text-3xl shadow-lg`}
              >
                {feature.emoji}
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
