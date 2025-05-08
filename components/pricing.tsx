import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Artisanal Croissants",
    description: "Buttery, flaky croissants made with premium ingredients",
    price: 250,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Specialty Cakes",
    description: "Custom cakes for any occasion, made with love",
    price: 2500,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Assorted Cookies",
    description: "A variety of cookies baked to perfection",
    price: 180,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Fruit Tarts",
    description: "Delicate pastry filled with seasonal fruits",
    price: 350,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Chocolate Muffins",
    description: "Rich, moist muffins with chocolate chips",
    price: 200,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Sourdough Bread",
    description: "Traditional sourdough with a perfect crust",
    price: 300,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Delicious Offerings</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Explore our range of freshly baked goods, made with the finest ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-amber-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h3>
                <p className="text-amber-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-800">AR${product.price}</span>
                  <Button className="bg-amber-600 hover:bg-amber-700">Order Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
