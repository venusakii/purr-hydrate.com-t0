import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Droplets, Volume2, Filter, Zap, Shield, Leaf } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: Filter,
      title: "Triple Filtration System",
      description:
        "Advanced 3-stage filtration removes impurities, chlorine, and bad tastes for the freshest water your pet has ever enjoyed.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Volume2,
      title: "Ultra-Quiet Operation",
      description:
        "Whisper-quiet pump under 25dB means peaceful nights and calm pets. Your furry friends won't be startled by loud noises.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Droplets,
      title: "Flowing Water Attraction",
      description:
        "Natural flowing water entices cats and dogs to drink more, promoting better kidney health and hydration habits.",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description:
        "Low power consumption uses less energy than a night light. Eco-friendly and wallet-friendly operation 24/7.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "BPA-Free Materials",
      description:
        "Food-grade, pet-safe materials ensure your beloved companions drink from toxin-free, healthy surfaces every time.",
      color: "from-indigo-500 to-violet-500",
    },
    {
      icon: Leaf,
      title: "Easy to Clean",
      description:
        "Dishwasher-safe parts and simple assembly make maintenance a breeze. Spend more time playing, less time cleaning.",
      color: "from-green-500 to-lime-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 text-foreground text-sm font-bold shadow-lg">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Premium Features for Happy Pets</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-balance">
            Amazing{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
            Discover why thousands of pet parents choose Purr-Hydrate water fountains to keep their furry friends
            healthy and hydrated.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur rounded-3xl p-8 border-4 border-primary/10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                <div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed font-medium">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Pet&apos;s Hydration?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 50,000+ happy pet parents who chose Purr-Hydrate for healthier, happier pets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full text-lg font-bold shadow-xl"
              asChild
            >
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full text-lg font-bold bg-transparent"
              asChild
            >
              <Link href="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
