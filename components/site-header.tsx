import { Button } from "@/components/ui/button"
import { Heart, Sparkles } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="container mx-auto px-4 py-6 relative z-50 bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="relative">
            <Heart className="h-8 w-8 text-pink-500 fill-pink-500" />
            <Sparkles className="h-4 w-4 text-pink-300 absolute -top-1 -right-1" />
          </div>
          <span className="text-2xl font-display font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent">
            purr-hydrate
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm font-semibold hover:text-pink-500 transition-colors">
            Features
          </Link>
          <Link href="/products" className="text-sm font-semibold hover:text-pink-500 transition-colors">
            Products
          </Link>
          <Link href="/reviews" className="text-sm font-semibold hover:text-pink-500 transition-colors">
            Reviews
          </Link>
          <Button
            className="rounded-full shadow-lg hover:shadow-xl transition-shadow bg-pink-500 hover:bg-pink-600"
            size="sm"
            asChild
          >
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
