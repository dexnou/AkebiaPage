import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "¡Las facturas en Akebia son simplemente increibles! No puedo empezar mi día sin sus medialunas.",
    name: "María Fernández",
    title: "Residente Local",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Sus pasteles hicieron que nuestra celebración familiar fuera extra especial. ¡La atención al detalle es notable!",
    name: "Carlos Rodríguez",
    title: "Cliente Satisfecho",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Como entusiasta del café, aprecio cómo sus pasteles complementan perfectamente mi café matutino.",
    name: "Laura Gómez",
    title: "Dueña de Cafetería",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Nuestros clientes frecuentes dicen</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            No solo confíes en nuestra palabra: estos son nuestros clientes satisfechos.
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
