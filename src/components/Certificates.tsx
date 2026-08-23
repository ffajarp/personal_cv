"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Award, Calendar, Building, ChevronLeft, ChevronRight, ZoomIn, X, FileCheck } from "lucide-react"
import Image from "next/image"

// Certificate Item Type
type CertificateItem = {
  id: number
  title: string
  issuer: string
  year: string
  credentialId: string
  image: string
  description: string
  category: "Professional" | "Training" | "Academic" | "Language"
}

// Dummy Data
const certificates: CertificateItem[] = [
  {
    id: 1,
    title: "Marketing Fundamentals From Strategic to Impact",
    issuer: "V-Academy",
    year: "2025",
    credentialId: "248/Sert/PPSIP/XII/2025",
    image: "/mark.jpg",
    description: "Pelatihan marketing fundamental mencakup strategi pemasaran, analisis pasar, dan implementasi kampanye digital.",
    category: "Training"
  },
  {
    id: 2,
    title: "Project Management Associate",
    issuer: "Logical Operations",
    year: "2023",
    credentialId: "2023-C-018539",
    image: "/pma.jpg",
    description: "Sertifikasi profesional dalam manajemen proyek, mencakup metodologi planning, execution, dan monitoring.",
    category: "Professional"
  },
  {
    id: 3,
    title: "Android Development Associate",
    issuer: "Logical Operations",
    year: "2022",
    credentialId: "2022-C-012779",
    image: "/ada.jpg",
    description: "Sertifikasi kompetensi profesional untuk pengembangan aplikasi Android menggunakan standar Logical Operations.",
    category: "Professional"
  },
  {
    id: 4,
    title: "Mobile Programming & Web App Training",
    issuer: "be:logix Academic Alliance",
    year: "2017",
    credentialId: "027/Ass-PKL/VIII/2017",
    image: "/androidDev.jpg",
    description: "Pelatihan tingkat intermediate untuk pemrograman mobile dan aplikasi web.",
    category: "Training"
  },
  {
    id: 5,
    title: "Wellness Communication Program",
    issuer: "makna Indonesia Wellness Center",
    year: "2022",
    credentialId: "Workshop Participant",
    image: "/komunikasi.jpg",
    description: "Partisipasi dalam workshop program komunikasi kesehatan dan kesejahteraan.",
    category: "Training"
  },
  {
    id: 6,
    title: "Implementasi MBKM di Tanah Papua",
    issuer: "Universitas Ottow Geissler Papua",
    year: "2023",
    credentialId: "PANDIES-FST/015/III/2023",
    image: "/seminar.jpg",
    description: "Peserta Seminar Nasional mengenai peningkatan mutu pendidikan melalui Merdeka Belajar Kampus Merdeka.",
    category: "Academic"
  },
  {
    id: 7,
    title: "MOCK TOEFL",
    issuer: "PETAL",
    year: "2023",
    credentialId: "Scored 410",
    image: "/toefl.jpg",
    description: "Penilaian kemampuan bahasa Inggris standar internasional dengan skor 410.",
    category: "Language"
  }
]

const categories = [
  { name: "All", icon: <Award size={16} />, count: certificates.length },
  { name: "Professional", icon: <FileCheck size={16} />, count: certificates.filter(c => c.category === "Professional").length },
  { name: "Training", icon: <Building size={16} />, count: certificates.filter(c => c.category === "Training").length },
  { name: "Academic", icon: <Award size={16} />, count: certificates.filter(c => c.category === "Academic").length },
  { name: "Language", icon: <Award size={16} />, count: certificates.filter(c => c.category === "Language").length }
]

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const itemsPerPage = 6

  const filteredCertificates = activeCategory === "All"
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory)

  // Pagination Logic
  const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredCertificates.slice(startIndex, endIndex)

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  return (
    <section id="certificates" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
            <span className="text-amber-600 font-bold tracking-[0.2em] text-[10px] uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
              Professional Verified
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Achievements</span>
            </h2>
            <p className="text-slate-500 mt-4 text-sm max-w-xl mx-auto">
              Professional certifications and training programs validating expertise across various domains.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryChange(cat.name)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat.name
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-500/30"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === cat.name ? "bg-amber-500" : "bg-slate-200 text-slate-600"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Certificates Grid with Slide Animation */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentItems.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-100 flex flex-col"
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setSelectedImage(cert.image)}
                        className="bg-white/90 p-3 rounded-full text-amber-600 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all"
                      >
                        <ZoomIn size={20} />
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-slate-700">
                      {cert.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Building size={14} />
                      <span className="font-bold text-amber-600 uppercase tracking-widest text-[10px]">
                        {cert.issuer}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-tight">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Credential Info */}
                    <div className="mt-auto pt-3 border-t border-slate-100 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {cert.year}
                        </span>
                        <span className="max-w-[150px] truncate">ID: {cert.credentialId}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Only show if more than 6 items */}
          {filteredCertificates.length > itemsPerPage && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-slate-100 text-slate-300 cursor-not-allowed opacity-50"
                    : "bg-white text-slate-700 hover:bg-amber-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-110"
                }`}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-slate-100 text-slate-300 cursor-not-allowed opacity-50"
                    : "bg-white text-slate-700 hover:bg-amber-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-110"
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No certificates found in this category.</p>
          </div>
        )}

        {/* Pagination Dots Indicator */}
        {filteredCertificates.length > itemsPerPage && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === page
                    ? "w-8 h-2 bg-amber-600"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Page Info */}
        {filteredCertificates.length > 0 && (
          <div className="text-center mt-6">
            <p className="text-sm text-slate-500">
              Showing <span className="font-bold text-slate-700">{startIndex + 1}</span> to{" "}
              <span className="font-bold text-slate-700">{Math.min(endIndex, filteredCertificates.length)}</span> of{" "}
              <span className="font-bold text-slate-700">{filteredCertificates.length}</span> certificates
            </p>
          </div>
        )}
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
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
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
              >
                <X size={32} />
              </button>

              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={selectedImage}
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
