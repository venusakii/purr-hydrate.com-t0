import { Button } from "@/components/ui/button"
import { Heart, Sparkles } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="container mx-auto px-4 py-6 relative z-50">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="relative">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <Sparkles className="h-4 w-4 text-secondary absolute -top-1 -right-1" />
          </div>
          <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            purr-hydrate
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm font-semibold hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/products" className="text-sm font-semibold hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="/reviews" className="text-sm font-semibold hover:text-primary transition-colors">
            Reviews
          </Link>
          <Button className="rounded-full shadow-lg hover:shadow-xl transition-shadow" size="sm" asChild>
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
