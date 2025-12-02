import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Star } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sophie K.",
      avatar: "/happy-woman-with-cat.jpg",
      pet: "Cat: Luna",
      location: "London, UK",
      rating: 5,
      text: "My cat Luna was always dehydrated, but since getting this fountain she drinks SO much more water! The quiet pump doesn't scare her at all. Best purchase ever!",
      date: "2 weeks ago",
    },
    {
      name: "Oliver B.",
      avatar: "/smiling-man-with-dog.jpg",
      pet: "Dog: Max",
      location: "Manchester, UK",
      rating: 5,
      text: "Max absolutely loves this fountain! The flowing water keeps him interested and he's drinking way more than before. Easy to clean and looks great in our kitchen.",
      date: "1 month ago",
    },
    {
      name: "Charlotte W.",
      avatar: "/cheerful-woman-with-pets.jpg",
      pet: "Cat & Dog",
      location: "Edinburgh, UK",
      rating: 5,
      text: "I have both a cat and a dog, and they both use this fountain happily! The large capacity means I don't have to refill it constantly. Highly recommend!",
      date: "3 weeks ago",
    },
    {
      name: "James P.",
      avatar: "/happy-man-with-pet.jpg",
      pet: "Cat: Whiskers",
      location: "Bristol, UK",
      rating: 5,
      text: "The triple filtration system gives me peace of mind. Whiskers is drinking cleaner water and I can tell the difference. Worth every penny!",
      date: "1 week ago",
    },
    {
      name: "Emma T.",
      avatar: "/smiling-woman-cat.png",
      pet: "Cat: Bella",
      location: "Birmingham, UK",
      rating: 5,
      text: "So quiet! I was worried it would disturb Bella at night, but we can't even hear it running. She's obsessed with watching the water flow.",
      date: "2 months ago",
    },
    {
      name: "Daniel M.",
      avatar: "/happy-man-with-dog.jpg",
      pet: "Dog: Charlie",
      location: "Leeds, UK",
      rating: 5,
      text: "Charlie drinks triple the amount now! His vet noticed the improvement in his health at his last checkup. This fountain is a game changer.",
      date: "1 month ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 text-foreground text-sm font-bold shadow-lg">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Loved by Pets & Their Parents</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-balance">
            Customer{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Reviews
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
            See what thousands of happy pet parents are saying about their Purr-Hydrate fountains.
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-primary">4.9</div>
              <div className="flex gap-1 mt-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm font-semibold text-foreground/60 mt-2">Based on 12,500+ reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur rounded-3xl p-8 border-4 border-primary/10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed font-medium">{`"${review.text}"`}</p>

              <div className="flex items-center gap-3 pt-4 border-t-2">
                <Avatar className="h-12 w-12 border-2 border-primary/30">
                  <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                    {review.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-foreground/60 font-semibold">
                    {review.pet} • {review.location}
                  </p>
                </div>
                <p className="text-xs text-foreground/50 font-semibold">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Join Our Happy Pet Family</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Over 50,000 pets are already enjoying fresher, cleaner water. Will yours be next?
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-full text-lg font-bold shadow-xl"
            asChild
          >
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
