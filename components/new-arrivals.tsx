import Image from "next/image"
import Link from "next/link"

const newProducts = [
  { name: "Zenith Moonphase", price: "$4,290", image: "/images/watch-luxury.jpg" },
  { name: "Titan Chrono X", price: "$1,690", image: "/images/watch-chronograph.jpg" },
  { name: "Nautilus Deep", price: "$2,090", image: "/images/watch-diver.jpg" },
  { name: "Solstice Gold", price: "$3,190", image: "/images/watch-dress.jpg" },
]

export function NewArrivals() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 max-w-7xl mx-auto" id="new-arrivals">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Just In
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            New Arrivals
          </h2>
        </div>
        <Link
          href="#"
          className="text-primary text-sm tracking-widest uppercase hover:underline"
        >
          View All &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {newProducts.map((product) => (
          <Link key={product.name} href="#" className="group block">
            <div className="relative aspect-[3/4] overflow-hidden bg-card mb-3">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-wider uppercase px-2 py-1 font-medium">
                New
              </div>
            </div>
            <h3 className="text-sm lg:text-base font-medium text-foreground group-hover:text-primary transition-colors tracking-wide">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">{product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
