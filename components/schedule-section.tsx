import { Clock, Calendar, Zap } from "lucide-react"

const scheduleData = [
    {
        day: "Lunes a Viernes",
        hours: "06:00 a 23:00",
        icon: Calendar,
    },
    {
        day: "Sábados",
        hours: "09:00 a 20:00",
        icon: Calendar,
    },
    {
        day: "Domingos",
        hours: "09:00 a 13:00",
        icon: Calendar,
    },
]

export default function ScheduleSection() {
    return (
        <section id="schedule" className="py-20 px-6 bg-[#0A0A0A]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Clock className="w-5 h-5 text-[#FACC15]" />
                        <p className="text-[#FACC15] text-sm font-semibold tracking-wider">HORARIOS</p>
                        <Clock className="w-5 h-5 text-[#FACC15]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        NUESTROS <span className="text-[#8B5CF6]">HORARIOS</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Horarios amplios para que puedas entrenar cuando mejor te convenga. ¡Tu mejor versión empieza hoy!
                    </p>
                </div>

                {/* Schedule Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {scheduleData.map((schedule, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] rounded-xl p-8 border border-[#2D2D2D] hover:border-[#8B5CF6]/50 transition-all duration-300 hover:transform hover:scale-105 text-center group"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B5CF6]/20 rounded-full mb-6 group-hover:bg-[#8B5CF6]/30 transition-colors">
                                <schedule.icon className="w-8 h-8 text-[#8B5CF6]" />
                            </div>

                            {/* Day */}
                            <h3 className="text-xl font-bold text-white mb-3">{schedule.day}</h3>

                            {/* Hours */}
                            <div className="flex items-center justify-center gap-2">
                                <Zap className="w-4 h-4 text-[#FACC15]" />
                                <span className="text-2xl font-bold text-[#FACC15]">{schedule.hours}</span>
                                <Zap className="w-4 h-4 text-[#FACC15]" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 bg-[#1A1A1A] border border-[#FACC15]/30 rounded-xl px-8 py-4">
                        <Zap className="w-6 h-6 text-[#FACC15]" />
                        <p className="text-gray-200 text-lg">
                            <span className="text-[#FACC15] font-semibold">¡Entrená con energía!</span> Te esperamos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
