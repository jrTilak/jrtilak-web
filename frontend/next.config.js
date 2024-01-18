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
    ],
  },
};

module.exports = nextConfig;
