import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { CategoryBar } from "@/components/category-bar"
import { HeroBanner } from "@/components/hero-banner"
import { ShopByCategory } from "@/components/shop-by-category"
import { Bestsellers } from "@/components/bestsellers"
import { CollectionBanner } from "@/components/collection-banner"
import { NewArrivals } from "@/components/new-arrivals"
import { Testimonials } from "@/components/testimonials"
import { StoreLocator } from "@/components/store-locator"
import { AboutSection } from "@/components/about-section"
import { FeaturesBar } from "@/components/features-bar"
import { Newsletter } from "@/components/newsletter"
import { InstagramSection } from "@/components/instagram-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <CategoryBar />
      <HeroBanner />
      <NewArrivals />
      <ShopByCategory />
      <Bestsellers />
      <CollectionBanner />
      <AboutSection />
      <StoreLocator />
      <Testimonials />
      <FeaturesBar />
      <InstagramSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
