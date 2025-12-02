export function SocialProof() {
  const images = [
    { src: "/happy-orange-cat-drinking-from-fountain.jpg", caption: "Luna loves her new fountain! 🧡" },
    { src: "/golden-retriever-puppy-with-water-fountain.jpg", caption: "Best purchase ever! 🐾" },
    { src: "/grey-tabby-cat-beside-modern-fountain.jpg", caption: "She drinks so much more now! 💙" },
    { src: "/small-dog-drinking-from-pet-fountain.jpg", caption: "My picky pup approves! 💜" },
    { src: "/white-cat-playing-with-water-fountain.jpg", caption: "Entertainment + hydration! 🎉" },
    { src: "/beagle-dog-with-pet-water-fountain.jpg", caption: "Worth every penny! ⭐" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-2 rounded-full mb-4">
            <span className="text-purple-600 font-semibold">📸 #PurrHydrate</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Join Our Happy Pet Community</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Over 15,000 pets are staying hydrated with Purr-Hydrate!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all transform group-hover:scale-105">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={`Pet ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white text-sm p-3 font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Share your pet's fountain moments!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white px-4 py-2 rounded-full text-purple-600 font-semibold shadow-md">
              #PurrHydrate
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-pink-600 font-semibold shadow-md">#HappyPets</span>
            <span className="bg-white px-4 py-2 rounded-full text-orange-600 font-semibold shadow-md">
              #PetHydration
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
