export function PetTypes() {
  const petTypes = [
    {
      emoji: "🐱",
      type: "Cats",
      description: "Perfect for picky felines who prefer running water",
      tips: ["Encourages shy drinkers", "Prevents whisker fatigue", "Ideal for kidney health"],
    },
    {
      emoji: "🐶",
      type: "Small Dogs",
      description: "Great for Chihuahuas, Yorkies, and toy breeds",
      tips: ["Easy-to-reach height", "Gentle water flow", "Compact design"],
    },
    {
      emoji: "🐕",
      type: "Large Dogs",
      description: "High capacity for Labs, Golden Retrievers, and more",
      tips: ["2L+ capacity", "Sturdy construction", "Fast water circulation"],
    },
    {
      emoji: "🏡",
      type: "Multi-Pet Homes",
      description: "Perfect for households with multiple furry friends",
      tips: ["Shared hydration", "Large reservoir", "Easy maintenance"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Perfect For Every Pet</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you have a curious kitten or a thirsty Great Dane
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {petTypes.map((pet, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4 text-center">{pet.emoji}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{pet.type}</h3>
              <p className="text-gray-600 mb-4 text-center">{pet.description}</p>
              <ul className="space-y-2">
                {pet.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
