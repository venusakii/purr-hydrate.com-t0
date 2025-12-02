export function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">See It In Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our fountain keeps pets happy and hydrated
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/happy-cat-and-dog-drinking-from-modern-water-fount.jpg"
              alt="Happy pets drinking from fountain"
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🐱</div>
              <div className="font-bold text-gray-900">For Cats</div>
              <div className="text-sm text-gray-600">Perfect height & flow</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🐶</div>
              <div className="font-bold text-gray-900">For Dogs</div>
              <div className="text-sm text-gray-600">Large capacity design</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏠</div>
              <div className="font-bold text-gray-900">Multi-Pet</div>
              <div className="text-sm text-gray-600">Great for households</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
