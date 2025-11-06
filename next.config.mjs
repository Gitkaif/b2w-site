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
  
};
export default nextConfig;
