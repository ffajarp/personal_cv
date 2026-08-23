"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FileText, BarChart3, Workflow, Database, Users, ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react"

// Portfolio Item Type
type PortfolioItem = {
  id: number
  title: string
  category: "Documentation" | "Data Analyst" | "System Analyst" | "Database Administrator" | "Training Session"
  description: string
  date: string
  client?: string
  previewType: "pdf" | "youtube" | "images" | "code" | "gallery"
  previewData: {
    pdfUrl?: string
    videoId?: string
    thumbnail?: string
    images?: string[]
    code?: string
  }
  tools?: string[]
}

// Dummy Data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "User Guide Module Collective Payment",
    category: "Documentation",
    description: "Complete technical documentation for QRIS and Virtual Account integration with multiple banking partners.",
    date: "Apr 2025",
    client: "BAPENDA KABUPATEN MAJALENGKA",
    previewType: "pdf",
    previewData: {
      pdfUrl: "/porto/kolektifguide.pdf",
      thumbnail: "/porto/payment-gateway-cover.jpg"
    },
    tools: ["MS Word"]
  }
//   {
//     id: 2,
//     title: "Municipal Revenue Dashboard Analysis",
//     category: "Data Analyst",
//     description: "Real-time revenue monitoring dashboard covering 60+ municipalities with transaction analytics.",
//     date: "Jul 2023",
//     client: "Regional Government",
//     previewType: "youtube",
//     previewData: {
//       videoId: "dQw4w9WgXcQ",
//       thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
//     },
//     tools: ["PostgreSQL", "Power BI", "Python"]
//   },
//   {
//     id: 3,
//     title: "E-Government System Architecture",
//     category: "System Analyst",
//     description: "Complete system design including ERD, use case diagrams, and system flow for regional tax management system.",
//     date: "Jun 2023",
//     client: "PT Mutiara Bintang Abadi",
//     previewType: "images",
//     previewData: {
//       images: ["/porto/egov-architecture-1.jpg", "/porto/egov-architecture-2.jpg", "/porto/egov-architecture-3.jpg"]
//     },
//     tools: ["UML", "BPMN", "Lucidchart"]
//   },
//   {
//     id: 4,
//     title: "Database Performance Optimization",
//     category: "Database Administrator",
//     description: "Query optimization and indexing strategy that reduced average response time by 65%.",
//     date: "May 2023",
//     client: "Internal Project",
//     previewType: "code",
//     previewData: {
//       code: `-- Optimized Query for Transaction Reconciliation
// SELECT 
//   t.transaction_id,
//   t.amount,
//   t.status,
//   m.municipality_name,
//   COUNT(*) OVER (PARTITION BY m.municipality_id) as total_transactions
// FROM transactions t
// JOIN municipalities m ON t.municipality_id = m.id
// WHERE t.created_at >= CURRENT_DATE - INTERVAL '30 days'
//   AND t.status = 'success'
// ORDER BY t.created_at DESC;`
//     },
//     tools: ["PostgreSQL", "MySQL", "Query Analyzer"]
//   },
//   {
//     id: 5,
//     title: "Payment System Training - Bank Partners",
//     category: "Training Session",
//     description: "Comprehensive training for 25+ participants covering payment gateway integration and reconciliation process.",
//     date: "Apr 2023",
//     client: "Regional Banks",
//     previewType: "gallery",
//     previewData: {
//       images: ["/porto/training-session-1.jpg", "/porto/training-session-2.jpg", "/porto/training-session-3.jpg"]
//     },
//     tools: ["PowerPoint", "Zoom", "Miro"]
//   },
//   {
//     id: 6,
//     title: "API Integration Requirements Document",
//     category: "Documentation",
//     description: "Detailed API specification for H2H integration with external payment partners including Tokopedia and Indomaret.",
//     date: "Mar 2023",
//     client: "E-Commerce Partners",
//     previewType: "pdf",
//     previewData: {
//       pdfUrl: "/porto/api-integration-spec.pdf",
//       thumbnail: "/porto/api-integration-cover.jpg"
//     },
//     tools: ["Postman", "Swagger", "Notion"]
//   },
//   {
//     id: 7,
//     title: "Transaction Trend Analysis Q1 2023",
//     category: "Data Analyst",
//     description: "Quarterly analysis of payment trends across all municipalities with predictive insights.",
//     date: "Mar 2023",
//     client: "Management Report",
//     previewType: "youtube",
//     previewData: {
//       videoId: "dQw4w9WgXcQ",
//       thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
//     },
//     tools: ["Excel", "Tableau", "SQL"]
//   },
//   {
//     id: 8,
//     title: "Regional Tax System - Functional Requirements",
//     category: "System Analyst",
//     description: "Complete functional requirement analysis for PBB and BPHTB tax management system.",
//     date: "Feb 2023",
//     client: "Regional Government",
//     previewType: "images",
//     previewData: {
//       images: ["/porto/tax-system-req-1.jpg", "/porto/tax-system-req-2.jpg", "/porto/tax-system-req-3.jpg"]
//     },
//     tools: ["Figma", "Miro", "Confluence"]
//   }
]

