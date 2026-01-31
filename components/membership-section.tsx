"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"

const membershipPlans = [
  {
    name: "SEMANAL",
    price: "$30.000",
    period: "/ semana",
    features: [
      "Acceso ilimitado por 7 días",
      "Uso de bicicletas y cintas",
      "Vestuarios con duchas",
      "Instructores en sala",
    ],
    popular: false,
  },
  {
    name: "QUINCENAL",
    price: "$35.000",
    period: "/ 15 días",
    features: [
      "Acceso ilimitado por 15 días",
      "Uso de bicicletas y cintas",
      "Vestuarios con duchas",
      "Instructores en sala",
    ],
    popular: false,
  },
  {
    name: "3 VECES POR SEMANA",
    price: "$47.000",
    period: "/ mes",
    features: [
      "3 clases por semana",
      "Uso de bicicletas y cintas",
      "Vestuarios con duchas",
      "Instructores en sala",
      "Ideal para mantener constancia",
    ],
    popular: false,
  },
  {
    name: "MENSUAL COMPLETO",
    price: "$50.000",
    period: "/ mes",
    features: [
      "Acceso ilimitado lunes a lunes",
      "Uso de bicicletas y cintas",
      "Vestuarios con duchas",
      "Instructores en sala",
      "Mejor relación precio-valor",
      "Seguimiento personalizado",
    ],
    popular: true,
  },
  {
    name: "CLASE SUELTA",
    price: "$10.000",
    period: "/ clase",
    features: [
      "Acceso por 1 clase",
      "Uso de bicicletas y cintas",
      "Vestuarios con duchas",
      "Instructores en sala",
      "Sin compromiso",
    ],
    popular: false,
  },
]

export default function MembershipSection() {
  return (
    <section id="membership" className="py-20 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A2E] to-[#0A0A0A] animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-[#FACC15]" />
            <p className="text-[#FACC15] text-sm font-semibold tracking-wider">PLANES Y PRECIOS</p>
            <Zap className="w-5 h-5 text-[#FACC15]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            VALOR DE LA <span className="text-[#8B5CF6]">ACTIVIDAD</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Elegí el plan que mejor se adapte a tu estilo de vida. Todos nuestros planes incluyen acceso completo a las instalaciones y acompañamiento profesional.
          </p>
        </div>

        {/* Membership Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {membershipPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 border-2 transition-all duration-300 hover:transform hover:scale-105 flex flex-col relative ${plan.popular
                ? "border-[#FACC15] bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] shadow-lg shadow-[#FACC15]/20"
                : "border-[#2D2D2D] bg-[#1A1A1A] hover:border-[#8B5CF6]/50"
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FACC15] text-black text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black" />
                    RECOMENDADO
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 mt-2">
                <h3 className={`text-lg font-bold mb-3 ${plan.popular ? "text-[#FACC15]" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-[#FACC15]" : "text-[#8B5CF6]"}`}>
                    {plan.price}
                  </span>
                </div>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-[#FACC15]" : "text-[#8B5CF6]"}`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => window.open(`https://wa.me/5493872131333?text=¡Hola!%20👋%20Estoy%20interesado/a%20en%20el%20plan%20${encodeURIComponent(plan.name)}%20de%20${encodeURIComponent(plan.price)}${encodeURIComponent(plan.period)}.%20¿Me%20podrían%20dar%20más%20información%20para%20inscribirme?`, "_blank")}
                className={`w-full py-3 font-bold transition-all duration-300 mt-auto ${plan.popular
                  ? "bg-[#FACC15] hover:bg-[#FDE047] text-black"
                  : "bg-transparent border-2 border-[#8B5CF6] text-white hover:bg-[#8B5CF6] hover:text-white"
                  }`}
              >
                Elegir Plan
              </Button>
            </div>
          ))}
        </div>

        {/* Included Benefits Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#1A1A1A] border border-[#8B5CF6]/30 rounded-xl px-8 py-4">
            <Check className="w-6 h-6 text-[#FACC15]" />
            <p className="text-gray-200 text-lg">
              <span className="text-[#FACC15] font-semibold">La cuota incluye</span> uso de bicicletas, cintas, vestuarios con duchas e instructores en sala.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
