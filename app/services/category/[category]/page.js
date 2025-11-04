import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Header from "@/components/Header"
import HeroSlug from "@/components/HeroSlug"
import Footer from "@/components/Footer"
import { getServicesByCategory } from "../../../../lib/servicesData"
import Lowerfooter from "@/components/LowerFooter"

// 🚀 CATEGORY PAGE SEO METADATA 🚀
export async function generateMetadata({ params }) {
  const { category } = await params

  const categoryDisplayNames = {
    "development-services": "Development Services",
    "engineering-consulting": "Engineering & Consulting",
    "technology-solutions": "Technology Solutions",
    "business-growth": "Business Growth",
    "team-augmentation-services": "Team Augmentation Services"
  }

  const displayName = categoryDisplayNames[category] || category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return {
    title: `${displayName} - B2W Infotech Mumbai | Software Development Services`,
    description: `Explore our ${displayName.toLowerCase()} in Mumbai. Professional software development, IT consulting, and technology solutions. ISO certified company with 15+ years experience.`,
    keywords: `${displayName.toLowerCase()}, software development mumbai, IT services india, technology solutions andheri east`,
    canonical: `https://www.b2winfotech.ai/services/category/${category}`,
  }
}

export default async function CategoryPage({ params }) {
  const { category } = await params

  // Map URL category to display name
  const categoryDisplayNames = {
    "development-services": "Development Services",
    "engineering-consulting": "Engineering & Consulting",
    "technology-solutions": "Technology Solutions",
    "business-growth": "Business Growth"
  }

  // Map URL category to service category names used in servicesData
  const categoryMappings = {
    "development-services": "Development Services",
    "engineering-consulting": "Engineering & Consulting",
    "technology-solutions": "Technology Solutions",
    "business-growth": "Business Growth"
  }

  const displayName = categoryDisplayNames[category] || "Services"
  const serviceCategory = categoryMappings[category] || "Web Development"
  
  // Get services for this category
  const categoryServices = getServicesByCategory(serviceCategory)

  // Create hero service object for the category
  const heroService = {
    title: `${displayName} Services`,
    category: displayName,
    longDescription: `Explore our comprehensive ${displayName.toLowerCase()} solutions designed to accelerate your business growth with cutting-edge technology and expert implementation.`
  }

  if (categoryServices.length === 0) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Category Not Found</h1>
            <p className="text-gray-700 mb-8">The service category you're looking for doesn't exist.</p>
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
      <HeroSlug service={heroService} />
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
              Back to All Services
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
              <span className="text-black">{displayName}</span>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                Our <span className="text-blue-600">{displayName}</span> Services
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Choose from our comprehensive range of {displayName.toLowerCase()} solutions tailored to meet your specific business requirements.
              </p>
            </div>

            <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {categoryServices.map((service, index) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-gray-400 cursor-pointer">
                    <div className="p-6 sm:p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-400/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{service.icon}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <ChevronRight size={16} className="mr-2 text-blue-500 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-500 font-medium">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-end">
                        <div className="flex items-center text-blue-600 font-medium text-sm">
                          Learn More <ChevronRight size={16} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {categoryServices.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No services found in this category.</p>
                <Link href="/services">
                  <button className="mt-4 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    View All Services
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <Lowerfooter />
      </div>
      <Footer />
    </main>
  )
}
