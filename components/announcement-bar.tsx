"use client"

import { X } from "lucide-react"
import { useState } from "react"

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative bg-secondary text-secondary-foreground py-2.5 text-center text-sm tracking-widest uppercase">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span className="mx-8">Free Shipping on Orders Above $500</span>
        <span className="mx-8 text-primary">&#9670;</span>
        <span className="mx-8">Flat 10% Off on All Timepieces</span>
        <span className="mx-8 text-primary">&#9670;</span>
        <span className="mx-8">2 Year International Warranty</span>
        <span className="mx-8 text-primary">&#9670;</span>
        <span className="mx-8">Free Shipping on Orders Above $500</span>
        <span className="mx-8 text-primary">&#9670;</span>
        <span className="mx-8">Flat 10% Off on All Timepieces</span>
        <span className="mx-8 text-primary">&#9670;</span>
        <span className="mx-8">2 Year International Warranty</span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
