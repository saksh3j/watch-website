import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-card" id="about">
      <div className="px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/about-workshop.jpg"
              alt="Kronos master watchmaker workshop"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Welcome to Kronos
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Born in the heart of Jaipur, Kronos represents a perfect fusion of
                traditional Indian craftsmanship and Swiss precision engineering. Each
                timepiece is a testament to our commitment to excellence, designed for
                those who appreciate the finer things in life.
              </p>
              <p>
                Our master watchmakers bring decades of experience to every creation,
                ensuring that each watch is not just a timekeeping instrument, but a
                work of art that tells a story of heritage, innovation, and timeless
                elegance.
              </p>
              <p>
                From classic dress watches to rugged dive companions, every Kronos
                timepiece is crafted with premium materials and meticulous attention
                to detail, backed by our 2-year international warranty.
              </p>
            </div>
            <Link
              href="#"
              className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-[hsl(var(--gold-light))] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
