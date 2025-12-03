import { ArrowLeft, Package, Truck, Globe } from "lucide-react"
import Link from "next/link"

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-primary/5">
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
            Shipping Policy
          </h1>
          <p className="text-foreground/60 mb-8 font-semibold">Last updated: January 2025</p>

          <div className="space-y-6 text-foreground/80 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Package className="h-6 w-6 text-primary" />
                1. Processing Time
              </h2>
              <p>
                Orders are typically processed and shipped within 1-2 business days (Monday-Friday, excluding holidays).
                You will receive an email confirmation once your order has been placed, and another email with tracking
                information once your order has shipped.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Truck className="h-6 w-6 text-secondary" />
                2. Shipping Methods and Costs
              </h2>
              <div className="space-y-3 mt-3">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border-2 border-primary/20">
                  <h3 className="font-bold text-foreground mb-2">Standard Shipping (5-7 business days)</h3>
                  <p>Free for orders over $50, otherwise $5.99</p>
                </div>
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-4 border-2 border-secondary/20">
                  <h3 className="font-bold text-foreground mb-2">Express Shipping (2-3 business days)</h3>
                  <p>$12.99 for all orders</p>
                </div>
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-4 border-2 border-accent/20">
                  <h3 className="font-bold text-foreground mb-2">Overnight Shipping (1 business day)</h3>
                  <p>$24.99 for all orders</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Globe className="h-6 w-6 text-accent" />
                3. Shipping Destinations
              </h2>
              <p>
                We currently ship to all addresses within the United Kingdom, including Northern Ireland. We also offer
                international shipping to select countries. Shipping times for international orders may vary depending
                on customs and location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Tracking Your Order</h2>
              <p>
                Once your order ships, you will receive a tracking number via email. You can use this number to track
                your package on the carrier's website. If you have not received tracking information within 3 business
                days, please contact our customer support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Damaged or Lost Packages</h2>
              <p>
                If your package arrives damaged, please contact us within 48 hours of delivery with photos of the
                damage. We will arrange for a replacement or refund. If your package is lost in transit, please contact
                us and we will work with the carrier to locate your package or send a replacement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Incorrect Address</h2>
              <p>
                Please ensure your shipping address is correct before completing your purchase. We are not responsible
                for packages shipped to incorrect addresses provided by the customer. If you need to update your
                shipping address, please contact us immediately - we can only make changes before the order ships.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Customs and Duties</h2>
              <p>
                For international orders, customers are responsible for any customs fees, duties, or taxes imposed by
                their country. These fees are not included in our shipping costs and vary by country.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Contact Us</h2>
              <p>
                If you have any questions about shipping, please contact us at shipping@purr-hydrate.com or call our
                customer support line at +44 20 1234 5678.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
