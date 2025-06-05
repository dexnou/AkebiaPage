import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
            Productos artesanales Hechos con Amor
          </h1>
          <p className="text-lg md:text-xl text-amber-800">
            Descubre el auténtico sabor de los pasteles caseros en akebia,
            la panadería de Lanús Oeste. Usamos solo los mejores ingredientes para crear recuerdos deliciosos.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/placeholder.png?height=500&width=600"
            alt="Freshly baked pastries"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
