import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sophie K.",
    location: "London, UK",
    avatar: "/happy-woman-with-cat.jpg",
    pet: "🐱 Cat owner",
    rating: 5,
    text: "My cat was always dehydrated. Since getting the PurrFlow, she drinks so much more! Her coat is shinier and she's more energetic. Best investment ever!",
  },
  {
    name: "Oliver B.",
    location: "Manchester, UK",
    avatar: "/smiling-man-with-dog.jpg",
    pet: "🐶 Dog owner",
    rating: 5,
    text: "Our golden retriever absolutely loves it! The quiet pump means it doesn't scare our other pets. Easy to clean and refill. Highly recommend!",
  },
  {
    name: "Charlotte W.",
    location: "Birmingham, UK",
    avatar: "/cheerful-woman-with-pets.jpg",
    pet: "🐱🐶 Multi-pet",
    rating: 5,
    text: "Game changer for our multi-pet household! No more fighting over water bowls. The filtration system keeps it fresh, and it looks great in our kitchen.",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-background to-primary/5 relative">
      <div className="absolute top-10 right-10 text-7xl opacity-10 animate-bounce" style={{ animationDuration: "3s" }}>
        😻
      </div>
      <div
        className="absolute bottom-10 left-10 text-7xl opacity-10 animate-bounce"
        style={{ animationDuration: "2.5s" }}
      >
        🐕
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Loved by Thousands of{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Pet Parents
            </span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Don&apos;t just take our word for it. Here&apos;s what real customers say about Purr-Hydrate!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-4 hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed font-medium">{`"${testimonial.text}"`}</p>
              <div className="flex items-center gap-3 pt-4 border-t-2">
                <Avatar className="h-12 w-12 border-2 border-primary/30">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                    {testimonial.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60 font-semibold">
                    {testimonial.pet} • {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
