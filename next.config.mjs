/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    // Allow img tags without next/image — external URLs not configured in domains
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
