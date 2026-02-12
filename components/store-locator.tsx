import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

const stores = [
  { city: "Jaipur", address: "C-Scheme, MI Road" },
  { city: "Mumbai", address: "Colaba Causeway" },
  { city: "Delhi", address: "Connaught Place" },
  { city: "Bangalore", address: "MG Road" },
  { city: "Hyderabad", address: "Banjara Hills" },
  { city: "Ahmedabad", address: "CG Road" },
]

export function StoreLocator() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 max-w-7xl mx-auto" id="stores">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Visit Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Our Stores
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
            Experience the beauty of our timepieces in person. Visit any of our
            luxury boutiques across India for a personalized consultation with
            our watch experts.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stores.map((store) => (
              <Link
                key={store.city}
                href="#"
                className="flex items-start gap-2 group p-3 bg-card hover:bg-primary/5 transition-colors"
              >
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    Kronos {store.city}
                  </p>
                  <p className="text-xs text-muted-foreground">{store.address}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden bg-card">
          <Image
            src="/images/store-interior.jpg"
            alt="Kronos luxury watch store interior"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
