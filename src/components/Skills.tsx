"use client"

import { motion } from "framer-motion"
import { 
  BarChart3, Terminal, PenTool, Users, 
  Search, CheckCircle, FileText, Database, 
  Settings, ShieldAlert, Cpu, 
  Palette, Globe, Rocket, MessageSquare, 
  Target, Zap, Box, Lightbulb 
} from "lucide-react"

const skillCategories = [
  {
    title: "Leadership & Management",
    description: "Leading teams, managing stakeholders, and ensuring effective communication.",
    icon: <Users className="text-amber-600" size={24} />,
    color: "bg-amber-50",
    skills: [
      { name: "Team Leadership", icon: <Users size={12} /> },
      { name: "Komunikasi & Koordinasi", icon: <MessageSquare size={12} /> },
      { name: "Stakeholder Relation", icon: <Users size={12} /> },
      { name: "Problem Solving", icon: <Lightbulb size={12} /> },
      { name: "Project Management", icon: <Rocket size={12} /> }
    ]
  },
  {
    title: "System & Analysis",
    description: "Analyzing business needs, transactional data, and system architecture.",
    icon: <BarChart3 className="text-blue-600" size={24} />,
    color: "bg-blue-50",
    skills: [
      { name: "System Analyst", icon: <Search size={12} /> },
      { name: "Functional Requirement", icon: <FileText size={12} /> },
      { name: "Conceptual Modeling", icon: <Box size={12} /> },
      { name: "B2G Integration", icon: <Zap size={12} /> }
    ]
  },
  {
    title: "Quality Assurance (QA)",
    description: "Executing SIT, UAT, and ensuring transactional system reliability.",
    icon: <CheckCircle className="text-emerald-600" size={24} />,
    color: "bg-emerald-50",
    skills: [
      { name: "SIT / UAT / TO", icon: <CheckCircle size={12} /> },
      { name: "System Testing", icon: <ShieldAlert size={12} /> },
      { name: "Regression Testing", icon: <Settings size={12} /> },
      { name: "Audit Reporting", icon: <FileText size={12} /> }
    ]
  },
  {
    title: "Technical Operations",
    description: "Expertise in SQL, Linux, and application support ecosystems.",
    icon: <Terminal className="text-indigo-600" size={24} />,
    color: "bg-indigo-50",
    skills: [
      { name: "MySQL & SQL Query", icon: <Database size={12} /> },
      { name: "Linux & Windows OS", icon: <Cpu size={12} /> },
      { name: "Root Cause Analysis", icon: <Search size={12} /> },
      { name: "Helpdesk Support", icon: <MessageSquare size={12} /> }
    ]
  },
  {
    title: "Creative & Marketing",
    description: "Visual design, branding strategy, and digital marketing presence.",
    icon: <PenTool className="text-purple-600" size={24} />,
    color: "bg-purple-50",
    skills: [
      { name: "Adobe Creative Suite", icon: <Palette size={12} /> },
      { name: "CorelDraw", icon: <PenTool size={12} /> },
      { name: "Branding Strategy", icon: <Target size={12} /> },
      { name: "Digital Marketing", icon: <Globe size={12} /> }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-bold tracking-[0.2em] text-[10px] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Expertise & Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span>
            </h2>
            <p className="text-slate-500 mt-4 text-sm max-w-xl mx-auto italic">
              "Combining leadership, technical analysis, and creative strategy to drive large-scale GovTech solutions."
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{category.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{category.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-transparent hover:border-blue-200 hover:bg-white hover:text-blue-600 transition-all cursor-default"
                    >
                      <span className="text-slate-400 group-hover:text-blue-400 transition-colors">
                        {skill.icon}
                      </span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 text-slate-50 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 -z-0">
                {category.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}