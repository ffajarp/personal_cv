"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Calendar, MapPin, ExternalLink, X, ZoomIn } from "lucide-react"
import Image from "next/image"

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

const certifications = [
  {
    title: "Project Management Associate",
    issuer: "Logical Operations",
    year: "2023",
    id: "2023-C-018539",
    image: "/pma.jpg",
    description: "Sertifikasi profesional dalam manajemen proyek, mencakup metodologi planning, execution, dan monitoring."
  },
  {
    title: "Android Development Associate",
    issuer: "Logical Operations",
    year: "2022",
    id: "2022-C-012779",
    image: "/ada.jpg",
    description: "Sertifikasi kompetensi profesional untuk pengembangan aplikasi Android menggunakan standar Logical Operations."
  },
  {
    title: "Mobile Programming & Web App Training",
    issuer: "be:logix Academic Alliance",
    year: "2017",
    id: "027/Ass-PKL/VIII/2017",
    image: "/androidDev.jpg",
    description: "Pelatihan tingkat intermediate untuk pemrograman mobile dan aplikasi web."
  },
  {
    title: "Wellness Communication Program",
    issuer: "makna Indonesia Wellness Center",
    year: "2022",
    id: "Workshop Participant",
    image: "/komunikasi.jpg",
    description: "Partisipasi dalam workshop program komunikasi kesehatan dan kesejahteraan."
  },
  {
    title: "Implementasi MBKM di Tanah Papua",
    issuer: "Universitas Ottow Geissler Papua",
    year: "2023",
    id: "PANDIES-FST/015/III/2023",
    image: "/seminar.jpg",
    description: "Peserta Seminar Nasional mengenai peningkatan mutu pendidikan melalui Merdeka Belajar Kampus Merdeka."
  },
  {
    title: "MOCK TOEFL",
    issuer: "PETAL",
    year: "2023",
    id: "Scored 410",
    image: "/toefl.jpg",
    description: "Penilaian kemampuan bahasa Inggris standar internasional."
  }
]

export default function EducationCert() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION PENDIDIKAN */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <span className="text-blue-600 font-bold tracking-widest text-[10px] uppercase bg-blue-50 px-3 py-1 rounded-full">
              Academic Journey
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-4">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {educationList.map((edu, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 text-slate-900 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    <GraduationCap size={28} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black leading-tight text-slate-900">{edu.school}</h3>
                    <p className="font-bold text-xs text-blue-600">
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <span className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                        <Calendar size={12} /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                        <MapPin size={12} /> {edu.location}
                      </span>
                    </div>
                    {edu.gpa && (
                      <div className="mt-4 inline-block px-3 py-1 bg-white border border-blue-100 text-blue-600 rounded-lg text-[10px] font-black shadow-sm">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION SERTIFIKASI */}
        <div>
          <div className="mb-12 text-center">
            <span className="text-amber-600 font-bold tracking-widest text-[10px] uppercase bg-amber-50 px-3 py-1 rounded-full">
              Professional Verified
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-4">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col"
              >
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                       type="button"
                       onClick={() => setSelectedImg(cert.image)}
                       className="bg-white/90 p-3 rounded-full text-blue-600 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all"
                    >
                      <ZoomIn size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-2">
                    {cert.issuer}
                  </span>
                  <h4 className="text-lg font-black text-slate-900 leading-tight mb-3">
                    {cert.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-50 pt-3">
                      <span className="max-w-[150px] truncate">ID: {cert.id}</span>
                      <span>{cert.year}</span>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setSelectedImg(cert.image)}
                      className="w-full py-3 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      View Document <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POP-UP MODAL ZOOM */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button"
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image 
                  src={selectedImg} 
                  alt="Certificate Zoom" 
                  fill 
                  className="object-contain transition-transform duration-500 hover:scale-150 cursor-move" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}