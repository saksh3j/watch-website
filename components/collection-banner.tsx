import Image from "next/image"
import Link from "next/link"

const collections = [
  {
    title: "Formal Elegance",
    description: "Timeless dress watches for the distinguished gentleman",
    image: "/images/watch-dress.jpg",
  },
  {
    title: "Adventure Ready",
    description: "Rugged timepieces built for exploration",
    image: "/images/watch-diver.jpg",
  },
  {
    title: "Daily Essentials",
    description: "Versatile watches for everyday sophistication",
    image: "/images/watch-classic.jpg",
  },
  {
    title: "Limited Editions",
    description: "Exclusive pieces for the true collector",
    image: "/images/watch-luxury.jpg",
  },
]

export function CollectionBanner() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
          Curated For You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
          Shop by Occasion
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {collections.map((col) => (
          <Link
            key={col.title}
            href="#"
            className="group relative aspect-[16/9] overflow-hidden bg-card"
          >
            <Image
              src={col.image}
              alt={col.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/60 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h3 className="font-serif text-2xl lg:text-3xl text-secondary-foreground mb-2 tracking-wider">
                {col.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm max-w-xs">
                {col.description}
              </p>
              <span className="mt-4 text-primary text-xs tracking-widest uppercase border border-primary px-4 py-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Explore
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
