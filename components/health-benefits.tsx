import { Activity, Brain, Sparkles, TrendingUp } from "lucide-react"

export function HealthBenefits() {
  const benefits = [
    {
      icon: Activity,
      stat: "2.5x",
      title: "More Water Intake",
      description: "Pets drink significantly more from flowing water fountains",
    },
    {
      icon: Brain,
      stat: "95%",
      title: "Reduced UTIs",
      description: "Better hydration prevents urinary tract infections",
    },
    {
      icon: Sparkles,
      stat: "100%",
      title: "Fresh Water",
      description: "Filtered circulation keeps water clean and oxygenated",
    },
    {
      icon: TrendingUp,
      stat: "30%",
      title: "Kidney Health",
      description: "Improved kidney function through consistent hydration",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-2 rounded-full mb-4">
            <span className="text-purple-600 font-semibold">🏥 Vet Recommended</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Proven Health Benefits</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Science-backed hydration for healthier, happier pets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-10 h-10 text-purple-600" />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {benefit.stat}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
