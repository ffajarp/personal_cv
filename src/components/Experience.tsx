"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, CheckCircle2, Database, ShieldCheck, TrendingUp, Users, Code, Package } from "lucide-react"

const experiences = [
  {
    title: "Leader Technical Support Payment Gateway",
    company: "PT Mutiara Bintang Abadi (Valuestream International Group)",
    location: "Bandung, Indonesia",
    period: "July 2022 - Present",
    description: "Leading technical operations for payment gateway integration and regional tax payment systems.",
    products: ["Service Payment", "Query Service", "Online Reconciliation", "Payment Counter", "VA/QRIS Portal", "Monitoring Dashboard", "Web P.O.S", "Mobile P.O.S", "Map G.I.S System", "Esign App", "Kios K Pajak"],
    achievements: [
      { 
        text: "Manage and verify payment transaction databases to ensure the success of local tax payments.", 
        icon: <Database size={16} className="text-blue-500" /> 
      },
      { 
        text: "Prepare payment specification documents and conduct system analysis and functional requirement architecture for online payment integration.", 
        icon: <ShieldCheck size={16} className="text-purple-500" /> 
      },
      { 
        text: "Execute SIT, UAT, TO, and payment integration (H2H, QRIS, VA) with partner banks and external partners (Tokopedia, Indomaret, Alfamart, POS Indonesia).", 
        icon: <Users size={16} className="text-blue-500" /> 
      },
      { 
        text: "Handle coordination of payment issues and perform local tax data reconciliation to ensure the nominal fund transfer from banks to regional treasuries is always consistent.", 
        icon: <TrendingUp size={16} className="text-emerald-500" /> 
      }
    ],
    skills: ["Payment Gateway", "H2H Integration", "UAT/SIT", "Data Reconciliation", "Leadership"]
  },
  {
    title: "Technical Support Application",
    company: "PT Mutiara Bintang Abadi (Valuestream International Group)",
    location: "Bandung, Indonesia",
    period: "June 2019 - July 2022",
    description: "Focused on application analysis, partner training, and system troubleshooting for regional tax systems.",
    products: ["Sistem Pajak PBB", "Sistem Pajak BPHTB", "Sistem Pajak Daerah"],
    achievements: [
      { 
        text: "Provide application training to company partners virtually and face-to-face to ensure functional mastery before the system goes live[cite: 15].", 
        icon: <CheckCircle2 size={16} className="text-blue-500" /> 
      },
      { 
        text: "Perform system analysis and prepare conceptual models of functional requirements related to applications and payments as per partner development requests[cite: 15].", 
        icon: <ShieldCheck size={16} className="text-purple-500" /> 
      },
      { 
        text: "Handle regional tax system issues, including root cause analysis, managing partner complaints, and providing sustainable solutions[cite: 15].", 
        icon: <Database size={16} className="text-blue-500" /> 
      },
      { 
        text: "Create transaction data queries to compile accurate local government financial reports for audit requirements.", 
        icon: <TrendingUp size={16} className="text-emerald-500" /> 
      }
    ],
    skills: ["SQL Query", "Root Cause Analysis", "System Training", "Financial Reporting"]
  },
  {
    title: "Website Developer",
    company: "InMotion Digital",
    location: "Bandung, Indonesia",
    period: "Dec 2018 - Mar 2019",
    description: "Developed and implemented custom websites based on client requirements.",
    products: ["Hospital Information System"],
    achievements: [
      { 
        text: "Develop websites according to client needs, starting from analysis, testing, and documentation to result presentation to ensure all functionalities are met[cite: 19].", 
        icon: <Code size={16} className="text-blue-500" /> 
      }
    ],
    skills: ["PHP", "HTML", "Web Development", "System Testing", "Documentation"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-12 gap-10">
                {/* LEFT COLUMN */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase">
                      <Calendar size={12} /> {exp.period}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{exp.title}</h3>
                    <p className="text-blue-600 font-bold text-sm">{exp.company}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <MapPin size={14} /> {exp.location}
                    </div>
                  </div>

                  {/* PRODUCT SUPPORTED SECTION (Isi Area Kosong) */}
                  <div className="pt-4 space-y-3">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Package size={12} className="text-blue-500" /> Products Managed
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.products.map((product, pIndex) => (
                        <span key={pIndex} className="px-2 py-1 bg-blue-50/50 text-blue-700 rounded-md text-[10px] font-medium border border-blue-100/50">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-slate-600 text-sm leading-relaxed font-medium border-l-4 border-blue-100 pl-4 italic">"{exp.description}"</p>
                  <div className="grid gap-3">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
                        <div className="mt-0.5 shrink-0 p-2 bg-white rounded-xl shadow-sm">{item.icon}</div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}