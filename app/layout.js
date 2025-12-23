import ChatWidget from "@/components/chatbot";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🚀 ULTIMATE SEO METADATA - RANK #1 ON GOOGLE 🚀
export const metadata = {
  metadataBase: new URL('https://www.b2winfotech.ai'),
  title: {
    default: "B2W Infotech | #1 AI Software Development Company India | ISO Certified",
    template: "%s | B2W Infotech - Leading IT Company"
  },
  description: "🏆 #1 Rated Software Development Company in India. ISO 27001 & ISO 9001 Certified. 15+ Years Experience | 1200+ Projects | AI Development, Web Apps, Mobile Apps, Cloud Computing. Free Consultation - Call +91-9004987847",
  keywords: [
    // Location-based keywords
    "software development company mumbai", "IT company andheri east", "software company marol", "IT services mumbai",
    "web development company mumbai", "mobile app development mumbai", "software developers andheri",
    "IT company gamdevi", "software development andheri east", "tech company marol mumbai", "IT services andheri",
    "software development company maharashtra", "IT firm mumbai 400059", "technology company andheri east",
    // Service keywords
    "custom software development", "web development services", "mobile app development", "UI/UX design services",
    "IT staff augmentation", "software consulting", "QA testing services", "cloud devops services",
    "AI chatbot development", "digital marketing services", "digital transformation services",
    // Technology keywords
    "react development", "nodejs development", "python development", "java development", ".NET development",
    "flutter development", "angular development", "AI development", "machine learning services",
    // Company keywords
    "B2W Infotech", "ISO certified software company", "best IT company india", "top software company mumbai",
    "IT outsourcing company", "offshore development center", "dedicated development team",
    // Industry keywords
    "healthcare software development", "fintech software solutions", "retail software development",
    "manufacturing software solutions", "enterprise software development",
    // Developer outsourcing keywords
    "java developers outsourcing", "python developers outsourcing", "react developers outsourcing", "nodejs developers outsourcing",
    ".NET developers outsourcing", "UI/UX designers outsourcing", "devops engineers outsourcing", "flutter developers outsourcing",
    // Competitive keywords
    "best software company mumbai", "top IT company india", "leading software development firm",
    "award winning software company", "trusted IT services provider"
  ].join(", "),
  authors: [{ name: "B2W Infotech", url: "https://www.b2winfotech.ai" }],
  creator: "B2W Infotech",
  publisher: "B2W Infotech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.b2winfotech.ai",
    siteName: "B2W Infotech",
    title: "B2W Infotech - #1 Software Development Company in India",
    description: "15+ years of software development excellence. ISO certified. 1200+ projects delivered. Expert team serving global clients.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "B2W Infotech - #1 Software Development Company Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2W Infotech - #1 Software Development Company in Mumbai",
    description: "15+ years of software development excellence. ISO certified. 1200+ projects delivered. Expert team in Mumbai serving global clients.",
    images: ["/images/logo.jpg"],
  },
  alternates: {
    canonical: "https://www.b2winfotech.ai",
  },
  verification: {
    google: "your-google-site-verification-code", // Add your actual code
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  category: "Technology",
  classification: "Software Development, IT Services, Technology Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.1136;72.8697" />
        <meta name="ICBM" content="19.1136, 72.8697" />
        <meta name="DC.title" content="B2W Infotech - Software Development Company Mumbai" />
        <meta name="DC.description" content="Leading software development company in Mumbai, Andheri East. ISO certified IT services, web development, mobile apps, AI solutions." />
        <meta name="DC.subject" content="Software Development, IT Services, Mumbai" />
        <meta name="DC.creator" content="B2W Infotech" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.b2winfotech.ai" />
        <meta property="og:title" content="B2W Infotech | #1 AI Software Development Company India | ISO Certified" />
        <meta property="og:description" content="🏆 #1 Rated Software Development Company in India. ISO 27001 & ISO 9001 Certified. 15+ Years Experience | 1200+ Projects | AI Development, Web Apps, Mobile Apps, Cloud Computing. Free Consultation - Call +91-9004987847" />
        <meta property="og:image" content="https://www.b2winfotech.ai/images/logo.jpg" />
        <meta property="og:site_name" content="B2W Infotech" />
        <meta property="og:locale" content="en_IN" />
        
        {/* 🚀 ULTIMATE LOCAL BUSINESS SCHEMA - RANK #1 FOR LOCAL SEARCHES 🚀 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.b2winfotech.ai",
              "name": "B2W Infotech",
              "image": "https://www.b2winfotech.ai/images/logo.jpg",
              "logo": "https://www.b2winfotech.ai/images/logo.jpg",
              "url": "https://www.b2winfotech.ai",
              "telephone": "+919004987847",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-402, Polaris Building, Gamdevi, Marol",
                "addressLocality": "Andheri East",
                "addressRegion": "Mumbai",
                "postalCode": "400059",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.1136,
                "longitude": 72.8697
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/b2w-infotech",
                "https://www.facebook.com/b2winfotech",
                "https://twitter.com/b2winfotech"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1200",
                "bestRating": "5",
                "worstRating": "1"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Mumbai"
                },
                {
                  "@type": "City", 
                  "name": "Andheri East"
                },
                {
                  "@type": "City",
                  "name": "Marol"
                },
                {
                  "@type": "State",
                  "name": "Maharashtra"
                },
                {
                  "@type": "Country",
                  "name": "India"
                },
                {
                  "@type": "Place",
                  "name": "Worldwide"
                }
              ],
            })
          }}
        />
        
        {/* 🏢 ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "B2W Infotech",
              "alternateName": "B2W Infotek",
              "description": "Leading ISO Certified Software Development Company in Mumbai specializing in Web Development, Mobile Apps, AI Solutions, Staff Augmentation, and Digital Transformation",
              "url": "https://www.b2winfotech.ai",
              "logo": "https://www.b2winfotech.ai/images/logo.jpg",
              "foundingDate": "2008",
              "founders": [
                {
                  "@type": "Person",
                  "name": "B2W Infotech Founders"
                }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9004987847",
                  "contactType": "Customer Service",
                  "email": "b2winfotek@gmail.com",
                  "areaServed": "Worldwide",
                  "availableLanguage": ["English", "Hindi"]
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-402, Polaris Building, Gamdevi, Marol",
                "addressLocality": "Andheri East",
                "addressRegion": "Mumbai, Maharashtra",
                "postalCode": "400059",
                "addressCountry": "India"
              },
              "slogan": "Where Innovation Meets Execution",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "50-200"
              },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "ISO 27001:2013 Certified",
                  "credentialCategory": "Information Security Management System"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "ISO 9001:2015 Certified",
                  "credentialCategory": "Quality Management System"
                }
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UI/UX Design"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "IT Staff Augmentation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Software Consulting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "QA & Testing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud & DevOps Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Chatbot Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Transformation"
                  }
                }
              ],
              "knowsAbout": [
                "Software Development",
                "Artificial Intelligence",
                "Machine Learning",
                "Web Development",
                "Mobile App Development",
                "Cloud Computing",
                "DevOps",
                "Digital Transformation",
                "IT Consulting"
              ]
            })
          }}
        />
        
        {/* 🎯 PROFESSIONAL SERVICE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "B2W Infotech - Software Development Services",
              "image": "https://www.b2winfotech.ai/images/logo.jpg",
              "url": "https://www.b2winfotech.ai",
              "telephone": "+919004987847",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-402, Polaris Building, Gamdevi, Marol",
                "addressLocality": "Andheri East",
                "addressRegion": "Mumbai",
                "postalCode": "400059",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "19.1136",
                  "longitude": "72.8697"
                },
                "geoRadius": "50000",
                "description": "Serving Mumbai, Maharashtra and clients worldwide"
              },
              "serviceArea": [
                "Mumbai", "Andheri East", "Marol", "Gamdevi", "Maharashtra", "India", "Worldwide"
              ]
            })
          }}
        />
        
        {/* � PLACE SCHEMA FOR GOOGLE MAPS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "B2W Infotech Office",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-402, Polaris Building, Gamdevi, Marol",
                "addressLocality": "Andheri East",
                "addressRegion": "Mumbai",
                "postalCode": "400059",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.1136,
                "longitude": 72.8697
              },
              "telephone": "+91-9004987847",
              "url": "https://www.b2winfotech.ai",
              "containedInPlace": {
                "@type": "City",
                "name": "Mumbai"
              }
            })
          }}
        />
        
        {/* 📊 WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "B2W Infotech",
              "url": "https://www.b2winfotech.ai",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.b2winfotech.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChatWidget />
        <WhatsAppWidget />
        {children}
        <Analytics />
      </body>
    </html>
  );
}