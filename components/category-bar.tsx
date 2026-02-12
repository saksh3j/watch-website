import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "New Arrivals", image: "/images/watch-classic.jpg" },
  { name: "Chronograph", image: "/images/watch-chronograph.jpg" },
  { name: "Diver", image: "/images/watch-diver.jpg" },
  { name: "Dress", image: "/images/watch-dress.jpg" },
  { name: "Sport", image: "/images/watch-sport.jpg" },
  { name: "Automatic", image: "/images/watch-automatic.jpg" },
  { name: "Luxury", image: "/images/watch-luxury.jpg" },
  { name: "Vintage", image: "/images/watch-vintage.jpg" },
]

export function CategoryBar() {
  return (
    <section className="py-4 overflow-hidden bg-card border-b border-border">
      <div className="flex animate-scroll-x" style={{ width: "max-content" }}>
        {[...categories, ...categories].map((cat, i) => (
          <Link
            key={`${cat.name}-${i}`}
            href="#"
            className="flex flex-col items-center gap-2 px-4 lg:px-6 flex-shrink-0 group"
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors">
              <Image
                src={cat.image}
                alt={cat.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[11px] lg:text-xs tracking-wider uppercase text-muted-foreground group-hover:text-primary transition-colors font-medium whitespace-nowrap">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
