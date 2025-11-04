"use client"
import { useEffect, useState } from "react"

export default function HeroServices() {
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

  return (
    <div className="bg-black min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden pt-20 sm:pt-24 md:pt-16">

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
          />
        ))}
      </div>
      
      {/* Hero Content - Services Specific */}
      <div className="flex items-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] pt-8 sm:pt-10 md:pt-12 relative z-10">
        {/* Services Content - Taking full width and centered */}
        <div className="w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up opacity-0 animation-delay-200">
            Comprehensive{" "}
            <span className="text-white">
              AI-Powered
            </span>
            <br />
            Development Services
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto animate-fade-in-up opacity-0 animation-delay-400">
            Transform your business with our complete suite of AI-driven development services. From custom software and cloud solutions to generative AI and digital transformation - we deliver enterprise-grade solutions with 15+ years of proven expertise and 1200+ successful projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-600">
            <a
              href="/contact-form"
              className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-200 font-medium shadow-lg text-sm sm:text-base"
            >
              Start Your AI Journey
            </a>
            <a
              href="/about"
              className="bg-black/20 backdrop-blur-xl border border-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-200 font-medium text-sm sm:text-base"
            >
              Discover Our Expertise
            </a>
          </div>
        </div>
      </div>

      {/* Services Stats - B2W Infotech Credentials */}
      <div className="mt-16 w-full animate-fade-in-up opacity-0 animation-delay-1000 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">1200+</div>
            <div className="text-sm text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">ISO</div>
            <div className="text-sm text-gray-300">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">AI</div>
            <div className="text-sm text-gray-300">Powered Solutions</div>
          </div>
        </div>
      </div>
    </div>
  )
}
