"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Check } from "lucide-react"

const Section = () => {
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

  const platformFeatures = [
    "Web Development Excellence",
    "Mobile App Innovation",
    "UI/UX Design Mastery",
    "IT Staff Augmentation",
    "Cloud & DevOps Solutions"
  ];

  return (
    <div ref={sectionRef} className="py-20 relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>

      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10">
        {/* Enlarged Title Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Revolutionize Your <span className="text-blue-800">IT Development Workflow</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            AI-Powered Full-Stack Development & Digital Transformation
          </p>
        </div>

        <div className="relative">
          {/* First Feature Section: Comprehensive Automation - Smaller Size */}
          <div className={`relative z-1 flex flex-col lg:flex-row items-center h-auto lg:h-[30rem] mb-5 p-4 sm:p-6 rounded-3xl overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} shadow-lg border-2 border-gray-300 shadow-gray-400/30 hover:shadow-gray-400/50 hover:border-gray-400 mt-5 bg-white`}>

            <div className="absolute inset-0 pointer-events-none">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="AI-Powered Development Platform"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-1 w-full lg:w-auto lg:max-w-[16rem] xl:max-w-[18rem] 2xl:max-w-[20rem] lg:ml-auto p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg lg:rounded-xl">
              <h4 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">Complete Software Development Solutions</h4>
              <p className="text-sm sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-5 text-gray-100 leading-snug">
                Transform your business with our comprehensive suite of development services including web, mobile, cloud, and AI solutions
              </p>
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                {platformFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start py-1 sm:py-1.5"
                  >
                    <Check 
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-2 sm:mr-2.5 mt-0.5 text-blue-600 flex-shrink-0" 
                    />
                    <span className="text-sm sm:text-sm md:text-base text-white leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Two-Column Feature Showcase - Same Height for Both Boxes */}
          <div className={`relative z-1 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 mt-5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Full-Stack Development */}
            <div className="relative h-80 sm:h-96 md:h-[32rem] rounded-3xl overflow-hidden transition-all duration-300 shadow-lg border-2 border-gray-300 shadow-gray-400/30 hover:shadow-gray-400/50 hover:border-gray-400 bg-white hover:-translate-y-2">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  className="w-full h-full object-cover"
                  alt="Full-Stack Development"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 bg-gradient-to-b from-black/0 to-black/90">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">Web Development</h4>
                <p className="text-sm sm:text-base mb-4 text-gray-100">
                  Custom web applications built with modern technologies for exceptional user experiences and business growth
                </p>
              </div>
            </div>

            {/* Digital Transformation & AI/ML */}
            <div className="h-80 sm:h-96 md:h-[32rem] bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-lg border-2 border-gray-300 shadow-gray-400/30 hover:shadow-gray-400/50 hover:border-gray-400 hover:-translate-y-2">
              <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 xl:px-8">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-black">Mobile Application Development</h4>
                <p className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-700">
                  Native and cross-platform mobile apps that deliver exceptional user experiences across all devices
                </p>
              </div>

              <div className="relative h-32 sm:h-40 md:h-[18rem] bg-gray-100 rounded-xl overflow-hidden mx-2 sm:mx-4 mt-2 sm:mt-4">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  className="w-full h-full object-cover"
                  alt="Mobile Application Development"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;