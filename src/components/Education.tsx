"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const educationList = [
  {
    school: "Sekolah Tinggi Teknologi Bandung",
    degree: "S1 Teknik Informatika",
    period: "2019 - 2023",
    gpa: "3.43",
    location: "Bandung",
  },
  {
    school: "SMK Assalaam Bandung",
    degree: "Rekayasa Perangkat Lunak (RPL)",
    period: "2015 - 2018",
    location: "Bandung",
  }
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-bold tracking-[0.2em] text-[10px] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Academic Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Background</span>
            </h2>
            <p className="text-slate-500 mt-4 text-sm max-w-xl mx-auto">
              Formal education and academic achievements that laid the foundation for technical expertise.
            </p>
          </motion.div>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-[2.5rem] border border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                  <GraduationCap size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black leading-tight text-slate-900">{edu.school}</h3>
                  <p className="font-bold text-sm text-blue-600">
                    {edu.degree}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <Calendar size={12} /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <MapPin size={12} /> {edu.location}
                    </span>
                  </div>
                  {edu.gpa && (
                    <div className="mt-4 inline-block px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg text-xs font-black shadow-sm">
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}