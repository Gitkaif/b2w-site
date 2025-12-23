"use client";

import React from 'react';
import { Play } from 'lucide-react';

export default function WhyChooseUs() {
  
  // Custom Styles for Font
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
    .font-outfit { font-family: 'Outfit', sans-serif; }
  `
  
  // Data derived from your previous B2W Infotech context
  const features = [
    {
      label: "Client Satisfaction",
      value: "98%",
      description: "We consistently deliver high-quality IT solutions that exceed client expectations globally."
    },
    {
      label: "Years Experience",
      value: "15+",
      description: "Over a decade of expertise in AI-driven development and digital transformation."
    },
    {
      label: "Project Success",
      value: "100%",
      description: "A proven track record of delivering complex software projects on time and within budget."
    },
    {
      label: "Global Experts",
      value: "50+",
      description: "A dedicated team of developers, designers, and AI specialists ready to scale your business."
    }
  ];

  return (
    <div className="py-16 sm:py-20 bg-slate-50 font-outfit text-slate-900 overflow-hidden">
      <style>{customStyles}</style>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: Text & Image --- */}
          <div>
            <span className="text-[#1e40af] font-bold tracking-wider text-sm uppercase mb-2 block">
              Transparent Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Why people choose <br /> B2W Infotech
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md">
              We combine AI-driven innovation with 15+ years of industry expertise to deliver revolutionary IT outsourcing solutions that transform businesses.
            </p>

            {/* Image Composition */}
            <div className="relative w-full max-w-[500px]">
              {/* Decorative dots pattern (optional based on image) */}
              <div className="absolute -top-6 -right-6 w-20 h-20 opacity-20 bg-[radial-gradient(#1e40af_2px,transparent_2px)] [background-size:8px_8px]"></div>

              {/* The Video Container with Custom Blob Shape */}
              <div className="relative overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-[40px] rounded-bl-[40px] shadow-xl border-4 border-white">
                <div className="relative aspect-[4/3]">
                   {/* Video Tag */}
                  <video 
                    src="/images/why.mp4" 
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                </div>

                {/* Play Button Overlay (Decorative since video autoplays) */}
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
                  <button className="relative w-16 h-16 bg-[#1e40af] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 group pointer-events-none">
                    {/* Ripple Effect */}
                    <span className="absolute inset-0 rounded-full border-2 border-[#1e40af] opacity-50 w-full h-full animate-ping"></span>
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Background Blob Decoration */}
              <div className="absolute -z-10 bottom-[-20px] right-[-20px] w-full h-full bg-[#1e40af]/10 rounded-tl-[100px] rounded-br-[100px] rounded-tr-[40px] rounded-bl-[40px] transform translate-x-4 translate-y-4"></div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: 2x2 Grid --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* The Semi-Circle Top Background */}
                <div className="relative w-full h-24 mb-10 overflow-visible">
                  {/* Blue Semi-Circle */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-24 bg-blue-50 rounded-b-full"></div>
                  
                  {/* Floating Icon Circle */}
                  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#1e40af] font-bold text-sm border border-slate-50">
                    %
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-4">
                  <h3 className="text-xl font-bold text-black mb-3">{item.label}</h3>
                  <div className="text-3xl font-bold text-[#1e40af] mb-3">{item.value}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}