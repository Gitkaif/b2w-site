"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null)

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
      question: "What kind of analytics and reporting do you provide?",
      answer:
        "We provide comprehensive analytics including development velocity metrics, code quality assessments, project timeline predictions, and ROI tracking for your IT investments.",
    },
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  const leftColumnFAQs = faqs.filter((_, index) => index % 2 === 0)
  const rightColumnFAQs = faqs.filter((_, index) => index % 2 === 1)

  // Font Style: Plus Jakarta Sans (Matches the heavy, geometric look of the image)
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
    .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
  `

  const FAQItem = ({ faq }) => (
    <div className="mb-4 sm:mb-6 group">
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-[#1e40af] hover:shadow-md transition-all duration-300">
        <button
          onClick={() => toggleFaq(faq.id)}
          className="w-full px-5 sm:px-6 py-6 flex items-center justify-between text-left focus:outline-none min-h-[84px]"
          aria-expanded={openFaq === faq.id}
        >
          {/* Font applied here: Bold and Tight */}
          <h3 className={`text-[17px] font-bold leading-tight pr-4 flex-1 transition-colors duration-300
            ${openFaq === faq.id ? 'text-[#1e40af]' : 'text-slate-900 group-hover:text-[#1e40af]'}`}>
            {faq.question}
          </h3>
          
          <div className="flex-shrink-0 ml-4">
            {openFaq === faq.id ? (
              <ChevronUp className="w-5 h-5 text-[#1e40af]" strokeWidth={3} />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-[#1e40af]" strokeWidth={3} />
            )}
          </div>
        </button>
        
        <div 
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            openFaq === faq.id ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-5 sm:px-6 pb-6">
            <p className="text-slate-600 leading-relaxed text-[15px] font-medium">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-20 sm:py-24 font-jakarta" style={{backgroundColor: '#ecf1f2'}}>
      <style>{customStyles}</style>
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Section - Original Left Aligned Structure */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 bg-[#1e40af] rounded-full"></div>
            <span className="text-[#1e40af] text-sm font-bold uppercase tracking-wide">
              Questions? Look here
            </span>
          </div>
          
          {/* Font Weight 800 to match the "1,200+ Companies" Thickness */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Frequently asked<br />
            <span className="text-[#1e40af]">questions</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            Get answers to common questions about our AI-powered development, full-stack solutions, 
            and comprehensive IT outsourcing services.
          </p>
        </div>

        {/* FAQ Grid - Original 2-Column Structure */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
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
      </div>
    </section>
  )
}