/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "repository-images.githubusercontent.com",
      "firebasestorage.googleapis.com",
      "www.svgrepo.com",
      "camo.githubusercontent.com",
      "raw.githubusercontent.com",
      "lh3.googleusercontent.com",
      "udemy-certificate.s3.amazonaws.com",
      "github.com",
      "docs.pmnd.rs",
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
