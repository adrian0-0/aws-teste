/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "standalone",
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true,
    },
  },
};

module.exports = nextConfig;
