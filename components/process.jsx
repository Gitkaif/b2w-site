"use client";

import React from 'react';

export default function ProcessTimeline() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
      `}</style>
      
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
        <div className="max-w-7xl w-full bg-white rounded-[40px] p-8 md:p-12 lg:p-20 shadow-sm relative overflow-hidden">
          
          {/* Background Decorative Circle */}
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-50/30 rounded-full pointer-events-none z-0"></div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 relative z-10 items-center">
            
            {/* --- LEFT CONTENT --- */}
            <div className="xl:col-span-4 flex flex-col justify-center relative z-20">
              <h4 className="text-[#1e40af] font-bold text-sm tracking-wide uppercase mb-4">
                Our Work Process
              </h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                How We Transform Your Business
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md font-medium">
                Our streamlined three-step approach ensures we deliver exceptional results tailored to your business needs, from discovery to deployment.
              </p>
              <button className="bg-[#1e40af] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-blue-800 transition-colors hover:shadow-xl transform hover:-translate-y-1 w-fit">
                Get Started
              </button>
            </div>

            {/* --- RIGHT TIMELINE AREA --- */}
            <div className="xl:col-span-8 relative w-full h-[500px] md:h-[600px]">
              
              {/* SVG CURVE LAYER - Coordinates adjusted to hit the dots exactly */}
              <svg className="absolute inset-0 w-full h-full visible xl:block hidden pointer-events-none" viewBox="0 0 800 600" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e40af" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#1e40af" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {/* Modified Curve Logic:
                      Start Low-Left.
                      Hit P1 (Step 1) at approx y=380
                      Hit P2 (Step 2) at approx y=230
                      Hit P3 (Step 3) at approx y=70
                  */}
                  <path 
                    d="M -20,450 C 50,450 100,380 160,380 S 320,230 400,230 S 580,70 640,70 S 750,50 820,50"
                    fill="none" 
                    stroke="url(#curveGradient)" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                  />
              </svg>

              {/* Mobile Line (Hidden on Desktop) */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 xl:hidden"></div>


              {/* --- STEP 1 (Bottom Left) --- */}
              {/* Adjusted top to 69% to align dot with y=380 */}
              <div className="absolute xl:left-[10%] xl:top-[69%] left-0 top-0 w-full xl:w-[240px] pl-16 xl:pl-0 pt-10 xl:pt-0">
                  <div className="relative group">
                      {/* Watermark */}
                      <span className="absolute -top-20 -left-6 text-[140px] font-bold text-slate-100 -z-10 leading-none select-none transition-colors group-hover:text-blue-50">1</span>
                      
                      {/* Dot Marker */}
                      <div className="w-6 h-6 bg-[#1e40af] border-[4px] border-white rounded-full shadow-lg absolute -left-[42px] top-1 xl:left-1/2 xl:-top-8 xl:-translate-x-1/2 z-20 group-hover:scale-110 transition-transform"></div>
                      
                      {/* Text */}
                      <div className="xl:text-center">
                        <h3 className="font-bold text-slate-900 text-base mb-3">Discovery & Planning</h3>
                        <p className="text-sm text-slate-600 leading-7 font-medium">
                          We begin by understanding your business goals, target audience, and project requirements through detailed consultations and research.
                        </p>
                      </div>
                  </div>
              </div>

              {/* --- STEP 2 (Center) --- */}
              {/* Adjusted top to 44% to align dot with y=230 */}
              <div className="absolute xl:left-[40%] xl:top-[44%] left-0 top-[33%] w-full xl:w-[240px] pl-16 xl:pl-0 pt-10 xl:pt-0">
                  <div className="relative group">
                      {/* Watermark */}
                      <span className="absolute -top-20 -left-6 text-[140px] font-bold text-slate-100 -z-10 leading-none select-none transition-colors group-hover:text-blue-50">2</span>
                      
                      {/* Dot Marker */}
                      <div className="w-6 h-6 bg-[#1e40af] border-[4px] border-white rounded-full shadow-lg absolute -left-[42px] top-1 xl:left-1/2 xl:-top-8 xl:-translate-x-1/2 z-20 group-hover:scale-110 transition-transform"></div>
                      
                      {/* Text */}
                      <div className="xl:text-center">
                        <h3 className="font-bold text-slate-900 text-base mb-3">Design & Development</h3>
                        <p className="text-sm text-slate-600 leading-7 font-medium">
                          Our expert team creates stunning designs and develops robust solutions using the latest technologies and best practices.
                        </p>
                      </div>
                  </div>
              </div>

              {/* --- STEP 3 (Top Right) --- */}
              {/* Adjusted top to 17% to align dot with y=70 */}
              <div className="absolute xl:left-[70%] xl:top-[17%] left-0 top-[66%] w-full xl:w-[240px] pl-16 xl:pl-0 pt-10 xl:pt-0">
                  <div className="relative group">
                      {/* Watermark */}
                      <span className="absolute -top-20 -left-6 text-[140px] font-bold text-slate-100 -z-10 leading-none select-none transition-colors group-hover:text-blue-50">3</span>
                      
                      {/* Dot Marker */}
                      <div className="w-6 h-6 bg-[#1e40af] border-[4px] border-white rounded-full shadow-lg absolute -left-[42px] top-1 xl:left-1/2 xl:-top-8 xl:-translate-x-1/2 z-20 group-hover:scale-110 transition-transform"></div>
                      
                      {/* Text */}
                      <div className="xl:text-center">
                        <h3 className="font-bold text-slate-900 text-base mb-3">Launch & Support</h3>
                        <p className="text-sm text-slate-600 leading-7 font-medium">
                          We deploy your project with thorough testing and provide ongoing support to ensure continuous success and growth.
                        </p>
                      </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}