"use client";

import React from 'react';
import { ArrowUpRight, MoveRight } from 'lucide-react';

export default function ITServicesLandingPage() {
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
  `

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <style>{customStyles}</style>
      <div className="max-w-[1280px] mx-auto flex flex-col gap-4 sm:gap-6">
        
        {/* ================= HERO SECTION ================= */}
        {/* Changed bg color to a soft tech blue-grey to match IT context */}
        <div className="relative bg-[#F1F5F9] rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden min-h-[450px] sm:min-h-[400px] md:h-[450px] flex flex-col md:flex-row p-6 sm:p-8 md:p-10">
          
          {/* Left Content */}
          <div className="w-full md:w-[50%] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center z-20 order-1 relative">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-4 sm:mb-5 md:mb-6 tracking-tight">
              Revolutionize Your <br className="hidden sm:block" />
              <span className="text-[#1e40af]">IT Development</span> <br className="hidden sm:block" />
              Workflow
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-base max-w-md mb-5 sm:mb-6 md:mb-7 font-medium leading-relaxed">
              AI-Powered Full-Stack Development & Digital Transformation. Transform your business with our comprehensive suite of services.
            </p>
            
            <button className="bg-[#1e40af] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold inline-flex items-center gap-2 w-fit hover:bg-blue-800 transition-colors shadow-lg text-sm">
              Start Transformation <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Stats & Buttons */}
          <div className="w-full md:w-[50%] p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center relative z-20 order-2">
            <img 
              src="/images/hi.gif" 
              alt="IT Development" 
              className="w-[85%] max-w-[350px] h-auto object-contain"
            />
          </div>
        </div>

        {/* ================= BOTTOM GRID SECTION ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Card 1: Web Development */}
            <div className="col-span-1 relative h-[350px] sm:h-[380px] md:h-[400px] rounded-[32px] sm:rounded-[40px] overflow-hidden bg-[#F1F5F9] p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div>
                    <span className="bg-blue-100 text-[#1e40af] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold mb-4 inline-block">
                        Excellence
                    </span>
                    <h3 className="text-xl sm:text-2xl text-slate-900 font-bold leading-tight mb-3">
                        Web Development
                    </h3>
                    <p className="text-slate-600 text-sm leading-7 font-medium">
                        Custom web applications built with modern technologies for exceptional user experiences.
                    </p>
                </div>
                <button className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1e40af] rounded-full flex items-center justify-center hover:scale-110 transition-transform self-end">
                    <ArrowUpRight size={18} className="text-white" />
                </button>
            </div>

            {/* Card 2: Mobile App */}
            <div className="col-span-1 flex flex-col h-full">
                 
                 <div className="flex-1 relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-[#F1F5F9] p-6 sm:p-8 flex flex-col justify-between min-h-[250px] hover:shadow-lg transition-shadow">
                    <div>
                        <span className="bg-blue-100 text-[#1e40af] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold mb-4 inline-block">
                            Innovation
                        </span>
                        <h3 className="text-xl sm:text-2xl text-slate-900 font-bold leading-tight mb-3">
                            Mobile Apps
                        </h3>
                        <p className="text-slate-600 text-sm leading-7 font-medium">
                            Native and cross-platform mobile apps for all devices.
                        </p>
                    </div>
                    <button className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1e40af] rounded-full flex items-center justify-center hover:scale-110 transition-transform self-end">
                        <ArrowUpRight size={18} className="text-white" />
                    </button>
                 </div>
            </div>

            {/* Card 3: AI & Chatbots (Wide) */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2 relative h-[400px] sm:h-[380px] md:h-[400px] rounded-[32px] sm:rounded-[40px] overflow-hidden bg-[#F1F5F9] p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
                
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-[#1e40af]">98%</p>
                        <p className="text-slate-600 text-xs sm:text-sm font-medium">Client Satisfaction</p>
                    </div>
                    <button className="flex items-center gap-2 text-slate-900 hover:text-[#1e40af] text-xs sm:text-sm font-bold">
                        <span className="hidden sm:inline">View Case Study</span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#1e40af] rounded-full flex items-center justify-center text-white">
                            <ArrowUpRight size={16}/>
                        </div>
                    </button>
                </div>

                {/* Bottom Content */}
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-900 font-bold mb-4 sm:mb-6 max-w-lg leading-tight">
                        AI & Intelligent Chatbots for Automation
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 max-w-md leading-7 font-medium">
                        Enhance user experiences and automate customer interactions with intelligent AI solutions and conversational chatbots.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                        <input 
                            type="email" 
                            placeholder="Enter your email for a quote" 
                            className="flex-1 bg-white border border-slate-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af] text-xs sm:text-sm font-medium"
                        />
                        <button className="bg-[#1e40af] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-blue-800 transition-colors whitespace-nowrap">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}