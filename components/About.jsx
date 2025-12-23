"use client";
import { useState, useEffect, useRef } from "react"
import { BarChart3, CheckCircle } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Font Style: Outfit (Exactly as per FAQ Section)
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&display=swap');
    .font-outfit { font-family: 'Outfit', sans-serif; }
  `

  return (
    <section ref={sectionRef} className="bg-white pt-20 pb-29 px-4 sm:px-6 lg:px-8 overflow-hidden font-outfit relative">
      <style>{customStyles}</style>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* --- LEFT SIDE: IMAGE COLLAGE (Layout from Image, Colors from FAQ) --- */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Main Background Blob (Blue instead of Purple) */}
            <div className="absolute top-10 left-0 w-3/4 h-full bg-[#1e40af]/5 rounded-[40px] -z-10 transform -rotate-3"></div>

            <div className="grid grid-cols-2 gap-6 p-4">
                
                {/* Floating Stat Card (Top Left) */}
                <div className="col-span-2 flex justify-center lg:justify-end mb-4">
                    <div className="bg-white p-5 rounded-2xl shadow-xl shadow-[#1e40af]/10 border border-slate-50 flex items-center gap-4 max-w-xs transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="bg-[#1e40af]/10 p-3 rounded-full text-[#1e40af]">
                            <BarChart3 size={24} />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-slate-900">1,200+</h4>
                            <p className="text-xs text-slate-500 font-medium">Projects Delivered</p>
                        </div>
                    </div>
                </div>

                {/* Image 1 (Left) - Tech Image */}
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg transform translate-y-8 border-4 border-white">
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                        alt="Data Analytics" 
                        className="w-full h-full object-cover"
                    />
                    {/* Blue Overlay to match theme */}
                    <div className="absolute inset-0 bg-[#1e40af]/10 mix-blend-multiply"></div>
                </div>

                {/* Image 2 (Right) - Team Image */}
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl -mt-8 border-4 border-white">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                        alt="Team Collaboration" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Floating User Avatars (Bottom of image) */}
                    <div className="absolute bottom-4 left-4 flex -space-x-3">
                        {[1,2,3].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-[#1e40af] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                            450+
                        </div>
                    </div>
                </div>

            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className={`pl-0 lg:pl-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Small Tag - Using FAQ Blue */}
            <span className="text-[#1e40af] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
              A BIT
            </span>
            
            {/* Heading - Using FAQ Font Weight/Color */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              ABOUT US
            </h2>

            {/* Description - Using FAQ Text Color */}
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                <p>
                    B2W Infotech revolutionizes IT outsourcing by addressing critical industry challenges including lack of transparency, budget overruns, and unreliable deliverables.
                </p>
                <p>
                    Our mission centers on helping businesses <span className="text-[#1e40af] font-bold">"find order in the midst of chaos"</span> through transparent processes and innovative solutions. We leverage advanced AI-powered code generation and predictive analytics.
                </p>
            </div>

            {/* Button - Exact match to FAQ Button Style */}
            <button className="bg-[#1e40af] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl shadow-[#1e40af]/20 transform hover:-translate-y-1">
                EXPLORE MORE
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}