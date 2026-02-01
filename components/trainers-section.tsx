import { Zap } from "lucide-react"

const trainers = [
  {
    name: "Coach Profesional",
    role: "Coach Profesional",
    specialty: "Fuerza • Funcional • Resistencia",
    image: "/images/trainers/entrenador-1.webp",
  },
  {
    name: "Coach Profesional",
    role: "Coach Profesional",
    specialty: "HIIT • Cardio • Tonificación",
    image: "/images/trainers/entrenador-2.webp",
  },
  {
    name: "Coach Profesional",
    role: "Coach Profesional",
    specialty: "Funcional • Movilidad • Core",
    image: "/images/trainers/entrenador-3.webp",
  },
  {
    name: "Coach Profesional",
    role: "Coach Profesional",
    specialty: "Fuerza • Resistencia • Acondicionamiento",
    image: "/images/trainers/entrenador-4.webp",
  },
]

export default function TrainersSection() {
  return (
    <section id="trainers" className="pt-12 pb-20 px-6 bg-[#0A0A0A] animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-[#FACC15]" />
            <p className="text-[#FACC15] text-sm font-semibold tracking-wider">NUESTRO EQUIPO</p>
            <Zap className="w-5 h-5 text-[#FACC15]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            COACHES <span className="text-[#8B5CF6]">PROFESIONALES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Nuestros coaches certificados están aquí para guiar, motivar y apoyar tu viaje fitness con experiencia profesional y dedicación.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 border border-[#2D2D2D] hover:border-[#8B5CF6]/50 flex flex-col"
            >
              <div
                className="h-72 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('${trainer.image}')`,
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

                {/* Energy badge */}
                <div className="absolute top-4 right-4 bg-[#8B5CF6]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Zap className="w-4 h-4 text-[#FACC15]" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 -mt-8 relative z-10">
                <h3 className="text-xl font-bold mb-1 text-white">{trainer.name}</h3>
                <p className="text-[#8B5CF6] text-sm font-semibold mb-3">{trainer.role}</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="h-1 w-8 bg-[#FACC15] rounded-full" />
                  <p className="text-gray-400 text-sm">{trainer.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            <span className="text-[#FACC15] font-semibold">&quot;Profesionales comprometidos con tu transformación.&quot;</span>
          </p>
        </div>
      </div>
    </section>
  )
}