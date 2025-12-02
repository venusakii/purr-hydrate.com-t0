import { Check, X } from "lucide-react"

export function Comparison() {
  const features = [
    "Encourages natural drinking",
    "Filtered, clean water",
    "Reduces bacteria growth",
    "Large capacity (2L+)",
    "Easy to clean",
    "Quiet operation",
    "Energy efficient",
    "Dishwasher safe parts",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Water Fountain vs Regular Bowl</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">See why thousands are making the switch</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="py-3 text-gray-700 font-medium">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                ⭐ Best Choice
              </div>
              <h3 className="text-xl font-bold mb-6">Purr-Hydrate</h3>
              <div className="space-y-4">
                {features.map((_, index) => (
                  <div key={index} className="py-3 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Regular Bowl</h3>
              <div className="space-y-4">
                <div className="py-3 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <div className="py-3 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <div className="py-3 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <div className="py-3 flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <div className="py-3 flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <div className="py-3 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <div className="py-3 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <div className="py-3 flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
