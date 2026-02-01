"use client"

import { Button } from "@/components/ui/button"
import { Users, Award, Clock, Zap } from "lucide-react"

export default function WhyChooseSection() {
  return (
    <section className="py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="h-64 bg-cover bg-center rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-[#2D2D2D] hover:border-[#8B5CF6]/50"
                  style={{
                    backgroundImage: `url('/images/programs/strength-branded.png')`,
                  }}
                />
                <div
                  className="h-60 bg-cover bg-center rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-[#2D2D2D] hover:border-[#8B5CF6]/50"
                  style={{
                    backgroundImage: `url('/images/programs/functional-branded.png')`,
                  }}
                />
              </div>
              <div className="pt-8">
                <div
                  className="h-80 bg-cover bg-center rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-[#2D2D2D] hover:border-[#8B5CF6]/50"
                  style={{
                    backgroundImage: `url('/images/programs/hiit-branded.png')`,
                  }}
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#8B5CF6]/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#FACC15]/20 rounded-full blur-xl" />
          </div>

          {/* Right side - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#FACC15]" />
              <p className="text-[#FACC15] text-sm font-semibold tracking-wider">NOSOTROS</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              ¿POR QUÉ ELEGIR <br />
              COACH <span className="text-[#8B5CF6]">ENERGY</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Coach Energy no es solo un gimnasio — es tu espacio de transformación. Nos enfocamos en entrenamiento inteligente,
              equipamiento moderno y orientación profesional para transformarte en tu versión más fuerte. Ya seas
              principiante o experimentado, tenemos tu respaldo.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-[#8B5CF6]/20 rounded-lg group-hover:bg-[#8B5CF6]/30 transition-colors">
                  <Users className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">Coaches Certificados</h3>
                  <p className="text-gray-500 text-sm">Profesionales con experiencia y dedicación</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-[#8B5CF6]/20 rounded-lg group-hover:bg-[#8B5CF6]/30 transition-colors">
                  <Award className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">Resultados Comprobados</h3>
                  <p className="text-gray-500 text-sm">Cientos de miembros transformados</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-[#8B5CF6]/20 rounded-lg group-hover:bg-[#8B5CF6]/30 transition-colors">
                  <Zap className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">Equipamiento Premium</h3>
                  <p className="text-gray-500 text-sm">Máquinas modernas de nivel profesional</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-[#8B5CF6]/20 rounded-lg group-hover:bg-[#8B5CF6]/30 transition-colors">
                  <Clock className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">Horarios Flexibles</h3>
                  <p className="text-gray-500 text-sm">Abierto de 6am a 11pm entre semana</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => {
                const element = document.getElementById("facilities")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8B5CF6]/25">
              <Zap className="w-4 h-4 mr-2" />
              Ver Instalaciones
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
