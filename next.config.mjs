/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export configuration
    output: 'export',

    // Trailing slash for proper routing
    trailingSlash: true,

    // Image optimization for static export
    images: {
        unoptimized: true,
        domains: ['res.cloudinary.com'],
    },

    // Disable server-side features for static export
    swcMinify: true,

    // Ensure all routes are statically generated
    generateBuildId: () => 'build',
};

export default nextConfig;
