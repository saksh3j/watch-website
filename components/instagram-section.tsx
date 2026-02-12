import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

const images = [
  "/images/watch-classic.jpg",
  "/images/watch-chronograph.jpg",
  "/images/watch-diver.jpg",
  "/images/watch-dress.jpg",
  "/images/watch-sport.jpg",
  "/images/watch-automatic.jpg",
]

export function InstagramSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="text-center mb-10">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
          @kronos_watches
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
          Follow Us on Instagram
        </h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
        {images.map((img, i) => (
          <Link
            key={i}
            href="#"
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={img}
              alt={`Kronos Instagram post ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/50 transition-colors flex items-center justify-center">
              <Instagram className="h-6 w-6 text-secondary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
