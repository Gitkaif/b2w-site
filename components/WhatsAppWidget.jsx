"use client"

import { MessageCircle, X, Phone, User, Mail } from "lucide-react"
import { useState, useEffect } from "react"

// Simple draggable functionality
function useDraggable() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return { position, handleMouseDown, isDragging };
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const { position, handleMouseDown, isDragging } = useDraggable()

  const whatsappNumber = "919892439222" 
  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const formatWhatsAppMessage = () => {
    let message = `Hi! I'm interested in B2W Infotech services.`
    
    if (formData.name) {
      message += `\n\nName: ${formData.name}`
    }
    if (formData.phone) {
      message += `\nPhone: ${formData.phone}`
    }
    if (formData.email) {
      message += `\nEmail: ${formData.email}`
    }
    if (formData.message) {
      message += `\nMessage: ${formData.message}`
    }
    
    message += `\n\nLooking forward to discussing!`

    return encodeURIComponent(message)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name || !formData.phone) {
      alert('Please fill in at least your name and phone number')
      return
    }

    // Format message
    const whatsappMessage = formatWhatsAppMessage()
    
    // Try different WhatsApp URL formats
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    
    // Debug: Log the URL to console
    console.log('WhatsApp URL:', whatsappURL)
    console.log('Decoded message:', decodeURIComponent(whatsappMessage))
    
    // Try to open WhatsApp
    const newWindow = window.open(whatsappURL, '_blank')
    
    // If window opening fails, try alternative method
    if (!newWindow) {
      // Fallback: Try without window.open
      window.location.href = whatsappURL
    }
    
    setIsOpen(false)
    
    // Reset form for next use
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    })
  }

  return (
    <div 
      className="fixed bottom-6 right-6 z-[80]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'default'
      }}
    >
      {/* WhatsApp Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          onMouseDown={handleMouseDown}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative group mb-2"
          aria-label="Open WhatsApp"
        >
          <MessageCircle size={20} className="sm:hidden" />
          <MessageCircle size={24} className="hidden sm:block" />
          <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 sm:px-3 sm:py-2 bg-black text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Get Quick Quote
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </div>
        </button>
      )}

      {/* Contact Form Modal */}
      {isOpen && (
        <div className="flex flex-col w-72 sm:w-80 md:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden max-h-[90vh]">
          {/* Header */}
          <div 
            className="bg-green-500 text-white p-3 sm:p-4 flex justify-between items-center cursor-move flex-shrink-0"
            onMouseDown={handleMouseDown}
          >
            <div className="flex items-center">
              <MessageCircle size={18} className="mr-2 sm:hidden" />
              <MessageCircle size={20} className="mr-2 hidden sm:block" />
              <h3 className="font-semibold text-sm sm:text-base">Get Quick Quote on WhatsApp</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close form"
            >
              <X size={18} className="sm:hidden" />
              <X size={20} className="hidden sm:block" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-3 sm:p-4 space-y-3 sm:space-y-4 max-h-96 sm:max-h-none overflow-y-auto">
            <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
              Fill in your details and we'll send you a personalized quote on WhatsApp instantly!
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                <User size={14} className="inline mr-1 sm:hidden" />
                <User size={16} className="inline mr-1 hidden sm:inline" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                <Phone size={14} className="inline mr-1 sm:hidden" />
                <Phone size={16} className="inline mr-1 hidden sm:inline" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="+91 9876543210"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                <Mail size={14} className="inline mr-1 sm:hidden" />
                <Mail size={16} className="inline mr-1 hidden sm:inline" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Project Requirements
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Brief description of your project needs..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm sm:text-base"
            >
              <MessageCircle size={16} className="mr-2 sm:hidden" />
              <MessageCircle size={18} className="mr-2 hidden sm:block" />
              Send to WhatsApp
            </button>

            <div className="text-xs text-gray-500 text-center">
              By clicking "Send to WhatsApp", you'll be redirected to WhatsApp with your details pre-filled.
            </div>
          </form>
        </div>
      )}
    </div>
  )
}