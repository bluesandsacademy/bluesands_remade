// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/signup',
        destination: 'https://app.bluesandstemlabs.com/auth/register', 
        permanent: true, // Use true for a permanent redirect (308)
      },
    ];
  },
};

export default nextConfig;
