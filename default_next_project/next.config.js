/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// CORS 에러 방지용 프록시 설정
module.exports = (phase, { defaultConfig }) => {
  const rewrites = () => {
    return [
      {
        source: "/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL + "/:path*",
      },
    ];
  };

  return { rewrites };
};
