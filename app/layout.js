import ChatWidget from "@/components/chatbot";
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

export const metadata = {
  title: "B2W Infotech - 15+ Years AI-Powered Software Development & IT Outsourcing Excellence",
  description: "🏆 ISO Certified AI-driven software development company with 15+ years experience & 1200+ successful projects. Expert IT outsourcing, custom software development, AI solutions, digital transformation across Healthcare, FinTech, Retail & Manufacturing industries.",
  keywords: "B2W Infotech, software development company India, IT outsourcing, AI-powered development, custom software development, ISO certified software company, digital transformation, AI strategy implementation, MVP development, staff augmentation, legacy modernization, healthcare software, fintech solutions, retail software, manufacturing solutions",
  authors: [{ name: "B2W Infotech" }],
  robots: "index, follow",
  openGraph: {
    title: "B2W Infotech - 15+ Years AI-Powered Software Development & IT Outsourcing Excellence",
    description: "🏆 ISO Certified AI-driven software development company with 15+ years experience & 1200+ successful projects. Leading IT outsourcing and digital transformation solutions.",
    url: "https://b2w-peach.vercel.app/",
    siteName: "B2W Infotech",
    images: [
      {
        url: "https://b2w-peach.vercel.app/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "B2W Infotech - AI-Powered Software Development Company",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://b2w-peach.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://b2w-peach.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Enhanced Business Schema for B2W Infotech */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "B2W Infotech",
              "description": "ISO Certified AI-powered software development and IT outsourcing company with 15+ years experience and 1200+ successful projects",
              "url": "https://b2w-peach.vercel.app/",
              "logo": "https://b2w-peach.vercel.app/images/logo.jpg",
              "foundingDate": "2008",
              "slogan": "Where Innovation Meets Execution",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-402, Polaris building, 4V6J+437, Gamdevi, Marol, Andheri East",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400059",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7798001001",
                "email": "b2winfotek@gmail.com",
                "contactType": "Customer Service",
                "availableLanguage": "English"
              },
              "serviceType": ["Software Development", "IT Outsourcing", "AI Solutions", "Digital Transformation"],
              "areaServed": "Worldwide",
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "ISO 27001 Certification",
                  "credentialCategory": "Information Security Management"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "ISO 9001 Certification",
                  "credentialCategory": "Quality Management"
                }
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Software Development",
                "IT Outsourcing",
                "Digital Transformation",
                "Custom Software Development",
                "Web Development",
                "Mobile App Development",
                "Cloud Computing",
                "DevOps",
                "Healthcare Software",
                "FinTech Solutions",
                "Retail Solutions",
                "Manufacturing Solutions"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1200"
              },
              "sameAs": [
                "https://www.linkedin.com/company/b2w-infotech"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChatWidget />
        {children}
      </body>
    </html>
  );
}