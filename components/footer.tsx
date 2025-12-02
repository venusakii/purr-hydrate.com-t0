import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 border-t-4 border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary fill-primary" />
              <span className="text-xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                purr-hydrate
              </span>
            </div>
            <p className="text-sm text-foreground/70 font-medium">
              Premium automatic water fountains for happy, healthy pets! 🐱🐶💧
            </p>
          </div>

          {/* Placeholder for additional columns */}
          {/* Placeholder for additional columns */}
          {/* Placeholder for additional columns */}
        </div>

        <div className="border-t-2 border-gradient-to-r from-primary via-secondary to-accent pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/70 font-semibold">
          <p>© 2025 purr-hydrate.com. Made with ❤️ for pets.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/shipping-policy" className="hover:text-primary transition-colors">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
