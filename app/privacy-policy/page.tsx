import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-secondary/5">
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
            Privacy Policy
          </h1>
          <p className="text-foreground/60 mb-8 font-semibold">Last updated: January 2025</p>

          <div className="space-y-6 text-foreground/80 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                At purr-hydrate.com, we collect information that you provide directly to us, including your name, email
                address, shipping address, and payment information when you make a purchase. We also collect information
                about your pets to help us provide better recommendations for our water fountains.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and shipping updates</li>
                <li>Respond to your questions and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Information Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with
                service providers who help us operate our business, such as payment processors and shipping companies.
                These partners are required to protect your information and use it only for the services they provide to
                us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Data Security</h2>
              <p>
                We take the security of your personal information seriously and implement appropriate technical and
                organizational measures to protect it. However, no method of transmission over the internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Cookies</h2>
              <p>
                We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and
                personalize content. You can control cookies through your browser settings, though some features of our
                site may not function properly if you disable cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at
                privacy@purr-hydrate.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
