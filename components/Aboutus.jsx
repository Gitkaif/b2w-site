"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Testimonials from "@/components/Testimonial"

// Button component
const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function AboutUsPage() {
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
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[470px] md:h-[350px] lg:h-[625px] overflow-hidden pt-16 sm:pt-20 md:pt-16">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover"
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full flex items-center justify-center">
          <div className="text-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center">
              ABOUT
              <span className="text-white">
                US
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-6 sm:py-8 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-stretch">
            {/* Hero Image */}
            <div className="order-2 lg:order-1 flex justify-center h-full">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="B2W Infotech AI-powered development platform"
                className="w-full max-w-sm sm:max-w-md lg:max-w-none h-full object-cover rounded-lg shadow-lg border border-blue-500/30 shadow-lg shadow-blue-500/10"
              />
            </div>

            {/* Hero Content */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                  15+ Years of <span className="text-blue-600">AI-Powered Excellence</span> in Software Development
                </h1>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  B2W Infotech is a leading IT outsourcing company specializing in AI-powered software development, digital transformation, and comprehensive technology solutions. With over 15 years of experience and 1200+ successful projects, we deliver enterprise-grade solutions that drive business growth and innovation across industries.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  Our ISO-certified processes, cutting-edge AI technologies, and dedicated team of experts ensure that every project delivers measurable ROI and transforms businesses for the digital age. From startups to Fortune 500 companies, we partner with organizations worldwide to accelerate their digital transformation journey.
                </p>
              </div>

              {/* Company Statistics */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">15+</div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">1200+</div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    Successful
                    <br />
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">ISO</div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    Certified
                    <br />
                    Processes
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">AI</div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    Powered
                    <br />
                    Solutions
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium tracking-wider border border-blue-400/30 shadow-lg shadow-blue-500/25 w-full">
                    START YOUR AI TRANSFORMATION
                  </Button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium tracking-wider border-2 border-blue-500 hover:border-blue-400 shadow-lg shadow-blue-500/25 w-full">
                    VIEW OUR SERVICES
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Process Section */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10" style={{backgroundColor: '#FFFFFF'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Process Content */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                Our <span className="text-blue-600">AI-Powered Development</span> Methodology
              </h2>

              {/* Process Steps */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 flex-grow flex flex-col justify-center">
                {/* Step 1 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                      01
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">
                      Strategic AI Assessment & Planning
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      We begin with a comprehensive analysis of your business objectives, current technology landscape, and AI opportunities. Our certified consultants develop a strategic roadmap that aligns AI-powered solutions with your business goals and ensures maximum ROI.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                      02
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">
                      AI-Driven Development & Implementation
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      Our expert teams leverage cutting-edge AI technologies, cloud platforms, and agile methodologies to build scalable, secure solutions. From custom software development to AI strategy implementation, we ensure quality and innovation at every step.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                      03
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">
                      Deployment, Support & Continuous Innovation
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      We provide seamless deployment, comprehensive training, and 24/7 technical support. Our ongoing monitoring and optimization services ensure your solutions remain cutting-edge, secure, and aligned with evolving business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Image */}
            <div className="order-first lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI-powered development process visualization"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover rounded-lg shadow-lg border border-blue-500/30 shadow-lg shadow-blue-500/10"
              />
            </div>
          
          </div>
        </div>
      </section>

      {/* Company Expertise & Certifications Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose <span className="text-blue-600">B2W Infotech</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              With 15+ years of excellence in AI-powered software development, we combine technical expertise with business acumen to deliver transformative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* Expertise Areas */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">AI-Powered Development</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Cutting-edge AI technologies including generative AI, machine learning, and intelligent automation for next-generation solutions.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">ISO</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">ISO Certified Processes</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Internationally recognized quality management systems ensuring consistent, high-quality deliverables and client satisfaction.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">15+</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Years of Experience</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Decades of proven expertise across industries, from startups to enterprise-level organizations worldwide.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1200+</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Successful Projects</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Track record of delivering complex, mission-critical projects with measurable business impact and ROI.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">24/7</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Global Support</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Round-the-clock technical support and maintenance services ensuring your systems run smoothly 24/7.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🏆</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Industry Recognition</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Trusted partner for leading organizations across healthcare, fintech, retail, and enterprise sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10" style={{backgroundColor: '#FFFFFF'}}>
        <Testimonials />
      </section>
    </div>
  )
}