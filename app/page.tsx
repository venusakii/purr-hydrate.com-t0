import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { ProductShowcase } from "@/components/product-showcase"
import { Benefits } from "@/components/benefits"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HealthBenefits } from "@/components/health-benefits"
import { Comparison } from "@/components/comparison"
import { VideoSection } from "@/components/video-section"
import { PetTypes } from "@/components/pet-types"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { SocialProof } from "@/components/social-proof"
import { Guarantee } from "@/components/guarantee"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBadges />
      <Features />
      <HowItWorks />
      <ProductShowcase />
      <Benefits />
      <WhyChooseUs />
      <HealthBenefits />
      <Comparison />
      <VideoSection />
      <PetTypes />
      <Testimonials />
      <FAQ />
      <SocialProof />
      <Guarantee />
      <CTA />
    </main>
  )
}
