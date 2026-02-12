"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    name: "Rajesh M.",
    text: "The Heritage Chronograph is absolutely stunning. The craftsmanship is impeccable, and it keeps perfect time. Worth every penny.",
    rating: 5,
    location: "Mumbai",
  },
  {
    name: "Priya S.",
    text: "I gifted the Royal Classic to my husband and he was thrilled. The packaging was beautiful and the watch exceeded our expectations.",
    rating: 5,
    location: "Delhi",
  },
  {
    name: "Arjun K.",
    text: "Outstanding customer service and an incredible watch. The Ocean Diver Pro has been my daily companion for months now.",
    rating: 5,
    location: "Bangalore",
  },
  {
    name: "Meera T.",
    text: "The attention to detail is remarkable. The Elegance Rose Gold is the perfect blend of style and sophistication.",
    rating: 5,
    location: "Jaipur",
  },
  {
    name: "Vikram D.",
    text: "Finally found a brand that matches international quality with incredible value. The Mechanique Skeleton is a true masterpiece.",
    rating: 5,
    location: "Hyderabad",
  },
  {
    name: "Ananya R.",
    text: "The store experience was phenomenal. The staff helped me choose the perfect watch for my collection. Will definitely be back!",
    rating: 5,
    location: "Chennai",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-secondary-foreground text-balance">
            Happy Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-background p-6 lg:p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {`"${review.text}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif text-sm font-bold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
