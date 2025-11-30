/** @type {import('next').NextConfig} */
const nextConfig = {
  // This enables Static Site Generation (SSG)
  output: 'export',
  
  // This ensures that links like /kredi-hesaplama resolve correctly without .html
  trailingSlash: true,

  // Required for static export with the <Image> component, though not currently used.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;