"use client"
import { useEffect, useState } from "react"

export default function HeroSlug({ service }) {
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

  // Fallback service data if not provided
  const defaultService = {
    title: "Professional Development Services",
    category: "Software Development",
    longDescription: "Expert development services tailored to your business needs with cutting-edge technology and best practices."
  }

  const currentService = service || defaultService

  return (
    <div className="bg-black min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden pt-16 sm:pt-20 md:pt-12">

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
      
      {/* Hero Content - Service Specific */}
        <div className="flex items-center min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] pt-4 sm:pt-6 md:pt-8 relative z-10">
        {/* Service Content - Taking full width and centered */}
        <div className="w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up opacity-0 animation-delay-200">
            Expert{" "}
            <span className="text-white">
              {currentService.title}
            </span>
            <br />
            Solutions
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto animate-fade-in-up opacity-0 animation-delay-400">
            {currentService.longDescription || "Professional development services with cutting-edge technology, transparent processes, and rapid deployment tailored to your business needs."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-600">
            <a
              href="/contact-form"
              className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-200 font-medium shadow-lg text-sm sm:text-base"
            >
              Get Started Now
            </a>
            <a
              href="/contact-form"
              className="bg-black/20 backdrop-blur-xl border border-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-200 font-medium text-sm sm:text-base"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
