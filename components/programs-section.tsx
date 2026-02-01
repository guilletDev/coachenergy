"use client"

import { Zap, Dumbbell, Activity, User } from "lucide-react"

export default function ProgramsSection() {
  const programs = [
    {
      title: "Entrenamiento de Fuerza",
      description: "Desarrolla masa muscular y fuerza con equipamiento profesional",
      image: "/images/programs/strength-branded.png",
      icon: Dumbbell,
    },
    {
      title: "Entrenamiento Funcional",
      description: "Mejora movilidad, equilibrio y flexibilidad para la vida diaria",
      image: "/images/programs/functional-branded.png",
      icon: Activity,
    },
    {
      title: "Entrenamiento Personal",
      description: "Planes personalizados 1 a 1 con coaches certificados",
      image: "/images/programs/personal-branded.png",
      icon: User,
    },
  ]

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <div
                key={index}
                className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden h-80 border border-[#2D2D2D] hover:border-[#8B5CF6]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#8B5CF6]/10"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${program.image}')`,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-[#8B5CF6]/90 backdrop-blur-sm p-2 rounded-xl group-hover:bg-[#FACC15] transition-colors duration-300">
                  <IconComponent className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-8 bg-[#FACC15] rounded-full group-hover:w-12 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-[#FACC15] transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}