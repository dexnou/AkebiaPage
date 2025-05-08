import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import WhatsAppContact from "@/components/whatsapp-contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <WhatsAppContact />
      <Footer />
    </div>
  )
}
