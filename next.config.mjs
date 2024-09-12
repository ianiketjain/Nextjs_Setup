/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    images: {
        domains: [],
    },
    env: {
        environmentName: 'local',
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://localhost:7272/:path*',
            },
        ];
    },
};

export default nextConfig;
