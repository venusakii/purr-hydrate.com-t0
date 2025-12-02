import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-bold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border-4 border-primary/20">
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          <p className="text-foreground/60 mb-8 font-semibold">Last updated: January 2025</p>

          <div className="space-y-6 text-foreground/80 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using purr-hydrate.com, you accept and agree to be bound by these Terms of Service. If
                you do not agree to these terms, please do not use our website or purchase our products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Products and Services</h2>
              <p>
                Purr-Hydrate offers premium automatic water fountains designed for cats and dogs. We strive to provide
                accurate product descriptions and images, but we cannot guarantee that all information is error-free or
                complete. We reserve the right to modify or discontinue products at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Pricing and Payment</h2>
              <p>
                All prices are listed in USD and are subject to change without notice. We accept major credit cards and
                other payment methods as indicated on our website. Payment is due at the time of purchase, and orders
                will not be processed until payment is confirmed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Order Acceptance</h2>
              <p>
                We reserve the right to refuse or cancel any order for any reason, including but not limited to product
                availability, errors in pricing or product information, or suspected fraudulent activity. If your order
                is cancelled, we will refund any payment received.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Returns and Refunds</h2>
              <p>
                We offer a 30-day money-back guarantee on all products. If you are not satisfied with your purchase, you
                may return it within 30 days of delivery for a full refund. Products must be in original condition with
                all packaging and accessories included. Return shipping costs are the responsibility of the customer
                unless the product is defective.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Product Warranty</h2>
              <p>
                All Purr-Hydrate water fountains come with a 1-year manufacturer warranty against defects in materials
                and workmanship. This warranty does not cover normal wear and tear, misuse, or damage caused by pets. To
                make a warranty claim, please contact our customer support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Limitation of Liability</h2>
              <p>
                Purr-Hydrate shall not be liable for any indirect, incidental, special, or consequential damages arising
                from the use of our products. Our total liability shall not exceed the purchase price of the product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Intellectual Property</h2>
              <p>
                All content on purr-hydrate.com, including text, images, logos, and designs, is the property of
                Purr-Hydrate and is protected by copyright and trademark laws. You may not use our content without
                express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at support@purr-hydrate.com</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
