"use client"

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

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

  const faqs = [
    {
      id: 1,
      question: "Is there a free trial available for AI-powered development?",
      answer:
        "Yes, we offer a 40-hour risk-free trial for our AI-powered development services. If you want, we'll provide you with a personalized onboarding session to get you started with our AI-driven code generation and automated testing frameworks.",
    },
    {
      id: 2,
      question: "Can I change my development plan later?",
      answer:
        "Of course. Our pricing scales with your development needs. Chat with our friendly team to find a solution that works for your company size and project requirements.",
    },
    {
      id: 3,
      question: "What is your cancellation policy?",
      answer:
        "We understand that business needs change. You can cancel your plan at any time and we'll refund you the difference for any unused portion of your development services subscription.",
    },
    {
      id: 4,
      question: "Can I integrate with existing development workflows?",
      answer:
        "Yes, our AI-powered development platform integrates seamlessly with popular tools including GitHub, Jira, and Jenkins through our robust API connections and DevOps automation.",
    },
    {
      id: 5,
      question: "What does 'AI-powered code generation' mean?",
      answer:
        "Our AI analyzes project requirements, existing codebases, and best practices to generate optimized code automatically. The system learns from successful deployments to continuously improve code quality and delivery speed.",
    },
    {
      id: 6,
      question: "How does the 1-hour developer hiring work?",
      answer:
        "Our AI-powered talent matching system analyzes your project requirements and instantly matches you with pre-vetted developers from our pool of 450+ experts across 100+ technologies.",
    },
    {
      id: 7,
      question: "How does the digital transformation process work?",
      answer:
        "We conduct a comprehensive assessment of your legacy systems, create a modernization roadmap, and implement AI-driven solutions for automation, cloud migration, and process optimization.",
    },
    {
      id: 8,
      question: "Can I customize the AI development solutions?",
      answer:
        "Absolutely! You can customize AI models, development frameworks, and automation workflows based on your industry requirements, compliance needs, and business objectives.",
    },
    {
      id: 9,
      question: "What kind of analytics and reporting do you provide?",
      answer:
        "We provide comprehensive analytics including development velocity metrics, code quality assessments, project timeline predictions, and ROI tracking for your IT investments.",
    },
    {
      id: 10,
      question: "Do you provide training and ongoing support?",
      answer:
        "Yes! We provide complete onboarding, AI tool training, development best practices, and 24/7 technical support through our dedicated project management team.",
    },
    {
      id: 11,
      question: "Can I use this for multiple development projects?",
      answer:
        "Of course! You can run unlimited development projects, manage multiple teams, and handle various technology stacks simultaneously within our comprehensive platform.",
    },
    {
      id: 12,
      question: "How secure is my intellectual property?",
      answer:
        "We maintain enterprise-grade security with signed NDAs, IP protection guarantees, and ISO 27001 compliance. All your code and business data is protected with industry-leading security measures.",
    },
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  // Split FAQs into two columns
  const leftColumnFAQs = faqs.filter((_, index) => index % 2 === 0)
  const rightColumnFAQs = faqs.filter((_, index) => index % 2 === 1)

  const FAQItem = ({ faq }) => (
    <div className="mb-4 sm:mb-6">
      <div className="bg-white rounded-xl border border-blue-500/30 overflow-hidden hover:border-blue-400/50 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
        <button
          onClick={() => toggleFaq(faq.id)}
          className="w-full px-4 sm:px-6 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset min-h-[60px] sm:min-h-[70px]"
        >
          <div className="flex items-start gap-3 sm:gap-4 flex-1">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center mt-1">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black leading-6 pr-2 sm:pr-4">{faq.question}</h3>
          </div>
          <div className="flex-shrink-0 ml-2 sm:ml-4">
            {openFaq === faq.id ? (
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            )}
          </div>
        </button>
        
        <div className={`transition-all duration-300 ease-in-out ${
          openFaq === faq.id 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 sm:px-6 pb-4 sm:pb-5 pl-12 sm:pl-16 md:pl-20">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      {/* Hero Section */}
      <section className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[625px] overflow-hidden pt-16 sm:pt-20 md:pt-16">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white text-center">
              FAQ &
              <span className="text-white">
                SUPPORT
              </span>
            </h2>
           
          </div>
        </div>
      </section>

      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Frequently Asked
              <span className="text-black"> Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Get answers to common questions about our AI-powered development, full-stack solutions, digital transformation, and comprehensive IT outsourcing services.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column */}
            <div>
              {leftColumnFAQs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>

            {/* Right Column */}
            <div>
              {rightColumnFAQs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center bg-white border border-gray-300 rounded-2xl py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 shadow-lg">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
                Still have questions?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Can't find the answer you're looking for? Our AI development experts are here to help you get the most out of our revolutionary IT outsourcing platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Start AI Development
                </button>
                <button className="bg-gray-100 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-blue-500 hover:bg-blue-50 hover:border-blue-400 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}