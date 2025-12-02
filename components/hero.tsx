import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="absolute inset-0 z-0">
        <img
          src="/cute-pastel-watercolor-background-with-playful-cat.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 text-9xl">🐾</div>
        <div className="absolute top-40 right-20 text-7xl">🐾</div>
        <div className="absolute bottom-20 left-1/4 text-8xl">🐾</div>
        <div className="absolute bottom-40 right-1/3 text-6xl">🐾</div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 text-foreground text-sm font-bold shadow-lg">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Vet Recommended & Pet Approved</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-balance">
              Happy Pets{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Love Fresh Water
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty max-w-xl">
              Transform your furry friend&apos;s hydration with our adorable, ultra-quiet water fountains. Watch your
              cats and dogs fall in love with drinking water again!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base rounded-full shadow-lg hover:shadow-xl transition-all">
                Shop Fountains 🐱🐶
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base rounded-full bg-background/80 backdrop-blur border-2 hover:bg-background"
              >
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary">50k+</p>
                <p className="text-sm font-semibold text-foreground/60">Happy Pets</p>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-primary to-secondary" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-secondary">4.9/5</p>
                <p className="text-sm font-semibold text-foreground/60">Customer Rating</p>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-secondary to-accent" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-accent">{"<25dB"}</p>
                <p className="text-sm font-semibold text-foreground/60">Whisper Quiet</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 border-4 border-white shadow-2xl">
              <img
                src="/cute-colorful-cat-drinking-from-modern-pet-water-f.jpg"
                alt="Purr-Hydrate Water Fountain"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl p-5 shadow-xl border-4 border-white">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl">
                  💧
                </div>
                <div>
                  <p className="font-display font-bold text-base">Triple Filtration</p>
                  <p className="text-sm font-semibold opacity-90">99.9% Pure</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 text-6xl animate-bounce" style={{ animationDuration: "3s" }}>
              🐱
            </div>
            <div
              className="absolute top-1/2 -left-6 text-5xl animate-bounce"
              style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
            >
              🐶
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
