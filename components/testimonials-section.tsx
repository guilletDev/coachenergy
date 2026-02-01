"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Zap } from "lucide-react"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Pichi Caratti",
      role: "Miembro Activo",
      rating: 5,
      text: "Excelente espacio para el entrenamiento en general, fresco, cómodo, variedad de elementos y buena disposición de sus entrenadores.",
      image: "/images/testimonios/diego.webp",
    },
    {
      name: "Roberto Magno",
      role: "Miembro Activo",
      rating: 5,
      text: "El lugar y las maquinas impecables. Los instructores muy atentos. Buen precio",
      image: "/images/testimonios/pablo.webp",
    },
    {
      name: "Lucía Fernández",
      role: "Miembro Activo",
      rating: 5,
      text: "El ambiente es increíble, muy buena onda de la gente y los profes. Super recomendado para empezar a entrenar.",
      image: "/images/testimonios/ana.webp",
    },
    {
      name: "Sofía Martínez",
      role: "Miembro Activo",
      rating: 5,
      text: "Las clases grupales son lo más, muy divertidas y exigentes. Las instalaciones siempre limpias y ordenadas.",
      image: "/images/testimonios/maria.webp",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
    testimonials[(currentIndex + 3) % testimonials.length],
  ]

  return (
    <section className="pt-12 pb-20 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A2E] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header - Mobile Optimized */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 gap-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#FACC15]" />
              <p className="text-[#FACC15] text-sm font-semibold tracking-wider">TESTIMONIOS</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              LO QUE DICEN <span className="text-[#8B5CF6]">NUESTROS MIEMBROS</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Historias reales de personas que transformaron sus vidas con Coach Energy.
            </p>
          </div>

          {/* Rating and Controls - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#FACC15] text-[#FACC15]" />
                ))}
              </div>
              <span className="text-white text-sm md:text-base">Calificado 4.8/5.0</span>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-[#8B5CF6] text-white hover:bg-[#8B5CF6] hover:text-white bg-transparent rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-[#FACC15] text-white hover:bg-[#FACC15] hover:text-black bg-transparent rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="bg-[#1A1A1A] rounded-xl p-4 md:p-6 text-center border border-[#2D2D2D] hover:border-[#8B5CF6]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-3 md:mb-4 bg-cover bg-center border-2 border-[#8B5CF6]"
                style={{
                  backgroundImage: `url('${testimonial.image}')`,
                }}
              />
              <h3 className="font-bold text-base md:text-lg mb-1 text-white">
                {testimonial.name}
              </h3>
              <p className="text-xs text-[#FACC15] mb-2 font-medium uppercase tracking-wider">{testimonial.role}</p>

              <div className="flex justify-center gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#FACC15] text-[#FACC15]" />
                ))}
              </div>

              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">&quot;{testimonial.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
