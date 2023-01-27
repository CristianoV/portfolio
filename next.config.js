require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io'],
  },
  env: {
    email_host: process.env.EMAIL_HOST,
    email_pass: process.env.EMAIL_PASS,
    email_user: process.env.EMAIL_USER,
  },
}

module.exports = nextConfig
