"use client"

import { Zap, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import { scrollToSection } from "@/lib/scroll-utils"

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-16 px-6 border-t border-[#8B5CF6]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-coach-energy.png"
                alt="Coach Energy"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="text-xl font-bold">
                COACH <span className="text-[#8B5CF6]">ENERGY</span>
              </span>
            </div>
            <p className="text-gray-300 mb-2 leading-relaxed font-medium">
              Entrená con Energía. Viví con Fuerza.
            </p>
            <p className="text-[#FACC15] mb-6 text-sm">
              Tu transformación comienza aquí.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/coachenergy_?igsh=emZjN3YxcGJiZ2Vr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 border border-[#2D2D2D] hover:border-[#8B5CF6]"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/14TQ1HAuzN3/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 border border-[#2D2D2D] hover:border-[#8B5CF6]"
              >
                <Facebook className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FACC15]" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200 text-left"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200 text-left"
                >
                  Programas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("trainers")}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200 text-left"
                >
                  Coaches
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("facilities")}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200 text-left"
                >
                  Instalaciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("membership")}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200 text-left"
                >
                  Planes y Precios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("schedule")}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200 text-left"
                >
                  Horarios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200 text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FACC15]" />
              Contáctanos
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-[#8B5CF6] font-semibold mb-1">Dirección</h4>
                <a
                  href="https://www.google.com/maps/place/Coach+Energy/@-24.8373172,-65.4541453,17z/data=!3m1!4b1!4m6!3m5!1s0x941bc31a3d51a5e3:0x8d304424ab8cdb09!8m2!3d-24.8373172!4d-65.4515704!16s%2Fg%2F11xyffy4_5?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200 block"
                >
                  Avda banchik s/n Barrio 14 de mayo,
                  <br />
                  Salta, Argentina, 4400
                </a>
              </div>

              <div>
                <h4 className="text-[#8B5CF6] font-semibold mb-1">Llámanos</h4>
                <a
                  href="https://wa.me/5493872131333?text=¡Hola!%20👋%20Quiero%20saber%20más%20sobre%20Coach%20Energy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200"
                >
                  +54 9 387 213-1333
                </a>
              </div>

              <div>
                <h4 className="text-[#8B5CF6] font-semibold mb-1">Escríbenos</h4>
                <p className="text-gray-400">contacto@coachenergy.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2D2D2D] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm md:text-base">
            © 2026 <span className="text-[#8B5CF6]">Coach Energy</span>. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Desarrollado By{" "}
            <a
              href="https://www.xora.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5CF6] hover:text-[#FACC15] transition-colors duration-200 font-medium"
            >
              XORA WEB
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
