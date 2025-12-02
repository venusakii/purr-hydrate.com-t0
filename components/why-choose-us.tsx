import { Heart, Shield, Leaf, Clock } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Heart,
      title: "Pet Health First",
      description: "Designed by veterinarians to encourage natural drinking habits and promote kidney health",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Made from food-grade materials, BPA-free, and built to last for years of happy hydration",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description: "Reduce plastic waste from water bottles. Energy-efficient pump uses less power than a lightbulb",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Ultra Quiet",
      description: "Whisper-quiet operation won't disturb you or your pets. Perfect for day and night use",
      gradient: "from-orange-500 to-amber-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Pet Parents Love Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy pet owners who've made the switch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6`}
              >
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
