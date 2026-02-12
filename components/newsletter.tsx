"use client"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="px-4 lg:px-8 max-w-2xl mx-auto text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
          Stay Updated
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-4 text-balance">
          Join the Kronos Circle
        </h2>
        <p className="text-secondary-foreground/70 text-sm mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and the
          art of fine watchmaking.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background text-foreground px-4 py-3 text-sm tracking-wider border border-border focus:outline-none focus:border-primary placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 text-sm tracking-widest uppercase hover:bg-[hsl(var(--gold-light))] transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
