"use client"
import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
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
  // Custom Styles for Font (same as Hero.jsx)
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
    .font-outfit { font-family: 'Outfit', sans-serif; }

    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll-left {
      animation: scroll-left 20s linear infinite;
    }

    @keyframes scroll-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .animate-scroll-right {
      animation: scroll-right 20s linear infinite;
    }
  `
  return (
    <div className="bg-white min-h-screen font-outfit text-slate-900 selection:bg-[#1e40af] selection:text-white overflow-x-hidden flex flex-col">
      <style>{customStyles}</style>

      {/* Header */}
      <Header />

      {/* Hero Section - Similar to Hero.jsx */}
      <div className="flex-1 w-full max-w-[1160px] mx-auto px-3 py-12 lg:py-12 flex flex-col justify-center">

        {/* Content Grid (Text Left / Image Right) */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch mb-15">

          {/* LEFT CONTENT: Text Only */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col justify-top">
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
              About <br />
              Our <br />
              Journey.
            </h1>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              B2W Infotech stands as a premier AI-powered software development company, delivering transformative digital solutions backed by over 15 years of industry expertise and a portfolio of 1,200+ successful projects worldwide.
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-6">
              <Link href="/contact">
                <button className="bg-[#1e40af] hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-blue-200 flex items-center gap-2 transform hover:-translate-y-1">
                  Get Started <ArrowRight size={20} />
                </button>
              </Link>

              <Link href="/services">
                <button className="flex items-center gap-3 text-slate-600 font-bold text-lg hover:text-[#1e40af] transition-colors group">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-[#1e40af] bg-white transition-colors">
                    <CheckCircle2 size={14} className="fill-slate-600 group-hover:fill-[#1e40af] ml-0.5 transition-colors" />
                  </div>
                  View Services
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT CONTENT: Image */}
          <div className="relative w-full h-full flex flex-col min-h-[450px]">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src="/images/back.png"
                alt="About B2W Infotech"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* --- LOGOS: SEPARATE ROW AT BOTTOM --- */}
        <div className="w-full pt-15 border-t border-slate-50 mt-auto overflow-hidden space-y-6">
            {/* First Row - Left to Right */}
            <div className="flex animate-scroll-left whitespace-nowrap">
                <span className="text-xl font-bold text-slate-900 mx-8">Google</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Microsoft</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Amazon</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Meta</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Apple</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Tesla</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Netflix</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Spotify</span>

                {/* Duplicate for seamless loop */}
                <span className="text-xl font-bold text-slate-900 mx-8">Google</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Microsoft</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Amazon</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Meta</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Apple</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Tesla</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Netflix</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Spotify</span>
            </div>

            {/* Second Row - Right to Left */}
            <div className="flex animate-scroll-right whitespace-nowrap">
                <span className="text-xl font-bold text-slate-900 mx-8">IBM</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Oracle</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Samsung</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Intel</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Adobe</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Salesforce</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Cisco</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Uber</span>

                {/* Duplicate for seamless loop */}
                <span className="text-xl font-bold text-slate-900 mx-8">IBM</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Oracle</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Samsung</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Intel</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Adobe</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Salesforce</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Cisco</span>
                <span className="text-xl font-bold text-slate-900 mx-8">Uber</span>
            </div>
        </div>

      </div>

      {/* About Content Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Content */}
            <div className="space-y-6 text-center lg:text-left flex flex-col justify-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                  15+ Years of <span className="text-[#1e40af]">AI-Powered Excellence</span> in Software Development
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-6 font-medium">
                  B2W Infotech is a leading IT outsourcing company specializing in AI-powered software development, digital transformation, and comprehensive technology solutions. With over 15 years of experience and 1200+ successful projects, we deliver enterprise-grade solutions that drive business growth and innovation across industries.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed mb-6 font-medium">
                  Our ISO-certified processes, cutting-edge AI technologies, and dedicated team of experts ensure that every project delivers measurable ROI and transforms businesses for the digital age. From startups to Fortune 500 companies, we partner with organizations worldwide to accelerate their digital transformation journey.
                </p>
              </div>

              {/* Company Statistics */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#1e40af] mb-2">15+</div>
                  <div className="text-slate-700 text-sm font-medium">
                    Years of<br />Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#1e40af] mb-2">1200+</div>
                  <div className="text-slate-700 text-sm font-medium">
                    Successful<br />Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#1e40af] mb-2">ISO</div>
                  <div className="text-slate-700 text-sm font-medium">
                    Certified<br />Processes
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#1e40af] mb-2">AI</div>
                  <div className="text-slate-700 text-sm font-medium">
                    Powered<br />Solutions
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-full flex flex-col min-h-[450px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="B2W Infotech AI-powered development platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Process Content */}
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Our <span className="text-[#1e40af]">AI-Powered Development</span> Methodology
              </h2>

              {/* Process Steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      01
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Strategic AI Assessment & Planning
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      We begin with a comprehensive analysis of your business objectives, current technology landscape, and AI opportunities. Our certified consultants develop a strategic roadmap that aligns AI-powered solutions with your business goals and ensures maximum ROI.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      02
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      AI-Driven Development & Implementation
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      Our expert teams leverage cutting-edge AI technologies, cloud platforms, and agile methodologies to build scalable, secure solutions. From custom software development to AI strategy implementation, we ensure quality and innovation at every step.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      03
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Deployment, Support & Continuous Innovation
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      We provide seamless deployment, comprehensive training, and 24/7 technical support. Our ongoing monitoring and optimization services ensure your solutions remain cutting-edge, secure, and aligned with evolving business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Image */}
            <div className="relative w-full h-full flex flex-col min-h-[450px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI-powered development process visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Company Expertise & Certifications Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Why Choose <span className="text-[#1e40af]">B2W Infotech</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium">
              With 15+ years of excellence in AI-powered software development, we combine technical expertise with business acumen to deliver transformative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise Areas */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#1e40af] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Development</h3>
              <p className="text-slate-500 font-medium">
                Cutting-edge AI technologies including generative AI, machine learning, and intelligent automation for next-generation solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#1e40af] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">ISO</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ISO Certified Processes</h3>
              <p className="text-slate-500 font-medium">
                Internationally recognized quality management systems ensuring consistent, high-quality deliverables and client satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#1e40af] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">15+</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Years of Experience</h3>
              <p className="text-slate-500 font-medium">
                Decades of proven expertise across industries, from startups to enterprise-level organizations worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#1e40af] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1200+</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Successful Projects</h3>
              <p className="text-slate-500 font-medium">
                Track record of delivering complex, mission-critical projects with measurable business impact and ROI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#1e40af] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">24/7</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Support</h3>
              <p className="text-slate-500 font-medium">
                Round-the-clock technical support and maintenance services ensuring your systems run smoothly 24/7.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#1e40af] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Industry Recognition</h3>
              <p className="text-slate-500 font-medium">
                Trusted partner for leading organizations across healthcare, fintech, retail, and enterprise sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 bg-white">
        <Testimonials />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}