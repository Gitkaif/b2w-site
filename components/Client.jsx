"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ClientsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef(null)

  // Custom Styles for Font
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
    .font-outfit { font-family: 'Outfit', sans-serif; }
  `

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

  // Sample client logos - you can replace these with your actual 40 client images
  const clientLogos = [
    "/images/client_1.jpg",
    "/images/client_2.jpg",
    "/images/client_3.jpg",
    "/images/client_4.jpg",
    "/images/client_5.jpg",
    "/images/client_6.jpg",
    "/images/client_7.jpg",
    "/images/client_8.jpg",
    "/images/client_9.jpg",
    "/images/client_10.jpg",
    "/images/client_11.jpg",
    "/images/client_12.jpg",
    "/images/client_13.jpg",
    "/images/client_14.jpg",
    "/images/client_15.jpg",
    "/images/client_16.jpg",
    "/images/client_17.jpg",
    "/images/client_18.jpg",
    "/images/client_19.jpg",
    "/images/client_20.jpg",
    "/images/client_21.jpg",
    "/images/client_22.jpg",
    "/images/client_23.jpg",
    "/images/client_24.jpg",
    "/images/client_25.jpg",
    "/images/client_26.jpg",
    "/images/client_27.jpg",
    "/images/client_28.jpg",
    "/images/client_29.jpg",
    "/images/client_30.jpg",
    "/images/client_31.jpg",
    "/images/client_32.jpg",
    "/images/client_33.jpg",
    "/images/client_34.jpg",
    "/images/client_35.jpg",
    "/images/client_36.jpg",
    "/images/client_37.jpg",
    "/images/client_38.jpg",
    "/images/client_39.jpg",
    "/images/client_40.jpg",
    "/images/client_41.jpg",
    "/images/client_42.jpg",
    "/images/client_43.jpg",
    "/images/client_44.jpg",
  ]

  const itemsPerPage = 12 // 3x4 grid
  const totalPages = Math.ceil(clientLogos.length / itemsPerPage)

  const getCurrentPageLogos = () => {
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return clientLogos.slice(startIndex, endIndex)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 md:px-8 lg:px-16 font-outfit" style={{backgroundColor: '#ecf1f2'}}>
      <style>{customStyles}</style>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                Our Happy
                <br />
                Clients
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-md">
                They trust us and we keep giving them reasons to.
              </p>
            </div>

            <Link href="/about">
              <button className="group flex items-center gap-3 border border-slate-300 px-6 py-3 rounded-md hover:border-[#1e40af] hover:bg-[#1e40af] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                aria-label="View all our clients and success stories">
                <span className="text-black group-hover:text-white font-medium">View all Clients</span>
                <ArrowRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
              </button>
            </Link>
          </div>

          {/* Right Content - Clients Grid with Carousel */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Navigation Arrows */}
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white hover:bg-[#1e40af] rounded-full flex items-center justify-center transition-all duration-300 group shadow-md border border-slate-200"
              disabled={totalPages <= 1}
              aria-label="View previous client logos"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-white" />
            </button>

            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white hover:bg-[#1e40af] rounded-full flex items-center justify-center transition-all duration-300 group shadow-md border border-slate-200"
              disabled={totalPages <= 1}
              aria-label="View next client logos"
            >
              <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-white" />
            </button>

            {/* Clients Grid */}
            <div className="grid grid-cols-4 grid-rows-3 gap-4">
              {getCurrentPageLogos().map((logo, index) => (
                <div
                  key={`${currentPage}-${index}`}
                  className={`bg-white rounded-lg p-4 flex items-center justify-center h-24 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-1 border border-slate-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{
                    transitionDelay: isVisible ? `${(index * 100) + 600}ms` : '0ms'
                  }}
                >
                  <img
                    src={logo || "/placeholder.svg"}
                    alt={`Client logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Page Indicators */}
            {totalPages > 1 && (
              <div className={`flex justify-center mt-6 gap-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  transitionDelay: isVisible ? '1800ms' : '0ms'
                }}
              >
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${currentPage === index ? "bg-[#1e40af] scale-125" : "bg-slate-400 hover:bg-slate-500"}`}
                    aria-label={`Go to client page ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
