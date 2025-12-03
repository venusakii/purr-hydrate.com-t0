import { Button } from "@/components/ui/button"
import { Sparkles, Check, ShoppingCart } from "lucide-react"
import { products as productsData } from "@/lib/products-data"
import Link from "next/link"

export default function ShopPage() {
  const productArray = Object.values(productsData).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-balance">
            Shop Our{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Fountains
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
            Transform your pet&apos;s hydration today with our premium water fountains. All fountains come with a 30-day
            money-back guarantee!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {productArray.map((product) => (
            <div
              key={product.slug}
              className={`relative bg-white/80 backdrop-blur rounded-3xl p-8 border-4 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 ${
                product.popular ? "border-primary scale-105" : "border-primary/10"
              }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  {product.badge}
                </div>
              )}

              <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">{product.name}</h3>
                  
                  
                  <p className="text-sm text-green-600 font-bold mt-1">✓ In Stock - Ships within 24h</p>
                </div>

                <ul className="space-y-2">
                  {product.features.slice(0, 6).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={`/product/${product.slug}`}>
                  <Button
                    className={`w-full rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all ${
                      product.popular ? "" : "bg-gradient-to-r from-primary to-secondary"
                    }`}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white/60 backdrop-blur rounded-2xl border-2 border-primary/20">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
            <p className="text-sm text-foreground/70">On orders over £50</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur rounded-2xl border-2 border-secondary/20">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="font-bold text-lg mb-2">30-Day Returns</h3>
            <p className="text-sm text-foreground/70">Money-back guarantee</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur rounded-2xl border-2 border-accent/20">
            <div className="text-4xl mb-3">💝</div>
            <h3 className="font-bold text-lg mb-2">2-Year Warranty</h3>
            <p className="text-sm text-foreground/70">On all fountains</p>
          </div>
        </div>
      </section>
    </div>
  )
}
