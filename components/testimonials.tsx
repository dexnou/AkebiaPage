import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "The pastries at akebia are simply divine! I can't start my day without their croissants.",
    name: "María Fernández",
    title: "Local Resident",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Their cakes made our family celebration extra special. The attention to detail is remarkable!",
    name: "Carlos Rodríguez",
    title: "Satisfied Customer",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "As a coffee enthusiast, I appreciate how their pastries perfectly complement my morning brew.",
    name: "Laura Gómez",
    title: "Coffee Shop Owner",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-amber-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-amber-400 mb-4" />
                <p className="text-amber-800 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                    <p className="text-sm text-amber-700">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
