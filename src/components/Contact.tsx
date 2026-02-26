"use client"

import { motion } from "framer-motion"
import { 
  Mail, MapPin, ExternalLink,
  Linkedin, Instagram, MessageCircle 
} from "lucide-react"

// Custom TikTok Icon
const TikTokIcon = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const contactInfo = [
  {
    icon: <Mail className="text-blue-600" size={24} />,
    label: "Email Address",
    value: "ffajarp15@gmail.com", 
    // Link mailto untuk membuka aplikasi email
    link: "mailto:fajarpermana@example.com",
    color: "bg-blue-50"
  },
  {
    icon: <MessageCircle className="text-emerald-600" size={24} />,
    label: "WhatsApp",
    value: "+62 89-618-369-515", 
    // Link wa.me untuk chat langsung
    link: "https://wa.me/6289618369515",
    color: "bg-emerald-50"
  },
  {
    icon: <MapPin className="text-red-600" size={24} />,
    label: "Current Location",
    value: "Bandung, Indonesia",
    // Link Google Maps untuk koordinat Kota Bandung
    link: "https://www.google.com/maps/search/?api=1&query=Bandung,+West+Java",
    color: "bg-red-50"
  }
]

const socials = [
  { icon: <Linkedin size={24} />, name: "LinkedIn", link: "https://www.linkedin.com/in/ffajarp/", brandColor: "hover:bg-[#0077b5]" },
  { icon: <Instagram size={24} />, name: "Instagram", link: "https://www.instagram.com/ffajarpp_/", brandColor: "hover:bg-[#e1306c]" },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-blue-600 font-bold tracking-widest text-[10px] uppercase bg-blue-50 px-3 py-1 rounded-full">
            Contact Me
          </span>
          <h2 className="text-4xl font-black text-slate-900 mt-4 mb-6">
            Let's Start a <span className="text-blue-600">Conversation</span>
          </h2>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.link}
              target={info.label !== "Email Address" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 block"
            >
              <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{info.label}</p>
              <p className="text-sm font-bold text-slate-900 mb-4">{info.value}</p>
              
              {/* Tombol Connect yang sekarang fungsional */}
              <div className="flex items-center justify-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                Connect <ExternalLink size={12} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Media Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-slate-100"
        >
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Follow My Socials</p>
          <div className="flex justify-center gap-6">
            {socials.map((soc, idx) => (
              <a 
                key={idx} 
                href={soc.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center transition-all duration-300 ${soc.brandColor} hover:scale-110 shadow-lg shadow-slate-200`}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}