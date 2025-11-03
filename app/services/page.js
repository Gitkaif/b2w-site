import Link from "next/link"
import { Code, Smartphone, Brain, Cloud, Building2, Shield, ChevronRight } from "lucide-react"
import Header from "@/components/Header"
import HeroServices from "@/components/HeroServices"
import Footer from "@/components/Footer"
import { generateMetaTags } from "@/lib/ultimateSEO";
import Lowerfooter from "@/components/LowerFooter"
import { getAllCategories, getServicesByCategory, getServiceBySlug } from "@/lib/servicesData";

// 🚀 SERVICES PAGE SEO METADATA 🚀
export const metadata = generateMetaTags("services");

export default function ServicesPage() {
  // Get all categories dynamically
  const categories = getAllCategories();

  // Icon mapping for categories
  const categoryIcons = {
    "Development Services": Code,
    "Engineering & Consulting": Building2,
    "Technology Solutions": Cloud,
    "Business Growth": Shield,
    "Team Augmentation Services": Brain,
  };

  // Color mapping for categories
  const categoryColors = {
    "Development Services": "blue",
    "Engineering & Consulting": "cyan",
    "Technology Solutions": "blue",
    "Business Growth": "cyan",
    "Team Augmentation Services": "blue",
  };

  // Description mapping for categories
  const categoryDescriptions = {
    "Development Services": "Full-stack development solutions for modern web and mobile applications",
    "Engineering & Consulting": "Expert consulting and engineering services to accelerate your projects",
    "Technology Solutions": "Advanced technology solutions leveraging cloud and AI technologies",
    "Business Growth": "Digital marketing and transformation services to drive business growth",
    "Team Augmentation Services": "Skilled developers and technical professionals available for your projects",
  };

  // Generate service categories dynamically
  const serviceCategories = categories.map(category => {
    const services = getServicesByCategory(category);
    const serviceNames = services.map(service => service.title);

    return {
      name: category,
      icon: categoryIcons[category] || Code,
      color: categoryColors[category] || "blue",
      description: categoryDescriptions[category] || "Professional services for your business needs",
      services: serviceNames,
    };
  });

  return (
    <main>
      <Header />
      <HeroServices />
      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/2 rounded-full blur-3xl"></div>
        </div>

      {/* Services Grid */}
      <section className="relative z-10 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-gray-400 h-full flex flex-col"
              >
                <div className="p-6 sm:p-8 flex flex-col h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${
                      category.color === "cyan"
                        ? "bg-cyan-500/20 border border-cyan-400/30"
                        : "bg-blue-500/20 border border-blue-400/30"
                    } mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon
                      className={`h-8 w-8 ${category.color === "cyan" ? "text-cyan-600" : "text-blue-600"}`}
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>

                  <div className="space-y-2 mb-6 flex-grow">
                    {category.services.slice(0, 4).map((service, serviceIndex) => {
                      // Get the service object with slug
                      const servicesInCategory = getServicesByCategory(category.name);
                      const serviceObj = servicesInCategory.find(s => s.title === service);
                      const serviceSlug = serviceObj ? serviceObj.slug : service.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                      return (
                        <Link key={serviceIndex} href={`/services/${serviceSlug}`}>
                          <div className="flex items-center text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors p-2 rounded hover:bg-blue-50">
                            <ChevronRight size={16} className="mr-2 text-blue-500" />
                            {service}
                          </div>
                        </Link>
                      )
                    })}
                    {category.services.length > 4 && (
                      <div className="text-sm text-gray-500 font-medium">
                        +{category.services.length - 4} more services
                      </div>
                    )}
                  </div>

                  <Link href={`/services/category/${category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    <button
                      className={`w-full ${
                        category.color === "cyan"
                          ? "bg-blue-800 hover:bg-blue-900"
                          : "bg-blue-800 hover:bg-blue-900"
                      } text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg border border-blue-400/30`}
                    >
                      Explore {category.name}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Lowerfooter />
      </div>
      <Footer />
    </main>
  );
}

