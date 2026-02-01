"use client"

import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "programs", "trainers", "facilities", "membership", "schedule", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      setIsScrolled(window.scrollY > 10)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Nosotros" },
    { id: "programs", label: "Programas" },
    { id: "trainers", label: "Coaches" },
    { id: "facilities", label: "Instalaciones" },
    { id: "membership", label: "Planes" },
  ]

  return (
    <>
      <nav
        className={`flex items-center justify-between px-4 md:px-6 py-4 fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in-down ${isScrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md shadow-lg shadow-[#8B5CF6]/5" : "bg-transparent"
          }`}
        style={{ position: "fixed", top: 0, left: 0, right: 0 }}
      >
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <Image
            src="/logo-coach-energy.png"
            alt="Coach Energy"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-white">
            COACH <span className="text-[#8B5CF6]">ENERGY</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-medium transition-all duration-300 group ${activeSection === item.id ? "text-[#8B5CF6]" : (!isScrolled ? "text-[#FACC15] hover:text-white" : "text-white hover:text-[#8B5CF6]")
                }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FACC15] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Button
          onClick={() => scrollToSection("contact")}
          className="hidden md:flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8B5CF6]/25"
        >
          <Zap className="w-4 h-4" />
          Contáctanos
        </Button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-[#8B5CF6] transition-colors duration-300 p-2 rounded-md hover:bg-white/10"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-[#FACC15]" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-80 bg-[#0A0A0A] z-50 transform transition-transform duration-300 ease-in-out md:hidden border-l border-[#8B5CF6]/20 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#2D2D2D]">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-coach-energy.png"
              alt="Coach Energy"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-lg font-bold text-white">
              COACH <span className="text-[#8B5CF6]">ENERGY</span>
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-[#8B5CF6] transition-colors duration-300 p-2 rounded-md hover:bg-white/10"
          >
            <X className="w-6 h-6 text-[#FACC15]" />
          </button>
        </div>

        <div className="flex flex-col p-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left py-4 text-lg border-b border-[#2D2D2D] transition-colors duration-300 ${activeSection === item.id ? "text-[#8B5CF6]" : "text-white hover:text-[#8B5CF6]"
                }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("contact")}
            className="mt-6 bg-[#FACC15] hover:bg-[#FDE047] text-black font-bold py-3 transition-all duration-300"
          >
            <Zap className="w-4 h-4 mr-2" />
            Contáctanos
          </Button>
        </div>
      </div>
    </>
  )
}
