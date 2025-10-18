"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { getServiceBySlug, getRelatedServices } from "../../../lib/servicesData"
import { ArrowLeft, Check, ChevronRight, Star } from "lucide-react"
import Header from "@/components/Header"
import HeroSlug from "@/components/HeroSlug"
import Footer from "@/components/Footer"

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug

  const service = getServiceBySlug(slug)
  const relatedServices = getRelatedServices(slug)

  if (!service) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Service Not Found</h1>
            <p className="text-gray-700 mb-8">The service you're looking for doesn't exist.</p>
            <Link href="/services">
              <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-200">
                View All Services
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      <HeroSlug service={service} />
      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        </div>

        {/* Breadcrumb & Back Navigation */}
        <section className="relative z-10 pt-8 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>

            <div className="flex items-center text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-black">{service.title}</span>
            </div>
          </div>
        </section>

      {/* Features Section */}
      <section
        className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        style={{ backgroundColor: "#ecf1f2" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What You Get With Our <span className="text-blue-600">{service.category}</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your specific business requirements and technical needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Check size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">{feature}</h4>
                    <p className="text-sm text-gray-600">
                      Professional implementation with best practices and optimization.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-xl px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our <span className="text-blue-600">Development Process</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section
          className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
          style={{ backgroundColor: "#ecf1f2" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                Related <span className="text-blue-600">Services</span>
              </h2>
              <p className="text-lg text-gray-700">Explore other services that complement your development needs.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link key={relatedService.slug} href={`/services/${relatedService.slug}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div className="text-4xl mb-4">{relatedService.icon}</div>
                    <h3 className="text-xl font-bold text-black mb-3">{relatedService.title}</h3>
                    <p className="text-gray-700 mb-4">{relatedService.description}</p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Learn More <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Get Started with <span className="text-blue-600">{service.category}</span>?
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who have transformed their businesses with our expert development
            services. Let's discuss your project requirements and create a custom solution for your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25 border border-blue-400/30 text-lg">
                Start Your Project Today
              </button>
            </Link>
            <button className="border border-gray-400 hover:border-gray-500 hover:bg-gray-100 text-gray-700 hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-200 bg-white text-lg">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  )
}
