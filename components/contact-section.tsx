"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Check, Zap } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name.trim())) {
      newErrors.name = "El nombre solo puede contener letras y espacios"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error !== "")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // Show success popup
    setShowSuccessPopup(true)
    setTimeout(() => setShowSuccessPopup(false), 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <>
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

            {/* Right side - Contact Form */}
            <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#2D2D2D] relative">
              {showSuccessPopup && (
                <div className="absolute -top-16 left-0 right-0 z-50 animate-in slide-in-from-top duration-300 lg:hidden">
                  <div className="bg-[#8B5CF6] rounded-lg shadow-lg p-4 flex items-center gap-3 mx-4">
                    <div className="w-6 h-6 bg-[#FACC15] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-white font-medium">¡Gracias por tu mensaje!</span>
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-center text-white">ENVIANOS UN MENSAJE</h3>
              <p className="text-gray-400 text-center mb-6 text-sm">Tu próximo nivel empieza con un mensaje.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className={`w-full px-4 py-3 bg-[#2D2D2D] border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${errors.name ? "border-red-500 focus:border-red-500" : "border-[#3D3D3D] focus:border-[#8B5CF6]"
                      }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full px-4 py-3 bg-[#2D2D2D] border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${errors.email ? "border-red-500 focus:border-red-500" : "border-[#3D3D3D] focus:border-[#8B5CF6]"
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensaje"
                    rows={5}
                    className={`w-full px-4 py-3 bg-[#2D2D2D] border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${errors.message ? "border-red-500 focus:border-red-500" : "border-[#3D3D3D] focus:border-[#8B5CF6]"
                      }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FACC15] hover:bg-[#FDE047] text-black font-bold py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showSuccessPopup && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300 hidden lg:block">
          <div className="bg-[#8B5CF6] rounded-lg shadow-lg p-4 flex items-center gap-3 min-w-[300px]">
            <div className="w-6 h-6 bg-[#FACC15] rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-black" />
            </div>
            <span className="text-white font-medium">¡Gracias por tu mensaje!</span>
          </div>
        </div>
      )}
    </>
  )
}
