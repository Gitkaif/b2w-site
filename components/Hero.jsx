"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Background images for carousel
  const backgroundImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  ]

  // Auto-change background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  // Functions to manually control background
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % backgroundImages.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    )
  }

  return (
  <div className="bg-black min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-12 relative overflow-hidden">

      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover"
            }}
          />
        ))}
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Switch to background image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Hero Content - Left Side */}
  <div className="flex items-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] pt-18 relative z-10">
        {/* Left Side Content - Taking about 70% width */}
        <div className="w-full lg:w-4/5 xl:w-3/4 text-left">
          <h1 className="sr-only">B2W Infotech - AI-Powered Software Development Company</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up opacity-0 animation-delay-200">
            AI-Powered Software
            <br />
            <span className="text-white">
              Development Excellence
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl animate-fade-in-up opacity-0 animation-delay-400">
            Transform your business with 15+ years of AI-driven development expertise. 1200+ successful projects, ISO-certified processes, and cutting-edge solutions that deliver measurable ROI. From startups to enterprises - we turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16 animate-fade-in-up opacity-0 animation-delay-600">
            <Link
              href="/services"
              className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-200 font-medium shadow-lg text-sm sm:text-base text-center"
              aria-label="Explore our comprehensive AI development services"
            >
              Explore AI Solutions
            </Link>
            <Link
              href="/contact-form"
              className="bg-black/20 backdrop-blur-xl border border-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-200 font-medium text-sm sm:text-base text-center"
              aria-label="Get free consultation from our AI development experts"
            >
              Free AI Consultation
            </Link>
          </div>
        </div>
        {/* Right side remains empty for background images to show */}
        <div className="hidden lg:block w-1/5 xl:w-1/4"></div>
      </div>

      {/* Company Certifications & Expertise */}
      <div className="hidden sm:block mt-16 pb-8 w-full animate-fade-in-up opacity-0 animation-delay-1000 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 text-center">Trusted by Industry Leaders Across Sectors</h2>
        <div className="overflow-hidden">
          {/* First Row - Moving Right */}
          <div className="flex animate-scroll-right mb-8 whitespace-nowrap">
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">FINTECH</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">HEALTHCARE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">RETAIL</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">ISO Certified</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">STARTUPS</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">ENTERPRISE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">AI/ML</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Cloud Native</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">FINTECH</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">HEALTHCARE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">RETAIL</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">ISO Certified</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">STARTUPS</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">ENTERPRISE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">AI/ML</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Cloud Native</span>
            </div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">BLOCKCHAIN</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">DevOps</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">CYBERSECURITY</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">DIGITAL TRANSFORMATION</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">MOBILE APPS</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Web Development</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">CLOUD SOLUTIONS</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">AUTOMATION</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">BLOCKCHAIN</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">DevOps</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">CYBERSECURITY</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">DIGITAL TRANSFORMATION</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">MOBILE APPS</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Web Development</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">CLOUD SOLUTIONS</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">AUTOMATION</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}