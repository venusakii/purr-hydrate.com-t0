import { Button } from "@/components/ui/button"
import { Sparkles, Check } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products-data"

export default function ProductsPage() {
  const productArray = Object.entries(products).map(([slug, product]) => ({
    slug,
    ...product,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 text-foreground text-sm font-bold shadow-lg">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Find Your Perfect Product 🐾</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-balance">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Complete Collection
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
            Fountains, feeders, bowls, and accessories - everything your pet needs for happy hydration and healthy
            meals!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1800px] mx-auto">
          {productArray.map((product) => (
            <div
              key={product.slug}
              className="relative bg-white/80 backdrop-blur rounded-3xl p-6 border-4 border-primary/10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular 🌟
                </div>
              )}

              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-xs font-bold mb-2">
                    {product.badge}
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-foreground/70 font-medium text-sm mb-2 line-clamp-2">{product.description}</p>
                </div>

                <ul className="space-y-1">
                  {product.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={`/product/${product.slug}`} className="block">
                  <Button
                    className={`w-full rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all ${
                      product.popular ? "" : "bg-gradient-to-r from-primary to-secondary"
                    }`}
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
