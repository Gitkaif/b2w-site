"use client"
import Link from "next/link"
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/logo.jpg"
                  alt="B2W Infotech Logo"
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <Brain className="h-8 w-8 text-blue-400 hidden" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  B2W Infotech
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Revolutionary AI-powered IT outsourcing solutions. We help businesses find order in the midst of chaos through full-stack development, digital transformation, and comprehensive managed services.
              </p>

              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">1200+</span>
                <span>Projects Completed Worldwide</span>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-blue-500/30 pb-2">
                Our Services
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "IT Outsourcing", href: "/services/it-outsourcing" },
                  { name: "Custom Software Development", href: "/services/custom-software-development" },
                  { name: "AI Strategy & Implementation", href: "/services/ai-strategy-implementation" },
                  { name: "Web & Mobile Development", href: "/services/web-mobile-development" },
                  { name: "MVP Development", href: "/services/mvp-development" },
                  { name: "Staff Augmentation", href: "/services/staff-augmentation" },
                  { name: "Legacy Modernization", href: "/services/legacy-modernization" },
                  { name: "All Services", href: "/services" }
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 text-blue-500/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-blue-500/30 pb-2">
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "Contact Form", href: "/contact-form" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Login", href: "/login" },
                  { name: "Register", href: "/register" },
                  { name: "Profile", href: "/profile" }
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 text-blue-500/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-blue-500/30 pb-2">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p className="font-medium text-white">Our Office</p>
                    <p>402, Brahans Business Park,</p>
                    <p>16A Mahal Industrial Estate,</p>
                    <p>Shantinagar, Off Mahakali Caves Road,</p>
                    <p>Andheri East, Mumbai 400093</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-blue-400 flex-shrink-0" />
                  <a
                    href="mailto:b2winfotek@gmail.com"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    b2winfotek@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-blue-400 flex-shrink-0" />
                  <a
                    href="tel:+917798001001"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    +91 77980 01001
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-white">Follow Us</p>
                <div className="flex space-x-3">
                  {[
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Globe, href: "#", label: "Website" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 hover:border-blue-400/50 rounded-lg flex items-center justify-center transition-all duration-200 group"
                    >
                      <social.icon size={18} className="text-blue-400 group-hover:text-blue-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  Stay Updated with AI Development Trends
                </h3>
                <p className="text-sm text-gray-300">
                  Get the latest insights on AI-powered development and digital transformation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 lg:max-w-md lg:w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-black/70 transition-all duration-200"
                />
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-500/25 border border-blue-400/30 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-400">
                <p>© 2024 B2W Infotech. All rights reserved.</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                <p>🔒 ISO 27001 Certified</p>
                <p>⚡ 99.9% Uptime SLA</p>
                <p>🌍 Global Support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}