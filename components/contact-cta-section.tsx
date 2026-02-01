"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Zap, MessageCircle } from "lucide-react"

export default function ContactCTASection() {
    const openWhatsApp = () => {
        window.open("https://wa.me/5493872131333?text=¡Hola!%20👋%20Estoy%20interesado/a%20en%20Coach%20Energy.%20¿Me%20podrían%20contar%20más%20sobre%20los%20planes%20y%20horarios?", "_blank")
    }

    return (
        <section id="contact" className="pt-12 pb-20 px-6 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="relative">
                        <div className="flex items-center gap-2 mb-4">
                            <Zap className="w-5 h-5 text-[#FACC15]" />
                            <p className="text-[#FACC15] text-sm font-semibold tracking-wider">CONTÁCTANOS</p>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                            Ponete En <span className="text-[#8B5CF6]">Contacto</span>
                        </h2>
                        <p className="text-gray-400 mb-8">
                            ¿Tenés alguna pregunta? ¡Estamos acá para ayudarte! Tu mejor versión empieza hoy.
                        </p>
                        <div
                            className="h-[360px] relative rounded-xl border border-[#2D2D2D] overflow-hidden group flex items-center justify-center"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('/images/programs/personal-branded.png')`,
                                }}
                            />
                            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />

                            {/* Overlay Text Sign */}
                            <div className="relative z-10 p-6 border-4 border-[#8B5CF6] bg-black/40 backdrop-blur-sm transform -rotate-3 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
                                <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                                    COACH <span className="text-[#FACC15] drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">ENERGY</span>
                                </h3>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#8B5CF6]/20 rounded-full blur-2xl" />
                    </div>

                    {/* Right side - WhatsApp CTA */}
                    <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#2D2D2D] hover:border-[#8B5CF6]/50 transition-all duration-300 relative flex flex-col justify-center items-center text-center h-full sm:min-h-[360px]">

                        <h3 className="text-2xl font-bold mb-4 text-white">ENVIANOS UN MENSAJE</h3>
                        <p className="text-gray-400 mb-8 text-lg max-w-md">
                            ¿Listo para empezar? Escribinos directamente por WhatsApp y te asesoramos al instante.
                        </p>

                        <Button
                            onClick={openWhatsApp}
                            className="w-full max-w-xs bg-[#FACC15] hover:bg-[#FDE047] text-black font-bold py-6 text-lg transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:scale-105"
                        >
                            <MessageCircle className="w-6 h-6 mr-2" />
                            CONTACTAR AHORA
                        </Button>

                        <p className="text-gray-500 text-sm mt-6">
                            Te responderemos a la brevedad.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}
