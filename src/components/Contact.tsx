"use client";

import React, { useEffect, useState } from 'react';
import { Mail, MessageCircle, MapPin, ExternalLink, Linkedin, Instagram, Eye } from 'lucide-react';

const Contact = () => {
  const [visitorCount, setVisitorCount] = useState<any>(null);

  useEffect(() => {
    // Menggunakan API yang lebih stabil untuk hit counter
    fetch('https://api.countapi.xyz/hit/fajar-personal-cv/visits')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.value) setVisitorCount(data.value);
      })
      .catch(() => setVisitorCount(20)); // Fallback ke angka di gambar jika API failed
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Badge & Title */}
        <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">
          Contact Me
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-16 text-gray-900">
          Let's Start a <span className="text-blue-600">Conversation</span>
        </h2>

        {/* 3 Columns Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Email Card */}
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center group hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Mail size={28} />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</p>
            <p className="text-lg font-bold text-gray-900 mb-6">ffajarp15@gmail.com</p>
            <a href="mailto:ffajarp15@gmail.com" className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
              Connect <ExternalLink size={14} />
            </a>
          </div>

          {/* Whatsapp Card */}
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center group hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-6">
              <MessageCircle size={28} />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">WhatsApp</p>
            <p className="text-lg font-bold text-gray-900 mb-6">+62 89-618-369-515</p>
            <a href="https://wa.me/6289618369515" className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
              Connect <ExternalLink size={14} />
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center group hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6">
              <MapPin size={28} />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Current Location</p>
            <p className="text-lg font-bold text-gray-900 mb-6">Bandung, Indonesia</p>
            <a href="#" className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
              Connect <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Footer & Visitor Counter */}
        <div className="border-t border-gray-100 pt-12">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 text-center">
            Follow My Socials
          </p>
          
          <div className="flex justify-center gap-4 mb-10">
            <a href="#" className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Visitor Counter Area */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-3 text-gray-900 font-medium">
              <Eye size={20} className="text-gray-400" />
              <span className="text-xl font-bold">{visitorCount !== null ? visitorCount : '20'}</span>
              <span className="text-gray-500">orang telah mengunjungi profil ini</span>
            </div>
            <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-2">
              Terima kasih atas kunjungannyaa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
