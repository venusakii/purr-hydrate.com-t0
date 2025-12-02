import { Droplet, Filter, Zap } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Droplet,
      title: "Fill With Fresh Water",
      description: "Simply fill the large 2L reservoir with clean water. No complicated setup required!",
      color: "bg-gradient-to-br from-blue-400 to-cyan-400",
    },
    {
      number: "2",
      icon: Filter,
      title: "Triple Filtration System",
      description: "Our advanced filters remove impurities, hair, and debris for crystal-clear water.",
      color: "bg-gradient-to-br from-purple-400 to-pink-400",
    },
    {
      number: "3",
      icon: Zap,
      title: "Watch Them Drink More!",
      description: "Flowing water attracts pets naturally, encouraging healthy hydration all day long.",
      color: "bg-gradient-to-br from-orange-400 to-yellow-400",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get your furry friend hydrated in 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl">
                <div
                  className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto`}
                >
                  {step.number}
                </div>
                <div className="flex justify-center mb-4">
                  <step.icon className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {step.number !== "3" && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-purple-300">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
