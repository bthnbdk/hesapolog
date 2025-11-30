/** @type {import('next').NextConfig} */
const nextConfig = {
  // This enables Static Site Generation (SSG)
  output: 'export',
  
  // This ensures that links like /kredi-hesaplama resolve correctly without .html
  trailingSlash: true,

  // Required for static export with the <Image> component, but we aren't using it.
  // Good practice to keep it.
  images: {
    unoptimized: true,
  },

  // Fix for build errors with some packages
  experimental: {
    esmExternals: 'loose'
  }
};

export default nextConfig;