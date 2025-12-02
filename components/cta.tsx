import { Button } from "@/components/ui/button"
import { Gift, Truck, RotateCcw } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl animate-bounce" style={{ animationDuration: "3s" }}>
          🐾
        </div>
        <div className="absolute top-20 right-20 text-7xl animate-bounce" style={{ animationDuration: "2.8s" }}>
          💧
        </div>
        <div className="absolute bottom-20 left-1/3 text-9xl animate-bounce" style={{ animationDuration: "3.2s" }}>
          ❤️
        </div>
        <div className="absolute bottom-10 right-10 text-6xl animate-bounce" style={{ animationDuration: "2.5s" }}>
          🐾
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-balance">
            Give Your Fur Baby the Gift of Fresh Water! 💝
          </h2>
          <p className="text-xl opacity-95 text-pretty max-w-2xl mx-auto font-semibold">
            Join 50,000+ happy pet parents. Order today and see the difference in your pet&apos;s health and happiness!
          </p>

          

          <div className="grid sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/10 backdrop-blur border-2 border-white/20">
              <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Truck className="h-7 w-7" />
              </div>
              <p className="font-display font-bold text-lg">Free Shipping</p>
              <p className="text-sm opacity-90 font-semibold">On all UK orders</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/10 backdrop-blur border-2 border-white/20">
              <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <RotateCcw className="h-7 w-7" />
              </div>
              <p className="font-display font-bold text-lg">60-Day Returns</p>
              <p className="text-sm opacity-90 font-semibold">Risk-free guarantee</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/10 backdrop-blur border-2 border-white/20">
              <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Gift className="h-7 w-7" />
              </div>
              <p className="font-display font-bold text-lg">Free Filter Set</p>
              <p className="text-sm opacity-90 font-semibold">With first purchase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
