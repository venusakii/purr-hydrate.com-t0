export function TrustBadges() {
  const badges = [
    { icon: "⭐", text: "15,000+ Happy Pets", subtext: "5-Star Reviews" },
    { icon: "🏆", text: "Award Winning", subtext: "Best Pet Product 2024" },
    { icon: "🚚", text: "Free Shipping", subtext: "On Orders Over $50" },
    { icon: "🔒", text: "30-Day Guarantee", subtext: "100% Money Back" },
    { icon: "🌍", text: "Eco-Friendly", subtext: "BPA-Free Materials" },
  ]

  return (
    <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-1">
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="font-bold text-gray-900">{badge.text}</div>
              <div className="text-sm text-gray-600">{badge.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
