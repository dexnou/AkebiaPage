import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">akebia</h3>
            <p className="mb-4">Panadería artesanal en Lanús Oeste. Los mejores productos horneados desde 2015.</p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="hover:text-white transition-colors">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="hover:text-white transition-colors">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-white transition-colors">
                <Twitter />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Por qué elegirnos
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors">
                  Reseñas
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Politicas de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terminos de servicio
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Politicas de cookies
                </Link>
              </li>
            </ul>
          </div>

            <div>
            <h4 className="text-lg font-semibold mb-4">Contáctanos</h4>
            <p className="mb-4">Escribinos por WhatsApp para consultas y soporte.</p>
            <div className="flex">
              <a
              href="https://wa.me/?text=Hola!%20Quiero%20contactar%20a%20la%20pastelería"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded-r-md transition-colors flex items-center"
              >
              WhatsApp
              </a>
            </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} akebia Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
