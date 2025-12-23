"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  // Font Style: Outfit (Exact match to FAQ Section)
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
    .font-outfit { font-family: 'Outfit', sans-serif; }
  `

  return (
    <section className="bg-slate-50 min-h-screen font-outfit py-22 px-4 sm:px-6 lg:px-8">
      <style>{customStyles}</style>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
           <div className="flex items-center gap-2 mb-6">
             <div className="w-2.5 h-2.5 bg-[#1e40af] rounded-full"></div>
             <span className="text-[#1e40af] text-sm font-bold uppercase tracking-wide">
                Any Query? Let's Connect
             </span>
           </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Get In
            <span className="text-blue-800"> Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed px-4 sm:px-0">
            Have a question or ready to start your AI-powered development journey? We're here to help you transform your business with cutting-edge technology solutions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        
        {/* --- LEFT COLUMN: Map & Details --- */}
        <div className="flex flex-col h-full">
          <h3 className="text-sm font-bold text-[#1e40af] tracking-[0.15em] uppercase mb-8 border-b-2 border-slate-100 pb-4 inline-block w-full">
            WHERE TO FIND US
          </h3>
          
          {/* Map Container - Full Color */}
          <div className="w-full h-80 bg-slate-50 mb-10 overflow-hidden relative border border-slate-200 rounded-lg shadow-sm">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.820860475686!2d72.88040937507736!3d19.11551698209762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c805e9703771%3A0x6370207262232732!2sPolaris%2C%20Marol%20Maroshi%20Rd%2C%20Gamdevi%2C%20Marol%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
             ></iframe>
          </div>

          <h3 className="text-sm font-bold text-[#1e40af] tracking-[0.15em] uppercase mb-8 border-b-2 border-slate-100 pb-4 inline-block w-full">
            Contact details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] text-slate-600 leading-relaxed font-medium flex-1">
             {/* Headquarters */}
             <div>
                <p className="font-bold text-slate-900 mb-2 text-lg">Headquarters</p>
                <div className="space-y-1">
                    <p>A-402, Polaris Building,</p>
                    <p>Marol, Andheri East,</p>
                    <p className="mb-5">Mumbai, MH 400059</p>
                </div>

              
             </div>

             {/* Innovation Hub */}
              <div>
                <p className="font-bold text-slate-900 mb-2 text-lg">Phone</p>
                <div className="space-y-1">
                    <p className="hover:text-[#1e40af] transition-colors cursor-pointer font-bold text-slate-800">+91 7798001001</p>
                </div>
                <p className="font-bold text-slate-900 mb-2 text-lg">Email</p>
                <div className="space-y-1">
                    <p className="hover:text-[#1e40af] transition-colors cursor-pointer font-bold text-slate-800">info@b2winfotech.ai</p>
                </div>
                
             </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Form --- */}
        <div className="flex flex-col h-full">
          <h3 className="text-sm font-bold text-[#1e40af] tracking-[0.15em] uppercase mb-8 border-b-2 border-slate-100 pb-4 inline-block w-full">
            LEAVE A MESSAGE
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
             
             {/* Row 1: First & Last Name */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                   <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="w-full border border-slate-300 bg-slate-50/50 p-4 text-sm text-slate-700 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-all placeholder-slate-400 rounded-md font-medium"
                   />
                </div>
                <div>
                   <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="w-full border border-slate-300 bg-slate-50/50 p-4 text-sm text-slate-700 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-all placeholder-slate-400 rounded-md font-medium"
                   />
                </div>
             </div>

             {/* Email */}
             <div>
                <input 
                   type="email" 
                   name="email"
                   value={formData.email}
                   onChange={handleInputChange}
                   placeholder="Email"
                   className="w-full border border-slate-300 bg-slate-50/50 p-4 text-sm text-slate-700 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-all placeholder-slate-400 rounded-md font-medium"
                />
             </div>

             {/* Subject */}
             <div>
                <input 
                   type="text" 
                   name="subject"
                   value={formData.subject}
                   onChange={handleInputChange}
                   placeholder="Subject"
                   className="w-full border border-slate-300 bg-slate-50/50 p-4 text-sm text-slate-700 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-all placeholder-slate-400 rounded-md font-medium"
                />
             </div>

             {/* Message */}
             <div className="flex-grow">
                <textarea 
                   name="message"
                   value={formData.message}
                   onChange={handleInputChange}
                   placeholder="Your message"
                   rows={7} // Adjusted height to match left column
                   className="w-full h-full border border-slate-300 bg-slate-50/50 p-4 text-sm text-slate-700 focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] transition-all placeholder-slate-400 resize-none rounded-md font-medium"
                />
             </div>

             {/* Footer Row: Text + Button */}
             <div className="flex flex-col sm:flex-row justify-between items-center pt-2 gap-6 mt-auto">
                <p className="text-sm text-slate-500 italic w-full sm:w-1/2 leading-relaxed font-medium">
                   Ease your digital transformation with dependable AI solutions.
                </p>
                
                <button 
                   type="submit"
                   className="w-full sm:w-auto bg-[#1e40af] text-white px-10 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl shadow-[#1e40af]/20 transform hover:-translate-y-1 rounded-md"
                >
                   Send Message
                </button>
             </div>

          </form>
        </div>

        </div>
      </div>

    </section>
  )
}