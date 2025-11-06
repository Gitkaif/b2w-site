/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 SEO REDIRECTS - FIX DUPLICATE CONTENT ISSUES
  async redirects() {
    return [
      // ==================== FIX INDEX PAGE DUPLICATES ====================
      {
        source: '/index.html',
        destination: '/',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/index.htm',
        destination: '/',
        permanent: true, // 301 redirect for SEO
      },
      // ==================== FIX WWW REDIRECT ====================
      // Note: Domain-level redirects are handled by Vercel domain settings
      // This handles any remaining path-based redirects
    ];
  },
  
  // 🎯 TRAILING SLASH CONSISTENCY
  trailingSlash: false, // Ensures URLs don't end with /
  
  // � PERFORMANCE OPTIMIZATIONS FOR MOBILE SPEED
  experimental: {
    optimizeCss: true, // Better CSS performance
  },
  
  // 📱 IMAGE OPTIMIZATION FOR FASTER LOADING
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // ⚡ COMPRESSION FOR FASTER LOADING
  compress: true,
};

export default nextConfig;
