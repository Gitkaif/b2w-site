import ChatWidget from "@/components/chatbot";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "B2W Infotech Mumbai | #1 Software Development Company Andheri East | ISO Certified IT Services India",
    template: "%s | B2W Infotech - Leading IT Company Mumbai"
  },
  description: "⭐ #1 ISO Certified Software Development Company in Mumbai, Andheri East with 15+ years excellence & 1200+ projects. Expert Web Development, Mobile Apps, AI Solutions, Staff Augmentation, Digital Marketing, Cloud Services, DevOps. Trusted by 500+ clients across Healthcare, FinTech, Retail. 🏆 Best IT Outsourcing Company India.",
  keywords: [
    // Location-based keywords
    "software development company mumbai", "IT company andheri east", "software company marol", "IT services mumbai",
    "web development company mumbai", "mobile app development mumbai", "software developers andheri",
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
    // Developer hiring keywords
    "hire java developers", "hire python developers", "hire react developers", "hire nodejs developers",
    "hire .NET developers", "hire UI/UX designers", "hire devops engineers", "hire flutter developers",
    // Competitive keywords
    "best software company mumbai", "top IT company india", "leading software development firm",
    "award winning software company", "trusted IT services provider"
  ].join(", "),
  authors: [{ name: "B2W Infotech", url: "https://b2winfotech.com" }],
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
    title: "B2W Infotech Mumbai | #1 Software Development Company Andheri East | ISO Certified",
    description: "⭐ #1 ISO Certified Software Development Company in Mumbai, Andheri East. 15+ years, 1200+ projects. Expert Web, Mobile, AI, Cloud Services. Trusted by 500+ clients.",
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
    title: "B2W Infotech Mumbai | #1 Software Development Company",
    description: "⭐ ISO Certified IT Company in Andheri East. 15+ years, 1200+ projects. Expert Software Development Services.",
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
        <meta name="geo.position" content="19.116571;72.880348" />
        <meta name="ICBM" content="19.116571, 72.880348" />
        <link rel="canonical" href="https://www.b2winfotech.ai" />
        <link rel="icon" href="/favicon.ico" />
        
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
              "telephone": "+917798001001",
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
                "latitude": 19.116571,
                "longitude": 72.880348
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
                  "@type": "Country",
                  "name": "India"
                },
                {
                  "@type": "Place",
                  "name": "Worldwide"
                }
              ]
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
                  "telephone": "+91-7798001001",
                  "contactType": "Customer Service",
                  "email": "b2winfotek@gmail.com",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-7798001001",
                  "contactType": "Sales",
                  "email": "b2winfotek@gmail.com",
                  "areaServed": "Worldwide",
                  "availableLanguage": "English"
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
              "serviceType": [
                "Custom Software Development",
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "IT Staff Augmentation",
                "Software Consulting",
                "QA & Testing",
                "Cloud & DevOps Services",
                "AI Chatbot Development",
                "Digital Marketing",
                "Digital Transformation"
              ],
              "knowsAbout": [
                "Java Development", "Python Development", "React Development", "Node.js Development",
                ".NET Development", "Flutter Development", "Angular Development", "PHP Development",
                "AI & Machine Learning", "Cloud Computing", "DevOps", "Agile Development",
                "Healthcare Software", "FinTech Solutions", "E-commerce Development", "ERP Systems"
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
              "telephone": "+917798001001",
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
                  "latitude": "19.116571",
                  "longitude": "72.880348"
                },
                "geoRadius": "50000"
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
      </body>
    </html>
  );
}