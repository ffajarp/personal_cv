"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Database, Globe, CheckCircle2, LayoutDashboard } from "lucide-react"
import { useEffect, useState } from "react"

export default function About() {
  const [count, setCount] = useState(8)

  useEffect(() => {
    let start = 8
    const end = 60
    const duration = 2000
    const incrementTime = 30
    const step = (end - start) / (duration / incrementTime)

    const counter = setInterval(() => {
      start += step
      if (start >= end) {
        start = end
        clearInterval(counter)
      }
      setCount(Math.floor(start))
    }, incrementTime)

    return () => clearInterval(counter)
  }, [])

  const skills = ["Database Systems", "Transaction Monitoring", "API Analysis", "PostgreSQL", "System Troubleshooting"]

  return (
    <section
      id="About"
      className="relative min-h-screen flex items-center justify-center bg-[#f8fafc] px-6 py-24 overflow-hidden"
    >
      {/* Background Ornaments - More Subtle */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[120px] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl w-full"
      >
        {/* Main Card with Glassmorphism */}
        <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/80 p-8 md:p-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT SIDE: PHOTO & STATS */}
            <div className="lg:col-span-5 flex flex-col items-center space-y-8">
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                {/* Decorative Ring */}
                <div className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
                
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/profile.jpg"
                    alt="Fajar Permana"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* Enhanced Stats Card */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group">
                  <Database className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-2xl font-bold text-slate-800">7+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Years Exp</p>
                  <p className="text-[8px] text-slate-400 mt-1 leading-tight">Application Support</p>
                </div>
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:border-purple-200 transition-colors group">
                  <Globe className="text-purple-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-2xl font-bold text-slate-800">{count}+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Municipalities</p>
                  <p className="text-[8px] text-slate-400 mt-1 leading-tight">Government & Bank Partners</p>
                </div>
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:border-emerald-200 transition-colors group">
                  <LayoutDashboard className="text-emerald-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-2xl font-bold text-slate-800">3</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Triple Roles</p>
                  <p className="text-[8px] text-slate-400 mt-1 leading-tight">Helpdesk • Analyst • Tester</p>
                </div>
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:border-amber-200 transition-colors group">
                  <CheckCircle2 className="text-amber-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-2xl font-bold text-slate-800">10+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Products</p>
                  <p className="text-[8px] text-slate-400 mt-1 leading-tight">Managed Simultaneously</p>
                </div>
              </div>
            </div>

{/* RIGHT SIDE: CONTENT */}
<div className="lg:col-span-7 space-y-6"> {/* Spasi antar elemen dipersempit dari 8 ke 6 */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Specialized Badge */}
    <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold tracking-widest uppercase border border-blue-100">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
      </span>
      System Reliability & GovTech
    </div>
    
    {/* Premium Headline - Ukuran dikecilkan (text-3xl ke 5xl) */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-5">
      Application Support <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
        Specialist
      </span>
    </h2>

    {/* Professional Narrative - Ukuran font dikecilkan ke text-base */}
    <div className="space-y-3 text-slate-600 text-base leading-relaxed max-w-xl">
      <p>
        Application Support Specialist with <span className="text-slate-900 font-bold">7+ years</span> of proven expertise in <span className="text-slate-900 font-semibold">database management</span>, <span className="text-slate-900 font-semibold">payment gateway integration</span>, and <span className="text-slate-900 font-semibold">transactional system analysis</span> across government and banking sectors.
      </p>
      <p>
        Successfully supported the scalability of payment systems serving <span className="text-blue-600 font-bold">60+ municipalities</span> across Indonesia, managing high-volume transaction data, conducting SIT/UAT testing, and ensuring seamless H2H integration with major banking partners and e-commerce platforms.
      </p>
      <p>
        <span className="text-slate-900 font-bold">Triple-role capability:</span> Operating simultaneously as <span className="text-slate-900 font-semibold">(1) Helpdesk</span> providing first-response solutions to regional government partners nationwide, <span className="text-slate-900 font-semibold">(2)  Analyst</span> creating flowcharts, UML diagrams, database schemas, and impact analysis for feature requests, and <span className="text-slate-900 font-semibold">(3) Software Tester</span> performing end-to-end testing independently through ticketing system documentation.
      </p>
      <p> 
        Experienced in delivering <span className="text-slate-900 font-semibold">technical training sessions</span> (both offline and online) to regional tax office partners, ensuring smooth system adoption and operational excellence across government institutions.
      </p>
      <p>
        Beyond technical proficiency, I bring strong capabilities in business analysis, stakeholder management, and comprehensive project delivery, with additional skills in graphic design and digital marketing.
      </p>
    </div>
  </motion.div>

  {/* CORE SKILLS TAGS */}

  {/* ACTION BUTTONS - Ukuran tombol dibuat sedikit lebih compact */}
  <div className="pt-2 flex flex-wrap gap-3">
    <a
      href="https://www.linkedin.com/in/ffajarp/"
      target="_blank"
      className="group flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-md"
    >
      <Linkedin size={18} className="group-hover:rotate-12 transition-transform" />
      Connect on LinkedIn
    </a>
    
    
  </div>
</div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}