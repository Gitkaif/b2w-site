import { generateMetaTags } from '@/lib/ultimateSEO';

export const metadata = generateMetaTags({
  title: 'Industries We Serve - B2W Infotech',
  description: 'B2W Infotech serves diverse industries including Technology, E-commerce, Finance, Healthcare, Retail, Education, Government, Startups, Sports, Real Estate, Logistics, Travel & Hospitality, and Media & Entertainment with AI-powered solutions.',
  keywords: 'industries served, technology solutions, AI development, digital transformation, industry expertise, B2W Infotech',
  url: '/industries',
  image: '/images/logo.jpg'
});

export default function IndustriesPage() {
  const industries = [
    {
      name: "Technology",
      description: "Cutting-edge software solutions for tech companies, including AI integration, cloud migration, and digital transformation.",
      icon: "💻"
    },
    {
      name: "E-commerce",
      description: "Scalable e-commerce platforms with advanced analytics, payment integration, and personalized shopping experiences.",
      icon: "🛒"
    },
    {
      name: "Finance & Banking",
      description: "Secure financial applications with compliance, fraud detection, and real-time transaction processing capabilities.",
      icon: "🏦"
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant healthcare solutions including telemedicine, patient management, and medical data analytics.",
      icon: "🏥"
    },
    {
      name: "Retail",
      description: "Omnichannel retail solutions with inventory management, POS systems, and customer loyalty programs.",
      icon: "🏪"
    },
    {
      name: "Education & E-Learning",
      description: "Interactive learning platforms, LMS systems, and educational technology solutions for modern classrooms.",
      icon: "🎓"
    },
    {
      name: "Government & Public Sector",
      description: "Secure government applications with compliance, citizen services, and public data management systems.",
      icon: "🏛️"
    },
    {
      name: "Startups & Innovation Hubs",
      description: "Rapid MVP development, scalable architectures, and innovative solutions for emerging businesses.",
      icon: "🚀"
    },
    {
      name: "Sports",
      description: "Sports management systems, fan engagement platforms, and performance analytics for athletes and organizations.",
      icon: "⚽"
    },
    {
      name: "Real Estate",
      description: "Property management systems, real estate marketplaces, and virtual tour technologies.",
      icon: "🏠"
    },
    {
      name: "Logistics",
      description: "Supply chain management, fleet tracking, and logistics optimization solutions.",
      icon: "🚚"
    },
    {
      name: "Travel & Hospitality",
      description: "Booking systems, hotel management, and travel technology solutions for the hospitality industry.",
      icon: "✈️"
    },
    {
      name: "Media & Entertainment",
      description: "Content management systems, streaming platforms, and digital media solutions.",
      icon: "🎬"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden pt-16 sm:pt-20 md:pt-16">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/90"></div>
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full flex items-center justify-center">
          <div className="text-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-4 sm:mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Transforming businesses across diverse sectors with AI-powered software development and digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Comprehensive Industry Expertise
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              With 15+ years of experience and 1200+ successful projects, we deliver tailored AI-powered solutions
              for businesses across all major industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed">
            Let's discuss how our AI-powered solutions can revolutionize your business operations
            and drive unprecedented growth in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Your Digital Transformation
            </a>
            <a
              href="/services"
              className="bg-white hover:bg-gray-50 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-blue-500 hover:border-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}