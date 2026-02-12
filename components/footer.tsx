import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="px-4 lg:px-8 max-w-7xl mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-2xl tracking-wider mb-4 block">
              KRONOS
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
              Crafting timeless timepieces since 2010. Premium watches that
              blend tradition with modern innovation.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                Instagram
              </Link>
              <Link href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                Facebook
              </Link>
              <Link href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                Twitter
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Quick links">
              <Link href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                New Arrivals
              </Link>
              <Link href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Bestsellers
              </Link>
              <Link href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Collections
              </Link>
              <Link href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Gift Cards
              </Link>
              <Link href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Sale
              </Link>
            </nav>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Information
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Information">
              <Link href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Our Stores
              </Link>
              <Link href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Warranty
              </Link>
              <Link href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Shipping Policy
              </Link>
              <Link href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                Returns & Exchange
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
              <p>support@kronos.com</p>
              <p>+91 98765 43210</p>
              <p>Mon - Sat: 10AM - 8PM</p>
              <p className="mt-2">
                C-Scheme, MI Road,<br />
                Jaipur, Rajasthan 302001
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="px-4 lg:px-8 max-w-7xl mx-auto py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-secondary-foreground/50">
            {'2026 Kronos Watches. All rights reserved.'}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-secondary-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-secondary-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
