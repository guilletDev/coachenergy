"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-[#FACC15]" />
            <p className="text-[#FACC15] text-sm font-semibold tracking-wider">NUESTROS PROGRAMAS</p>
            <Zap className="w-5 h-5 text-[#FACC15]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            COACH <span className="text-[#8B5CF6]">ENERGY</span> PROGRAMAS
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Nuestros programas están diseñados para llevarte al siguiente nivel.
            Ya sea que busques ganar fuerza, mejorar tu movilidad o un entrenamiento personalizado,
            Coach Energy tiene lo que necesitás.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Strength Training */}
          <div className="bg-[#1A1A1A] rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 h-full flex flex-col border border-[#2D2D2D] hover:border-[#8B5CF6]/50">
            <div
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: `url('/images/programs/strength-branded.png')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col -mt-6 relative z-10">
              <h3 className="text-xl font-bold mb-2 text-white">Entrenamiento de Fuerza</h3>
              <p className="text-gray-400 mb-4 flex-1">Desarrolla masa muscular y fuerza con equipamiento profesional</p>
              <Button
                variant="outline"
                className="border-2 border-[#8B5CF6] text-white hover:bg-[#8B5CF6] hover:text-white bg-transparent transition-all duration-300 mt-auto"
                onClick={() => window.open("https://wa.me/5493872131333?text=Hola%20Coach%20Energy,%20quiero%20saber%20m%C3%A1s%20sobre%20Entrenamiento%20de%20Fuerza", "_blank")}
              >
                Saber Más <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Functional Training */}
          <div className="bg-[#1A1A1A] rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 h-full flex flex-col border border-[#2D2D2D] hover:border-[#8B5CF6]/50">
            <div
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: `url('/images/programs/functional-branded.png')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col -mt-6 relative z-10">
              <h3 className="text-xl font-bold mb-2 text-white">Entrenamiento Funcional</h3>
              <p className="text-gray-400 mb-4 flex-1">
                Mejora movilidad, equilibrio y flexibilidad para la vida diaria
              </p>
              <Button
                variant="outline"
                className="border-2 border-[#8B5CF6] text-white hover:bg-[#8B5CF6] hover:text-white bg-transparent transition-all duration-300 mt-auto"
                onClick={() => window.open("https://wa.me/5493872131333?text=Hola%20Coach%20Energy,%20quiero%20saber%20m%C3%A1s%20sobre%20Entrenamiento%20Funcional", "_blank")}
              >
                Saber Más <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Personal Coaching */}
          <div className="bg-[#1A1A1A] rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 h-full flex flex-col border border-[#2D2D2D] hover:border-[#8B5CF6]/50">
            <div
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: `url('/images/programs/personal-branded.png')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col -mt-6 relative z-10">
              <h3 className="text-xl font-bold mb-2 text-white">Entrenamiento Personal</h3>
              <p className="text-gray-400 mb-4 flex-1">
                Planes personalizados 1 a 1 con coaches certificados
              </p>
              <Button
                variant="outline"
                className="border-2 border-[#8B5CF6] text-white hover:bg-[#8B5CF6] hover:text-white bg-transparent transition-all duration-300 mt-auto"
                onClick={() => window.open("https://wa.me/5493872131333?text=Hola%20Coach%20Energy,%20quiero%20saber%20m%C3%A1s%20sobre%20Entrenamiento%20Personal", "_blank")}
              >
                Saber Más <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}