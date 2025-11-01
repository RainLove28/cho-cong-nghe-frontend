/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*", // Proxy đến backend
      },
    ];
  },
};

export default nextConfig;

// Khi đó trong FE bạn chỉ cần gọi: fetch("/api/hello")
