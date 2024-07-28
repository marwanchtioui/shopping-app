/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/shopping-app',
    assetPrefix: '/shopping-app',
    publicRuntimeConfig: {
        basePath: '/shopping-app',
      },
      crossOrigin: 'anonymous',
};

export default nextConfig;
