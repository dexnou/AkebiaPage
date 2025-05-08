"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function WhatsAppContact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Contact Us on WhatsApp</h2>
        <p className="text-lg text-amber-700 max-w-2xl mx-auto mb-8">
          Have questions or want to place an order? Reach out to us directly via WhatsApp for quick responses.
        </p>

        <Button
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg flex items-center mx-auto"
          onClick={() => window.open("https://wa.me/5491112345678", "_blank")}
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Chat with Us on WhatsApp
        </Button>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-amber-900 mb-4">Visit Our Bakery</h3>
          <p className="text-amber-700 mb-2">Av. Hipólito Yrigoyen 4567</p>
          <p className="text-amber-700 mb-2">Lanús Oeste, Buenos Aires</p>
          <p className="text-amber-700 mb-2">Argentina</p>
          <p className="text-amber-700 mb-6">CP 1824</p>

          <h4 className="text-lg font-semibold text-amber-900 mb-2">Opening Hours</h4>
          <p className="text-amber-700 mb-1">Monday - Friday: 7:00 AM - 8:00 PM</p>
          <p className="text-amber-700 mb-1">Saturday: 8:00 AM - 6:00 PM</p>
          <p className="text-amber-700">Sunday: 9:00 AM - 2:00 PM</p>
        </div>
      </div>
    </section>
  )
}
