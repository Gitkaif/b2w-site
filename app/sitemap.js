import { getAllServiceSlugs, getAllCategories } from '@/lib/servicesData'

// 🚀 ULTIMATE SITEMAP FOR B2W INFOTECH - RANK #1 ON GOOGLE 🚀
export default function sitemap() {
  const baseUrl = 'https://www.b2winfotech.ai'
  const currentDate = new Date()
  
  // Get all service slugs dynamically
  const serviceSlugs = getAllServiceSlugs()
  
  // Get all categories dynamically
  const categories = getAllCategories()
  
  // Convert category names to URL-friendly slugs
  const categoryToSlug = (category) => {
    return category
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/&/g, 'and')
  }

  // ==================== MAIN PAGES (Highest Priority) ====================
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // ==================== ALL SERVICE PAGES (22 Services) ====================
  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9, // High priority for service pages
  }))

  // ==================== CATEGORY PAGES ====================
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/services/category/${categoryToSlug(category)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  // Combine all URLs
  return [
    ...mainPages,
    ...servicePages,
    ...categoryPages
  ]
}
