import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Heritage Chronograph",
    price: "$1,290",
    originalPrice: "$1,490",
    image: "/images/watch-chronograph.jpg",
    badge: "Bestseller",
  },
  {
    name: "Royal Classic",
    price: "$890",
    originalPrice: null,
    image: "/images/watch-classic.jpg",
    badge: null,
  },
  {
    name: "Ocean Diver Pro",
    price: "$1,590",
    originalPrice: "$1,790",
    image: "/images/watch-diver.jpg",
    badge: "New",
  },
  {
    name: "Elegance Rose Gold",
    price: "$2,190",
    originalPrice: null,
    image: "/images/watch-dress.jpg",
    badge: null,
  },
  {
    name: "Apex Sport",
    price: "$790",
    originalPrice: "$990",
    image: "/images/watch-sport.jpg",
    badge: "Sale",
  },
  {
    name: "Mechanique Skeleton",
    price: "$3,490",
    originalPrice: null,
    image: "/images/watch-automatic.jpg",
    badge: "Limited",
  },
  {
    name: "Imperial Diamond",
    price: "$5,890",
    originalPrice: null,
    image: "/images/watch-luxury.jpg",
    badge: "Exclusive",
  },
  {
    name: "Aviator Vintage",
    price: "$1,090",
    originalPrice: "$1,290",
    image: "/images/watch-vintage.jpg",
    badge: "New",
  },
]

export function Bestsellers() {
  return (
    <section className="py-16 lg:py-24 bg-card" id="bestsellers">
      <div className="px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Our Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              href="#"
              className="group bg-background p-3 lg:p-4 block"
            >
              <div className="relative aspect-square overflow-hidden mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] tracking-wider uppercase px-2 py-1 font-medium">
                    {product.badge}
                  </span>
                )}
              </div>
              <h3 className="text-sm lg:text-base font-medium text-foreground group-hover:text-primary transition-colors tracking-wide">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-semibold text-foreground">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="#"
            className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Watches
          </Link>
        </div>
      </div>
    </section>
  )
}
