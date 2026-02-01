"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { scrollToSection } from "@/lib/scroll-utils"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-cover bg-center animate-fade-in-slow"
      style={{
        background: `linear-gradient(135deg, #0A0A0A 0%, rgba(139, 92, 246, 0.08) 50%, #0A0A0A 100%)`,
        marginTop: "-80px",
        paddingTop: "80px",
      }}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A] pointer-events-none" />

      <div className="text-center max-w-5xl px-4 sm:px-6 animate-fade-in-slow w-full relative z-10" style={{ animationDelay: "0.3s" }}>
        <p
          className="text-[#FACC15] text-sm md:text-base mb-4 tracking-[0.2em] font-bold opacity-0 animate-fade-in-slow mt-20 md:mt-0 uppercase"
          style={{ animationDelay: "0.6s" }}
        >
          Bienvenido a
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white opacity-0 animate-fade-in-slow break-words leading-none tracking-tight"
          style={{ animationDelay: "0.9s" }}
        >
          COACH <span className="text-[#8B5CF6] animate-neon-glow">ENERGY</span>
        </h1>
        <p
          className="text-lg md:text-2xl mb-6 text-gray-300 opacity-0 animate-fade-in-slow font-light max-w-2xl mx-auto"
          style={{ animationDelay: "1.2s" }}
        >
          Entrená con Energía. Viví con Fuerza.
        </p>
        <p
          className="text-sm md:text-base mb-8 text-[#FACC15] opacity-0 animate-fade-in-slow font-medium tracking-widest uppercase"
          style={{ animationDelay: "1.35s" }}
        >
          Tu mejor versión empieza hoy
        </p>
        <Button
          onClick={() => scrollToSection("membership")}
          className="bg-[#FACC15] hover:bg-[#FDE047] text-black text-base md:text-lg px-10 py-6 md:px-12 md:py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] font-bold opacity-0 animate-fade-in-slow uppercase tracking-wider"
          style={{ animationDelay: "1.5s" }}
        >
          Únete ahora
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-slow" style={{ animationDelay: "1.8s" }}>
        <div className="w-6 h-10 border-2 border-[#8B5CF6] rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#8B5CF6] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
