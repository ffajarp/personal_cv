"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Efek untuk mendeteksi scroll agar navbar berubah transparansinya
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#About" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ]

  // Handle smooth scroll for mobile
  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    // Wait for menu to close, then scroll
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
        ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200" 
        : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo / Name */}
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`font-extrabold text-xl tracking-tighter transition-colors ${
            scrolled ? "text-slate-900" : "text-slate-800"
          }`}
        >
          Fajar Permana<span className="text-blue-600">.</span>
        </motion.h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`px-4 py-2 text-sm font-semibold transition-all rounded-xl hover:bg-blue-50 ${
                scrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}
      
        </div>

        {/* Mobile Toggle Button */}
        <button 
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className={`md:hidden p-2 rounded-lg transition-colors z-50 ${scrolled ? "text-slate-900 hover:bg-slate-100" : "text-slate-800 hover:bg-white/10"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleMobileClick(e, link.href)}
                  className="text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors active:text-blue-700 py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}