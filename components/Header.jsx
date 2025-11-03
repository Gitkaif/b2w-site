"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Brain, User, LogOut, ChevronDown, ChevronRight } from "lucide-react"

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false)
  const [activeServiceCategory, setActiveServiceCategory] = useState(null)
  const [activeIndustryCategory, setActiveIndustryCategory] = useState(null)
  const [isTeamAugmentationHover, setIsTeamAugmentationHover] = useState(false)
  const [servicesHoverTimeout, setServicesHoverTimeout] = useState(null)
  const [industriesHoverTimeout, setIndustriesHoverTimeout] = useState(null)
  const [categoryHoverTimeout, setCategoryHoverTimeout] = useState(null)
  const [teamAugmentationTimeout, setTeamAugmentationTimeout] = useState(null)
  const headerRef = useRef(null)
  const profileMenuRef = useRef(null)
  const servicesDropdownRef = useRef(null)
  const industriesDropdownRef = useRef(null)

  // Helper function to get service descriptions
  const getServiceDescription = (serviceName) => {
    const descriptions = {
      "Web Development": "Custom websites and web applications built with modern technologies",
      "Mobile Application Development": "Native and cross-platform mobile apps for iOS and Android",
      "UI/UX Design & Prototyping": "User-centered design and interactive prototypes",
      "IT Staff Augmentation": "Skilled developers and technical professionals on-demand",
      "Software Consulting & Product Engineering": "Expert guidance and end-to-end product development",
      "QA & Testing": "Comprehensive testing services ensuring quality and reliability",
      "Cloud Computing & DevOps": "Scalable cloud solutions and automated deployment pipelines",
      "AI & Chatbots": "Intelligent automation and conversational AI solutions",
      "Digital Marketing & SEO/SEM": "Online marketing strategies and search optimization",
      "Digital Transformation": "Modernizing business processes with digital solutions"
    }
    return descriptions[serviceName] || "Professional technology solutions"
  }

  // Inject critical CSS for contrast override and line clamping
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      html body header div.mobile-menu-container,
      html body header div.mobile-menu-container *,
      html body header div.mobile-menu-container a,
      html body header div.mobile-menu-container div,
      html body header div.mobile-menu-container span {
        background-color: #ffffff !important;
        background: #ffffff !important;
        color: #000000 !important;
      }
      html body header div.mobile-menu-container a:hover {
        background-color: #eff6ff !important;
        background: #eff6ff !important;
        color: #1e40af !important;
      }
      html body header div.mobile-menu-container .active-link {
        background-color: #eff6ff !important;
        background: #eff6ff !important;
        color: #1e40af !important;
      }
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `
    document.head.appendChild(style)

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  // Navigation items with updated service structure
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      services: [
        { name: "Web Development", slug: "web-development" },
        { name: "Mobile Application Development", slug: "mobile-application-development" },
        { name: "UI/UX Design & Prototyping", slug: "ui-ux-design-prototyping" },
        { name: "IT Staff Augmentation", slug: "it-staff-augmentation" },
        { name: "Software Consulting & Product Engineering", slug: "software-consulting-product-engineering" },
        { name: "QA & Testing", slug: "qa-testing" },
        { name: "Cloud Computing & DevOps", slug: "cloud-computing-devops" },
        { name: "Digital Marketing & SEO/SEM", slug: "digital-marketing-seo-sem" },
        { name: "AI & Chatbots", slug: "ai-chatbots" },
        { name: "Digital Transformation", slug: "digital-transformation" }
      ],
    },
    {
      name: "Industries",
      path: "/industries",
      hasDropdown: true,
      industries: [
        "Technology",
        "E-commerce",
        "Finance & Banking",
        "Healthcare",
        "Retail",
        "Education & E-Learning",
        "Government & Public Sector",
        "Startups & Innovation Hubs",
        "Sports",
        "Real Estate",
        "Logistics",
        "Travel & Hospitality",
        "Media & Entertainment"
      ],
    },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ]

  // Team Augmentation Services data
  const teamAugmentationServices = [
    {
      name: "Java Developers",
      description: "Experienced in building robust, scalable applications with Java, suitable for enterprise solutions, backend services, and more."
    },
    {
      name: "PHP Developers",
      description: "Experts in creating dynamic, data-driven websites and applications using PHP, including CMS integration, e-commerce platforms, and custom web solutions."
    },
    {
      name: "Python Developers",
      description: "Skilled in Python for backend development, data science, AI/ML models, automation, and web applications."
    },
    {
      name: "ReactJS Developers",
      description: "Frontend developers experienced in building dynamic, high-performance user interfaces with ReactJS, delivering smooth, fast, and scalable applications."
    },
    {
      name: ".NET Developers",
      description: "Proficient in developing enterprise-grade applications and solutions using the .NET framework, focusing on stability, performance, and scalability."
    },
    {
      name: "UI/UX Designers",
      description: "Our designers create intuitive, user-centered interfaces and experiences for web and mobile platforms, ensuring your users have the best possible experience."
    },
    {
      name: "Frontend Developers",
      description: "Skilled in HTML5, CSS3, JavaScript, and modern frameworks (React, Angular, Vue), our frontend developers craft seamless, responsive designs for desktop and mobile devices."
    },
    {
      name: "NodeJS Developers",
      description: "Experts in building fast, scalable, and real-time applications with NodeJS, often used for web applications, microservices, and APIs."
    },
    {
      name: "Flutter Developers",
      description: "Skilled in building cross-platform mobile apps with Flutter, ensuring high-quality user experiences for both iOS and Android from a single codebase."
    },
    {
      name: "Angular Developers",
      description: "Proficient in creating dynamic, enterprise-grade web applications using Angular, ensuring high performance, maintainability, and scalability."
    },
    {
      name: "DevOps Engineers",
      description: "We provide DevOps professionals who streamline the development pipeline, automate processes, and ensure continuous integration, continuous deployment (CI/CD), and cloud infrastructure management."
    },
    {
      name: "iOS Developers",
      description: "Experts in building high-performance iOS applications for iPhone and iPad, leveraging Swift and Objective-C to deliver smooth, intuitive mobile experiences."
    }
  ]

  // Close mobile menu on outside click and escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false)
        if (isServicesDropdownOpen) {
          setIsServicesDropdownOpen(false)
          setActiveServiceCategory(null)
        }
        if (isIndustriesDropdownOpen) {
          setIsIndustriesDropdownOpen(false)
          setActiveIndustryCategory(null)
        }
        if (isProfileMenuOpen) setIsProfileMenuOpen(false)
        if (isTeamAugmentationHover) setIsTeamAugmentationHover(false)
      }
    }

    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen, isServicesDropdownOpen, isProfileMenuOpen])

  // Handle click outside services dropdown and profile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false)
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false)
        setActiveServiceCategory(null)
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target)) {
        setIsIndustriesDropdownOpen(false)
        setActiveIndustryCategory(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesHoverTimeout) clearTimeout(servicesHoverTimeout)
      if (industriesHoverTimeout) clearTimeout(industriesHoverTimeout)
      if (categoryHoverTimeout) clearTimeout(categoryHoverTimeout)
      if (teamAugmentationTimeout) clearTimeout(teamAugmentationTimeout)
    }
  }, [servicesHoverTimeout, industriesHoverTimeout, categoryHoverTimeout, teamAugmentationTimeout])

  // Handle services dropdown hover with improved logic
  const handleServicesMouseEnter = () => {
    if (servicesHoverTimeout) clearTimeout(servicesHoverTimeout)
    setIsServicesDropdownOpen(true)
  }

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false)
      setActiveServiceCategory(null)
    }, 200) // Increased delay for better UX
    setServicesHoverTimeout(timeout)
  }

  const handleDropdownMouseEnter = () => {
    if (servicesHoverTimeout) clearTimeout(servicesHoverTimeout)
  }

  const handleDropdownMouseLeave = () => {
    setIsServicesDropdownOpen(false)
    setActiveServiceCategory(null)
  }

  // Handle category hover with improved logic
  const handleCategoryMouseEnter = (categoryName) => {
    if (categoryHoverTimeout) clearTimeout(categoryHoverTimeout)
    setActiveServiceCategory(categoryName)
  }

  const handleCategoryMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveServiceCategory(null)
    }, 200) // Increased delay for better UX
    setCategoryHoverTimeout(timeout)
  }

  const handleSubcategoryMouseEnter = () => {
    if (categoryHoverTimeout) clearTimeout(categoryHoverTimeout)
  }

  // Handle industries dropdown hover with improved logic
  const handleIndustriesMouseEnter = () => {
    if (industriesHoverTimeout) clearTimeout(industriesHoverTimeout)
    setIsIndustriesDropdownOpen(true)
  }

  const handleIndustriesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsIndustriesDropdownOpen(false)
      setActiveIndustryCategory(null)
    }, 200) // Increased delay for better UX
    setIndustriesHoverTimeout(timeout)
  }

  const handleIndustriesDropdownMouseEnter = () => {
    if (industriesHoverTimeout) clearTimeout(industriesHoverTimeout)
  }

  const handleIndustriesDropdownMouseLeave = () => {
    setIsIndustriesDropdownOpen(false)
    setActiveIndustryCategory(null)
  }

  // Handle team augmentation hover
  const handleTeamAugmentationMouseEnter = () => {
    if (teamAugmentationTimeout) clearTimeout(teamAugmentationTimeout)
    setIsTeamAugmentationHover(true)
  }

  const handleTeamAugmentationMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsTeamAugmentationHover(false)
    }, 200)
    setTeamAugmentationTimeout(timeout)
  }

  const handleTeamAugmentationSubmenuMouseEnter = () => {
    if (teamAugmentationTimeout) clearTimeout(teamAugmentationTimeout)
  }

  const handleTeamAugmentationSubmenuMouseLeave = () => {
    setIsTeamAugmentationHover(false)
  }

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesDropdownOpen(false)
    setIsIndustriesDropdownOpen(false)
    setIsProfileMenuOpen(false)
    setActiveServiceCategory(null)
    setActiveIndustryCategory(null)
    setIsTeamAugmentationHover(false)
  }, [pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false)
      setActiveServiceCategory(null)
    }
    if (isIndustriesDropdownOpen) {
      setIsIndustriesDropdownOpen(false)
      setActiveIndustryCategory(null)
    }
    if (isTeamAugmentationHover) {
      setIsTeamAugmentationHover(false)
    }
  }

  // Auth check functionality
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/user", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Auth check failed:", error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  // Logout functionality
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })

      if (response.ok) {
        setUser(null)
        setIsProfileMenuOpen(false)
        router.push("/")
      }
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #D9D9D9'
      }}
    >
      {/* Top contact bar */}
      <div 
        className="py-2 px-4"
        style={{
          backgroundColor: '#1e40af',
          color: '#FFFFFF'
        }}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <span>📞 +91 7798001001</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
              <span>✉️ b2winfotek@gmail.com</span>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <span>🏆 15+ Years • 1200+ Projects • ISO Certified • AI-Powered Solutions</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3"
            onClick={() => {
              setIsMobileMenuOpen(false)
              setIsServicesDropdownOpen(false)
              setIsIndustriesDropdownOpen(false)
              setActiveServiceCategory(null)
              setActiveIndustryCategory(null)
            }}
          >
            <img
              src="/images/logo.jpg"
              alt="B2W Infotech Logo"
              className="h-12 w-12 object-contain"
              onError={(e) => {
                e.target.style.display = "none"
                e.target.nextElementSibling.style.display = "block"
              }}
            />
            <Brain className="h-7 w-7 text-blue-600 hidden" />
            <div>
              <h1 
                className="text-xl font-bold"
                style={{ color: '#000000' }}
              >
                B2W Infotech
              </h1>
              <p 
                className="text-sm"
                style={{ color: '#6B7280' }}
              >
                AI-Powered Software Development
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Fixed positioning */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      ref={item.name === "Services" ? servicesDropdownRef : industriesDropdownRef}
                      onMouseEnter={item.name === "Services" ? handleServicesMouseEnter : handleIndustriesMouseEnter}
                      onMouseLeave={item.name === "Services" ? handleServicesMouseLeave : handleIndustriesMouseLeave}
                    >
                      <button
                        className={`py-2 px-3 font-medium rounded-md relative transition-colors duration-200 flex items-center gap-1 ${
                           pathname.startsWith(item.path) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                         } ${(item.name === "Services" ? isServicesDropdownOpen : isIndustriesDropdownOpen) ? "text-blue-600" : ""}`}
                        style={{ color: pathname.startsWith(item.path) || (item.name === "Services" ? isServicesDropdownOpen : isIndustriesDropdownOpen) ? '#1e40af' : '#000000' }}
                        onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                        onMouseLeave={(e) => e.target.style.color = pathname.startsWith(item.path) || (item.name === "Services" ? isServicesDropdownOpen : isIndustriesDropdownOpen) ? '#1e40af' : '#000000'}
                        onClick={() => router.push(item.path)}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${(item.name === "Services" ? isServicesDropdownOpen : isIndustriesDropdownOpen) ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Dropdown Content */}
                      {(item.name === "Services" ? isServicesDropdownOpen : isIndustriesDropdownOpen) && (
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1100px] bg-white rounded-lg shadow-lg border border-gray-200 z-[60]"
                          onMouseEnter={item.name === "Services" ? handleDropdownMouseEnter : handleIndustriesDropdownMouseEnter}
                          onMouseLeave={item.name === "Services" ? handleDropdownMouseLeave : handleIndustriesDropdownMouseLeave}
                        >
                          <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">
                              {item.name === "Services" ? "Our Services" : "Industry Expertise"}
                            </h3>
                            <div className="space-y-0">
                              {item.name === "Services" ? (
                                <>
                                  {/* Services Rows */}
                                  <div className="grid grid-cols-4 divide-x divide-black h-16">
                                    <div className="px-6 first:pl-6 last:pr-0 flex items-center">
                                      <Link
                                        href="/services/web-development"
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                      >
                                        Web Development
                                      </Link>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <Link
                                        href="/services/mobile-application-development"
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                      >
                                        Mobile Application Development
                                      </Link>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <Link
                                        href="/services/ui-ux-design-prototyping"
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                      >
                                        UI/UX Design & Prototyping
                                      </Link>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <Link
                                        href="/services/it-staff-augmentation"
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                      >
                                        IT Staff Augmentation
                                      </Link>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-4 divide-x divide-black h-16">
                                    <div className="px-6 first:pl-6 last:pr-0 flex items-center">
                                      <Link
                                        href="/services/software-consulting-product-engineering"
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                      >
                                        Software Consulting & Product Engineering
                                      </Link>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <Link
                                        href="/services/qa-testing"
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                      >
                                        QA & Testing
                                      </Link>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <Link
                                        href="/services/cloud-computing-devops"
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                      >
                                        Cloud Computing & DevOps
                                      </Link>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <Link
                                        href="/services/digital-marketing-seo-sem"
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                      >
                                        Digital Marketing & SEO/SEM
                                      </Link>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-4 divide-x divide-black h-16">
                                    <div className="px-6 first:pl-6 last:pr-0 flex items-center relative">
                                      <span 
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium cursor-pointer"
                                        onMouseEnter={handleTeamAugmentationMouseEnter}
                                        onMouseLeave={handleTeamAugmentationMouseLeave}
                                      >
                                        Team Augmentation Services
                                      </span>
                                      
                                      {/* Team Augmentation Submenu */}
                                      {isTeamAugmentationHover && (
                                        <div 
                                          className="absolute top-0 left-full ml-2 w-[600px] bg-white rounded-lg shadow-lg border border-gray-200 z-[70] p-4"
                                          onMouseEnter={handleTeamAugmentationSubmenuMouseEnter}
                                          onMouseLeave={handleTeamAugmentationSubmenuMouseLeave}
                                        >
                                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Team Members</h4>
                                          <div className="space-y-0">
                                            {/* First row */}
                                            <div className="grid grid-cols-4 divide-x divide-black h-12">
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/java-developers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  Java Developers
                                                </Link>
                                              </div>
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/php-developers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  PHP Developers
                                                </Link>
                                              </div>
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/python-developers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  Python Developers
                                                </Link>
                                              </div>
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/reactjs-developers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  ReactJS Developers
                                                </Link>
                                              </div>
                                            </div>
                                            
                                            {/* Second row */}
                                            <div className="grid grid-cols-4 divide-x divide-black h-12">
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/dotnet-developers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  .NET Developers
                                                </Link>
                                              </div>
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/ui-ux-designers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  UI/UX Designers
                                                </Link>
                                              </div>
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/frontend-developers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  Frontend Developers
                                                </Link>
                                              </div>
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/nodejs-developers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  NodeJS Developers
                                                </Link>
                                              </div>
                                            </div>
                                            
                                            {/* Third row */}
                                            <div className="grid grid-cols-4 divide-x divide-black h-12">
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/flutter-developers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  Flutter Developers
                                                </Link>
                                              </div>
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/angular-developers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  Angular Developers
                                                </Link>
                                              </div>
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/devops-engineers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  DevOps Engineers
                                                </Link>
                                              </div>
                                              <div className="px-3 flex items-center">
                                                <Link
                                                  href="/services/ios-developers"
                                                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                                  onClick={() => {
                                                    setIsServicesDropdownOpen(false)
                                                    setIsTeamAugmentationHover(false)
                                                  }}
                                                >
                                                  iOS Developers
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <Link
                                        href="/services/digital-transformation"
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                      >
                                        Digital Transformation
                                      </Link>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <Link
                                        href="/services/ai-chatbots"
                                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                      >
                                        AI & Chatbots
                                      </Link>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      {/* Empty cell */}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {/* Industries Rows */}
                                  <div className="grid grid-cols-4 divide-x divide-black h-16">
                                    <div className="px-6 first:pl-6 last:pr-0 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Technology</span>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">E-commerce</span>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Finance & Banking</span>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Healthcare</span>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-4 divide-x divide-black h-16">
                                    <div className="px-6 first:pl-6 last:pr-0 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Retail</span>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Education & E-Learning</span>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Government & Public Sector</span>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Startups & Innovation Hubs</span>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-4 divide-x divide-black h-16">
                                    <div className="px-6 first:pl-6 last:pr-0 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Sports</span>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Real Estate</span>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Logistics</span>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Travel & Hospitality</span>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-4 divide-x divide-black h-16">
                                    <div className="px-6 first:pl-6 last:pr-0 flex items-center">
                                      <span className="text-gray-700 text-sm font-medium">Media & Entertainment</span>
                                    </div>
                                    <div className="px-6 flex items-center">
                                      {/* Empty cell */}
                                    </div>
                                    <div className="px-6 flex items-center">
                                      {/* Empty cell */}
                                    </div>
                                    <div className="px-6 flex items-center">
                                      {/* Empty cell */}
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`py-2 px-3 font-medium rounded-md relative transition-colors duration-200 ${
                        pathname === item.path ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                      }`}
                      style={{ color: pathname === item.path ? '#1e40af' : '#000000' }}
                      onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                      onMouseLeave={(e) => e.target.style.color = pathname === item.path ? '#1e40af' : '#000000'}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Authenticated User Profile - Desktop */}
            {isLoading ? (
              <div className="animate-pulse bg-gray-200 h-10 w-24 rounded-lg border border-gray-300"></div>
            ) : user ? (
              <div className="hidden lg:block">
                <div className="relative" ref={profileMenuRef}>
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 focus:outline-none transition-colors group"
                    aria-expanded={isProfileMenuOpen}
                    aria-haspopup="true"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-800/20 border-2 border-blue-400/50 overflow-hidden flex items-center justify-center group-hover:border-blue-300 transition-colors">
                      {user.profilePicture ? (
                        <img
                          src={user.profilePicture || "/placeholder.svg"}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User size={20} className="text-blue-600" />
                      )}
                    </div>
                    <span className="font-medium text-gray-900">{user.name?.split(" ")[0]}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 text-blue-600 ${
                        isProfileMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-lg shadow-xl border border-gray-200 py-2 z-[60]">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-600 truncate">{user.email}</p>
                      </div>

                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <User size={16} className="mr-3" />
                        <span>Change Profile</span>
                      </Link>

                      <div className="border-t border-gray-200 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                        >
                          <LogOut size={16} className="mr-3" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Unauthenticated Login Button - Desktop */
              <Link href="/login" className="hidden lg:block">
                <button 
                  className="px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    backgroundColor: '#1e40af',
                    color: '#FFFFFF',
                    boxShadow: '0 0 0 2px #1e40af'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1e40af'}
                >
                  Login
                </button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors"
              onClick={toggleMobileMenu}
              style={{ color: '#000000' }}
            >
              {isMobileMenuOpen ? (
                <div className="space-y-1.5 w-6">
                  <span className="block w-6 h-0.5 bg-gray-700 rotate-45 translate-y-2 transition-all duration-300" />
                  <span className="block w-6 h-0.5 bg-gray-700 opacity-0 transition-all duration-300" />
                  <span className="block w-6 h-0.5 bg-gray-700 -rotate-45 -translate-y-2 transition-all duration-300" />
                </div>
              ) : (
                <div className="space-y-1.5 w-6">
                  <span className="block w-6 h-0.5 bg-gray-700 transition-all duration-300" />
                  <span className="block w-6 h-0.5 bg-gray-700 transition-all duration-300" />
                  <span className="block w-6 h-0.5 bg-gray-700 transition-all duration-300" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with injected CSS override */}
        <div
          className={`mobile-menu-container lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            borderTop: '1px solid #D9D9D9'
          }}
        >
          <div className="py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <Link
                      href={item.path}
                      className={`block text-center py-3 px-4 mx-4 text-lg font-medium rounded-lg relative transition-colors duration-200 ${
                        pathname.startsWith(item.path) ? "active-link" : ""
                      }`}
                      style={{ color: pathname.startsWith(item.path) ? '#1e40af' : '#000000' }}
                      onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                      onMouseLeave={(e) => e.target.style.color = pathname.startsWith(item.path) ? '#1e40af' : '#000000'}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {/* Note: Dropdown content removed for mobile - redirects directly to page */}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`block text-center py-3 px-4 mx-4 text-lg font-medium rounded-lg relative transition-colors duration-200 ${
                      pathname === item.path ? "active-link" : ""
                    }`}
                    style={{ color: pathname === item.path ? '#1e40af' : '#000000' }}
                    onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                    onMouseLeave={(e) => e.target.style.color = pathname === item.path ? '#1e40af' : '#000000'}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Authenticated User Profile - Mobile */}
            {isLoading ? (
              <div className="flex justify-center pt-4">
                <div className="animate-pulse bg-gray-200 h-12 w-32 rounded-lg border border-gray-300"></div>
              </div>
            ) : user ? (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3 mb-6 px-4">
                  <div className="w-12 h-12 rounded-full bg-blue-800/20 border-2 border-blue-400/50 overflow-hidden flex items-center justify-center">
                    {user.profilePicture ? (
                      <img
                        src={user.profilePicture || "/placeholder.svg"}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={24} className="text-blue-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm">{user.email}</p>
                  </div>
                </div>

                <div className="space-y-2 px-4">
                  <Link
                    href="/profile"
                    className="w-full px-4 py-3 rounded-lg text-center transition-all duration-300 font-medium flex items-center justify-center border"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User size={18} className="mr-2" />
                    Change Profile
                  </Link>

                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      handleLogout()
                    }}
                    className="w-full px-4 py-3 rounded-lg text-center transition-all duration-300 font-medium flex items-center justify-center border"
                  >
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              /* Unauthenticated Login Button - Mobile */
              <div className="flex justify-center pt-2 pb-2">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button 
                    className="px-8 py-3 rounded-lg font-medium min-w-[140px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: '#1e40af',
                      color: '#FFFFFF'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#1e40af'}
                  >
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header