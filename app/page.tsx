import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhyChooseSection from "@/components/why-choose-section"
import ProgramsSection from "@/components/programs-section"
import TrainersSection from "@/components/trainers-section"
import FacilitiesSection from "@/components/facilities-section"
import MembershipSection from "@/components/membership-section"
import ScheduleSection from "@/components/schedule-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import ScrollAnimations from "@/components/scroll-animations"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <ScrollAnimations />
      <Navbar />
      <HeroSection />
      <div id="about" className="scroll-animate">
        <WhyChooseSection />
      </div>
      <div id="programs" className="scroll-animate">
        <ProgramsSection />
      </div>
      <div id="trainers" className="scroll-animate">
        <TrainersSection />
      </div>
      <div id="facilities" className="scroll-animate">
        <FacilitiesSection />
      </div>
      <div id="membership" className="scroll-animate">
        <MembershipSection />
      </div>
      <div id="schedule" className="scroll-animate">
        <ScheduleSection />
      </div>
      <div id="testimonials" className="scroll-animate">
        <TestimonialsSection />
      </div>
      <div id="contact" className="scroll-animate">
        <ContactSection />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
