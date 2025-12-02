import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "PurrFlow Mini",
    slug: "purrflow-mini",
    price: 39.99,
    image: "/cute-compact-white-cat-water-fountain-with-playful.jpg",
    badge: "🐱 Best for Cats",
    features: ["1.5L Capacity", "Perfect for 1-2 cats", "Compact & cute design", "3 flow settings"],
    gradient: "from-pink-400 to-purple-400",
  },
  {
    name: "PurrFlow Pro",
    slug: "purrflow-pro",
    price: 59.99,
    image: "/modern-stylish-pet-water-fountain-with-happy-cat-a.jpg",
    badge: "⭐ Most Popular",
    popular: true,
    features: ["3L Capacity", "For cats & dogs", "Stainless steel", "5 flow settings", "LED indicator"],
    gradient: "from-purple-400 to-blue-400",
  },
  {
    name: "PurrFlow Max",
    slug: "purrflow-max",
    price: 79.99,
    image: "/large-premium-pet-water-fountain-with-playful-dog.jpg",
    badge: "🐶 Best for Dogs",
    features: ["5L Capacity", "Multi-pet households", "Premium materials", "App connected", "Auto-refill alert"],
    gradient: "from-blue-400 to-teal-400",
  },
]

export function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-secondary/20 to-accent/10 relative">
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-bounce" style={{ animationDuration: "3s" }}>
        🐱
      </div>
      <div
        className="absolute bottom-20 right-10 text-6xl opacity-10 animate-bounce"
        style={{ animationDuration: "2.8s" }}
      >
        🐶
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Perfect Fountain
            </span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            From single cats to multi-pet households, we have the paw-fect solution for every family!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-4 ${
                product.popular
                  ? "ring-4 ring-primary/50 shadow-2xl scale-105 border-primary"
                  : "border-border hover:border-primary/50"
              } transition-all hover:-translate-y-1`}
            >
              {product.popular && (
                <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-3 text-base font-display font-bold shadow-lg">
                  ⭐ Most Popular Choice ⭐
                </div>
              )}
              <div className="p-6 space-y-6">
                <div
                  className={`relative aspect-square bg-gradient-to-br ${product.gradient} rounded-3xl overflow-hidden p-4`}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  <Badge className="absolute top-4 right-4 text-base font-bold shadow-lg">{product.badge}</Badge>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">{product.name}</h3>
                </div>

                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-semibold">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/product/${product.slug}`}>
                  <Button
                    className={`w-full rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all ${
                      product.popular ? "" : "bg-gradient-to-r from-primary to-secondary"
                    }`}
                    variant={product.popular ? "default" : "default"}
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