const categories = [
  { name: "All", icon: <Workflow size={16} />, count: portfolioItems.length },
  { name: "Documentation", icon: <FileText size={16} />, count: portfolioItems.filter(i => i.category === "Documentation").length },
  { name: "Data Analyst", icon: <BarChart3 size={16} />, count: portfolioItems.filter(i => i.category === "Data Analyst").length },
  { name: "System Analyst", icon: <Workflow size={16} />, count: portfolioItems.filter(i => i.category === "System Analyst").length },
  { name: "Database Administrator", icon: <Database size={16} />, count: portfolioItems.filter(i => i.category === "Database Administrator").length },
  { name: "Training Session", icon: <Users size={16} />, count: portfolioItems.filter(i => i.category === "Training Session").length }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  // Pagination Logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredItems.slice(startIndex, endIndex)

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
    <section id="portfolio" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-bold tracking-[0.2em] text-[10px] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Work Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Portfolio</span>
            </h2>
            <p className="text-slate-500 mt-4 text-sm max-w-xl mx-auto">
              Collection of technical documentation, analysis reports, system designs, and training materials from real-world projects.
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
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === cat.name ? "bg-blue-500" : "bg-slate-200 text-slate-600"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid with Slide Animation */}
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
              {currentItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedItem(item)}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer border border-slate-100"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                    {item.previewType === "youtube" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <Play className="text-white z-10 group-hover:scale-125 transition-transform" size={48} />
                        <img 
                          src={item.previewData.thumbnail} 
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {item.previewType === "images" && item.previewData.images && (
                      <img 
                        src={item.previewData.images[0]} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    {item.previewType === "pdf" && (
                      <div className="flex items-center justify-center h-full">
                        <FileText className="text-blue-400" size={64} />
                      </div>
                    )}
                    {item.previewType === "code" && (
                      <div className="flex items-center justify-center h-full">
                        <Database className="text-indigo-400" size={64} />
                      </div>
                    )}
                    {item.previewType === "gallery" && item.previewData.images && (
                      <img 
                        src={item.previewData.images[0]} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-slate-700">
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{item.date}</span>
                      {item.client && (
                        <>
                          <span>•</span>
                          <span>{item.client}</span>
                        </>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tools */}
                    {item.tools && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tools.slice(0, 3).map((tool, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] px-2 py-1 bg-slate-50 text-slate-600 rounded-md font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* View Button */}
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-bold pt-2 group-hover:gap-3 transition-all">
                      <span>View Details</span>
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows - Only show if more than 6 items */}
          {filteredItems.length > itemsPerPage && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-slate-100 text-slate-300 cursor-not-allowed opacity-50"
                    : "bg-white text-slate-700 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-110"
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
                    : "bg-white text-slate-700 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-110"
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No portfolio items found in this category.</p>
          </div>
        )}

        {/* Pagination Dots Indicator */}
        {filteredItems.length > itemsPerPage && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === page
                    ? "w-8 h-2 bg-blue-600"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Page Info */}
        {filteredItems.length > 0 && (
          <div className="text-center mt-6">
            <p className="text-sm text-slate-500">
              Showing <span className="font-bold text-slate-700">{startIndex + 1}</span> to{" "}
              <span className="font-bold text-slate-700">{Math.min(endIndex, filteredItems.length)}</span> of{" "}
              <span className="font-bold text-slate-700">{filteredItems.length}</span> items
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Content */}
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">
                      {selectedItem.category}
                    </span>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="text-slate-400 hover:text-slate-600 text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    {selectedItem.title}
                  </h2>
                  
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>{selectedItem.date}</span>
                    {selectedItem.client && (
                      <>
                        <span>•</span>
                        <span>{selectedItem.client}</span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Preview Content */}
                <div className="bg-slate-50 rounded-2xl overflow-hidden">
                  {/* PDF Preview */}
                  {selectedItem.previewType === "pdf" && selectedItem.previewData.pdfUrl && (
                    <iframe
                      src={selectedItem.previewData.pdfUrl}
                      className="w-full h-[500px]"
                      title="PDF Preview"
                    />
                  )}

                  {/* YouTube Preview */}
                  {selectedItem.previewType === "youtube" && selectedItem.previewData.videoId && (
                    <iframe
                      width="100%"
                      height="500"
                      src={`https://www.youtube.com/embed/${selectedItem.previewData.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}

                  {/* Images Preview */}
                  {selectedItem.previewType === "images" && selectedItem.previewData.images && (
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {selectedItem.previewData.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Preview ${idx + 1}`}
                          className="w-full h-64 object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  )}

                  {/* Code Preview */}
                  {selectedItem.previewType === "code" && selectedItem.previewData.code && (
                    <pre className="p-6 text-sm bg-slate-900 text-slate-100 overflow-x-auto">
                      <code>{selectedItem.previewData.code}</code>
                    </pre>
                  )}

                  {/* Gallery Preview */}
                  {selectedItem.previewType === "gallery" && selectedItem.previewData.images && (
                    <div className="grid grid-cols-3 gap-3 p-4">
                      {selectedItem.previewData.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-48 object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Tools */}
                {selectedItem.tools && (
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tools Used</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
