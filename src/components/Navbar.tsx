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
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

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
          <a 
            href="#contact" 
            className="ml-4 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-slate-900" : "text-slate-800"}`}
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
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-blue-600 transition"
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