"use client"

import { useState, useEffect } from "react"
import { ArrowUp, MessageCircle } from "lucide-react"

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const openWhatsApp = () => {
    // Replace with your WhatsApp number
    window.open("https://wa.me/5493872131333?text=¡Hola!%20👋%20Estoy%20interesado/a%20en%20Coach%20Energy.%20¿Me%20podrían%20contar%20más%20sobre%20los%20planes%20y%20horarios?", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`p-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#8B5CF6]/50 ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="p-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group relative"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#8B5CF6]/30">
          ¡Chateá con nosotros!
        </span>
      </button>
    </div>
  )
}
