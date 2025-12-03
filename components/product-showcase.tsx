import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products-data"

const productArray = Object.entries(products).map(([slug, data]) => ({
  slug,
  ...data,
}))

const featuredProducts = [
  productArray.find((p) => p.slug === "veken-fountain") || productArray[2],
  productArray.find((p) => p.slug === "catit-fountain") || productArray[5],
  productArray.find((p) => p.slug === "petlibro-wireless") || productArray[10],
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
          {featuredProducts.map((product, index) => (
            <Card
              key={product.slug}
              className={`overflow-hidden border-4 ${
                index === 1
                  ? "ring-4 ring-primary/50 shadow-2xl scale-105 border-primary"
                  : "border-border hover:border-primary/50"
              } transition-all hover:-translate-y-1`}
            >
              {index === 1 && (
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
                      index === 1 ? "" : "bg-gradient-to-r from-primary to-secondary"
                    }`}
                    variant={index === 1 ? "default" : "default"}
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
