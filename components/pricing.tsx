import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Tartaleta",
    description: "Añadir descripción de Tartaleta aquí",
    price: 6880+"/Porción",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Tortas",
    description: "Añadir descripción de Tortas aquí",
    price: 8100+"/Porción",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Muffins DL",
    description: "Deliciosos muffins rellecons con dulce de leche y chispas de chocolate",
    price: 1750+" c/u",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Bombones",
    description: "Bombones rellenos con varias formas y sabores",
    price: 2000+"/Caja",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Cookies",
    description: "Poner descripción de Cookies aquí",
    price: 8900+"/Caja",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Alfajores",
    description: "Poner descripción de Alfajores aquí",
    price: 67890,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Nuestras recomendaciones</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Explora un mundo de sabores y texturas con nuestros productos horneados frescos, elaborados con los mejores ingredientes.
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
