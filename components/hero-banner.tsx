"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/hero-watch.jpg",
    title: "The Art of\nTimekeeping",
    subtitle: "Discover our new collection of handcrafted luxury timepieces",
    cta: "Shop New Arrivals",
    href: "#new-arrivals",
  },
  {
    image: "/images/hero-watch-2.jpg",
    title: "Precision\nMeets Elegance",
    subtitle: "Swiss-crafted movements with timeless design",
    cta: "Explore Collection",
    href: "#collections",
  },
]

export function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title.replace("\n", " ")}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-secondary/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-secondary-foreground leading-tight mb-4 whitespace-pre-line text-balance animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="text-secondary-foreground/80 text-sm md:text-lg tracking-wider mb-8 max-w-xl mx-auto">
                {slide.subtitle}
              </p>
              <Link
                href={slide.href}
                className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-[hsl(var(--gold-light))] transition-colors"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-secondary-foreground p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-secondary-foreground p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current
                ? "bg-primary w-6"
                : "bg-secondary-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
