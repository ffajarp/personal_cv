"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center opacity-30 blur-sm"></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative text-center space-y-6 max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
          Fajar <span className="text-blue-400">Permana</span>
        </h1>

        <p className="text-xl md:text-2xl font-medium text-slate-200">
          Payment System & Integration Specialist
        </p>

        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
          An IT Application & Payment Support professional with over 5 years of experience
          in database, application, and transactional systems. Delivered measurable impact
          and scaled regional government partnerships from 8 → 60+ across Indonesia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#experience"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition"
          >
            View Experience
          </a>

          <a
            href="/Fajar_Permana_CV.pdf"
            download
            className="px-6 py-3 border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-300 rounded-xl font-semibold transition"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  )
}