import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Classic", image: "/images/watch-classic.jpg" },
  { name: "Chronograph", image: "/images/watch-chronograph.jpg" },
  { name: "Diver", image: "/images/watch-diver.jpg" },
  { name: "Dress", image: "/images/watch-dress.jpg" },
  { name: "Sport", image: "/images/watch-sport.jpg" },
  { name: "Automatic", image: "/images/watch-automatic.jpg" },
]

export function ShopByCategory() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 max-w-7xl mx-auto" id="collections">
      <div className="text-center mb-12">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
          Explore
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href="#"
            className="group relative aspect-[3/4] overflow-hidden bg-card"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-secondary/30 group-hover:bg-secondary/50 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
              <h3 className="font-serif text-lg lg:text-xl text-secondary-foreground tracking-wider">
                {cat.name}
              </h3>
              <span className="text-secondary-foreground/70 text-xs tracking-widest uppercase mt-1 inline-block group-hover:text-primary transition-colors">
                Shop Now &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
