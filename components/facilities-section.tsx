"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Zap } from "lucide-react"

const facilities = [
  {
    id: 1,
    title: "Zona de Musculación",
    description: "Equipamiento moderno de primera línea para desarrollar fuerza y masa muscular.",
    image: "/images/programs/zona-musculacion.webp",
  },
  {
    id: 2,
    title: "Sector Cardio",
    description: "Cintas, bicicletas y equipos de última generación para maximizar tu resistencia.",
    image: "/images/programs/zona-cardio.webp",
  },
  {
    id: 3,
    title: "Espacios Amplios",
    description: "Ambientes bien iluminados y ventilados para entrenar con total comodidad.",
    image: "/images/programs/ambiente-limpio-profesional.webp",
  },
  {
    id: 4,
    title: "Equipamiento Moderno",
    description: "Máquinas de nivel profesional actualizadas para un entrenamiento efectivo.",
    image: "/images/programs/equipamiento-moderno.webp",
  },
  {
    id: 5,
    title: "Vestuarios",
    description: "Casilleros seguros y duchas con agua caliente para tu comodidad.",
    image: "/images/programs/casilleros.webp",
  },
]

export default function FacilitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + facilities.length) % facilities.length)
  }

  const visibleFacilities = [
    facilities[currentIndex],
    facilities[(currentIndex + 1) % facilities.length],
    facilities[(currentIndex + 2) % facilities.length],
  ]

  return (
    <section id="facilities" className="pt-12 pb-20 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A2E]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#FACC15]" />
              <p className="text-[#FACC15] text-sm font-semibold tracking-wider">NUESTRAS INSTALACIONES</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              COACH <span className="text-[#8B5CF6]">ENERGY</span> INSTALACIONES
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
              Hemos equipado Coach Energy con amenidades de última generación para apoyar cada paso de tu viaje fitness — desde zonas de entrenamiento intenso hasta espacios de recuperación.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 flex-shrink-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-[#8B5CF6] bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-[#8B5CF6] bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Facilities Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleFacilities.map((facility, index) => (
            <div key={`${facility.id}-${currentIndex}-${index}`} className="group">
              <div
                className="h-80 bg-cover bg-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-105 relative overflow-hidden border border-[#2D2D2D] group-hover:border-[#8B5CF6]/50"
                style={{
                  backgroundImage: `url('${facility.image}')`,
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{facility.title}</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
