import { Shield, RefreshCw, Award } from "lucide-react"

export function Guarantee() {
  const guarantees = [
    {
      icon: Shield,
      title: "30-Day Money Back",
      description: "Not happy? Get a full refund, no questions asked",
    },
    {
      icon: RefreshCw,
      title: "1-Year Warranty",
      description: "Free replacement if anything goes wrong",
    },
    {
      icon: Award,
      title: "Lifetime Support",
      description: "Our team is here to help, always",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Promise To You</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            We stand behind every fountain with industry-leading guarantees
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <guarantee.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{guarantee.title}</h3>
              <p className="text-purple-100">{guarantee.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl">
            <p className="text-lg font-semibold">
              🎁 Plus get <span className="text-yellow-300">FREE filters for life</span> with your first order!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
