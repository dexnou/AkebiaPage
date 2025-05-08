import { Cake, Coffee, Clock, Award } from "lucide-react"

const features = [
  {
    icon: <Cake className="h-10 w-10 text-amber-600" />,
    title: "Recetas Tradicionales",
    description: "Utilizamos recetas familiares que han sido transmitidas de generación en generación.",
  },
  {
    icon: <Coffee className="h-10 w-10 text-amber-600" />,
    title: "Pan Fresco",
    description: "Disfruta de nuestro pan recién horneado, hecho con ingredientes de la más alta calidad.",
  },
  {
    icon: <Clock className="h-10 w-10 text-amber-600" />,
    title: "Servicio Rápido",
    description: "Atendemos a nuestros clientes con rapidez y amabilidad, asegurando una experiencia agradable.",
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">¿Por qué elegir Akebia?</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Estamos seguros de que nuestros productos son los mejores de zona sur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{feature.title}</h3>
              <p className="text-amber-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
