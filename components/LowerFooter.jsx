"use client"

import Head from 'next/head';
import { useEffect, useState } from "react"

export default function CTASection() {
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
    <div className="relative bg-black overflow-hidden">
      <Head>
        <title>B2W Infotech | AI-Powered Software Development & IT Outsourcing</title>
        <meta name="description" content="Revolutionary AI-powered software development and IT outsourcing solutions. Transform your business with custom AI development and digital transformation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
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
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 " />
      
      <main className="relative z-10 flex items-center justify-center px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
         
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Ready to Revolutionize Your <br />
            <span className="text-white">
              Development Process?
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
            Join 1200+ companies worldwide using our AI-powered development solutions for faster delivery, 
            smarter processes, and revolutionary digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12">
            <button className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-800 hover:bg-blue-900 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg shadow-blue-500/25 border border-blue-400/30">
              Start AI Development
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            
            <button className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-black/20 backdrop-blur-xl border border-blue-800/30 hover:border-blue-800/50 hover:bg-blue-800/20 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Get Free Consultation
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
      

       
        </div>
      </main>
    </div>
  )
}