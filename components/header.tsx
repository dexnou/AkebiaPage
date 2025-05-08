"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-amber-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image src="/placeholder.svg?height=40&width=40" alt="akebia logo" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold text-amber-800">akebia</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-amber-900 hover:text-amber-600 transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-amber-900 hover:text-amber-600 transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-amber-900 hover:text-amber-600 transition-colors">
            Products
          </Link>
          <Link href="#contact" className="text-amber-900 hover:text-amber-600 transition-colors">
            Contact
          </Link>
          <Button className="bg-amber-600 hover:bg-amber-700">Order Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-amber-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-amber-100">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-amber-900 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-amber-900 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-amber-900 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#contact"
              className="text-amber-900 hover:text-amber-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-amber-600 hover:bg-amber-700 w-full">Order Now</Button>
          </div>
        </div>
      )}
    </header>
  )
}
