"use client"

import { Play, ArrowRight, CheckCircle2, Menu, BarChart3, TrendingUp, Rocket, DollarSign, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  // Custom Styles for Font
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
    .font-outfit { font-family: 'Outfit', sans-serif; }
    
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll-left {
      animation: scroll-left 20s linear infinite;
    }
    
    @keyframes scroll-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .animate-scroll-right {
      animation: scroll-right 20s linear infinite;
    }
  `

  return (
    <div className="bg-white min-h-screen font-outfit text-slate-900 selection:bg-[#1e40af] selection:text-white overflow-x-hidden flex flex-col">
      <style>{customStyles}</style>

      
      {/* --- Main Content Wrapper --- */}
      <div className="flex-1 w-full max-w-[1160px] mx-auto px-3 py-12 lg:py-12 flex flex-col justify-center">
        
        {/* Content Grid (Text Left / Bento Right) */}
        {/* CHANGED: items-center -> items-stretch to force equal height */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch mb-15">
          
          {/* LEFT CONTENT: Text Only */}
          {/* CHANGED: Added flex flex-col justify-center to center text in the stretched container */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col justify-top">
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
              Revolutionize <br />
              Your IT <br />
              Outsourcing.
            </h1>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              B2W Infotech stands as a premier AI-powered software development company, delivering transformative digital solutions backed by over 15 years of industry expertisse and a portfolio of 1,200+ successful projects worldwide.
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-6">
              <button className="bg-[#1e40af] hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-blue-200 flex items-center gap-2 transform hover:-translate-y-1">
                Get Started <ArrowRight size={20} />
              </button>
              
              <button className="flex items-center gap-3 text-slate-600 font-bold text-lg hover:text-[#1e40af] transition-colors group">
                <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-[#1e40af] bg-white transition-colors">
                  <Play size={14} className="fill-slate-600 group-hover:fill-[#1e40af] ml-0.5 transition-colors" />
                </div>
                View Case Study
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT: Image */}
          <div className="relative w-full h-full flex flex-col min-h-[450px]">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img 
                src="/images/back.png" 
                alt="Hero" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* --- LOGOS: SEPARATE ROW AT BOTTOM --- */}
        <div className="w-full pt-15 border-t border-slate-50 mt-auto overflow-hidden space-y-6">
            {/* First Row - Left to Right */}
            <div className="flex animate-scroll-left whitespace-nowrap">
                <span className="text-xl font-bold text-slate-900 mx-8">Google</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Microsoft</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Amazon</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Meta</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Apple</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Tesla</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Netflix</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Spotify</span>
                
                {/* Duplicate for seamless loop */}
                <span className="text-xl font-bold text-slate-900 mx-8">Google</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Microsoft</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Amazon</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Meta</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Apple</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Tesla</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Netflix</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Spotify</span>
            </div>
            
            {/* Second Row - Right to Left */}
            <div className="flex animate-scroll-right whitespace-nowrap">
                <span className="text-xl font-bold text-slate-900 mx-8">IBM</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Oracle</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Samsung</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Intel</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Adobe</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Salesforce</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Cisco</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Uber</span>
                
                {/* Duplicate for seamless loop */}
                <span className="text-xl font-bold text-slate-900 mx-8">IBM</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Oracle</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Samsung</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Intel</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Adobe</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Salesforce</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Cisco</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Uber</span>
            </div>
        </div>

      </div>

    </div>
  )
}