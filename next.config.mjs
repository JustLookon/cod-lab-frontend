/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aarogyapathcare.in',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/**'
            }, 
            {
                protocol: 'https',
                hostname: 'aarogyapathcare.in',
                port: '', 
                pathname: '/**'
            }
        ]
    },
};

export default nextConfig;
