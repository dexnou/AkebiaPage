import { Cake, Coffee, Clock, Award } from "lucide-react"

const features = [
  {
    icon: <Cake className="h-10 w-10 text-amber-600" />,
    title: "Artisanal Recipes",
    description: "Our pastries are made from scratch using traditional recipes passed down through generations.",
  },
  {
    icon: <Coffee className="h-10 w-10 text-amber-600" />,
    title: "Fresh Daily",
    description: "We bake fresh every morning to ensure you get the most delicious and aromatic pastries.",
  },
  {
    icon: <Clock className="h-10 w-10 text-amber-600" />,
    title: "Quick Service",
    description: "Order ahead and skip the line with our convenient pickup service.",
  },
  {
    icon: <Award className="h-10 w-10 text-amber-600" />,
    title: "Award Winning",
    description: "Recognized for our exceptional quality and taste in local culinary competitions.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Why Choose akebia?</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            We're committed to providing the best bakery experience in Lanús Oeste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
