import { Shield, Truck, RefreshCw, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "2-Year Warranty",
    description: "International warranty on all timepieces",
  },
  {
    icon: Truck,
    title: "Express Delivery",
    description: "Fast and insured shipping worldwide",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "7-day hassle-free exchange policy",
  },
  {
    icon: Award,
    title: "Certified Authentic",
    description: "Every watch comes with authenticity certificate",
  },
]

export function FeaturesBar() {
  return (
    <section className="py-12 lg:py-16 border-y border-border bg-background">
      <div className="px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-sm font-medium text-foreground tracking-wider uppercase mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
