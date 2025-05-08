import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
            Artisanal Baked Goods Made with Love
          </h1>
          <p className="text-lg md:text-xl text-amber-800">
            Discover the authentic taste of homemade pastries at akebia, Lanús Oeste's premier bakery. We use only the
            finest ingredients to create delicious memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-6 text-lg">View Our Menu</Button>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-6 text-lg">
              Visit Us <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Freshly baked pastries"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
